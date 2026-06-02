"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Tipos para el estado
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

// Base de datos simulada local
const ESTRATEGIAS_MOCK: Record<Perfil, Estrategia> = {
  Conservador: {
    distribucion: [
      { activo: "Bonos Soberanos", porcentaje: 50, color: "bg-amber-600" },
      { activo: "Obligaciones Negociables", porcentaje: 30, color: "bg-amber-500" },
      { activo: "ETF Global Low-Volatility", porcentaje: 15, color: "bg-orange-500" },
      { activo: "Liquidez / Money Market", porcentaje: 5, color: "bg-orange-400" },
    ],
    explicacion: "Priorizamos la protección de tu capital. La mayor parte de la cartera se concentra en renta fija de alta calidad, reduciendo la exposición a las fluctuaciones del mercado mientras generás rendimientos estables.",
  },
  Moderado: {
    distribucion: [
      { activo: "ETF Global (Acciones)", porcentaje: 60, color: "bg-orange-600" },
      { activo: "Bonos y Renta Fija", porcentaje: 20, color: "bg-amber-500" },
      { activo: "Acciones Tecnológicas", porcentaje: 15, color: "bg-orange-400" },
      { activo: "Liquidez", porcentaje: 5, color: "bg-stone-300" },
    ],
    explicacion: "Tu horizonte de inversión permite asumir cierto nivel de riesgo para buscar crecimiento. La diversificación global ayuda a reducir la dependencia de un único mercado, mientras que la renta fija aporta estabilidad durante períodos de volatilidad.",
  },
  Agresivo: {
    distribucion: [
      { activo: "Acciones Tecnológicas & Growth", porcentaje: 50, color: "bg-orange-600" },
      { activo: "ETF Global Emergentes", porcentaje: 30, color: "bg-orange-400" },
      { activo: "Criptoactivos / Alternativos", porcentaje: 15, color: "bg-amber-500" },
      { activo: "Liquidez", porcentaje: 5, color: "bg-stone-300" },
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
    // Simula la lógica de recomendación basada en el perfil seleccionado
    const resultado = ESTRATEGIAS_MOCK[perfil];
    setEstrategiaSugerida(resultado);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Fondo decorativo premium con gradientes sutiles */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(radial-gradient(circle_at_top,_var(--tw-gradient-stops)))] from-orange-950/20 via-transparent to-transparent blur-3xl" />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header de la App */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs font-medium text-orange-400 mb-4 tracking-wide backdrop-blur-sm">
            ✨ Capify Sandbox Demo
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-stone-50 to-stone-400 bg-clip-text text-transparent">
            Construí tu perfil de inversión
          </h1>
          <p className="mt-3 text-stone-400 max-w-md text-sm md:text-base">
            Diseñá una estrategia a tu medida sin arriesgar capital real. Aprendé el porqué de cada decisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Configuración del Perfil */}
          <section className="md:col-span-5">
            <Card className="bg-stone-900/60 border-stone-800/80 backdrop-blur-md shadow-2xl shadow-stone-950/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-stone-100">Tus Datos</CardTitle>
                <CardDescription className="text-stone-400">Definí tus preferencias básicas de inversor.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalcular} className="space-y-6">
                  {/* Campo Edad */}
                  <div className="space-y-2">
                    <Label htmlFor="edad" className="text-stone-300 font-medium">Edad</Label>
                    <Input
                      id="edad"
                      type="number"
                      placeholder="Ej. 24"
                      min="18"
                      max="100"
                      required
                      value={edad}
                      onChange={(e) => setEdad(e.target.value)}
                      className="bg-stone-950 border-stone-800 text-stone-100 focus-visible:ring-orange-500/50 transition-all placeholder:text-stone-600"
                    />
                  </div>

                  {/* Selector Perfil */}
                  <div className="space-y-2">
                    <Label className="text-stone-300 font-medium">Perfil de Riesgo</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["Conservador", "Moderado", "Agresivo"] as Perfil[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPerfil(p)}
                          className={`py-2 px-3 text-xs md:text-sm font-medium rounded-lg border transition-all ${
                            perfil === p
                              ? "bg-gradient-to-r from-orange-600 to-amber-600 border-orange-500 text-white font-semibold shadow-lg shadow-orange-950/40"
                              : "bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector Objetivo */}
                  <div className="space-y-2">
                    <Label className="text-stone-300 font-medium">Objetivo Principal</Label>
                    <div className="flex flex-col gap-2">
                      {(["Preservar capital", "Crecimiento", "Generar ingresos"] as Objetivo[]).map((o) => (
                        <button
                          key={o}
                          type="button"
                          onClick={() => setObjetivo(o)}
                          className={`w-full py-2.5 px-4 text-left text-sm rounded-lg border transition-all flex items-center justify-between ${
                            objetivo === o
                              ? "bg-stone-800/80 border-orange-500/50 text-orange-400 font-medium"
                              : "bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-900/40"
                          }`}
                        >
                          {o}
                          {objetivo === o && <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Botón Principal */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-stone-950 font-bold tracking-wide shadow-xl shadow-orange-950/20 py-5 transition-all active:scale-[0.98]"
                  >
                    Ver estrategia sugerida
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Columna Derecha: Resultado de la Estrategia */}
          <section className="md:col-span-7 h-full">
            {estrategiaSugerida ? (
              <Card className="bg-stone-900/40 border-stone-800/80 backdrop-blur-md shadow-2xl transition-all animate-in fade-in duration-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                        Estrategia {perfil}
                      </CardTitle>
                      <CardDescription className="text-stone-400 mt-1">
                        Asignación sugerida óptima para tus objetivos de {objetivo.toLowerCase()}.
                      </CardDescription>
                    </div>
                    {edad && (
                      <span className="text-xs bg-stone-800 border border-stone-700 text-stone-300 px-2.5 py-1 rounded-full font-mono">
                        {edad} años
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Gráfico de barra porcentual unificado (Premium & Moderno) */}
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded-full bg-stone-950 overflow-hidden flex border border-stone-800/50">
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

                  {/* Lista Detallada de Activos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {estrategiaSugerida.distribucion.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-xl bg-stone-950/50 border border-stone-800/60 flex items-center justify-between hover:border-stone-700/60 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-3 w-3 rounded-full ${item.color} shrink-0`} />
                          <span className="text-sm font-medium text-stone-300 truncate max-w-[140px] sm:max-w-none">
                            {item.activo}
                          </span>
                        </div>
                        <span className="text-sm font-semibold font-mono text-stone-100 bg-stone-900 px-2 py-0.5 rounded border border-stone-800">
                          {item.porcentaje}%
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="border-stone-800/80" />

                  {/* Sección de Educación Financiera / Explicación */}
                  <div className="rounded-xl bg-gradient-to-br from-orange-500/[0.04] to-amber-500/[0.01] border border-orange-500/10 p-5">
                    <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 15h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.832.445l-2 3a1 1 0 101.664 1.11L10 9.555l1.168 1.75a1 1 0 101.664-1.11l-2-3A1 1 0 0010 7z" clipRule="evenodd" />
                      </svg>
                      El porqué de tu estrategia
                    </h4>
                    <p className="text-stone-300 text-sm leading-relaxed font-light">
                      {estrategiaSugerida.explicacion}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Estado Vacío / Placeholder */
              <div className="h-full min-h-[350px] border-2 border-dashed border-stone-800/80 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-stone-900/10 backdrop-blur-sm">
                <div className="h-12 w-12 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 mb-4 text-xl">
                  📊
                </div>
                <h3 className="text-stone-300 font-medium mb-1">Faltan datos de perfil</h3>
                <p className="text-stone-500 text-xs max-w-xs leading-normal">
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
