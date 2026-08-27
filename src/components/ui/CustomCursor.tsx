import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ibeamRef = useRef<HTMLDivElement>(null);
  const ibeamRingRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const [selecting, setSelecting] = useState(false);
  const [dragging, setDragging] = useState(false);

  // keep latest visible without restarting animation loop
  const visibleRef = useRef(false);
  useEffect(() => { visibleRef.current = visible; }, [visible]);

  // dynamic: touch -> hide until genuine mouse/pen, mouse/pen -> show (fixes synthetic mousemove after tap)
  const [usingTouch, setUsingTouch] = useState(false);
  const lastTouchRef = useRef(0);
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const hoverNone = window.matchMedia('(hover: none)').matches;
    const touchOnly = !fine && (coarse || hoverNone);
    if (touchOnly) setUsingTouch(true);

    const onTouch = () => {
      lastTouchRef.current = Date.now();
      setUsingTouch(true);
    };
    // only pointerType is reliable — generic mousemove would re-show on synthetic mouse after tap
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        lastTouchRef.current = Date.now();
        setUsingTouch(true);
      } else if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        // ignore synthetic mouse that follows a touch within ~700ms
        if (Date.now() - lastTouchRef.current < 700) return;
        setUsingTouch(false);
      }
    };
    window.addEventListener('touchstart', onTouch, { passive: true });
    window.addEventListener('pointerdown', onPointer as unknown as EventListener, { passive: true } as AddEventListenerOptions);
    window.addEventListener('pointermove', onPointer as unknown as EventListener, { passive: true } as AddEventListenerOptions);
    return () => {
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('pointerdown', onPointer as unknown as EventListener);
      window.removeEventListener('pointermove', onPointer as unknown as EventListener);
    };
  }, []);
  // also toggle css so native cursor reappears during touch
  useEffect(() => {
    document.documentElement.classList.toggle('using-touch', usingTouch);
  }, [usingTouch]);

  useEffect(() => {
    const hasFine = window.matchMedia('(pointer: fine)').matches;
    if (!hasFine) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    // start centered, but will be overwritten by first real mouse event
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let cx = rx;
    let cy = ry;
    let tx = rx;
    let ty = ry;

    const setPos = (x: number, y: number) => {
      tx = x;
      ty = y;
      if (!visibleRef.current) {
        // first position — snap ring to mouse so there's no initial jump
        rx = x; ry = y; cx = x; cy = y;
        if (ringRef.current) ringRef.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      }
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (ibeamRef.current) ibeamRef.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (ibeamRingRef.current) ibeamRingRef.current.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
      if (!visibleRef.current) setVisible(true);
    };

    const onMove = (e: MouseEvent) => setPos(e.clientX, e.clientY);

    const loop = () => {
      const k = prefersReduced ? 1 : 0.16;
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      rx += (cx - rx) * (prefersReduced ? 1 : 0.24);
      ry += (cy - ry) * (prefersReduced ? 1 : 0.24);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onDown = (e: MouseEvent) => {
      setDown(true);
      setPos(e.clientX, e.clientY);
    };
    const onUp = (e: MouseEvent) => {
      setDown(false);
      setPos(e.clientX, e.clientY);
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.toString().length === 0) setSelecting(false);
    };
    const onSelectionChange = () => {
      const sel = window.getSelection();
      const isSel = !!sel && !sel.isCollapsed && sel.toString().length > 0;
      setSelecting(isSel);
      if (isSel) setHover(false);
    };
    const onDragStart = () => setDragging(true);
    const onDragEnd = () => {
      setDragging(false);
      const sel = window.getSelection();
      const isSel = !!sel && !sel.isCollapsed && sel.toString().length > 0;
      setSelecting(isSel);
    };

    const onElEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], [data-cursor="hover"]')) setHover(true);
    };
    const onElLeave = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], [data-cursor="hover"]')) setHover(false);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown as unknown as EventListener);
    window.addEventListener('mouseup', onUp as unknown as EventListener);
    window.addEventListener('dragstart', onDragStart);
    window.addEventListener('dragend', onDragEnd);
    document.addEventListener('selectionchange', onSelectionChange);
    document.addEventListener('mouseover', onElEnter);
    document.addEventListener('mouseout', onElLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown as unknown as EventListener);
      window.removeEventListener('mouseup', onUp as unknown as EventListener);
      window.removeEventListener('dragstart', onDragStart);
      window.removeEventListener('dragend', onDragEnd);
      document.removeEventListener('selectionchange', onSelectionChange);
      document.removeEventListener('mouseover', onElEnter);
      document.removeEventListener('mouseout', onElLeave);
    };
  }, []); // run once — visibleRef avoids restart

  useEffect(() => {
    document.documentElement.classList.toggle('is-selecting', selecting);
  }, [selecting]);
  useEffect(() => {
    document.documentElement.classList.toggle('is-dragging', dragging);
  }, [dragging]);

  const showSelect = selecting && !dragging && !usingTouch;
  const showDefault = visible && !selecting && !dragging && !usingTouch;

  return (
    <>
      {/* ring — default */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: hover ? 42 : 28,
          height: hover ? 42 : 28,
          borderRadius: 999,
          border: hover ? '1px solid rgba(16,185,129,0.45)' : '1px solid rgba(255,255,255,0.16)',
          background: hover ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.015)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: showDefault ? 1 : 0,
          transition: 'opacity 150ms ease, width 180ms ease, height 180ms ease, background 180ms ease, border-color 180ms ease',
          willChange: 'transform',
          backdropFilter: 'blur(2px)',
          transform: 'translate3d(-100px,-100px,0) translate(-50%,-50%)',
        }}
      />
      {/* dot — default */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 5,
          height: 5,
          borderRadius: 999,
          background: hover ? 'var(--accent)' : '#f4f4f6',
          boxShadow: hover ? '0 0 0 6px rgba(16,185,129,0.14)' : '0 1px 6px rgba(0,0,0,0.4)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: showDefault ? 1 : 0,
          // combine translate (set via JS) + scale on press without losing centering
          transform: 'translate3d(-100px,-100px,0) translate(-50%,-50%)',
          transition: 'opacity 150ms ease, background 150ms ease, width 80ms ease, height 80ms ease, box-shadow 150ms ease',
          willChange: 'transform',
        }}
      />
      {/* press halo — separate so dot stays centered */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 18,
          height: 18,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.14)',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: showDefault && down ? 1 : 0,
          transform: `translate3d(${0}px,${0}px,0)`, // JS will drive via dot position sync
          display: 'none', // keep logic simple — press is shown via dot scaling
        }}
      />
      {/* i-beam — selecting: minimal, no green glow */}
      <div
        ref={ibeamRingRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 34,
          height: 34,
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.12)',
          background: 'rgba(255,255,255,0.045)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          boxShadow: '0 0 0 6px rgba(255,255,255,0.03)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: showSelect ? 1 : 0,
          transform: 'translate3d(-100px,-100px,0) translate(-50%,-50%)',
          transition: 'opacity 120ms ease',
          willChange: 'transform',
        }}
      />
      <div
        ref={ibeamRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 2,
          height: 22,
          borderRadius: 999,
          background: '#f4f4f6',
          boxShadow: '0 1px 6px rgba(0,0,0,0.35)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: showSelect ? 1 : 0,
          transform: 'translate3d(-100px,-100px,0) translate(-50%,-50%)',
          transition: 'opacity 120ms ease',
          willChange: 'transform',
          overflow: 'visible',
        }}
      >
        <span aria-hidden style={{ position: 'absolute', left: '50%', top: -1, width: 10, height: 1, background: 'rgba(255,255,255,0.62)', borderRadius: 999, transform: 'translateX(-50%)', opacity: showSelect ? 1 : 0 }} />
        <span aria-hidden style={{ position: 'absolute', left: '50%', bottom: -1, width: 10, height: 1, background: 'rgba(255,255,255,0.62)', borderRadius: 999, transform: 'translateX(-50%)', opacity: showSelect ? 1 : 0 }} />
      </div>
    </>
  );
}
