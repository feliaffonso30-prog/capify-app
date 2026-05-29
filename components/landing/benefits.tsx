import { Check, Sparkles, Target, Lightbulb } from "lucide-react"

const benefits = [
  "Portafolios adaptados a tu perfil único",
  "Explicaciones claras de cada recomendación",
  "Riesgos comunicados de forma transparente",
  "Educación financiera integrada",
  "Sin jerga técnica innecesaria",
  "Actualización constante de tu estrategia",
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 md:py-32 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Beneficios
              </span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance leading-tight">
              Decisiones financieras{" "}
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                más claras
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              Capify te ayuda a entender el porqué detrás de cada inversión, 
              para que puedas tomar decisiones con confianza y conocimiento.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mt-0.5 shadow-sm shadow-accent/30">
                    <Check className="w-3.5 h-3.5 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-foreground/90 group-hover:text-foreground transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent-secondary/20 rounded-3xl blur-2xl -z-10" />
            
            <div className="p-8 rounded-2xl bg-card border border-border/60 shadow-xl">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/80 shadow-lg shadow-accent/25">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Tu estrategia personalizada</p>
                  <p className="text-sm text-muted-foreground">Basada en tu perfil de inversor</p>
                </div>
              </div>

              {/* Strategy items */}
              <div className="space-y-5">
                <div className="p-5 rounded-xl bg-muted/50 border border-border/40">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium">Perfil de riesgo</span>
                    <span className="text-sm font-semibold text-accent">Moderado</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-accent to-accent/80 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Conservador</span>
                    <span>Agresivo</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-muted/50 border border-border/40">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium">Horizonte temporal</span>
                    <span className="text-sm font-semibold text-accent">5+ años</span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className={`h-2 flex-1 rounded-full transition-colors ${
                          i <= 4 
                            ? 'bg-gradient-to-r from-accent to-accent/80' 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    <div>
                      <span className="text-sm font-medium">Objetivo principal</span>
                      <span className="text-sm font-semibold text-accent ml-2">Crecimiento a largo plazo</span>
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
