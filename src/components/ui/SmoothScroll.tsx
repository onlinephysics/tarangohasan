import { useEffect, useRef } from 'react';

export function SmoothScroll() {
  const rafRef = useRef<number>(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const isActiveRef = useRef(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    // only for PC (fine pointer, no coarse-only, not reduced)
    if (!isFine || isCoarse && !window.matchMedia('(any-pointer: fine)').matches) {
      // hybrid with both: still allow if fine exists, but check coarse-only
      if (!isFine) return;
    }
    if (prefersReduced) return;
    // also skip if user prefers touch
    const touchOnly = !isFine && (isCoarse || window.matchMedia('(hover: none)').matches);
    if (touchOnly) return;

    const doc = document.documentElement;
    const getMax = () => Math.max(0, doc.scrollHeight - window.innerHeight);

    targetRef.current = window.scrollY;
    currentRef.current = window.scrollY;

    let ticking = false;
    const lerp = 0.085; // smoothness: lower = smoother
    const onWheel = (e: WheelEvent) => {
      // allow native for iframes / modals
      const t = e.target as HTMLElement;
      if (t.closest('[data-no-smooth]')) return;
      // if already at edge and scrolling beyond, let native bounce
      const max = getMax();
      const atTop = window.scrollY <= 0 && e.deltaY < 0;
      const atBottom = window.scrollY >= max - 1 && e.deltaY > 0;
      if (atTop || atBottom) return;

      e.preventDefault();
      isActiveRef.current = true;
      const delta = e.deltaY;
      // normalize: many mice give 100 per notch, touchpads smaller
      targetRef.current = Math.min(max, Math.max(0, targetRef.current + delta));
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      // if user scrolled via keyboard/anchor, sync target
      if (!isActiveRef.current) {
        targetRef.current = window.scrollY;
        currentRef.current = window.scrollY;
      }
    };

    const tick = () => {
      const diff = targetRef.current - currentRef.current;
      if (Math.abs(diff) < 0.15) {
        currentRef.current = targetRef.current;
        window.scrollTo(0, currentRef.current);
        ticking = false;
        isActiveRef.current = false;
        return;
      }
      currentRef.current += diff * lerp;
      window.scrollTo(0, currentRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    // keep target in sync when resize or route scrolls
    const onResize = () => {
      targetRef.current = window.scrollY;
      currentRef.current = window.scrollY;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('wheel', onWheel as EventListener);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
