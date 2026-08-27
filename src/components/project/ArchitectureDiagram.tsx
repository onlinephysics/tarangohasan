export function ArchitectureDiagram() {
  const block: React.CSSProperties = {
    border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', borderRadius:12, padding:'10px 12px', textAlign:'center', fontSize:12, fontWeight:600
  };
  return (
    <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)', overflowX:'auto' }}>
      <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Architecture — Revise & Rise</div>
      <div style={{ minWidth:520, display:'grid', gap:10, placeItems:'center' }}>
        <div style={{ ...block, background:'var(--accent-soft)', borderColor:'var(--accent-border)', color:'#a7f3d0', minWidth:160 }}>USERS</div>
        <div style={{ width:1, height:14, background:'var(--border)' }} />
        <div style={{ ...block, background:'#fff', color:'#0a0a0c', minWidth:160, fontWeight:800 }}>REACT APP</div>
        <div style={{ width:'100%', height:1, background:'var(--border)', maxWidth:480 }} />
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, width:'100%', maxWidth:620 }}>
          <div style={block}>FIRESTORE<br/><span className="mono" style={{ fontSize:10, color:'var(--muted)' }}>(Structured DB)</span></div>
          <div style={block}>FIREBASE AUTH<br/><span className="mono" style={{ fontSize:10, color:'var(--muted)' }}>(Admin Google Auth)</span></div>
          <div style={{ ...block, borderColor:'var(--accent-border)', background:'var(--accent-soft)', color:'#a7f3d0' }}>GOOGLE DRIVE<br/><span className="mono" style={{ fontSize:10, color:'#6ee7b7' }}>(File / Block Storage)</span></div>
        </div>
        <div style={{ width:1, height:14, background:'rgba(16,185,129,0.3)', marginLeft: 160 }} />
        <div style={{ ...block, background:'rgba(16,185,129,0.12)', borderColor:'rgba(16,185,129,0.25)', color:'#a7f3d0', marginLeft: 160 }}>APPS SCRIPT<br/><span className="mono" style={{ fontSize:10, color:'#6ee7b7' }}>(Integration Layer)</span></div>
      </div>
    </div>
  );
}

export function WorkflowDiagram({ steps }: { steps: string[] }) {
  return (
    <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
      <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)', marginBottom:12 }}>Workflow</div>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {steps.map((s,i)=>(
          <div key={s} style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ width:24,height:24,borderRadius:999, background: i===steps.length-1 ? 'var(--accent)' : 'rgba(255,255,255,0.08)', color: i===steps.length-1 ? '#fff' : 'var(--muted)', display:'grid', placeItems:'center', fontSize:11, fontWeight:800, border:'1px solid '+(i===steps.length-1?'var(--accent)':'var(--border)')}}>{i+1}</span>
            <span style={{ flex:1, padding:'8px 12px', borderRadius:999, background: i===steps.length-1 ? 'var(--accent-soft)' : 'rgba(255,255,255,0.04)', border:'1px solid '+(i===steps.length-1?'var(--accent-border)':'var(--border)'), fontSize:13, fontWeight:500 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
