export function AIProcess() {
  const steps = [
    'Idea / Need',
    'Domain Requirements (Father / Teachers)',
    'Detailed Specification (Data Models, Workflows, Edge Cases)',
    'Structured Prompting',
    'AI Coding Agent / Model Implementation',
    'Code Review & Inspection',
    'Testing & Debugging',
    'Iterative Refinement',
    'Deployment & Maintenance',
  ];
  return (
    <section style={{ padding:'28px 0' }}>
      <div className="container">
        <div style={{ border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
          <div style={{ padding:'20px 20px 0' }}>
            <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> How I build</div>
            <h3 style={{ fontSize:22, fontWeight:800, letterSpacing:'-0.02em', marginTop:6 }}>AI changed how I build software.</h3>
            <p style={{ color:'var(--muted)', fontSize:14, marginTop:6 }}>AI has dramatically reduced the time it takes to build software. It has not made software development trivial.</p>
          </div>

          <div style={{ padding:20, display:'grid', gridTemplateColumns:'1.15fr 0.85fr', gap:16 }}>
            {/* pipeline */}
            <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Development pipeline</div>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {steps.map((s,i)=>(
                  <div key={s} style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{
                      width:26, height:26, borderRadius:999, display:'grid', placeItems:'center',
                      background: i===3 || i===4 ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                      color: i===3 || i===4 ? '#fff' : 'var(--muted)',
                      fontSize:11, fontWeight:800, flexShrink:0, border:'1px solid '+(i===3||i===4?'var(--accent)':'var(--border)')
                    }}>{i+1}</span>
                    <span style={{
                      flex:1, padding:'9px 12px', borderRadius:999, fontSize:13, fontWeight: i===3?700:500,
                      background: i===3 ? 'var(--accent-soft)' : 'rgba(255,255,255,0.04)',
                      border:'1px solid '+(i===3?'var(--accent-border)':'var(--border)'),
                      color: i===3 ? '#a7f3d0' : '#e4e4e7'
                    }}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mono" style={{ marginTop:12, fontSize:11, color:'var(--muted)', textAlign:'center' }}>AI is the implementation tool — specification and review remain human.</div>
            </div>

            {/* prompt engineering + time compare */}
            <div style={{ display:'grid', gap:16 }}>
              <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Prompt engineering</div>
                <h4 style={{ fontSize:15, fontWeight:800, marginTop:6, letterSpacing:'-0.02em' }}>“The prompt isn't the product. It's the specification.”</h4>
                <p style={{ fontSize:13, color:'var(--muted)', marginTop:6, lineHeight:1.6 }}>
                  When specifying complex systems, prompts function as comprehensive SRS — 500 to 5,000 words covering domain requirements, codebase context, UI behaviors, data schemas, Firestore rules, edge cases, and deployment constraints.
                </p>
                <div style={{ marginTop:12, display:'flex', flexWrap:'wrap', gap:6 }}>
                  {['Domain requirements','Codebase context','UI hierarchy','Firestore rules','Edge cases','Validation & errors'].map(t=>(
                    <span key={t} className="mono" style={{ fontSize:10, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', padding:'4px 8px', borderRadius:999 }}>{t}</span>
                  ))}
                </div>
                <div style={{ marginTop:12, border:'1px solid var(--accent-border)', background:'var(--accent-soft)', borderRadius:12, padding:12 }}>
                  <div className="mono" style={{ fontSize:11, color:'#6ee7b7', fontWeight:700 }}>Why “Build a student website” fails</div>
                  <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:6, lineHeight:1.7 }}>
                    Who are users? What registration data? Teacher vs student permissions? Batches across years? Marks calculation? Batch change mid-session? Local Bangladeshi coaching workflows?
                  </div>
                  <div style={{ fontSize:12, color:'#a7f3d0', marginTop:8, fontWeight:600 }}>AI fills gaps with generic assumptions. Real software needs human requirements.</div>
                </div>
              </div>

              <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Time — illustrative</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:10, marginTop:10 }}>
                  <div style={{ border:'1px solid var(--border)', borderRadius:12, padding:12, background:'rgba(255,255,255,0.03)' }}>
                    <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Traditional</div>
                    <div style={{ fontSize:13, fontWeight:700, marginTop:4 }}>Idea → Manual Coding → Debugging → Product</div>
                    <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>Estimated: Months</div>
                    <div style={{ marginTop:8, height:6, background:'rgba(255,255,255,0.08)', borderRadius:999, overflow:'hidden' }}><div style={{ width:'88%', height:'100%', background:'var(--muted)' }} /></div>
                  </div>
                  <div style={{ border:'1px solid var(--accent-border)', borderRadius:12, padding:12, background:'var(--accent-soft)' }}>
                    <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)' }}>AI-assisted</div>
                    <div style={{ fontSize:13, fontWeight:700, marginTop:4 }}>Idea → Spec → AI Agent → Review & Refine → Product</div>
                    <div className="mono" style={{ fontSize:11, color:'#6ee7b7' }}>Estimated: Days* · *varies with complexity</div>
                    <div style={{ marginTop:8, height:6, background:'rgba(16,185,129,0.15)', borderRadius:999, overflow:'hidden' }}><div style={{ width:'38%', height:'100%', background:'var(--accent)' }} /></div>
                  </div>
                </div>
                <div style={{ marginTop:10, fontSize:12, color:'var(--muted)', fontStyle:'italic', textAlign:'center' }}>AI reduced the time. It didn't remove the work.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
