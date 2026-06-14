import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { FiArrowLeft, FiArrowRight, FiClock, FiExternalLink, FiX } from "react-icons/fi";

import { fadeInUp, staggered } from "../../utils/animations";

const rawNotes = import.meta.glob("../../blog/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

const sanitizeValue = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed.replace(/'/g, '"'));
      return Array.isArray(parsed) ? parsed : trimmed;
    } catch {
      return trimmed;
    }
  }
  return trimmed;
};

const parseFrontMatter = (raw) => {
  const match = raw.match(
    /^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*[\r\n]*([\s\S]*)$/m
  );

  if (!match) {
    return {
      data: {},
      content: raw.trim(),
    };
  }

  const [, front, body] = match;
  const data = front
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim();
      const value = sanitizeValue(line.slice(separatorIndex + 1));

      if (Array.isArray(value)) {
        acc[key] = value;
      } else if (
        typeof value === "string" &&
        value.startsWith("[") &&
        value.endsWith("]")
      ) {
        const normalized = value.replace(/'/g, '"');
        try {
          acc[key] = JSON.parse(normalized);
        } catch {
          acc[key] = value;
        }
      } else {
        acc[key] = value;
      }

      return acc;
    }, {});

  return {
    data,
    content: body.trim(),
  };
};

const parseNotes = () =>
  Object.entries(rawNotes)
    .map(([path, rawContent]) => {
      const { data, content } = parseFrontMatter(rawContent);
      const slug = path.split("/").pop().replace(".md", "");
      const readingTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 180));

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? content.slice(0, 140),
        tags: data.tags ?? [],
        content,
        readingTime,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

const notes = parseNotes();

const NoteModal = ({ note, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!note) return undefined;
    const previouslyFocused =
      (typeof document !== "undefined" && document.activeElement) || null;
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const handlePointerDown = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [note, onClose]);

  if (!note) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/58 p-4 backdrop-blur-sm"
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="note-modal-title"
        tabIndex={-1}
        className="premium-card relative max-h-[88vh] w-full max-w-3xl overflow-hidden"
      >
        <button
          type="button"
          aria-label="Close note"
          onClick={onClose}
          className="icon-button absolute right-4 top-4 z-10"
        >
          <FiX className="text-lg" />
        </button>
        <div className="scrollbar-premium max-h-[88vh] overflow-y-auto p-6 md:p-10">
          <p className="eyebrow">
            {note.date} · {note.readingTime} min read
          </p>
          <h3
            id="note-modal-title"
            className="mt-4 text-balance text-3xl font-extrabold leading-tight md:text-4xl"
          >
            {note.title}
          </h3>
          <div className="prose prose-neutral mt-8 max-w-none leading-relaxed dark:prose-invert">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotesSection = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const scrollerRef = useRef(null);

  const scrollNotes = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * Math.min(scroller.clientWidth * 0.82, 620),
      behavior: "smooth",
    });
  };

  return (
    <section id="notes" className="section-wrapper" aria-labelledby="notes-title">
      <div className="section-shell">
        <motion.div
          variants={staggered()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 border-y border-line-light py-10 dark:border-line-dark lg:grid-cols-[0.8fr,1.2fr] lg:items-end"
        >
          <div>
            <motion.p variants={fadeInUp(0.05, 14)} className="eyebrow">
              Notes
            </motion.p>
            <motion.h2
              id="notes-title"
              variants={fadeInUp(0.1, 16)}
              className="mt-4 text-balance text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05]"
            >
              Short notes on mobile craft and product judgment.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp(0.16, 16)}
            className="text-pretty text-lg text-ink-muted dark:text-ink-inverse/80"
          >
            A small writing surface for architecture lessons, release notes, and
            practical product observations from shipped mobile work.
          </motion.p>
        </motion.div>

        {notes.length === 0 ? (
          <motion.div
            variants={fadeInUp(0.2, 14)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card mt-10 p-8 text-center"
          >
            <p className="eyebrow">Coming Soon</p>
            <p className="mt-4 text-ink-muted dark:text-ink-inverse/80">
              Notes are being edited into clearer, shorter pieces.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggered(0.08, 0.18)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] meta-text">
                {String(notes.length).padStart(2, "0")} field notes
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous notes"
                  onClick={() => scrollNotes(-1)}
                  className="icon-button"
                >
                  <FiArrowLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next notes"
                  onClick={() => scrollNotes(1)}
                  className="icon-button"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>

            <div
              ref={scrollerRef}
              className="scrollbar-premium -mx-5 grid snap-x snap-mandatory auto-cols-[minmax(18rem,21rem)] grid-flow-col gap-4 overflow-x-auto px-5 pb-5 sm:-mx-6 sm:auto-cols-[minmax(20rem,24rem)] sm:px-6 lg:-mx-10 lg:auto-cols-[minmax(22rem,26rem)] lg:px-10"
            >
              {notes.map((note, index) => (
                <motion.article
                  key={note.slug}
                  variants={fadeInUp(0.04 * index, 14)}
                  className="premium-card premium-card-hover flex min-h-[26rem] snap-start flex-col p-6"
                >
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] meta-text">
                    <span>{note.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <FiClock /> {note.readingTime} min
                    </span>
                  </div>
                  <h3 className="mt-5 text-balance text-2xl font-extrabold leading-tight">
                    {note.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted dark:text-ink-inverse/80">
                    {note.excerpt}
                  </p>
                  {note.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="chip"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedNote(note)}
                    className="button-secondary mt-auto self-start px-4 py-2.5"
                  >
                    Read note
                    <FiExternalLink />
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </section>
  );
};

export default NotesSection;
