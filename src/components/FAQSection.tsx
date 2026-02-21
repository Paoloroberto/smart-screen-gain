import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto custa instalar uma TV?",
    a: "A instalação é totalmente gratuita para o proprietário do estabelecimento. A Neuro Data TV fornece e instala o equipamento sem nenhum custo.",
  },
  {
    q: "Como é a divisão de receita?",
    a: "O modelo de divisão de receita varia de acordo com o perfil do estabelecimento. Entre em contato para uma proposta personalizada.",
  },
  {
    q: "Qual o tempo médio de contrato?",
    a: "Os contratos padrão são de 12 meses, com possibilidade de renovação automática e condições especiais para contratos mais longos.",
  },
  {
    q: "Como os anúncios são programados?",
    a: "Nosso sistema automatizado permite agendar anúncios por horário, dia da semana e público-alvo, tudo através de um painel online intuitivo.",
  },
  {
    q: "Qual o alcance dos anúncios?",
    a: "O alcance depende do fluxo de pessoas de cada estabelecimento. Fornecemos relatórios detalhados de impressões e alcance estimado.",
  },
  {
    q: "Posso controlar quais anúncios aparecem?",
    a: "Proprietários podem aprovar ou recusar categorias de anúncios. Garantimos que o conteúdo seja adequado ao perfil de cada estabelecimento.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-surface/50">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">FAQ</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Perguntas <span className="text-gradient-primary">Frequentes</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-border/50"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
