import { experiments } from '../data/experiments';

const cats = ['All','AI','Linux & Environments','Infrastructure','Web & APIs','Terminal'] as const;

export function Experiments() {
  return (
    <main style={{ padding:'28px 0 32px' }}>
      <div className="container">
        <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"></span> Experiments</div>
        <h1 style={{ fontSize:'clamp(26px,4vw,34px)', fontWeight:800, letterSpacing:'-0.03em', marginTop:6 }}>Tools, environments, and edges.</h1>
        <p style={{ color:'var(--muted)', fontSize:14, marginTop:6, maxWidth:680 }}>Modular cards for exploration outside primary case studies — from prompt structures to Termux on Android.</p>

        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:14 }}>
          {cats.map(c=>(
            <span key={c} className="mono" style={{ fontSize:11, border:'1px solid var(--border)', padding:'6px 10px', borderRadius:999, background: c==='All' ? '#fff' : 'rgba(255,255,255,0.04)', color: c==='All' ? '#0a0a0c' : 'var(--muted)', fontWeight: c==='All'?700:500 }}>{c}</span>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12, marginTop:16 }}>
          {experiments.map(e=>(
            <div key={e.slug} style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'var(--bg-card)' }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)', border:'1px solid var(--accent-border)', background:'var(--accent-soft)', display:'inline-flex', padding:'3px 7px', borderRadius:999 }}>{e.category}</div>
              <div style={{ fontWeight:800, fontSize:14, marginTop:10, letterSpacing:'-0.02em' }}>{e.title}</div>
              <div style={{ fontSize:12, color:'var(--muted)', marginTop:6, lineHeight:1.6 }}>{e.description}</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:10 }}>
                {e.stack.map(s=> <span key={s} className="mono" style={{ fontSize:10, border:'1px solid var(--border)', padding:'4px 7px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{s}</span>)}
              </div>
              <div className="mono" style={{ marginTop:10, fontSize:11, color:'var(--muted)' }}>● {e.status}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:14, border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          <div>
            <div style={{ fontWeight:800, fontSize:13 }}>Technical profile — no percentage bars.</div>
            <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:8, lineHeight:1.7 }}>
              <strong style={{color:'#e4e4e7'}}>Fundamentals:</strong> Python · JavaScript · HTML5/CSS3<br/>
              <strong style={{color:'#e4e4e7'}}>Frontend:</strong> React · Next.js (exploratory) · Tailwind CSS<br/>
              <strong style={{color:'#e4e4e7'}}>Backend & Data:</strong> Firebase Firestore · Supabase · Redis<br/>
              <strong style={{color:'#e4e4e7'}}>Infra:</strong> Linux/Ubuntu · Docker · Cloudflare · Termux/Android<br/>
              <strong style={{color:'#e4e4e7'}}>Concepts:</strong> REST APIs · Auth workflows · Git & GitHub · Prompt engineering & AI agents
            </div>
          </div>
          <div style={{ borderLeft:'1px solid var(--border)', paddingLeft:16 }}>
            <div style={{ fontWeight:700, fontSize:13 }}>What I actually know</div>
            <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6, fontStyle:'italic' }}>
              “I'm still learning traditional programming fundamentals, but I'm comfortable working with modern web technologies, integrating cloud services, navigating codebases, specifying software requirements, using AI coding agents, debugging, and shipping working applications.”
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ div[style*="repeat(3"]{ grid-template-columns:1fr 1fr !important; } } @media(max-width:600px){ div[style*="repeat(3"]{ grid-template-columns:1fr !important; } div[style*="gridTemplateColumns:'1fr 1fr'"]{ grid-template-columns:1fr !important; } div[style*="gridTemplateColumns:'1fr 1fr'"] > div:last-child{ border-left:none !important; padding-left:0 !important; border-top:1px solid var(--border); padding-top:16px; } }`}</style>
    </main>
  );
}
