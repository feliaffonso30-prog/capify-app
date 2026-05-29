import { AlertTriangle, TrendingDown, UserX, Brain, Lock, HelpCircle } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "Falta de educación financiera",
    description:
      "No aprendemos sobre dinero e inversiones en la escuela, dejando a millones sin las herramientas básicas.",
  },
  {
    icon: TrendingDown,
    title: "Exceso de información",
    description:
      "Demasiadas opciones, demasiados consejos contradictorios. Es fácil sentirse abrumado y paralizado.",
  },
  {
    icon: UserX,
    title: "Consejos genéricos",
    description:
      "Recomendaciones que no consideran tu situación personal, objetivos o tolerancia al riesgo.",
  },
  {
    icon: AlertTriangle,
    title: "Miedo a perder dinero",
    description:
      "Sin entender los riesgos reales, cualquier inversión se siente como una apuesta en un casino.",
  },
  {
    icon: Lock,
    title: "Herramientas complejas",
    description:
      "Plataformas llenas de gráficos, términos técnicos y opciones diseñadas para traders expertos.",
  },
  {
    icon: HelpCircle,
    title: "Sin explicación del porqué",
    description:
      "Te dicen qué comprar, pero nunca te explican por qué ni qué puede salir mal.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            El problema
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Invertir debería ser simple, pero no lo es
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Millones de jóvenes quieren empezar a invertir, pero se enfrentan a
            obstáculos que los frenan o los llevan a tomar malas decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-destructive/10 text-destructive/80 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <problem.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
