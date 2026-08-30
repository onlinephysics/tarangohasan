import { Link } from 'react-router-dom';
import { ClassEight } from '../ui/ClassEight';

export function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', background:'var(--bg-2)', marginTop: 0 }}>
      <div className="container" style={{ padding:'40px 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 0.8fr 0.8fr', gap:32 }}>
          <div>
            <div className="brand-name" style={{ fontWeight:800, letterSpacing:'-0.02em', marginBottom:6 }}><span>TARANGO</span><span className="brand-space">&nbsp;</span><span>HASAN</span></div>
            <div className="mono" style={{ fontSize:12, color:'var(--muted)', lineHeight:1.7 }}>
              <span style={{ display:'inline-flex', alignItems:'baseline', gap:6 }}><ClassEight subtle /> · <a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" style={{ color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.18)' }}>Rangpur Zilla School</a></span>, Bangladesh<br/>
              Student · Web Developer · Prompt Engineer
            </div>
            <p style={{ marginTop:12, color:'var(--muted)', fontSize:13, maxWidth:380, lineHeight:1.6 }}>
              Things I've built, developed, maintained, and experimented with.
            </p>
            <div className="mono" style={{ marginTop:14, fontSize:11, color:'var(--muted-2)' }}>
              Legal name: Hiranya Nawar Tirtho — displayed subtly as attribution.
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Navigate</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, fontSize:13, color:'var(--muted)' }}>
              <Link to="/work" className="nav-link" style={{color:'var(--muted)'}}>Work — Selected & Archive</Link>
              <Link to="/about" className="nav-link" style={{color:'var(--muted)'}}>About & Role Clarification</Link>
              <Link to="/process" className="nav-link" style={{color:'var(--muted)'}}>Process & Prompt Engineering</Link>
              <Link to="/experiments" className="nav-link" style={{color:'var(--muted)'}}>Experiments</Link>
            </div>
          </div>
          <div>
            <div className="mono" style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Connect</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, fontSize:13, color:'var(--muted)' }}>
              <a href="https://github.com/tarangohasan" target="_blank" rel="noreferrer" className="connect-link mono" style={{ fontSize:13 }}>GitHub — @tarangohasan</a>
              <a href="https://x.com/tarangohasan" target="_blank" rel="noreferrer" className="connect-link mono" style={{ fontSize:13 }}>X — @tarangohasan</a>
              <a href="https://reddit.com/user/tarangohasan" target="_blank" rel="noreferrer" className="connect-link mono" style={{ fontSize:13 }}>Reddit — @tarangohasan</a>
              <span className="connect-link mono" style={{ fontSize:13 }}>Discord — @tarangohasan</span>
              <a href="mailto:tarangohasan@gmail.com" className="connect-link mono" style={{ fontSize:13 }}>tarangohasan@gmail.com</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop:28, paddingTop:16, borderTop:'1px solid var(--border)', display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'center' }}>
          <span className="mono" style={{ fontSize:11, color:'var(--muted-2)', display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
            <span>Portfolio v1.0 · August 2026 · MIT Licensed</span>
            <span style={{ opacity:0.4 }}>·</span>
            <a href="https://github.com/onlinephysics/tarangohasan" target="_blank" rel="noreferrer" style={{ color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.18)' }}>github.com/onlinephysics/tarangohasan</a>
            <span style={{ opacity:0.4 }}>·</span>
            <a href="https://github.com/onlinephysics" target="_blank" rel="noreferrer" style={{ color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.18)' }}>github.com/onlinephysics</a>
          </span>
          <span className="mono brand-name" style={{ fontSize:11, color:'var(--muted-2)' }}><span>© 2026 Tarango</span><span className="brand-space">&nbsp;</span><span>Hasan</span></span>
        </div>
        <div className="mono" style={{ marginTop:10, fontSize:10, color:'var(--muted-2)', opacity:0.7, display:'flex', gap:6, flexWrap:'wrap' }}>
          <span>Dark technical archive · Built with React + Vite + TypeScript</span>
          <span>·</span>
          <a href="https://github.com/onlinephysics/tarangohasan/blob/main/LICENSE" target="_blank" rel="noreferrer" style={{ color:'var(--muted-2)', textDecoration:'underline', textUnderlineOffset:2 }}>MIT License</a>
        </div>
      </div>
      <style>{`@media (max-width:760px){ footer .container > div:first-child{ grid-template-columns:1fr !important; } }`}</style>
    </footer>
  );
}
