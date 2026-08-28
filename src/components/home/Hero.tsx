import { Link } from 'react-router-dom';
import { ClassEight } from '../ui/ClassEight';

export function Hero() {
  return (
    <section style={{ padding:'48px 0 24px' }}>
      <div className="container">
        <div style={{
          border:'1px solid var(--border)', borderRadius:20, overflow:'hidden',
          background:'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
          position:'relative'
        }}>
          {/* top bar */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 16px', borderBottom:'1px solid var(--border)', background:'rgba(0,0,0,0.25)' }}>
            <div style={{ display:'flex', gap:6 }}>
              <span style={{width:10,height:10,borderRadius:999,background:'#ff5f56', display:'inline-block'}} />
              <span style={{width:10,height:10,borderRadius:999,background:'#ffbd2e', display:'inline-block'}} />
              <span style={{width:10,height:10,borderRadius:999,background:'#27c93f', display:'inline-block'}} />
            </div>
            <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>tarango — zsh — 80×24</span>
            <span className="mono" style={{ fontSize:11, color:'var(--accent)', border:'1px solid var(--accent-border)', background:'var(--accent-soft)', padding:'2px 8px', borderRadius:999 }}>● live archive</span>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1.15fr 0.85fr', gap:0 }}>
            {/* left */}
            <div style={{ padding:'36px 28px 28px', borderRight:'1px solid var(--border)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--muted)', display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span style={{ width:22, height:1, background:'var(--border-strong)' }} /> Personal archive — Rangpur, Bangladesh
              </div>
              <h1 style={{ fontSize:'clamp(36px, 6vw, 56px)', fontWeight:800, letterSpacing:'-0.04em', lineHeight:0.95 }}>
                <span className="hero-word">I build</span><br/><span className="hero-word">things.</span><br/><span className="hero-word hero-word--muted" style={{ color:'var(--muted)', fontWeight:700 }}>Mostly on<br/>the web.</span>
              </h1>
              <p style={{ marginTop:16, color:'var(--muted)', fontSize:15, lineHeight:1.65, maxWidth:480 }}>
                I'm a <span style={{ display:'inline-flex', alignItems:'baseline', gap:4 }}><ClassEight /> student at <a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" style={{ color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:3, textDecorationColor:'rgba(255,255,255,0.22)' }}>Rangpur Zilla School</a></span> and a web developer from Bangladesh. I build, upgrade, maintain, and experiment with websites, web applications, and other software.
              </p>
              <p style={{ marginTop:12, color:'#cbd5ce', fontSize:13, lineHeight:1.6, maxWidth:520, background:'rgba(16,185,129,0.08)', border:'1px solid rgba(16,185,129,0.14)', padding:'10px 12px', borderRadius:10 }}>
                Many of the educational projects here begin with ideas, requirements, and academic content from my father and other teachers. My role is turning those ideas into working software.
              </p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:18 }}>
                <Link to="/work" className="btn-hero" style={{ background:'#fff', color:'#0a0a0c', padding:'12px 18px', borderRadius:999, fontWeight:800, fontSize:14, display:'inline-flex', alignItems:'center', gap:8 }}>
                  Explore my work <span>→</span>
                </Link>
                <Link to="/process" className="btn-hero btn-hero--dark" style={{ background:'transparent', color:'#f4f4f6', border:'1px solid rgba(255,255,255,0.14)', padding:'12px 18px', borderRadius:999, fontWeight:600, fontSize:14 }}>
                  How I build →
                </Link>
              </div>
              <div style={{ display:'flex', gap:18, marginTop:18, flexWrap:'wrap' }}>
                <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>▸ React · Firestore · Apps Script</span>
                <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>▸ Prompt-engineered, human-reviewed</span>
              </div>
            </div>

            {/* right — identity card */}
            <div style={{ padding:20, background:'rgba(255,255,255,0.015)' }}>
              <div style={{ border:'1px solid var(--border)', borderRadius:16, overflow:'hidden', background:'var(--bg-card)' }}>
                <div style={{ padding:16, display:'flex', gap:12, alignItems:'center' }}>
                  <img src="/tarangohasan-avatar.png" alt="Tarango Hasan avatar" width={44} height={44} style={{ width:44, height:44, borderRadius:12, objectFit:'cover', border:'1px solid var(--border)', background:'#fff' }} />
                  <div>
                    <div className="brand-name" style={{ fontWeight:800, fontSize:14, letterSpacing:'-0.02em' }}><span>Tarango</span><span className="brand-space">&nbsp;</span><span>Hasan</span></div>
                    <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>Student · Web Developer · Prompt Engineer</div>
                  </div>
                  <span className="mono" style={{ marginLeft:'auto', fontSize:10, color:'var(--accent)', border:'1px solid var(--accent-border)', background:'var(--accent-soft)', padding:'3px 7px', borderRadius:999 }}>ACTIVE</span>
                </div>
                <div style={{ padding:'0 16px 16px', display:'grid', gap:10 }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                    <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid var(--border)', borderRadius:12, padding:12 }}>
                      <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Education</div>
                      <div style={{ fontSize:13, fontWeight:700, marginTop:4 }}><ClassEight /></div>
                      <a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" className="mono" style={{ fontSize:11, color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.18)' }}>Rangpur Zilla School</a>
                    </div>
                    <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid var(--border)', borderRadius:12, padding:12 }}>
                      <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Location</div>
                      <div style={{ fontSize:13, fontWeight:700, marginTop:4 }}>Rangpur, BD</div>
                      <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>GMT+6</div>
                    </div>
                  </div>
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                    <span className="mono" style={{ fontSize:11, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', padding:'5px 8px', borderRadius:999 }}>React</span>
                    <span className="mono" style={{ fontSize:11, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', padding:'5px 8px', borderRadius:999 }}>Firestore</span>
                    <span className="mono" style={{ fontSize:11, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', padding:'5px 8px', borderRadius:999 }}>Apps Script</span>
                    <span className="mono" style={{ fontSize:11, border:'1px solid var(--accent-border)', background:'var(--accent-soft)', color:'var(--accent)', padding:'5px 8px', borderRadius:999 }}>Prompt Eng.</span>
                  </div>
                </div>
              </div>
              <div className="mono" style={{ marginTop:10, fontSize:11, color:'var(--muted-2)', textAlign:'center' }}>“The visible website is only the surface.” — scroll to reveal ↓</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } section > div > div > div:nth-child(2) > div:first-child{ border-right:none !important; border-bottom:1px solid var(--border); } }`}</style>
      </div>
    </section>
  );
}
