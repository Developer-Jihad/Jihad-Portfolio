export default function Background() {
  return (
    <>
      {/* Deep Gradient Background */}
      <div 
        className="fixed inset-0 -z-50"
        style={{
          background: `
            linear-gradient(to bottom right, 
              #0f0514 0%,    /* Deep Purple */
              #1a0b2e 20%,   /* Rich Purple */
              #261230 40%,   /* Dark Purple */
              #1e1b4b 60%,   /* Navy Purple */
              #172554 80%,   /* Deep Blue */
              #0f1f3d 100%   /* Dark Blue */
            )
          `
        }}
      />

      {/* Grid Layer */}
      <div
        className="fixed inset-0 -z-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div 
        className="fixed inset-0 -z-30"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, #0f0514 100%)',
          opacity: 0.8,
        }}
      />
    </>
  )
}