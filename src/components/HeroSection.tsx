import { motion } from "framer-motion";
import heroImg from "@/assets/hero-tv.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
    {/* BG image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4"
        >
          Publicidade em TV Digital
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Revolucione sua Publicidade com{" "}
          <span className="text-gradient-primary">TV Digital Inteligente</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Menos caro. Mais eficiente. Todos ganham. Anuncie em telas digitais
          estrategicamente posicionadas por um custo até 80% menor que a TV tradicional.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contato"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-center hover:opacity-90 transition-opacity glow-blue animate-pulse-glow"
          >
            Sou Proprietário — Quero Minha TV
          </a>
          <a
            href="#contato"
            className="px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-semibold text-center hover:opacity-90 transition-opacity glow-green"
          >
            Sou Empresário — Quero Anunciar
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
