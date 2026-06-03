"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Tipos para el estado local de la demo
type Perfil = "Conservador" | "Moderado" | "Agresivo";
type Objetivo = "Preservar capital" | "Crecimiento" | "Generar ingresos";

interface Distribucion {
  activo: string;
  porcentaje: number;
  color: string;
}

interface Estrategia {
  distribucion: Distribucion[];
  explicacion: string;
}

// Datos simulados con la nueva paleta de gráficos azul y cyan
const ESTRATEGIAS_MOCK: Record<Perfil, Estrategia> = {
  Conservador: {
    distribucion: [
      { activo: "Bonos Soberanos", porcentaje: 50, color: "bg-blue-700" },
      { activo: "Obligaciones Negociables", porcentaje: 30, color: "bg-blue-500" },
      { activo: "ETF Global Low-Volatility", porcentaje: 15, color: "bg-cyan-500" },
      { activo: "Liquidez / Money Market", porcentaje: 5, color: "bg-slate-700" },
    ],
    explicacion: "Priorizamos la protección de tu capital. La mayor parte de la cartera se concentra en renta fija de alta calidad, reduciendo la exposición a las fluctuaciones del mercado mientras generás rendimientos estables.",
  },
  Moderado: {
    distribucion: [
      { activo: "ETF Global (Acciones)", porcentaje: 60, color: "bg-blue-600" },
      { activo: "Bonos y Renta Fija", porcentaje: 20, color: "bg-blue-400" },
      { activo: "Acciones Tecnológicas", porcentaje: 15, color: "bg-cyan-400" },
      { activo: "Liquidez", porcentaje: 5, color: "bg-slate-600" },
    ],
    explicacion: "Tu horizonte de inversión permite asumir cierto nivel de riesgo para buscar crecimiento. La diversificación global ayuda a reducir la dependencia de un único mercado, mientras que la renta fija aporta estabilidad durante períodos de volatilidad.",
  },
  Agresivo: {
    distribucion: [
      { activo: "Acciones Tecnológicas & Growth", porcentaje: 50, color: "bg-blue-500" },
      { activo: "ETF Global Emergentes", porcentaje: 30, color: "bg-cyan-500" },
      { activo: "Criptoactivos / Alternativos", porcentaje: 15, color: "bg-cyan-300" },
      { activo: "Liquidez", porcentaje: 5, color: "bg-slate-600" },
    ],
    explicacion: "Buscamos maximizar el rendimiento a largo plazo aceptando una mayor volatilidad a corto plazo. La estrategia se inclina fuertemente hacia sectores dinámicos y de alto crecimiento global.",
  },
};

