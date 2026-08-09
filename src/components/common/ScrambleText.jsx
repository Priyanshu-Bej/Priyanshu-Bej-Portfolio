import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const uppercaseScrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseScrambleCharacters = "abcdefghijklmnopqrstuvwxyz";
const digitScrambleCharacters = "0123456789";
const scrambleablePattern = /[A-Za-z0-9]/;
const digitPattern = /[0-9]/;
const lowercasePattern = /[a-z]/;
const frameInterval = 48;
const settleDelay = 340;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const smootherStep = (value) => {
  const t = clamp(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

const pickCharacter = (characters) =>
  characters[Math.floor(Math.random() * characters.length)];

const getScrambleCharacter = (character) => {
  if (digitPattern.test(character)) {
    return pickCharacter(digitScrambleCharacters);
  }

  if (lowercasePattern.test(character)) {
    return pickCharacter(lowercaseScrambleCharacters);
  }

  return pickCharacter(uppercaseScrambleCharacters);
};

const getRevealCount = (letterCount, progress) => {
  const eased = smootherStep(progress);
  return Math.min(letterCount, Math.floor(eased * (letterCount + 1)));
};

const getCharacterState = (revealCount, index, scrambleable) => {
  if (!scrambleable || index < revealCount) {
    return "revealed";
  }

  if (index - revealCount < 3) {
    return "settling";
  }

  return "scrambling";
};

const getCharacterClassName = (state) =>
  `scramble-text-character scramble-text-character-${state}`;

const buildTokens = (text) => {
  const characters = [];
  const tokens = (text.match(/\S+|\s+/g) ?? []).map((token, tokenIndex) => {
    if (/^\s+$/.test(token)) {
      return { key: `space-${tokenIndex}`, isSpace: true, token };
    }

    const wordCharacters = Array.from(token).map((character) => {
      const item = {
        character,
        scrambleable: scrambleablePattern.test(character),
        glyph: scrambleablePattern.test(character)
          ? getScrambleCharacter(character)
          : character,
        index: characters.length,
        nextSwapAt: 0,
      };
      characters.push(item);
      return item;
    });

    return {
      key: `word-${tokenIndex}`,
      isSpace: false,
      token,
      characters: wordCharacters,
    };
  });

  return { tokens, characters };
};

const ScrambleText = ({
  children,
  className = "",
  duration = 820,
  delay = 0,
  trigger = "view",
  ...props
}) => {
  const resolvedText = String(children ?? "");
  const { tokens, characters } = useMemo(
    () => buildTokens(resolvedText),
    [resolvedText],
  );
  const shouldReduceMotion = useReducedMotion();
  const elementRef = useRef(null);
  const nodesRef = useRef([]);
  const playedRef = useRef(false);
  const [animating, setAnimating] = useState(false);
  const isInView = useInView(elementRef, {
    once: true,
    amount: 0.45,
    margin: "0px 0px -8% 0px",
  });

  useEffect(() => {
    if (shouldReduceMotion || !resolvedText || playedRef.current) {
      return undefined;
    }

    if (trigger !== "mount" && !isInView) {
      return undefined;
    }

    const begin = () => {
      playedRef.current = true;
      setAnimating(true);
    };

    if (delay > 0) {
      const timeoutId = window.setTimeout(begin, delay);
      return () => window.clearTimeout(timeoutId);
    }

    begin();
    return undefined;
  }, [delay, isInView, resolvedText, shouldReduceMotion, trigger]);

  useEffect(() => {
    if (!animating) {
      return undefined;
    }

    const startedAt = performance.now();
    const states = new Array(characters.length).fill(null);
    let lastFrameAt = 0;
    let frameId = null;
    let settleTimeoutId = null;

    const tick = (now) => {
      if (now - lastFrameAt < frameInterval) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      lastFrameAt = now;
      const progress = Math.min((now - startedAt) / duration, 1);
      const revealCount =
        progress >= 1
          ? characters.length
          : getRevealCount(characters.length, progress);

      characters.forEach((item, index) => {
        const node = nodesRef.current[index];
        if (!node) {
          return;
        }

        const state = getCharacterState(revealCount, index, item.scrambleable);

        if (state !== "revealed" && now >= item.nextSwapAt) {
          item.glyph = getScrambleCharacter(item.character);
          item.nextSwapAt = now + 120 + ((index % 5) * 28);
          node.lastChild.textContent = item.glyph;
        }

        if (states[index] !== state) {
          states[index] = state;
          node.className = getCharacterClassName(state);
          if (state === "revealed") {
            node.lastChild.textContent = item.character;
          }
        }
      });

      if (progress >= 1) {
        frameId = null;
        settleTimeoutId = window.setTimeout(() => setAnimating(false), settleDelay);
        return;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      if (settleTimeoutId) {
        window.clearTimeout(settleTimeoutId);
      }
    };
  }, [animating, characters, duration]);

  const rootClassName = `scramble-text ${className}`.trim();

  if (shouldReduceMotion || !animating) {
    return (
      <span {...props} ref={elementRef} className={rootClassName}>
        {resolvedText}
      </span>
    );
  }

  return (
    <span {...props} ref={elementRef} className={rootClassName}>
      <span className="sr-only">{resolvedText}</span>
      <span aria-hidden="true" className="select-none">
        {tokens.map((word) => {
          if (word.isSpace) {
            return <span key={word.key}>{word.token}</span>;
          }

          return (
            <span key={word.key} className="scramble-text-word">
              {word.characters.map((item) => (
                <span
                  key={item.index}
                  ref={(node) => {
                    nodesRef.current[item.index] = node;
                  }}
                  className={getCharacterClassName(
                    getCharacterState(0, item.index, item.scrambleable),
                  )}
                >
                  <span className="scramble-text-measure">{item.character}</span>
                  <span className="scramble-text-value">{item.glyph}</span>
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default ScrambleText;
