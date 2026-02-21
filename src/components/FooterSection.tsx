import Logo from "@/components/Logo";

const FooterSection = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <Logo className="mb-4" />
          <p className="text-sm text-muted-foreground max-w-xs">
            Publicidade inteligente em TV digital. Menos caro, mais eficiente. Todos ganham.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
            <li><a href="#como-funciona" className="hover:text-foreground transition-colors">Como Funciona</a></li>
            <li><a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a></li>
            <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>📞 47 9969-9543</li>
            <li>
              <a
                href={`https://wa.me/5547996995430?text=${encodeURIComponent("Olá!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                💬 WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Neuro Data TV. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
