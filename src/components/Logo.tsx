import { Tv } from "lucide-react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
      <Tv className="w-5 h-5 text-primary-foreground" />
    </div>
    <div className="font-display font-bold text-lg leading-tight">
      <span className="text-foreground">Neuro</span>
      <span className="text-primary">Data</span>
      <span className="text-secondary"> TV</span>
    </div>
  </div>
);

export default Logo;
