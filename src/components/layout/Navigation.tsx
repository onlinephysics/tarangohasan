import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/process', label: 'Process' },
  { to: '/experiments', label: 'Experiments' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header style={{
      position:'sticky', top:0, zIndex:50,
      backdropFilter:'blur(16px) saturate(1.2)',
      background:'rgba(10,10,12,0.72)',
      borderBottom:'1px solid rgba(255,255,255,0.08)'
    }}>
      <div className="container" style={{ height: 'var(--nav-h)', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
        <Link to="/" className="brand-name" style={{ display:'flex', alignItems:'center', gap:10, fontWeight:800, letterSpacing:'-0.02em', fontSize:15 }}>
          <img src="/tarangohasan-avatar.png" alt="Tarango Hasan" width={28} height={28} style={{ width:28, height:28, borderRadius:8, objectFit:'cover', border:'1px solid var(--border)', background:'#fff' }} />
          <span className="brand-name" style={{ display:'inline-flex' }}><span>Tarango</span><span className="brand-space">&nbsp;</span><span>Hasan</span></span>
        </Link>

        <nav style={{ display:'flex', alignItems:'center', gap:6 }} className="nav-desktop">
          <div style={{ display:'flex', gap:4, alignItems:'center' }} className="hide-mobile">
            {links.map(l => (
              <NavLink key={l.to} to={l.to}
                style={({ isActive })=>({
                  padding:'6px 12px', borderRadius:999, fontSize:13, fontWeight:600,
                  color: isActive ? '#0a0a0c' : 'var(--muted)',
                  background: isActive ? '#fff' : 'transparent',
                  border: isActive ? '1px solid #fff' : '1px solid transparent',
                  transition:'all 150ms ease'
                })}>
                {l.label}
              </NavLink>
            ))}
            <a href="https://github.com/tarangohasan" target="_blank" rel="noreferrer"
              style={{ padding:'6px 12px', borderRadius:999, fontSize:13, fontWeight:600, color:'var(--muted)', border:'1px solid transparent', display:'inline-flex', alignItems:'center', gap:6 }}>
              GitHub ↗
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            onClick={()=>setOpen(v=>!v)}
            style={{
              display:'none',
              width:36, height:36, borderRadius:10, border:'1px solid var(--border)', background:'rgba(255,255,255,0.06)', color:'#fff',
              alignItems:'center', justifyContent:'center'
            }}
            className="menu-btn"
          >
            <span style={{ display:'block', width:16, height:2, background:'#fff', borderRadius:999, boxShadow: open ? 'none' : '0 6px 0 #fff, 0 -6px 0 #fff', opacity: open ? 0 : 1 }} />
            {open && <span style={{ position:'absolute', fontSize:16, lineHeight:1 }}>×</span>}
          </button>
        </nav>
      </div>
      {open && (
        <div style={{ borderTop:'1px solid var(--border)', background:'rgba(15,15,18,0.98)', padding:'12px 16px 16px' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={()=>setOpen(false)}
                style={({isActive})=>({
                  padding:'12px 14px', borderRadius:12, fontWeight:600, fontSize:14,
                  background: isActive ? '#fff' : 'rgba(255,255,255,0.06)',
                  color: isActive ? '#0a0a0c' : '#f4f4f6',
                  border:'1px solid '+(isActive ? '#fff' : 'var(--border)')
                })}>
                {l.label}
              </NavLink>
            ))}
            <a href="https://github.com/tarangohasan" target="_blank" rel="noreferrer" onClick={()=>setOpen(false)} style={{ padding:'12px 14px', borderRadius:12, fontWeight:600, fontSize:14, background:'rgba(255,255,255,0.06)', border:'1px solid var(--border)' }}>GitHub ↗</a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 760px) {
          .hide-mobile { display: none !important; }
          .menu-btn { display: inline-flex !important; position: relative; }
        }
      `}</style>
      {/* active indicator for a11y */}
      <span style={{position:'absolute', left:-9999}} aria-live="polite">{loc.pathname}</span>
    </header>
  );
}
