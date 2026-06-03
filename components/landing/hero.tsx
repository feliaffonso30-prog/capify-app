"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background gradient - Ajustado al look azul helado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/[0.08] via-primary/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent/[0.05] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-blue-400">
              Tus inversiones
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-balance">
            Invertí con confianza
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              tu primera estrategia de inversión
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Capify te ayuda a tomar decisiones financieras claras
            con un portafolios adaptado a tu perfil.
          </p>

          {/* CTA Buttons - Modificados para que hagan scroll local */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="demo" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white shadow-lg shadow-primary/25 group px-8 h-12 font-semibold tracking-wide cursor-pointer"
              >
                Ver demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Sin costos ocultos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Explicaciones claras</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>Aprender invirtiendo</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview - Sincronizado con la paleta de colores */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-b from-primary/10 via-accent/5 to-transparent rounded-3xl blur-2xl" />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-border/60 bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/60 bg-muted/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background border border-border/60 text-xs text-muted-foreground">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.capify.com
                  </div>
                </div>
              </div>

              {/* Browser Content Mockup */}
              <div className="p-6 md:p-10 bg-gradient-to-b from-card to-muted/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Portfolio overview */}
                  <div className="md:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1.5">Tu portafolio</p>
                        <p className="text-4xl font-bold tracking-tight">
                          $12,450<span className="text-xl font-normal text-muted-foreground">.00</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-sm font-semibold text-blue-400">+8.2%</span>
                      </div>
                    </div>

                    {/* Chart preview - Ajustado a las variables del tema */}
                    <div className="h-48 rounded-xl bg-muted/40 border border-border/40 p-6">
                      <div className="flex items-end gap-2 w-full h-full">
                        {[30, 45, 35, 55, 40, 50, 65, 45, 60, 75, 55, 70, 80, 65, 85].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm transition-all hover:opacity-80"
                            style={{ 
                              height: `${height}%`,
                              background: i >= 12 
                                ? 'linear-gradient(to top, var(--primary), var(--accent))'
                                : 'linear-gradient(to top, rgba(59,130,246,0.4), rgba(6,118,212,0.1))'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Side panel */}
                  <div className="space-y-5">
                    <div className="p-5 rounded-xl bg-card border border-border/60 shadow-sm">
                      <p className="text-sm font-semibold mb-4">Distribución</p>
                      <div className="space-y-4">
                        {[
                          { name: "ETFs globales", pct: 50, color: "from-primary to-primary" },
                          { name: "Bonos", pct: 30, color: "from-secondary-foreground to-secondary-foreground" },
                          { name: "Acciones", pct: 20, color: "from-accent to-accent" },
                        ].map((item) => (
                          <div key={item.name} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{item.name}</span>
                              <span className="font-semibold">{item.pct}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                                style={{ width: `${item.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">Tip del día</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Diversificar reduce el riesgo al distribuir tu inversión en diferentes activos.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
