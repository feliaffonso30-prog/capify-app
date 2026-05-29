import { User, PieChart, TrendingUp, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: User,
    title: "Creá tu perfil",
    description:
      "Respondé algunas preguntas sobre tus objetivos, horizonte temporal y tolerancia al riesgo.",
  },
  {
    step: "02",
    icon: PieChart,
    title: "Recibí tu portafolio",
    description:
      "Obtené recomendaciones personalizadas con explicaciones claras sobre cada activo.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Seguí tu progreso",
    description:
      "Monitoreá tu portafolio, aprendé con contenido educativo y ajustá tu estrategia.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/[0.05] to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-secondary/[0.05] to-transparent rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Proceso
            </span>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Simple de comenzar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Un proceso diseñado para que puedas empezar a invertir 
            de forma informada en pocos minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-14 left-[calc(100%_-_12px)] w-[calc(100%_-_80px)] items-center justify-center z-10">
                  <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/30 to-border" />
                  <ArrowRight className="w-4 h-4 text-accent/50 -ml-1" />
                </div>
              )}

              <div className="relative p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full">
                {/* Step number badge */}
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground text-xs font-bold shadow-md shadow-accent/25">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-muted/80 border border-border/60 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                    <step.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
