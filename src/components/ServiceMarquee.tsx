export function ServiceMarquee() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 overflow-hidden relative bg-black">
      <div
        className="whitespace-nowrap"
        style={{ animation: 'marqueeScroll 20s linear infinite' }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="inline-block mr-4 font-['Teko'] font-semibold uppercase tracking-wide"
            style={{
              fontSize: 'clamp(60px, 10vw, 150px)',
              lineHeight: 1.2,
              paddingTop: '20px',
              paddingBottom: '20px',
              color: 'black',
              WebkitTextStroke: '2px #FF6B35',
            }}
          >
            WEB APPS . MOBILE APPS . AI AGENTS{' '}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
