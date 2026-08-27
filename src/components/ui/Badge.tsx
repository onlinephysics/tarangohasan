import type { CSSProperties, ReactNode } from 'react';

export function Badge({ children, tone = 'default', mono }: { children: ReactNode; tone?: 'default'|'accent'|'muted'|'warn'; mono?: boolean }) {
  const styles: Record<string, CSSProperties> = {
    default: { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#a1a1aa' },
    accent: { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' },
    muted: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#8e8e93' },
    warn: { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#f59e0b' },
  };
  return (
    <span
      style={{
        display:'inline-flex', alignItems:'center', gap:6,
        padding: '4px 9px', borderRadius: 999, fontSize: 11, fontWeight: 600,
        letterSpacing: mono ? '0.06em' : '0.04em',
        fontFamily: mono ? "'JetBrains Mono', monospace" : undefined,
        textTransform: mono ? 'uppercase' : undefined,
        ...styles[tone],
      }}
    >
      {children}
    </span>
  );
}
