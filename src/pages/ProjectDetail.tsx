import { useParams, Link } from 'react-router-dom';
import { getProject } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { ArchitectureDiagram, WorkflowDiagram } from '../components/project/ArchitectureDiagram';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project) {
    return (
      <main style={{ padding:'40px 0' }}>
        <div className="container">
          <h1 style={{ fontSize:24, fontWeight:800 }}>Not found</h1>
          <p style={{ color:'var(--muted)', marginTop:8 }}>No project with slug “{slug}”.</p>
           <Link to="/work" className="btn-hero btn-hero--dark" style={{ display:'inline-flex', marginTop:12, border:'1px solid var(--border)', padding:'8px 12px', borderRadius:999 }}>← Back to work</Link>
        </div>
      </main>
    );
  }
  const isWarn = project.status==='Needs Improvement';
  return (
    <main style={{ padding:'24px 0 32px' }}>
      <div className="container">
          <Link to="/work" className="mono btn-hero" style={{ fontSize:12, color:'var(--muted)', display:'inline-flex', gap:6, alignItems:'center' }}>← Back to work</Link>

        {/* hero */}
        <div style={{ marginTop:12, border:'1px solid var(--border)', borderRadius:20, overflow:'hidden', background:'var(--bg-card)' }}>
          <div style={{ padding:'20px 20px 16px', borderBottom:'1px solid var(--border)' }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
              <Badge mono tone={isWarn?'warn':'muted'}>{project.category}</Badge>
              <Badge mono tone={isWarn?'warn': project.status==='Active'?'accent':'muted'}>{project.status}</Badge>
              <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>{project.year}</span>
              {project.liveUrl && project.liveUrl !== '#' && <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize:12, fontWeight:700, color:'var(--accent)' }}>Live ↗</a>}
              {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" style={{ fontSize:12, fontWeight:700, color:'var(--accent)' }}>GitHub ↗</a>}
            </div>
            <h1 style={{ fontSize:'clamp(24px, 4vw, 32px)', fontWeight:800, letterSpacing:'-0.03em', marginTop:10 }}>{project.title}</h1>
            <p style={{ color:'var(--muted)', fontSize:14, marginTop:6, maxWidth:720, lineHeight:1.6 }}>{project.longDescription}</p>
          </div>

          {/* meta grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, borderBottom:'1px solid var(--border)', background:'rgba(255,255,255,0.015)' }}>
            {[
              { k:'My role', v: project.role },
              { k:'Core idea & reqs', v: project.ideaProvider },
              { k:'Academic content', v: project.contentProvider },
              { k:'Stack', v: project.stack.join(' · ') },
            ].map(m=>(
              <div key={m.k} style={{ padding:14, borderRight:'1px solid var(--border)' }}>
                <div className="mono" style={{ fontSize:10, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>{m.k}</div>
                <div style={{ fontSize:12, fontWeight:600, marginTop:6, lineHeight:1.5 }}>{m.v}</div>
              </div>
            ))}
          </div>

          {/* visual showcase */}
          <div style={{ padding:16 }}>
            <div style={{ border:'1px solid var(--border)', borderRadius:16, overflow:'hidden', background:'#0e0e10' }}>
              <div style={{ height:28, borderBottom:'1px solid var(--border)', display:'flex', alignItems:'center', gap:6, padding:'0 10px', background:'rgba(255,255,255,0.03)' }}>
                <span style={{width:8,height:8,borderRadius:999,background:'rgba(255,255,255,0.2)'}} />
                <span style={{width:8,height:8,borderRadius:999,background:'rgba(255,255,255,0.2)'}} />
                <span style={{width:8,height:8,borderRadius:999,background:'rgba(255,255,255,0.2)'}} />
                <span className="mono" style={{ marginLeft:'auto', fontSize:10, color:'var(--muted)' }}>Interface showcase — {project.title}</span>
              </div>
              <div style={{ padding:16, display:'grid', gap:12 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:12 }}>
                  <div style={{ border:'1px solid var(--border)', borderRadius:12, overflow:'hidden', background:'#0a0a0c' }}>
                    {project.screenshots[0]?.url ? (
                      <img src={project.screenshots[0].url} alt={`${project.title} interface`} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', minHeight:180 }} />
                    ) : (
                      <div style={{ height:180, display:'grid', placeItems:'center' }}>
                        <span className="mono" style={{ fontSize:11, color:'var(--muted)' }}>[PROJECT_SCREENSHOT_PLACEHOLDER]</span>
                      </div>
                    )}
                  </div>
                  <div style={{ display:'grid', gap:8 }}>
                    <div className="what-see-panel" style={{ border:'1px solid var(--border)', borderRadius:12, background:'rgba(255,255,255,0.04)', padding:12 }}>
                      <div className="mono" style={{ fontSize:11, color:'var(--muted)' }}>What you see (UI)</div>
                      <ul style={{ marginTop:8, display:'grid', gap:6, fontSize:12, color:'var(--muted)', listStyle:'none' }}>
                        {project.features.slice(0,4).map(f=> <li key={f} style={{ display:'flex', gap:8 }}><span style={{color:'var(--accent)'}}>▸</span>{f}</li>)}
                      </ul>
                    </div>
                    <div className="what-under-panel" style={{ border:'1px solid var(--accent-border)', background:'var(--accent-soft)', borderRadius:12, padding:12 }}>
                      <div className="mono" style={{ fontSize:11, color:'var(--accent)' }}>What’s underneath</div>
                      <div className="mono" style={{ fontSize:11, color:'#a7f3d0', marginTop:6, lineHeight:1.6 }}>{project.architectureDescription ?? 'Firestore rules, Drive/Apps Script pipeline, Auth, state management, deployment.'}</div>
                    </div>
                  </div>
                </div>
                {project.screenshots.length > 1 && (
                  <div style={{ display:'grid', gridTemplateColumns:`repeat(${Math.min(project.screenshots.length,3)}, 1fr)`, gap:10 }}>
                    {project.screenshots.slice(0,3).map((s,i)=>(
                      <div key={i} style={{ border:'1px solid var(--border)', borderRadius:10, overflow:'hidden', background:'#0a0a0c' }}>
                        <img src={s.url} alt={s.caption} loading="lazy" style={{ width:'100%', aspectRatio:'16/10', objectFit:'cover', display:'block' }} />
                        <div className="mono" style={{ fontSize:10, color:'var(--muted)', padding:'6px 8px', borderTop:'1px solid var(--border)' }}>{s.caption}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* diagrams */}
          <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:16, padding:'0 16px 16px' }}>
            {project.slug==='revise-and-rise' ? <ArchitectureDiagram /> : (
              <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Stack</div>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:10 }}>
                  {project.stack.map(s=> <span key={s} className="mono" style={{ fontSize:11, border:'1px solid var(--border)', padding:'6px 10px', borderRadius:999, background:'rgba(255,255,255,0.04)' }}>{s}</span>)}
                </div>
                <p style={{ fontSize:13, color:'var(--muted)', marginTop:10, lineHeight:1.6 }}>{project.architectureDescription ?? 'Lightweight React SPA with cloud data services. No invented backend.'}</p>
              </div>
            )}
            {project.workflowSteps ? <WorkflowDiagram steps={project.workflowSteps} /> : (
              <div style={{ border:'1px solid var(--border)', borderRadius:16, padding:16, background:'rgba(255,255,255,0.015)' }}>
                <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)' }}>Features</div>
                <ul style={{ marginTop:10, display:'grid', gap:8, listStyle:'none' }}>
                  {project.features.map(f=> <li key={f} style={{ fontSize:13, display:'flex', gap:8 }}><span style={{color:'var(--accent)'}}>•</span>{f}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* history / challenges for self-annotate */}
          {(project.history || project.challenges || project.currentState) && (
            <div style={{ margin:'0 16px 16px', border: isWarn ? '1px solid rgba(245,158,11,0.25)' : '1px solid var(--border)', borderRadius:16, padding:16, background: isWarn ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.015)' }}>
              <div className="mono" style={{ fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase', color: isWarn ? '#f59e0b' : 'var(--muted)' }}>Development notes — honest iteration</div>
              {project.history && <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6 }}><strong style={{color:'#e4e4e7'}}>History:</strong> {project.history}</p>}
              {project.challenges && <p style={{ fontSize:13, color:'var(--muted)', marginTop:8, lineHeight:1.6 }}><strong style={{color:'#e4e4e7'}}>Challenges:</strong> {project.challenges}</p>}
              {project.currentState && <p style={{ fontSize:13, marginTop:8, fontWeight:600, color: isWarn ? '#fbbf24' : '#a7f3d0' }}>{project.currentState}</p>}
              <p style={{ fontSize:12, color:'var(--muted)', marginTop:8, fontStyle:'italic' }}>Software development is iterative and non-linear. Regressions happen.</p>
            </div>
          )}

          {/* credits block */}
          <div style={{ margin:'0 16px 16px', border:'1px solid var(--border)', borderRadius:12, padding:12, background:'rgba(255,255,255,0.015)', display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:8 }}>
            {[
              ['MY ROLE', project.role],
              ['CORE IDEA & REQS', project.ideaProvider],
              ['ACADEMIC CONTENT', project.contentProvider],
              ['PROJECT TYPE', project.category],
              ['STATUS', project.status],
              ['YEAR', project.year],
            ].map(([k,v])=>(
              <div key={k} style={{ display:'flex', gap:8, fontSize:11 }} className="mono">
                <span style={{ color:'var(--muted)', minWidth:120 }}>{k}:</span>
                <span style={{ color:'#e4e4e7', fontWeight:600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ padding:'0 16px 16px', display:'flex', gap:10, flexWrap:'wrap' }}>
            {project.liveUrl && project.liveUrl !== '#' && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-hero" style={{ background:'#fff', color:'#0a0a0c', padding:'10px 14px', borderRadius:999, fontWeight:700, fontSize:13 }}>Open live ↗</a>}
            {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="btn-hero btn-hero--dark" style={{ border:'1px solid var(--border)', padding:'10px 14px', borderRadius:999, fontWeight:600, fontSize:13, background:'rgba(255,255,255,0.04)' }}>GitHub repo ↗</a>}
            <Link to="/work" className="btn-hero btn-hero--dark" style={{ border:'1px solid var(--border)', padding:'10px 14px', borderRadius:999, fontWeight:600, fontSize:13, background:'rgba(255,255,255,0.04)' }}>← All work</Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ div[style*="gridTemplateColumns:'1.1fr"]{ grid-template-columns:1fr !important; } div[style*="repeat(4"]{ grid-template-columns:1fr 1fr !important; } div[style*="1.2fr 0.8fr"]{ grid-template-columns:1fr !important; } } @media(max-width:600px){ div[style*="repeat(2, 1fr)"]{ grid-template-columns:1fr !important; } }`}</style>
    </main>
  );
}
