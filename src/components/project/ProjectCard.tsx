import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  const isWarn = project.status === 'Needs Improvement';
  return (
    <Link to={`/work/${project.slug}`} style={{
      display:'block', border:'1px solid var(--border)', borderRadius:20, overflow:'visible',
      background:'var(--bg-card)', transition:'border-color 150ms', position:'relative'
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'1.05fr 0.95fr', gap:0, overflow:'visible', alignItems:'start' }}>
        <div style={{ padding:20, display:'flex', flexDirection:'column', gap:12, alignSelf:'start', minHeight: 0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
            <span className="mono" style={{ fontSize:11, color:'var(--muted)', border:'1px solid var(--border)', padding:'3px 7px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{num}</span>
            <Badge mono tone={isWarn ? 'warn' : 'muted'}>{project.category}</Badge>
            <Badge mono tone={isWarn ? 'warn' : project.status==='Active' ? 'accent' : 'muted'}>{project.status}</Badge>
            <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>{project.year}</span>
          </div>
          <h3 style={{ fontSize:20, fontWeight:800, letterSpacing:'-0.02em', lineHeight:1.2 }}>{project.title}</h3>
          <p style={{ color:'var(--muted)', fontSize:13, lineHeight:1.6 }}>{project.description}</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {project.stack.slice(0,4).map(s=>(
              <span key={s} className="mono" style={{ fontSize:10, letterSpacing:'0.06em', textTransform:'uppercase', border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', color:'var(--muted)', padding:'4px 7px', borderRadius:999 }}>{s}</span>
            ))}
            {project.stack.length>4 && <span className="mono" style={{ fontSize:10, color:'var(--muted)' }}>+{project.stack.length-4}</span>}
          </div>
          <div style={{ marginTop:'auto', display:'flex', alignItems:'center', gap:8, fontSize:13, fontWeight:700, paddingTop:8 }}>
            <span>View case study</span><span>→</span>
          </div>
          <div className="mono" style={{ fontSize:11, color:'var(--muted)', borderTop:'1px solid var(--border)', paddingTop:10, marginTop:6 }}>
            <div>MY ROLE: {project.role}</div>
            <div style={{ color:'var(--muted-2)', marginTop:2 }}>IDEA: {project.ideaProvider}</div>
          </div>
        </div>

        <div className="preview-outer" style={{ background:'rgba(255,255,255,0.015)', borderLeft:'1px solid var(--border)', padding:14, display:'grid', gap:10, overflow:'visible' }}>
          <div className="preview-wrap" style={{ border:'1px solid var(--border)', borderRadius:14, overflow:'hidden', background:'#0e0e10', display:'flex', flexDirection:'column' }}>
            <div style={{ height:26, borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap:6, padding:'0 10px', background:'rgba(255,255,255,0.03)', flexShrink:0 }}>
              <span style={{ width:8,height:8,borderRadius:999, background:'rgba(255,255,255,0.2)'}} />
              <span style={{ width:8,height:8,borderRadius:999, background:'rgba(255,255,255,0.2)'}} />
              <span style={{ width:8,height:8,borderRadius:999, background:'rgba(255,255,255,0.2)'}} />
              <span className="mono" style={{ marginLeft:'auto', fontSize:10, color:'var(--muted)' }}>{project.slug} — preview</span>
            </div>
            {project.screenshots[0]?.url ? (
              <img src={project.screenshots[0].url} alt={`${project.title} preview`} loading="lazy" className="preview-img" style={{ width:'100%', aspectRatio:'4 / 3', objectFit:'cover', display:'block', background:'#0e0e10' }} />
            ) : (
              <div style={{ flex:1, padding:12, display:'grid', gap:8 }}>
                <div style={{ display:'flex', gap:8 }}>
                  <div style={{ flex:1, height:14, background:'rgba(255,255,255,0.12)', borderRadius:999 }} />
                  <div style={{ width:70, height:22, background:'var(--accent)', borderRadius:999, opacity:0.9 }} />
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8 }}>
                  {[1,2,3].map(k=> <div key={k} style={{ height:62, border:'1px solid var(--border)', background:'rgba(255,255,255,0.04)', borderRadius:10 }} />)}
                </div>
                <div style={{ height:1, background:'var(--border)', margin:'2px 0' }} />
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <div style={{ width:22,height:22,borderRadius:999, background:'rgba(16,185,129,0.3)', border:'1px solid rgba(16,185,129,0.3)'}} />
                  <div style={{ flex:1, height:8, background:'rgba(255,255,255,0.08)', borderRadius:999 }} />
                </div>
                <div className="mono" style={{ fontSize:10, color:'var(--muted)', textAlign:'center', marginTop:4 }}>[PROJECT_SCREENSHOT_PLACEHOLDER]</div>
              </div>
            )}
          </div>
          <div className="mono" style={{ fontSize:11, color:'var(--muted)', display:'flex', gap:6, flexWrap:'wrap' }}>
            <span style={{ border:'1px solid var(--border)', padding:'4px 8px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{project.features[0] ?? 'Case study'}</span>
            {project.liveUrl && project.liveUrl !== '#' && <span style={{ color:'var(--accent)' }}>↗ live</span>}
            {project.sourceUrl && <span style={{ color:'var(--accent)' }}>↗ repo</span>}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:820px){ a > div{ grid-template-columns:1fr !important; } a > div > div:last-child{ border-left:none !important; border-top:1px solid var(--border); } }`}</style>
    </Link>
  );
}
