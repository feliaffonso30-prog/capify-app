"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.70 0.18 45)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.16 55)" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logoGradient)" />
                <path d="M16 8C11.582 8 8 11.582 8 16c0 4.418 3.582 8 8 8 1.5 0 2.5-.5 3-1" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">capify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            <Link
              href="#beneficios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="#diferencial"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              Ingresar
            </Button>
            <Button size="sm" className="text-sm bg-accent hover:bg-accent/90 text-accent-foreground">
              Comenzar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -m-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/40">
            <div className="flex flex-col gap-5">
              <Link
                href="#beneficios"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="#como-funciona"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="#diferencial"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <div className="flex flex-col gap-3 pt-5 border-t border-border/40">
                <Button variant="ghost" size="sm" className="justify-start">
                  Ingresar
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Comenzar
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
