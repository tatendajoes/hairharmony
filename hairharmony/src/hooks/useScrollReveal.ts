import { useEffect, useRef, type RefObject } from 'react';

interface ScrollRevealOptions {
  /** 0–1, how much of element must be visible. Default: 0.15 */
  threshold?: number;
  /** CSS margin around root. Default: '0px 0px -40px 0px' */
  rootMargin?: string;
  /** Only trigger once. Default: true */
  once?: boolean;
}

/**
 * useScrollReveal
 * Adds a 'visible' class to the ref element when it scrolls into view.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useScrollRevealGroup
 * Observes multiple children of a container for scroll reveal.
 * Attach to a parent — all children with class 'reveal' will animate.
 */
export function useScrollRevealGroup<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return containerRef;
}
