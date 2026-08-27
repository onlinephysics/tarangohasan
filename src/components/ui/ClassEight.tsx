export function ClassEight({ mono, subtle }: { mono?: boolean; subtle?: boolean }) {
  return (
    <a
      href="https://eight.selfstudy.xyz"
      target="_blank"
      rel="noreferrer"
      className="class-eight"
      data-mono={mono ? 1 : 0}
      style={{
        display: 'inline-grid',
        verticalAlign: 'baseline',
        position: 'relative',
        textDecoration: 'none',
        lineHeight: 1,
      }}
      aria-label="Class 8 — opens eight.selfstudy.xyz"
    >
      <span className="class-eight__inner" style={{ display: 'grid', placeItems: 'start' }}>
        <span className="class-eight__default" style={{
          gridArea: '1 / 1',
          display: 'inline-block',
          color: subtle ? 'var(--muted)' : undefined,
        }}>
          Class&nbsp;8
        </span>
        <span className="class-eight__hover" aria-hidden style={{
          gridArea: '1 / 1',
          display: 'inline-block',
          color: 'var(--accent)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
        }}>
          eight
        </span>
      </span>
    </a>
  );
}
