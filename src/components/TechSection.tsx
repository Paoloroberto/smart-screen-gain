import { motion } from "framer-motion";
import { Calendar, LayoutDashboard, Headphones, Wifi, Clock, BarChart3 } from "lucide-react";

const features = [
  { icon: Calendar, title: "Agendamento Automatizado", desc: "Anúncios programados com inteligência para máximo impacto." },
  { icon: LayoutDashboard, title: "Painel em Tempo Real", desc: "Acompanhe tudo pelo dashboard online, de qualquer lugar." },
  { icon: Headphones, title: "Suporte 24/7", desc: "Equipe técnica disponível a qualquer momento para você." },
  { icon: Wifi, title: "Conexão Cloud", desc: "Sistema 100% na nuvem com antena dedicada de internet." },
  { icon: Clock, title: "Segmentação por Horário", desc: "Exiba seus anúncios no momento certo para o público certo." },
  { icon: BarChart3, title: "Analytics & Relatórios", desc: "Dados completos sobre exibições, alcance e desempenho." },
];

const TechSection = () => (
  <section id="diferenciais" className="section-padding bg-surface/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Tecnologia</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Diferenciais <span className="text-gradient-primary">Tecnológicos</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:bg-surface-hover transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;
