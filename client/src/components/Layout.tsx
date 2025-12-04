import { ReactNode } from "react";
import { Link } from "wouter";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <header className="border-b-2 border-black sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <a className="font-['Space_Grotesk'] text-2xl font-black tracking-tighter hover:text-primary transition-colors uppercase">
              GO <span className="text-primary">HORSE</span>
            </a>
          </Link>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-bold hover:underline underline-offset-4 uppercase tracking-wide">
              Manifesto
            </a>
            <a href="#community" className="text-sm font-bold hover:underline underline-offset-4 uppercase tracking-wide">
              War Room
            </a>
          </nav>
          <a 
            href="#waitlist" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-none bg-black px-6 py-2 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider border-2 border-black"
          >
            Solicitar Acesso
          </a>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t-2 border-black bg-white py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xl font-black uppercase">GO HORSE</span>
            <p className="text-sm text-muted-foreground max-w-xs font-medium">
              Simulação institucional para quem joga para ganhar.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-black">Termos</a>
            <a href="#" className="hover:text-black">Privacidade</a>
            <a href="#" className="hover:text-black">Twitter</a>
          </div>
          <div className="text-sm text-muted-foreground font-bold">
            © 2026 GO HORSE CAPITAL.
          </div>
        </div>
      </footer>
    </div>
  );
}
