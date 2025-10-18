import PropTypes from "prop-types";
import { Suspense, useEffect, useRef, useState } from "react";

const DefaultSkeleton = ({ minHeight }) => (
  <div
    className="relative w-full overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/10 px-6 py-24 shadow-card-light backdrop-blur-sm dark:border-white/5 dark:bg-white/5"
    style={{ minHeight }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60" />
    <div className="relative h-full w-full animate-pulse rounded-[2.25rem] bg-white/10 dark:bg-white/5" />
  </div>
);

const LazySection = ({
  children,
  skeleton,
  rootMargin = "200px",
  threshold = 0.15,
  minHeight = "60vh",
}) => {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return undefined;

    const element = containerRef.current;
    if (!element) return undefined;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [rootMargin, shouldRender, threshold]);

  const placeholder = skeleton ?? <DefaultSkeleton minHeight={minHeight} />;

  return (
    <div ref={containerRef} className="w-full">
      {shouldRender ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder}
    </div>
  );
};

export default LazySection;

LazySection.propTypes = {
  children: PropTypes.node.isRequired,
  skeleton: PropTypes.node,
  rootMargin: PropTypes.string,
  threshold: PropTypes.number,
  minHeight: PropTypes.string,
};

DefaultSkeleton.propTypes = {
  minHeight: PropTypes.string,
};
