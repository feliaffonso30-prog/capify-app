import { Layers, LineChart, BookOpen, Shield } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Portafolios personalizados",
    description:
      "Recomendaciones adaptadas a tu perfil, objetivos y tolerancia al riesgo. Cada sugerencia pensada para vos.",
  },
  {
    icon: LineChart,
    title: "Analisis claro y simple",
    description:
      "Visualiza tu rendimiento con metricas faciles de entender. Sin jerga innecesaria ni graficos confusos.",
  },
  {
    icon: BookOpen,
    title: "Aprende mientras invertis",
    description:
      "Conceptos financieros explicados de forma simple. Cada decision es una oportunidad de aprendizaje.",
  },
  {
    icon: Shield,
    title: "Transparencia total",
    description:
      "Conoce los riesgos reales de cada inversion. Informacion honesta para decisiones informadas.",
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-balance">
            Invertir puede ser mas simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Herramientas pensadas para que entiendas cada paso de tu camino financiero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/40 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="mb-5">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
