"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Waitlist() {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  // Estructura lista para conectar con servicios externos (Supabase, Firebase, etc.)
  const saveToDatabase = async (userData: { nombre: string; email: string }) => {
    // Simulamos una llamada de red de 1.5 segundos
    return new Promise((resolve) => setTimeout(resolve, 1500));

    /* 
      💡 EJEMPLOS DE INTEGRACIÓN FUTURA:
      
      1. Con Supabase / Firebase:
      const { data, error } = await supabase.from('waitlist').insert([userData])
      
      2. Con una API Route interna (para Mailchimp / Google Sheets):
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' }
      })
    */
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // Intentamos "guardar" los datos
      await saveToDatabase({ nombre, email });
      setEnviado(true);
    } catch (error) {
      console.error("Error al registrarse:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-16 relative">
      {/* Glow de fondo naranja de baja opacidad */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_60%)] blur-2xl pointer-events-none" />

      {!enviado ? (
        /* FORMULARIO DE REGISTRO */
        <Card className="bg-stone-900/60 border-stone-800/80 backdrop-blur-md shadow-2xl shadow-black/40 transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto h-10 w-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-lg mb-4">
              🚀
            </div>
            <CardTitle className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-b from-stone-50 to-stone-300 bg-clip-text text-transparent">
              Sumate a los primeros usuarios de Capify
            </CardTitle>
            <CardDescription className="text-stone-400 mt-2 text-sm md:text-base leading-relaxed">
              Probá nuevas funcionalidades antes del lanzamiento y ayudanos a construir una mejor experiencia para inversores que recién empiezan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campo Nombre (Opcional) */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-stone-300 text-xs font-semibold uppercase tracking-wider">
                  Tu Nombre <span className="text-stone-500 font-normal lowercase">(opcional)</span>
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Ej. Cata"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={loading}
                  className="bg-stone-950 border-stone-800 text-stone-100 focus-visible:ring-orange-500/50 transition-all placeholder:text-stone-700"
                />
              </div>

              {/* Campo Email (Obligatorio) */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-stone-300 text-xs font-semibold uppercase tracking-wider">
                  Tu Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ejemplo@capify.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="bg-stone-950 border-stone-800 text-stone-100 focus-visible:ring-orange-500/50 transition-all placeholder:text-stone-700"
                />
              </div>

              {/* Botón de envío con feedback visual de carga */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-stone-950 font-bold tracking-wide shadow-xl shadow-orange-950/40 py-5 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                    Reservando tu lugar...
                  </div>
                ) : (
                  "Quiero acceso anticipado"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        /* TARJETA DE ÉXITO (ANIMADA) */
        <Card className="bg-stone-900/80 border-orange-500/20 backdrop-blur-md shadow-2xl text-center p-8 animate-in fade-in zoom-in-95 duration-500">
          <CardContent className="pt-6 space-y-4">
            <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-xl shadow-lg shadow-orange-500/20">
              ✨
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-stone-50">
                ¡Gracias por sumarte!
              </h3>
              <p className="text-stone-300 text-sm max-w-sm mx-auto leading-relaxed">
                Te avisaremos cuando Capify esté disponible. Vas a ser de los primeros en diseñar tu camino financiero.
              </p>
            </div>
            {nombre && (
              <div className="text-xs text-orange-400/80 font-mono pt-2">
                ID de reserva generado para: {nombre}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </section>
  );
}
