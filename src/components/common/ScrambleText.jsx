import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const uppercaseScrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseScrambleCharacters = "abcdefghijklmnopqrstuvwxyz";
const digitScrambleCharacters = "0123456789";
const scrambleablePattern = /[A-Za-z0-9]/;
const digitPattern = /[0-9]/;
const lowercasePattern = /[a-z]/;
const frameInterval = 48;

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

const createGlyphs = (letters) =>
  letters.map((character, index) => ({
    character,
    glyph: scrambleablePattern.test(character)
      ? getScrambleCharacter(character)
      : character,
    index,
    nextSwapAt: 0,
    scrambleable: scrambleablePattern.test(character),
  }));

const buildFrame = (glyphs, revealCount, now) =>
  glyphs.map((item) => {
    if (item.index < revealCount || !item.scrambleable) {
      item.glyph = item.character;
      return item.character;
    }

    if (now >= item.nextSwapAt) {
      item.glyph = getScrambleCharacter(item.character);
      item.nextSwapAt = now + 120 + ((item.index % 5) * 28);
    }

    return item.glyph;
  }).join("");

const getRevealCount = (letterCount, progress) => {
  const eased = smootherStep(progress);
  return Math.min(letterCount, Math.floor(eased * (letterCount + 1)));
};

const getCharacterState = (text, revealCount, index) => {
  const character = text[index] ?? "";

  if (!scrambleablePattern.test(character)) {
    return "revealed";
  }

  if (index < revealCount) {
    return "revealed";
  }

  if (index - revealCount < 3) {
    return "settling";
  }

  return "scrambling";
};

const getCharacterClassName = (state) =>
  `scramble-text-character scramble-text-character-${state}`;

const getDisplayCharacter = (frame, character, index) => {
  if (!scrambleablePattern.test(character)) {
    return character;
  }

  return frame.value[index] ?? character;
};

const buildInitialFrame = (text) => ({
  revealCount: text.length,
  value: text,
});

const getStartFrame = (text) =>
  Array.from(text, (character) => {
    if (!scrambleablePattern.test(character)) {
      return character;
    }

    return getScrambleCharacter(character);
  }).join("");

const tokenizeText = (value) => value.match(/\S+|\s+/g) ?? [];
const mapTokens = (tokens) => {
  let cursor = 0;

  return tokens.map((token, index) => {
    const mappedToken = {
      index,
      start: cursor,
      token,
      isSpace: /^\s+$/.test(token),
    };

    cursor += token.length;
    return mappedToken;
  });
};

const ScrambleText = ({
  children,
  text,
  as: Element = "span",
  className = "",
  duration = 820,
  delay = 0,
  trigger = "view",
  replayOnHover = trigger === "manual",
  once = true,
  "aria-label": ariaLabel,
  ...props
}) => {
  const resolvedText = useMemo(
    () => String(text ?? children ?? ""),
    [children, text],
  );
  const accessibleText = ariaLabel ?? resolvedText;
  const tokens = useMemo(() => mapTokens(tokenizeText(resolvedText)), [resolvedText]);
  const shouldReduceMotion = useReducedMotion();
  const elementRef = useRef(null);
  const timeoutRef = useRef(null);
  const frameRef = useRef(null);
  const glyphsRef = useRef([]);
  const hasPlayedRef = useRef(false);
  const [frame, setFrame] = useState(() => buildInitialFrame(resolvedText));

  const stopAnimation = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    if (!resolvedText) return;

    stopAnimation();

    if (shouldReduceMotion) {
      setFrame(buildInitialFrame(resolvedText));
      hasPlayedRef.current = true;
      return;
    }

    const startAnimation = () => {
      const startedAt = performance.now();
      const letters = Array.from(resolvedText);
      glyphsRef.current = createGlyphs(letters);
      let lastFrameAt = 0;
      setFrame({
        revealCount: 0,
        value: getStartFrame(resolvedText),
      });

      const tick = (now) => {
        if (now - lastFrameAt < frameInterval) {
          frameRef.current = window.requestAnimationFrame(tick);
          return;
        }

        lastFrameAt = now;
        const progress = Math.min((now - startedAt) / duration, 1);
        const revealCount = getRevealCount(letters.length, progress);

        setFrame({
          revealCount: progress >= 1 ? letters.length : revealCount,
          value:
            progress >= 1
              ? resolvedText
              : buildFrame(glyphsRef.current, revealCount, now),
        });

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(tick);
          return;
        }

        frameRef.current = null;
        hasPlayedRef.current = true;
      };

      frameRef.current = window.requestAnimationFrame(tick);
    };

    if (delay > 0) {
      timeoutRef.current = window.setTimeout(startAnimation, delay * 1000);
      return;
    }

    startAnimation();
  }, [delay, duration, resolvedText, shouldReduceMotion, stopAnimation]);

  useEffect(() => {
    setFrame(buildInitialFrame(resolvedText));
    hasPlayedRef.current = false;
    return stopAnimation;
  }, [resolvedText, stopAnimation]);

  useEffect(() => {
    if (shouldReduceMotion || trigger === "manual") {
      setFrame(buildInitialFrame(resolvedText));
      return undefined;
    }

    if (trigger === "mount") {
      play();
      return undefined;
    }

    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      play();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!once || !hasPlayedRef.current) play();
        if (once) observer.disconnect();
      },
      { threshold: 0.45, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, play, resolvedText, shouldReduceMotion, trigger]);

  const handleMouseEnter = (event) => {
    props.onMouseEnter?.(event);
    if (replayOnHover && !shouldReduceMotion) play();
  };

  const handleFocus = (event) => {
    props.onFocus?.(event);
    if (replayOnHover && !shouldReduceMotion) play();
  };

  return (
    <Element
      {...props}
      ref={elementRef}
      className={`scramble-text ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
    >
      <span className="scramble-text-reader">{accessibleText}</span>
      <span aria-hidden="true">
        {tokens.map(({ index, isSpace, start, token }) => {
          if (isSpace) {
            return <span key={`space-${index}`}>{token}</span>;
          }

          return (
            <span key={`${token}-${index}`} className="scramble-text-word">
              {Array.from(token).map((character, characterIndex) => {
                const textIndex = start + characterIndex;
                const displayCharacter = getDisplayCharacter(frame, character, textIndex);
                const characterState = getCharacterState(
                  resolvedText,
                  frame.revealCount,
                  textIndex,
                );

                return (
                  <span
                    key={`${character}-${characterIndex}`}
                    className={getCharacterClassName(characterState)}
                  >
                    <span className="scramble-text-measure">{character}</span>
                    <span className="scramble-text-value">{displayCharacter}</span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Element>
  );
};

export default ScrambleText;
