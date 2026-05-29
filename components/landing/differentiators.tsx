import { Sparkles, Shield, BookOpen, Eye } from "lucide-react"

const differentiators = [
  {
    icon: Sparkles,
    title: "Personalización real",
    description:
      "No es un portafolio genérico. La IA crea recomendaciones únicas basadas en tu perfil, objetivos y nivel de conocimiento.",
    highlight: "100% adaptado a vos",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    description:
      "Cada recomendación viene con una explicación clara del porqué, los riesgos involucrados y escenarios posibles.",
    highlight: "Entendé el porqué",
  },
  {
    icon: BookOpen,
    title: "Educación integrada",
    description:
      "No solo te decimos qué hacer, te enseñamos por qué. Aprendé conceptos financieros mientras invertís, sin cursos extra.",
    highlight: "Aprendé invirtiendo",
  },
  {
    icon: Shield,
    title: "Expectativas realistas",
    description:
      "Información clara sobre riesgos reales y proyecciones basadas en datos históricos, no en promesas.",
    highlight: "Decisiones informadas",
  },
]

export function Differentiators() {
  return (
    <section id="diferenciales" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Por qué Capify
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Finanzas claras para una nueva generación
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Una plataforma diseñada para ayudarte a entender, aprender y tomar
            decisiones financieras con confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border/50 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Apps tradicionales
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent">
                    Capify
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {[
                  ["Portafolios personalizados", false, true],
                  ["Explicación de riesgos", false, true],
                  ["Educación integrada", false, true],
                  ["Promesas realistas", false, true],
                  ["Sin costos ocultos", false, true],
                  ["Actualización constante", false, true],
                ].map(([feature, guru, capify], index) => (
                  <tr key={index} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {feature as string}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {guru ? (
                        <svg
                          className="w-5 h-5 text-green-500 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {capify ? (
                        <svg
                          className="w-5 h-5 text-accent mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-red-400 mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
