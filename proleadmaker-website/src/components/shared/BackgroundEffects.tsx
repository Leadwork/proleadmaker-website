"use client";

export default function BackgroundEffects() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="bg-particles" aria-hidden="true" />
      {/* Grid pattern overlay */}
      <div className="bg-grid" aria-hidden="true" />
      {/* Extra floating orbs for depth */}
      <div
        className="fixed top-1/3 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.05] pointer-events-none z-0"
        style={{
          background: "#c026d3",
          filter: "blur(100px)",
          animation: "bgFloat 25s ease-in-out infinite 5s",
        }}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none z-0"
        style={{
          background: "#7c3aed",
          filter: "blur(120px)",
          animation: "bgFloat 30s ease-in-out infinite 10s",
        }}
        aria-hidden="true"
      />
    </>
  );
}
