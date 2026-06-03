"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Inicializamos el cliente de Supabase de forma segura con las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function Waitlist() {
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg(null);

    try {
      // Insertamos los datos directamente en la tabla 'waitlist' de tu Supabase
      const { error } = await supabase
        .from("waitlist")
        .insert([{ nombre: nombre || null, email: email }]);

      if (error) throw error;

      setEnviado(true);
    } catch (err: any) {
      console.error("Error al registrarse en Supabase:", err);
      setErrorMsg("Hubo un problema al guardar tu lugar. ¡Probá de nuevo!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_60%)] blur-2xl pointer-events-none" />

      {!enviado ? (
        <Card className="bg-card border-border backdrop-blur-md shadow-2xl shadow-black/50 transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto h-10 w-10 rounded-full bg-secondary text-blue-400 border border-border flex items-center justify-center text-lg mb-4">
              🚀
            </div>
            <CardTitle className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
              Sumate a los primeros usuarios de Capify
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed">
              Probá nuevas funcionalidades antes del lanzamiento y ayudanos a construir una mejor experiencia para inversores que recién empiezan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground/90 text-xs font-semibold uppercase tracking-wider">
                  Tu Nombre <span className="text-muted-foreground font-normal lowercase">(opcional)</span>
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Ej. Cata"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={loading}
                  className="bg-background border-border text-foreground focus-visible:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/90 text-xs font-semibold uppercase tracking-wider">
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
                  className="bg-background border-border text-foreground focus-visible:ring-primary/50 transition-all placeholder:text-muted-foreground/30"
                />
              </div>

              {errorMsg && (
                <p className="text-destructive text-xs font-medium text-center bg-destructive/10 py-2 rounded border border-destructive/20 animate-in fade-in">
                  {errorMsg}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-secondary hover:bg-secondary/80 text-blue-400 border border-border font-bold tracking-wide py-5 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
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
        <Card className="bg-card border-border/80 backdrop-blur-md shadow-2xl text-center p-8 animate-in fade-in zoom-in-95 duration-500">
          <CardContent className="pt-6 space-y-4">
            <div className="mx-auto h-12 w-12 rounded-full bg-secondary border border-border text-blue-400 flex items-center justify-center text-xl shadow-lg">
              ✨
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                ¡Gracias por sumarte!
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                Te avisaremos cuando Capify esté disponible. Vas a ser de los primeros en diseñar tu camino financiero.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
