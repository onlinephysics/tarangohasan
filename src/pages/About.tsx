import { ClassEight } from '../components/ui/ClassEight';

export function About() {
  return (
    <main style={{ padding:'28px 0 32px' }}>
      <div className="container">
        <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> About</div>
        <h1 style={{ fontSize:'clamp(26px, 4vw, 34px)', fontWeight:800, letterSpacing:'-0.03em', marginTop:6 }}>Who I am & how I work.</h1>

        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:16, marginTop:16 }}>
          <div style={{ display:'grid', gap:16 }}>
            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
              <h2 style={{ fontSize:16, fontWeight:800 }}>Who I am</h2>
              <p style={{ color:'var(--muted)', fontSize:14, marginTop:8, lineHeight:1.65 }}>
                I'm <strong className="brand-name" style={{color:'#e4e4e7'}}><span>Tarango</span><span className="brand-space">&nbsp;</span><span>Hasan</span></strong>, a <span style={{ display:'inline-flex', alignItems:'baseline', gap:4 }}><ClassEight /> student at <a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" style={{ color:'#e4e4e7', textDecoration:'underline', textUnderlineOffset:3, textDecorationColor:'rgba(255,255,255,0.22)' }}>Rangpur Zilla School, Bangladesh</a></span>. I build websites, web applications, browser extensions, and technical experiments — balancing school with shipping real software.
              </p>
              <div style={{ marginTop:14, border:'1px solid var(--border)', borderRadius:12, padding:12, background:'rgba(255,255,255,0.015)', display:'flex', gap:12, alignItems:'center' }}>
                <img src="/tarangohasan-avatar.png" alt="Tarango Hasan avatar" width={36} height={36} style={{ width:36, height:36, borderRadius:10, objectFit:'cover', border:'1px solid var(--border)', background:'#fff' }} />
                <div>
                  <div className="brand-name" style={{ fontWeight:800, fontSize:13 }}><span>Tarango</span><span className="brand-space">&nbsp;</span><span>Hasan</span><span style={{ fontWeight:400 }}>&nbsp;· </span><ClassEight /><span style={{ fontWeight:400 }}>&nbsp;· </span><a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" style={{ fontWeight:400, color:'var(--muted)', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.18)' }}>Rangpur Zilla School</a></div>
                  <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>Student · Web Developer · Prompt Engineer · Rangpur, Bangladesh</div>
                </div>
              </div>
              <p style={{ marginTop:12, fontSize:13, color:'var(--muted)', lineHeight:1.6 }}>
                Father: <strong style={{color:'#e4e4e7'}}>Assistant Professor of Physics, Rangpur Government College, Rangpur</strong>. His domain knowledge shapes many educational projects.
              </p>
              <p className="mono" style={{ marginTop:8, fontSize:11, color:'var(--muted-2)' }}>Legal name: Hiranya Nawar Tirtho — subtle attribution only, not a separate identity.</p>
            </div>

            <div style={{ border:'1px solid var(--accent-border)', borderRadius:20, padding:20, background:'var(--accent-soft)' }}>
              <h3 style={{ fontSize:14, fontWeight:800, color:'#a7f3d0' }}>I build the software.</h3>
              <p style={{ fontSize:13, color:'#cbd5e1', marginTop:8, lineHeight:1.65 }}>
                I don't own every project shown here, and I don't claim to have created every idea or piece of educational content. Many projects begin with requirements, academic knowledge, and ideas from my father and other teachers. My role is to turn those ideas into working software — building interfaces, implementing functionality, integrating services, deploying applications, fixing problems, and upgrading the systems over time.
              </p>
              <p style={{ marginTop:10, fontStyle:'italic', fontSize:13, color:'#a7f3d0' }}>“My father provides much of the domain knowledge. I build the software.”</p>
            </div>
          </div>

          <div style={{ display:'grid', gap:16 }}>
            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
              <h3 style={{ fontSize:14, fontWeight:800 }}>What I build</h3>
              <ul style={{ marginTop:10, display:'grid', gap:8, listStyle:'none' }}>
                {['Web applications & internal tooling (React + Firestore + Apps Script)','Browser extensions (WebExtensions API — Chrome & Firefox)','Study & quiz platforms, content distribution','Linux, Docker, Cloudflare, Termux experiments'].map(t=>(
                  <li key={t} style={{ fontSize:13, color:'var(--muted)', display:'flex', gap:8 }}><span style={{color:'var(--accent)'}}>▸</span>{t}</li>
                ))}
              </ul>
              <div style={{ marginTop:14, borderTop:'1px solid var(--border)', paddingTop:14 }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Role clarification</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:10 }}>
                  <div style={{ border:'1px solid var(--border)', borderRadius:12, padding:10, background:'rgba(255,255,255,0.015)' }}>
                    <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Father & Teachers</div>
                    <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:6, lineHeight:1.6 }}>Ideas, requirements, physics content, batch workflows, exam logic, feedback.</div>
                  </div>
                  <div style={{ border:'1px solid var(--accent-border)', borderRadius:12, padding:10, background:'var(--accent-soft)' }}>
                    <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)' }}>Tarango (me)</div>
                    <div className="mono" style={{ fontSize:11, color:'#a7f3d0', marginTop:6, lineHeight:1.6 }}>React UI, Firestore, Drive/Apps Script, Auth, deploy, debug, maintain.</div>
                  </div>
                </div>
                <p style={{ fontSize:12, color:'var(--muted)', marginTop:10, fontStyle:'italic', textAlign:'center' }}>Do not call me Software Engineer / Senior / CEO — I'm a student developer.</p>
              </div>
            </div>

            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
              <h3 style={{ fontSize:14, fontWeight:800 }}>Personality & tone</h3>
              <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6 }}>
                Curious, grounded, understated. I enjoy building and I also play games — both are true. The site lets the projects speak instead of bragging.
              </p>
              <div style={{ marginTop:12, display:'flex', flexWrap:'wrap', gap:8 }}>
                <span className="mono" style={{ fontSize:11, border:'1px solid var(--border)', padding:'6px 10px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>tarangohasan@gmail.com</span>
                <span className="mono" style={{ fontSize:11, border:'1px solid var(--border)', padding:'6px 10px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>@tarangohasan — X · Reddit · Discord · GitHub</span>
              </div>
            </div>

            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:16, background:'rgba(255,255,255,0.015)' }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Open Source</div>
              <div style={{ fontSize:13, fontWeight:700, marginTop:6 }}>MIT Licensed</div>
              <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:6, lineHeight:1.6 }}>
                This portfolio is open source. Fork it, learn from it, reuse with attribution.<br/>
                <a href="https://github.com/onlinephysics/tarangohasan" target="_blank" rel="noreferrer" style={{ color:'var(--accent)', textDecoration:'underline', textUnderlineOffset:2 }}>github.com/onlinephysics/tarangohasan</a>
                <span style={{ margin:'0 6px', opacity:0.4 }}>·</span>
                <a href="https://github.com/onlinephysics" target="_blank" rel="noreferrer" style={{ color:'var(--accent)', textDecoration:'underline', textUnderlineOffset:2 }}>github.com/onlinephysics</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ div[style*="1.1fr 0.9fr"]{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}
