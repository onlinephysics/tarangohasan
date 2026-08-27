export function SectionHeading({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {kicker && <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:10, display:'flex', alignItems:'center', gap:8 }}><span className="dot" />{kicker}</div>}
      <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing:'-0.03em', lineHeight:1.15 }}>{title}</h2>
      {desc && <p style={{ marginTop:10, color:'var(--muted)', fontSize:15, maxWidth:640, lineHeight:1.6 }}>{desc}</p>}
    </div>
  );
}