export default function DemoPage() {
  // Estados del formulario
  const [edad, setEdad] = useState<string>("");
  const [perfil, setPerfil] = useState<Perfil>("Moderado");
  const [objetivo, setObjetivo] = useState<Objetivo>("Crecimiento");
  
  // Estado del resultado
  const [estrategiaSugerida, setEstrategiaSugerida] = useState<Estrategia | null>(null);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    setEstrategiaSugerida(ESTRATEGIAS_MOCK[perfil]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      {/* Fondo decorativo premium con glow azul helado en el top */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_65%)] blur-3xl pointer-events-none" />

      <main className="container mx-auto px-4 py-12 max-w-5xl relative z-10">
        {/* Header de la App */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 text-xs font-medium text-blue-400 mb-4 tracking-wide backdrop-blur-sm">
            ✨ Capify Sandbox Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Construí tu perfil de inversión
          </h1>
          <p className="mt-3 text-muted-foreground max-w-md text-sm md:text-base">
            Diseñá una estrategia a tu medida sin arriesgar capital real. Aprendé el porqué de cada decisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Formulario de Preferencias */}
          <section className="md:col-span-5">
            <Card className="bg-card border-border backdrop-blur-md shadow-2xl shadow-black/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Tus Datos</CardTitle>
                <CardDescription className="text-muted-foreground">Definí tus preferencias básicas de inversor.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalcular} className="space-y-6">
                  {/* Campo Edad */}
                  <div className="space-y-2">
                    <Label htmlFor="edad" className="text-foreground/90 font-medium">Edad</Label>
                    <Input
                      id="edad"
                      type="number"
                      placeholder="Ej. 24"
                      min="18"
                      max="100"
                      required
                      value={edad}
                      onChange={(e) => setEdad(e.target.value)}
                      className="bg-background border-border text-foreground focus-visible:ring-primary/50 transition-all placeholder:text-muted-foreground/40"
                    />
                  </div>

                  {/* Selector Perfil */}
                  <div className="space-y-2">
                    <Label className="text-foreground/90 font-medium">Perfil de riesgo</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Conservador", "Moderado", "Agresivo"] as Perfil[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPerfil(p)}
                          className={`py-2 px-3 text-xs md:text-sm font-medium rounded-lg border transition-all ${
                            perfil === p
                              ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-500 text-white font-semibold shadow-lg shadow-blue-500/20"
                              : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-muted"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector Objetivo */}
                  <div className="space-y-2">
                    <Label className="text-foreground/90 font-medium">Objetivo Principal</Label>
                    <div className="flex flex-col gap-2">
                      {(["Preservar capital", "Crecimiento", "Generar ingresos"] as Objetivo[]).map((o) => (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setObjective(o)}
                          className={`w-full py-2.5 px-4 text-left text-sm rounded-lg border transition-all flex items-center justify-between ${
                            objetivo === o
                              ? "bg-secondary border-primary/50 text-blue-400 font-medium"
                              : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                          }`}
                        >
                          {o}
                          {objetivo === o && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botón de Acción Principal */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-95 text-white font-semibold tracking-wide py-5 shadow-xl shadow-blue-500/10 transition-all active:scale-[0.99]"
                  >
                    Ver estrategia sugerida
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Columna Derecha: Renderizado del Portfolio Sugerido */}
          <section className="md:col-span-7 h-full">
            {estrategiaSugerida ? (
              <Card className="bg-card/70 border-border backdrop-blur-md shadow-2xl transition-all animate-in fade-in duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Estrategia {perfil}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-1">
                        Asignación sugerida óptima para tus objetivos de {objetivo.toLowerCase()}.
                      </CardDescription>
                    </div>
                    {edad && (
                      <span className="text-xs bg-background border border-border text-blue-400 px-2.5 py-1 rounded-full font-mono">
                        {edad} años
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Gráfico de barra porcentual fluido */}
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-full bg-background overflow-hidden flex border border-border/50">
                      {estrategiaSugerida.distribucion.map((item, index) => (
                        <div
                          key={index}
                          style={{ width: `${item.porcentaje}%` }}
                          className={`${item.color} h-full transition-all duration-700 ease-out`}
                          title={`${item.activo}: ${item.porcentaje}%`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Lista de Desglose de Activos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {estrategiaSugerida.distribucion.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-xl bg-background border border-border flex items-center justify-between hover:border-muted transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-3 w-3 rounded-full ${item.color} shrink-0`} />
                          <span className="text-sm font-medium text-foreground/90 truncate max-w-[140px] sm:max-w-none">
                            {item.activo}
                          </span>
                        </div>
                        <span className="text-sm font-semibold font-mono text-foreground bg-secondary px-2 py-0.5 rounded border border-border">
                          {item.porcentaje}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="border-border/60" />

                  {/* Tarjeta de Explicación del Razonamiento Financiero */}
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/[0.03] to-cyan-500/[0.01] border border-blue-500/10 p-5">
                    <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-cyan-400">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.832.445l-2 3a1 1 0 101.664 1.11L10 9.555l1.168 1.75a1 1 0 101.664-1.11l-2-3A1 1 0 0010 7z" clipRule="evenodd" />
                      </svg>
                      El porqué de tu estrategia
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {estrategiaSugerida.explicacion}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Estado Vacío / Placeholder de Espera */
              <div className="h-full min-h-[350px] border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-card/20 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-background border border-border flex items-center justify-center text-blue-400 mb-4 text-lg">
                  📊
                </div>
                <h3 className="text-foreground font-medium mb-1">Faltan datos de perfil</h3>
                <p className="text-muted-foreground text-xs max-w-xs leading-normal">
                  Completá el formulario de la izquierda y hacé clic en "Ver estrategia sugerida" para renderizar la distribución del portfolio.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
