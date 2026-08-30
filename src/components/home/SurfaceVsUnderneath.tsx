import { useState } from 'react';

export function SurfaceVsUnderneath() {
  const [mode, setMode] = useState<'surface'|'underneath'>('surface');

  return (
    <section style={{ padding:'24px 0' }}>
      <div className="container">
        <div style={{ border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
          <div style={{ padding:'18px 20px', display:'flex', flexWrap:'wrap', gap:12, alignItems:'center', justifyContent:'space-between', borderBottom:'1px solid var(--border)' }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Layer reveal</div>
              <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:'-0.02em', marginTop:4 }}>The visible website is only the surface.</h3>
            </div>
            <div style={{ display:'flex', background:'rgba(255,255,255,0.06)', border:'1px solid var(--border)', borderRadius:999, padding:3, gap:3 }}>
              <button onClick={()=>setMode('surface')} style={{ padding:'7px 14px', borderRadius:999, border:'none', fontWeight:700, fontSize:13, background: mode==='surface' ? '#fff' : 'transparent', color: mode==='surface' ? '#0a0a0c' : 'var(--muted)' }}>What you see</button>
              <button onClick={()=>setMode('underneath')} style={{ padding:'7px 14px', borderRadius:999, border:'none', fontWeight:700, fontSize:13, background: mode==='underneath' ? '#10b981' : 'transparent', color: mode==='underneath' ? '#fff' : 'var(--muted)' }}>What’s underneath</button>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, overflow:'hidden' }}>
            <div style={{ padding:20, borderRight:'1px solid var(--border)', opacity: mode==='surface' ? 1 : 0.32, transform: mode==='surface' ? 'translateX(0)' : 'translateX(-10px)', transition:'opacity 280ms ease, transform 340ms cubic-bezier(0.34,1.2,0.64,1), background 200ms', background: mode==='surface' ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', marginBottom:10 }}>Visible surface</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:14 }}>
                {['Forms & Inputs','Buttons & Triggers','Tables & Data views','Dashboards & Metrics','Navigation & Layouts','Polished Pages'].map(t=>(
                  <span key={t} style={{ fontSize:12, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', padding:'6px 10px', borderRadius:999 }}>{t}</span>
                ))}
              </div>
              <div style={{ border:'1px solid var(--border)', borderRadius:12, overflow:'hidden', background:'#0e0e10' }}>
                <div style={{ height:8, background:'linear-gradient(90deg, #10b981, #34d399)', opacity:0.9 }} />
                <div style={{ padding:14, display:'grid', gap:10 }}>
                  <div style={{ height:10, background:'rgba(255,255,255,0.12)', borderRadius:999, width:'55%' }} />
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
                    {[1,2,3].map(i=> <div key={i} style={{ height:64, background:'rgba(255,255,255,0.06)', border:'1px solid var(--border)', borderRadius:10 }} />)}
                  </div>
                  <div style={{ display:'flex', gap:8 }}>
                    <span style={{ flex:1, height:32, background:'#fff', borderRadius:999, display:'inline-block' }} />
                    <span style={{ flex:0.7, height:32, border:'1px solid var(--border)', borderRadius:999, display:'inline-block' }} />
                  </div>
                </div>
              </div>
              <div className="mono" style={{ marginTop:10, fontSize:11, color:'var(--muted-2)' }}>Screenshots · polished UI</div>
            </div>

            <div style={{ padding:20, opacity: mode==='underneath' ? 1 : 0.32, transform: mode==='underneath' ? 'translateX(0)' : 'translateX(10px)', transition:'opacity 280ms ease, transform 340ms cubic-bezier(0.34,1.2,0.64,1), background 200ms', background: mode==='underneath' ? 'rgba(16,185,129,0.06)' : 'transparent' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--accent)', marginBottom:10 }}>Underlying system</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:14 }}>
                {['Firestore schema & rules','Firebase Auth (admin)','Google Drive + Apps Script','APIs & serverless','Business logic & local rules','Deploy, debug & maintain'].map(t=>(
                  <span key={t} style={{ fontSize:11, border:'1px solid var(--accent-border)', background:'var(--accent-soft)', color:'#a7f3d0', padding:'6px 10px', borderRadius:999, fontFamily:"'JetBrains Mono', monospace" }}>{t}</span>
                ))}
              </div>
              <div style={{ border:'1px solid rgba(16,185,129,0.2)', borderRadius:12, overflow:'hidden', background:'#0a1210', padding:14 }}>
                <div className="mono" style={{ fontSize:11, color:'#6ee7b7', lineHeight:1.7 }}>
                  <div style={{ color:'var(--muted)' }}>// Firestore security rules</div>
                  <div>match /students/{'{id}'} {'{'}</div>
                  <div style={{ paddingLeft:12 }}>allow read: if isAdmin();</div>
                  <div style={{ paddingLeft:12 }}>allow write: if isTeacher() &amp;&amp; validBatch();</div>
                  <div>{'}'}</div>
                  <div style={{ marginTop:10, color:'var(--muted)' }}>// Apps Script — Drive pipeline</div>
                  <div>function uploadToDrive(blob) {'{'}</div>
                  <div style={{ paddingLeft:12 }}>return DriveApp.createFile(blob).getId();</div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div className="mono" style={{ marginTop:10, fontSize:11, color:'#6ee7b7' }}>AI-assisted prompts & specification iteration</div>
            </div>
          </div>
          <div style={{ padding:'12px 20px', borderTop:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }} className="mono">
            <span style={{ fontSize:11, color:'var(--muted)' }}>Scroll or toggle to reveal the layers that support every clean interface.</span>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:800px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
