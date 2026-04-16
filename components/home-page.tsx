"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Headphones, Shield, Star, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "@/components/animated-logo"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getProducts, getCategories } from "@/lib/products"

interface HomePageProps {
  userEmail: string | null
}

export default function HomePage({ userEmail }: HomePageProps) {
  const featuredProducts = getProducts().slice(0, 4)
  const categories = getCategories()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 mesh-gradient" />

        <motion.div
          className="absolute top-32 right-[15%] w-72 h-72 rounded-full opacity-60"
          style={{ background: "linear-gradient(135deg, oklch(0.65 0.2 25 / 0.3), oklch(0.6 0.18 250 / 0.2))" }}
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-[10%] w-48 h-48 rounded-3xl opacity-50"
          style={{ background: "linear-gradient(135deg, oklch(0.6 0.18 250 / 0.3), oklch(0.7 0.15 150 / 0.2))" }}
          animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/4 right-[8%] hidden lg:block"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 rotate-12">
            <img src="/wireless-headphones-coral-orange.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-[5%] hidden lg:block"
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 -rotate-12">
            <img src="/bluetooth-speaker-blue-modern.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <AnimatedLogo size="large" />

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Star className="w-4 h-4 fill-primary" />
                Electronica Premium en La Habana
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="text-foreground">Habana</span> <span className="gradient-text">Sound</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl text-pretty leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Descubre la mejor seleccion de audio y electronica.
              <span className="text-foreground font-medium"> Calidad garantizada</span>, productos probados antes de
              cada entrega.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                asChild
                className="gap-2 text-lg px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Link href="/productos">
                  Explorar Productos
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="gap-2 text-lg px-8 rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all bg-transparent"
              >
                <a href="https://wa.me/5363180910" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 rounded-3xl border border-border bg-slate-950/10 px-6 py-5 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {userEmail ? `Sesión activa como ${userEmail}` : "No hay sesión activa"}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { value: "500+", label: "Clientes Felices" },
                { value: "100%", label: "Productos Probados" },
                { value: "24/7", label: "Soporte" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
