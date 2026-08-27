import { Link } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { SurfaceVsUnderneath } from '../components/home/SurfaceVsUnderneath';
import { AIProcess } from '../components/home/AIProcess';
import { DomainCredit } from '../components/home/DomainCredit';
import { Currently } from '../components/home/Currently';
import { ProjectCard } from '../components/project/ProjectCard';
import { featuredProjects } from '../data/projects';
import { experiments } from '../data/experiments';

export function Home() {
  return (
    <main>
      <Hero />

      {/* Selected Work */}
      <section style={{ padding:'12px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'end', justifyContent:'space-between', gap:12, marginBottom:14, flexWrap:'wrap' }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Selected work</div>
              <h2 style={{ fontSize:22, fontWeight:800, letterSpacing:'-0.02em', marginTop:6 }}>Case studies, not cards.</h2>
              <p style={{ color:'var(--muted)', fontSize:13, marginTop:4 }}>Flagship projects as technical deep-dives. Full archive on /work.</p>
            </div>
            <Link to="/work" className="btn-hero" style={{ fontSize:13, fontWeight:700, border:'1px solid var(--border)', padding:'8px 12px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>View all work →</Link>
          </div>
          <div style={{ display:'grid', gap:14 }}>
            {featuredProjects.map((p,i)=> <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <SurfaceVsUnderneath />
      <AIProcess />
      <DomainCredit />

      {/* Experiments preview */}
      <section style={{ padding:'24px 0' }}>
        <div className="container">
          <div style={{ border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
            <div style={{ padding:'18px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10, borderBottom:'1px solid var(--border)' }}>
              <div>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Experiments</div>
                <h3 style={{ fontSize:18, fontWeight:800, letterSpacing:'-0.02em', marginTop:4 }}>Outside the case studies.</h3>
              </div>
              <Link to="/experiments" className="btn-hero" style={{ fontSize:13, fontWeight:700, border:'1px solid var(--border)', padding:'8px 12px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>All experiments →</Link>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:0 }}>
              {experiments.slice(0,6).map(e=>(
                <div key={e.slug} style={{ padding:16, borderRight:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
                  <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>{e.category}</div>
                  <div style={{ fontWeight:700, fontSize:13, marginTop:6 }}>{e.title}</div>
                  <div style={{ fontSize:12, color:'var(--muted)', marginTop:4, lineHeight:1.5 }}>{e.description}</div>
                  <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:8 }}>
                    {e.stack.slice(0,2).map(s=> <span key={s} className="mono" style={{ fontSize:10, border:'1px solid var(--border)', padding:'3px 6px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
              <div style={{ padding:16, borderRight:'1px solid var(--border)', background:'rgba(255,255,255,0.015)' }}>
                <div style={{ fontWeight:700, fontSize:13 }}>Technical profile</div>
                <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:6, lineHeight:1.6 }}>
                  Python · JavaScript · HTML5/CSS3 · React · Next.js (exploratory) · Tailwind · Firestore · Supabase · Redis · Linux/Ubuntu · Docker · Cloudflare · Termux
                </div>
                <div style={{ fontSize:12, color:'var(--muted)', marginTop:8, fontStyle:'italic' }}>“I'm still learning fundamentals, but I'm comfortable integrating cloud services, navigating codebases, specifying requirements, using AI agents, debugging, and shipping.”</div>
              </div>
              <div style={{ padding:16, background:'var(--accent-soft)', borderLeft:'1px solid var(--accent-border)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)' }}>Honest status</div>
                <div style={{ fontSize:13, fontWeight:700, marginTop:6 }}>Self Annotate — Needs Improvement</div>
                <div style={{ fontSize:12, color:'var(--muted)', marginTop:4, lineHeight:1.5 }}>Latest build regressed vs earlier stable build. Software is iterative and non-linear — regressions happen. In iteration.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Currently />

      <style>{`@media(max-width:900px){ section:nth-of-type(2) > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } } @media(max-width:760px){ div[style*="repeat(3"]{ grid-template-columns:1fr !important; } div[style*="gridTemplateColumns:'1fr 1fr'"]{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}
