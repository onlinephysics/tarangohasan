export function Process() {
  return (
    <main style={{ padding:'28px 0 32px' }}>
      <div className="container">
        <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Process</div>
        <h1 style={{ fontSize:'clamp(26px,4vw,34px)', fontWeight:800, letterSpacing:'-0.03em', marginTop:6 }}>AI changed how long building can take.</h1>
        <p style={{ color:'var(--muted)', fontSize:14, marginTop:6, maxWidth:720 }}>AI is a high-powered implementation tool driven by human specifications, continuous review, and domain knowledge. The work didn't disappear — it shifted.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:16, marginTop:16 }}>
          <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
            <h3 style={{ fontSize:14, fontWeight:800 }}>The pipeline</h3>
            <div style={{ marginTop:12, display:'flex', flexDirection:'column', gap:8 }}>
              {[
                'Idea / Need',
                'Domain Requirements (Father / Teachers)',
                'Detailed Specification (Data Models, Workflows, Edge Cases)',
                'Structured Prompting',
                'AI Coding Agent / Model Implementation',
                'Code Review & Inspection',
                'Testing & Debugging',
                'Iterative Refinement',
                'Deployment & Maintenance',
              ].map((s,i)=>(
                <div key={s} style={{ display:'flex', gap:10, alignItems:'center' }}>
                  <span style={{ width:26,height:26,borderRadius:999, display:'grid', placeItems:'center', fontSize:11,fontWeight:800, background: i===3||i===4?'var(--accent)':'rgba(255,255,255,0.08)', color:i===3||i===4?'#fff':'var(--muted)', border:'1px solid '+(i===3||i===4?'var(--accent)':'var(--border)')}}>{i+1}</span>
                  <span style={{ flex:1, padding:'9px 12px', borderRadius:999, fontSize:13, background: i===3?'var(--accent-soft)':'rgba(255,255,255,0.04)', border:'1px solid '+(i===3?'var(--accent-border)':'var(--border)'), color: i===3?'#a7f3d0':'#e4e4e7' }}>{s}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop:12, fontSize:12, color:'var(--muted)', textAlign:'center', fontStyle:'italic' }}>AI made the development process much faster. It didn't remove the need to understand what I was building.</p>
          </div>

          <div style={{ display:'grid', gap:16 }}>
            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
              <h3 style={{ fontSize:14, fontWeight:800 }}>Why prompts span 500–5,000 words</h3>
              <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6 }}>Prompts function as SRS docs. One-line prompts produce generic assumptions. Specificity produces domain-accurate software.</p>
              <div style={{ marginTop:12, border:'1px solid var(--border)', borderRadius:12, padding:12, background:'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize:11, color:'var(--muted)', lineHeight:1.7 }}>
                  <strong style={{color:'#e4e4e7'}}>Prompt:</strong> “Build a student management website.”<br/>
                  ↓ <strong style={{color:'#e4e4e7'}}>Critical missing questions:</strong><br/>
                  • Who are the users?<br/>
                  • What exact registration data?<br/>
                  • Teacher vs student permissions?<br/>
                  • Batches across academic years?<br/>
                  • Marks calculation & display?<br/>
                  • Batch change mid-session?<br/>
                  • Local Bangladeshi coaching workflows?
                </div>
              </div>
              <div style={{ marginTop:12, border:'1px solid var(--accent-border)', background:'var(--accent-soft)', borderRadius:12, padding:12 }}>
                <div style={{ fontSize:12, fontWeight:700, color:'#a7f3d0' }}>Takeaway</div>
                <div style={{ fontSize:12, color:'#cbd5e1', marginTop:4, lineHeight:1.5 }}>AI fills gaps with generic assumptions. Domain-accurate software requires human requirements, local context, and technical specifications.</div>
              </div>
            </div>

            <div style={{ border:'1px solid var(--border)', borderRadius:20, padding:20, background:'var(--bg-card)' }}>
              <h3 style={{ fontSize:14, fontWeight:800 }}>Bangladesh / local context</h3>
              <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6 }}>
                Generic terms like <em>registration, exam, batch, routine, marks</em> sound standard globally, but their implementation depends on local coaching/school structures in Bangladesh. Translating those specific needs into code requires explicit domain specification — that’s why teacher-provided workflows matter.
              </p>
              <div style={{ marginTop:12, display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                <div style={{ border:'1px solid var(--border)', borderRadius:12, padding:10, background:'rgba(255,255,255,0.03)' }}>
                  <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Traditional</div>
                  <div style={{ fontSize:12, fontWeight:700, marginTop:4 }}>Idea → Manual Coding → Debugging → Product</div>
                  <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>Estimated: Months</div>
                </div>
                <div style={{ border:'1px solid var(--accent-border)', borderRadius:12, padding:10, background:'var(--accent-soft)' }}>
                  <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)' }}>AI-assisted</div>
                  <div style={{ fontSize:12, fontWeight:700, marginTop:4 }}>Idea → Spec → Agent → Review → Product</div>
                  <div className="mono" style={{ fontSize:11, color:'#6ee7b7' }}>Estimated: Days*</div>
                </div>
              </div>
              <div className="mono" style={{ marginTop:8, fontSize:11, color:'var(--muted-2)', textAlign:'center' }}>*Illustrative — varies with complexity. AI reduced time, not work.</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ div[style*="1.1fr 0.9fr"]{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}
