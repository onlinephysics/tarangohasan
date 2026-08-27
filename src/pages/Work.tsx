import { projects } from '../data/projects';
import { ProjectCard } from '../components/project/ProjectCard';

export function Work() {
  const sorted = [...projects].sort((a,b)=>a.order-b.order);
  return (
    <main style={{ padding:'28px 0 32px' }}>
      <div className="container">
        <div style={{ marginBottom:18 }}>
          <div className="mono" style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', display:'flex', alignItems:'center', gap:8 }}><span className="dot"/> Archive</div>
          <h1 style={{ fontSize:'clamp(24px, 4vw, 34px)', fontWeight:800, letterSpacing:'-0.03em', marginTop:6 }}>Selected work & archive</h1>
          <p style={{ color:'var(--muted)', fontSize:14, marginTop:6, maxWidth:640 }}>Every project renders a standardized credit block. No invented metrics. No fake clients.</p>
        </div>
        <div style={{ display:'grid', gap:14 }}>
          {sorted.map((p,i)=> <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>

        <div style={{ marginTop:18, border:'1px solid var(--border)', borderRadius:16, padding:14, background:'rgba(255,255,255,0.015)', display:'flex', flexWrap:'wrap', gap:8, alignItems:'center' }}>
          <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>Statuses:</span>
          {['Active','Maintained','In Development','Experimental','Needs Improvement','Archived'].map(s=>(
            <span key={s} className="mono" style={{ fontSize:11, border:'1px solid var(--border)', padding:'4px 8px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{s}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
