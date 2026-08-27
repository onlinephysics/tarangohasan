import { ClassEight } from '../ui/ClassEight';

export function Currently() {
  const items: { k: string; v: React.ReactNode; d: string }[] = [
    { k:'Building', v:'Revise & Rise feature updates & fixes', d:'Batch workflows, marks, notices' },
    { k:'Learning', v:'Programming fundamentals', d:'JavaScript & Python — core concepts' },
    { k:'Exploring', v:'Advanced prompt engineering', d:'Specification-driven AI workflows' },
    { k:'Status', v: <span style={{ display:'inline-flex', alignItems:'baseline', gap:4, flexWrap:'wrap' }}><ClassEight /> — <a href="https://bn.wikipedia.org/wiki/%E0%A6%B0%E0%A6%82%E0%A6%AA%E0%A7%81%E0%A6%B0_%E0%A6%9C%E0%A6%BF%E0%A6%B2%E0%A6%BE_%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2" target="_blank" rel="noreferrer" style={{ color:'#e4e4e7', textDecoration:'underline', textUnderlineOffset:2, textDecorationColor:'rgba(255,255,255,0.22)' }}>Rangpur Zilla School</a></span>, d:'Studies + building in parallel' },
  ];
  return (
    <section style={{ padding:'24px 0 32px' }}>
      <div className="container">
        <div style={{ border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
          <div style={{ padding:'16px 20px', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ width:8,height:8,borderRadius:999, background:'var(--accent)', boxShadow:'0 0 0 6px rgba(16,185,129,0.15)' }} />
              <span style={{ fontWeight:800, letterSpacing:'-0.02em' }}>Currently</span>
              <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>— manually maintained</span>
            </div>
            <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>August 2026 · Rangpur, BD</span>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0 }}>
            {items.map(it=>(
              <div key={it.k} style={{ padding:16, borderRight:'1px solid var(--border)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>{it.k}</div>
                <div style={{ fontSize:13, fontWeight:700, marginTop:6, lineHeight:1.35 }}>{it.v}</div>
                <div className="mono" style={{ fontSize:11, color:'var(--muted)', marginTop:4 }}>{it.d}</div>
              </div>
            ))}
          </div>
          <div style={{ padding:'12px 20px', borderTop:'1px solid var(--border)', display:'flex', flexWrap:'wrap', gap:8, alignItems:'center', justifyContent:'space-between' }}>
            <span style={{ fontSize:13, color:'var(--muted)' }}><em>Yes, I also play games. But playing games isn't the only thing I do.</em></span>
            <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>What I actually know: comfortable with modern web tech, cloud integrations, codebase navigation, spec writing, AI agents, debugging, and shipping.</span>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr 1fr !important; } } @media(max-width:560px){ section > div > div > div:nth-child(2){ grid-template-columns:1fr !important; } section > div > div > div:nth-child(2) > div{ border-right:none !important; border-bottom:1px solid var(--border); } }`}</style>
    </section>
  );
}
