import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number; vx: number; vy: number; ox: number; oy: number };
type Rock = { x: number; y: number; r: number; vx: number; vy: number; rot: number; vr: number; poly: {x:number;y:number}[] };
type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number; trail: {x:number;y:number}[] };

export function SpaceBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth, h = window.innerHeight;
    let raf = 0;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFine = window.matchMedia('(pointer: fine)').matches;

    const stars: Star[] = [];
    const rocks: Rock[] = [];
    const meteors: Meteor[] = [];
    let nextMeteor = 0;

    const rand = (a:number,b:number)=>a+Math.random()*(b-a);

    const init = () => {
      stars.length = 0; rocks.length = 0; meteors.length = 0;
      const starCount = w < 900 ? 110 : 190;
      for (let i=0;i<starCount;i++) {
        const r = Math.random() < 0.82 ? rand(0.5,1.1) : rand(1.2,1.9);
        stars.push({
          x: rand(0,w), y: rand(0,h), r, a: rand(0.35,0.95),
          tw: rand(0.0012,0.0035), ph: rand(0, Math.PI*2),
          vx: rand(-0.06,0.06), vy: rand(-0.05,0.05),
          ox: rand(0,w), oy: rand(0,h)
        });
      }
      const rockCount = w < 900 ? 2 : 3;
      for (let i=0;i<rockCount;i++) {
        const r = rand(5, 9);
        const poly: {x:number;y:number}[] = [];
        const pts = Math.floor(rand(6,8));
        for(let k=0;k<pts;k++){
          const ang = (k/pts)*Math.PI*2;
          const rr = r * rand(0.78,1.06);
          poly.push({x: Math.cos(ang)*rr, y: Math.sin(ang)*rr});
        }
        rocks.push({
          x: rand(0,w), y: rand(0,h), r, poly,
          vx: rand(-0.06,0.06), vy: rand(-0.04,0.04),
          rot: rand(0,Math.PI*2), vr: rand(-0.0012,0.0012)
        });
      }
      nextMeteor = performance.now() + rand(900,2600);
    };

    const spawnMeteor = () => {
      const fromTop = Math.random() < 0.55;
      const x = fromTop ? rand(-80, w*0.7) : rand(w*0.35, w+80);
      const y = fromTop ? rand(-80, -10) : rand(-80, h*0.4);
      const ang = fromTop ? rand(0.55,0.95) : rand(1.05,1.45); // radians ~ diagonal down-right
      const sp = rand(3.2, 6.8);
      meteors.push({
        x, y, vx: Math.cos(ang)*sp, vy: Math.sin(ang)*sp,
        life: 0, max: rand(900, 1500), trail: []
      });
    };

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      init();
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => { mouse.current.active = false; };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);
    resize();

    let t0 = performance.now();
    const tick = (now:number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(32, now - t0);
      t0 = now;
      // clear — subtle vignette friendly
      ctx.clearRect(0,0,w,h);

      // meteors spawn
      if (!prefersReduced && now > nextMeteor) {
        spawnMeteor();
        nextMeteor = now + rand(1800, 4200);
        // occasionally double
        if (Math.random()<0.18) setTimeout(spawnMeteor, rand(250,600));
      }

      // stars
      for (const s of stars) {
        if (!prefersReduced) {
          // drift
          s.x += s.vx * (dt*0.06);
          s.y += s.vy * (dt*0.06);
          // wrap with margin
          if (s.x < -20) s.x = w+20; if (s.x > w+20) s.x = -20;
          if (s.y < -20) s.y = h+20; if (s.y > h+20) s.y = -20;
          // cursor repulsion — gentle, ad clamp
          if (mouse.current.active && isFine) {
            const dx = s.x - mouse.current.x;
            const dy = s.y - mouse.current.y;
            const d2 = dx*dx+dy*dy;
            const r = 120;
            if (d2 < r*r && d2 > 0.1) {
              const d = Math.sqrt(d2);
              const f = (1 - d/r) * 0.55; // strength
              s.x += (dx/d) * f * 1.6;
              s.y += (dy/d) * f * 1.6;
            }
          }
        }
        const tw = 0.62 + 0.38*Math.sin(now*s.tw + s.ph);
        ctx.globalAlpha = s.a * tw * 0.95;
        // tiny star — no glow, just dot; larger stars get faint halo
        if (s.r > 1.35) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r*2.0, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(255,255,255,0.07)';
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = s.r > 1.25 ? 'rgba(235,240,255,0.95)' : 'rgba(255,255,255,0.9)';
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // asteroids — dark rocky silhouettes with subtle edge
      for (const rk of rocks) {
        if (!prefersReduced) {
          rk.x += rk.vx * (dt*0.06);
          rk.y += rk.vy * (dt*0.06);
          rk.rot += rk.vr * dt;
          if (rk.x < -40) rk.x = w+40; if (rk.x > w+40) rk.x = -40;
          if (rk.y < -40) rk.y = h+40; if (rk.y > h+40) rk.y = -40;
          if (mouse.current.active && isFine) {
            const dx = rk.x - mouse.current.x;
            const dy = rk.y - mouse.current.y;
            const d2 = dx*dx+dy*dy;
            const r = 150;
            if (d2 < r*r && d2 > 1) {
              const d = Math.sqrt(d2);
              const f = (1 - d/r);
              rk.vx += (dx/d) * f * 0.018;
              rk.vy += (dy/d) * f * 0.018;
              rk.vr += f * 0.00045 * (rk.x < mouse.current.x ? -1 : 1);
              // clamp
              rk.vx = Math.max(-0.9, Math.min(0.9, rk.vx));
              rk.vy = Math.max(-0.9, Math.min(0.9, rk.vy));
            }
            // gentle friction
            rk.vx *= 0.998; rk.vy *= 0.998;
          }
        }
        // render as ultra-subtle blurred speck — never overpowers previews
        ctx.save();
        ctx.translate(rk.x, rk.y);
        ctx.rotate(rk.rot);
        ctx.globalAlpha = 0.32;
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(rk.poly[0].x, rk.poly[0].y);
        for(let i=1;i<rk.poly.length;i++) ctx.lineTo(rk.poly[i].x, rk.poly[i].y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(18,19,22,0.28)';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 0.38;
        ctx.strokeStyle = 'rgba(255,255,255,0.035)';
        ctx.lineWidth = 0.7;
        ctx.stroke();
        // single faint crater — almost invisible
        ctx.globalAlpha = 0.20;
        ctx.fillStyle = 'rgba(255,255,255,0.09)';
        ctx.beginPath(); ctx.arc(rk.poly[0].x*0.35, rk.poly[0].y*0.18, rk.r*0.16, 0, Math.PI*2); ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      // meteors
      for (let i=meteors.length-1;i>=0;i--) {
        const m = meteors[i];
        if (!prefersReduced) {
          m.x += m.vx * (dt*0.06*3.2);
          m.y += m.vy * (dt*0.06*3.2);
          // cursor nudge — meteors arc slightly away from cursor
          if (mouse.current.active && isFine) {
            const dx = m.x - mouse.current.x;
            const dy = m.y - mouse.current.y;
            const d2 = dx*dx+dy*dy;
            if (d2 < 180*180 && d2>1) {
              const d=Math.sqrt(d2);
              const f=(1-d/180)*0.18;
              m.vx += (dx/d)*f;
              m.vy += (dy/d)*f;
            }
          }
        }
        m.life += dt;
        m.trail.push({x:m.x, y:m.y});
        if (m.trail.length>14) m.trail.shift();
        const p = 1 - m.life/m.max;
        if (p<=0 || m.x> w+120 || m.y>h+120) { meteors.splice(i,1); continue; }
        // trail
        for(let k=0;k<m.trail.length-1;k++){
          const a = (k/m.trail.length)*p*0.65;
          if (a<=0.02) continue;
          ctx.globalAlpha = a;
          ctx.strokeStyle = 'rgba(210,220,255,0.9)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(m.trail[k].x, m.trail[k].y);
          ctx.lineTo(m.trail[k+1].x, m.trail[k+1].y);
          ctx.stroke();
          // faint glow
          ctx.globalAlpha = a*0.18;
          ctx.lineWidth = 4.5;
          ctx.stroke();
        }
        // head
        ctx.globalAlpha = p*0.95;
        ctx.fillStyle = 'rgba(255,255,255,0.96)';
        ctx.beginPath(); ctx.arc(m.x,m.y,1.7,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha = p*0.22;
        ctx.fillStyle = 'rgba(165,180,255,0.9)';
        ctx.beginPath(); ctx.arc(m.x,m.y,6.5,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha = 1;
      }
    };
    tick(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.95,
      }}
    />
  );
}
