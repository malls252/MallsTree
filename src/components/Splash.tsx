import React, { useEffect, useState } from 'react'

type SplashProps = {
  duration?: number
  onDone?: () => void
}

export default function Splash({ duration = 1800, onDone }: SplashProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, duration)

    return () => window.clearTimeout(t)
  }, [duration, onDone])

  if (!visible) return null

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-background" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-3xl" />

      {/* center */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="flex w-full max-w-sm flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-2xl animate-pulse" />

            {/* profil foto */}
            <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-[var(--shadow-glow)]">
              <img
                src="/src/images/profil.jpg"
                alt="Profil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* nama */}
          <div className="mt-6">
            <div className="text-2xl font-bold tracking-tight">
              Malls <span className="text-primary">.</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Loading ke dashboard
            </div>
          </div>

          {/* animasi overlay keluar */}
          <div className="mt-8 flex items-center justify-center">
            <div className="h-1.5 w-24 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-10 origin-left animate-[splash-swipe_1.2s_ease-in-out_infinite] bg-primary" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes splash-in {
          0% { transform: translateY(10px) scale(0.98); opacity: 0; }
          100% { transform: translateY(0px) scale(1); opacity: 1; }
        }
        @keyframes splash-swipe {
          0% { transform: translateX(-40px); opacity: 0.2; }
          30% { opacity: 1; }
          100% { transform: translateX(140px); opacity: 0.2; }
        }
        .splash-animate {
          animation: splash-in 700ms ease-out both;
        }
      `}</style>

      {/* entry animation */}
      <div className="splash-animate" />
    </div>
  )
}


