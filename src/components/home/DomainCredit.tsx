export function DomainCredit() {
  return (
    <section style={{ padding:'24px 0' }}>
      <div className="container">
        <div style={{ border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
          <div style={{ padding:20, borderBottom:'1px solid var(--border)', display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'center' }}>
            <div>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Collaboration</div>
              <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:'-0.02em', marginTop:4 }}>I build the software.</h3>
              <p style={{ color:'var(--muted)', fontSize:13, marginTop:4, maxWidth:620 }}>Many projects begin with requirements, academic knowledge, and ideas from my father and other teachers. My role is turning those ideas into working software.</p>
            </div>
            <div className="mono" style={{ fontSize:11, color:'var(--muted)', border:'1px solid var(--border)', padding:'6px 10px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>Domain knowledge matters.</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:0 }}>
            <div style={{ padding:20, borderRight:'1px solid var(--border)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Domain knowledge — Father & Teachers</div>
              <ul style={{ listStyle:'none', display:'grid', gap:8 }}>
                {['Academic concepts','Question banks & exams','Institutional workflows','Batch & marks logic','User testing & feedback'].map(t=>(
                  <li key={t} style={{ display:'flex', gap:10, alignItems:'center', fontSize:13, color:'#e4e4e7' }}><span style={{ width:6,height:6,borderRadius:999,background:'var(--muted)'}} />{t}</li>
                ))}
              </ul>
            </div>
            <div style={{ padding:20, background:'rgba(16,185,129,0.04)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)', marginBottom:12 }}>Technical implementation — Tarango Hasan</div>
              <ul style={{ listStyle:'none', display:'grid', gap:8 }}>
                {['React frontend UI','Firestore database integration','Google Apps Script & Drive storage','Authentication & permission checks','Deployment, debugging & maintenance'].map(t=>(
                  <li key={t} style={{ display:'flex', gap:10, alignItems:'center', fontSize:13, color:'#e4e4e7' }}><span style={{ width:6,height:6,borderRadius:999,background:'var(--accent)'}} />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ padding:'12px 20px', borderTop:'1px solid var(--border)', background:'rgba(255,255,255,0.015)' }}>
            <p style={{ fontSize:13, color:'var(--muted)', fontStyle:'italic', textAlign:'center' }}>“My father provides much of the domain knowledge. I build the software.”</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:760px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } section > div > div > div:nth-child(2) > div:first-child{ border-right:none !important; border-bottom:1px solid var(--border);} }`}</style>
    </section>
  );
}
