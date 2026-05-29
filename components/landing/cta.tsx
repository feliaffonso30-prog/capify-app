"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 md:px-16 md:py-24">
          {/* Background pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl text-balance">
              Empezá a invertir con claridad y confianza
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 text-pretty">
              Herramientas simples, educación integrada y recomendaciones
              personalizadas para tomar mejores decisiones financieras.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto group"
              >
                Crear mi cuenta gratis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-primary-foreground/60">
                Sin tarjeta de crédito requerida
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/10">
              <div>
                <p className="text-4xl font-bold text-primary-foreground">
                  10k+
                </p>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Usuarios activos
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-foreground">
                  $2M+
                </p>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Gestionados
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-foreground">
                  4.9/5
                </p>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  Calificación promedio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
