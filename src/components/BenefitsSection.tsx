import { motion } from "framer-motion";
import { Building2, BarChart3, Shield, Sparkles, MapPin, Clock, Target, FileText } from "lucide-react";

const ownerBenefits = [
  { icon: Sparkles, text: "Aumento de visibilidade e prestígio" },
  { icon: Shield, text: "Sem investimento inicial" },
  { icon: Building2, text: "Sem preocupação com manutenção" },
  { icon: BarChart3, text: "Compartilhamento de receita" },
  { icon: Sparkles, text: "Ambiente mais moderno e atrativo" },
];

const advBenefits = [
  { icon: Target, text: "Custo 70-80% menor que TV tradicional" },
  { icon: MapPin, text: "Segmentação geográfica precisa" },
  { icon: Clock, text: "Flexibilidade total de horários" },
  { icon: Building2, text: "Múltiplos estabelecimentos disponíveis" },
  { icon: FileText, text: "Relatórios detalhados de exibição" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="section-padding bg-surface/50">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Vantagens</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Benefícios para <span className="text-gradient-primary">Todos</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Proprietários */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 glow-blue"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-primary">Para Proprietários</h3>
          <ul className="space-y-4">
            {ownerBenefits.map((b) => (
              <li key={b.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{b.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Anunciantes */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 glow-green"
        >
          <h3 className="font-display text-2xl font-bold mb-6 text-secondary">Para Anunciantes</h3>
          <ul className="space-y-4">
            {advBenefits.map((b) => (
              <li key={b.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-foreground">{b.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
