import { motion } from "framer-motion";
import { Tv, Megaphone, TrendingUp, Monitor, DollarSign, Users } from "lucide-react";

const steps = [
  {
    icon: Tv,
    title: "Para Proprietários",
    items: ["Instalação gratuita da TV", "Sua marca divulgada 24h", "Receita passiva garantida"],
    color: "text-primary",
    glow: "glow-blue",
  },
  {
    icon: Monitor,
    title: "Para Neuro Data TV",
    items: ["Instalamos a TV no local", "Vendemos espaços publicitários", "Gerenciamos todo o sistema"],
    color: "text-secondary",
    glow: "glow-green",
  },
  {
    icon: DollarSign,
    title: "Para Anunciantes",
    items: ["Alugue espaço acessível", "Exiba anúncios de impacto", "Atraia clientes com economia"],
    color: "text-accent",
    glow: "",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HowItWorks = () => (
  <section id="como-funciona" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Processo Simples</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Como <span className="text-gradient-primary">Funciona</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {steps.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className={`glass rounded-2xl p-8 hover:bg-surface-hover transition-colors ${s.glow}`}
          >
            <s.icon className={`w-10 h-10 mb-6 ${s.color}`} />
            <h3 className="font-display text-xl font-bold mb-4">{s.title}</h3>
            <ul className="space-y-3">
              {s.items.map((t) => (
                <li key={t} className="text-muted-foreground flex items-start gap-2">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-current ${s.color} shrink-0`} />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
