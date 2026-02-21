import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Dono de Restaurante",
    text: "Desde que instalamos a TV da Neuro Data, o ambiente ficou mais moderno e atraente. Nossos clientes adoram!",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Gerente de Marketing",
    text: "Economizamos mais de 70% em publicidade comparado à TV tradicional. O retorno é incrível.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Proprietário de Academia",
    text: "A instalação foi rápida e sem custo. Agora tenho minha marca sendo divulgada o dia inteiro.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">Depoimentos</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          O que dizem nossos <span className="text-gradient-primary">parceiros</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
