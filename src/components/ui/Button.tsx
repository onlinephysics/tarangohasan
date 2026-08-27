import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function Button({ children, to, href, variant='primary' }: { children: ReactNode; to?: string; href?: string; variant?: 'primary'|'ghost' }) {
  const style: React.CSSProperties = variant==='primary'
    ? { background:'#fff', color:'#0a0a0c', border:'1px solid #fff', padding:'11px 18px', borderRadius:999, fontWeight:700, fontSize:14, display:'inline-flex', alignItems:'center', gap:8 }
    : { background:'transparent', color:'#f4f4f6', border:'1px solid rgba(255,255,255,0.14)', padding:'11px 18px', borderRadius:999, fontWeight:600, fontSize:14, display:'inline-flex', alignItems:'center', gap:8 };
  if (to) return <Link to={to} style={style}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={style}>{children}</a>;
  return <button style={style}>{children}</button>;
}
