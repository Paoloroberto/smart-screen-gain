import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "TVs Instaladas" },
  { value: "120+", label: "Estabelecimentos Parceiros" },
  { value: "300+", label: "Empresas Anunciando" },
  { value: "80%", label: "Economia Média" },
];

const StatsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 text-center"
          >
            <p className="font-display text-3xl md:text-5xl font-bold text-gradient-primary mb-2">
              {s.value}
            </p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
