import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, ShieldCheck, Gamepad2, Users, CheckCircle2, Globe, Activity, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const subscribeToMailerLite = async (email: string) => {
    try {
      const response = await axios.post('/api/subscribe', {
        email: email,
      });

      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao processar inscrição"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      await subscribeToMailerLite(email);
      toast.success("Inscrição realizada com sucesso! Entraremos em contato em breve.");
      setEmail("");
    } catch (error: any) {
      console.error("Erro ao se inscrever:", error);
      toast.error(error.message || "Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b-2 border-black bg-[#FAFAFA]">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left space-y-10">
              <Badge className="bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs font-bold px-4 py-1 rounded-none uppercase tracking-widest">
                Acesso Restrito • Alpha 0.1
              </Badge>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase">
                O MERCADO É <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SELVAGEM</span>. <br/>
                APRENDA A <span className="underline decoration-4 decoration-black underline-offset-8">DOMAR</span>.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Teste teses globais, opere opções e cripto em tempo real. <span className="text-black font-bold bg-primary/20 px-1">Sem arriscar seu patrimônio.</span>
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto lg:mx-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" id="waitlist">
                <Input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="h-14 border-2 border-black border-r-0 rounded-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0 bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-14 px-8 bg-primary text-black border-2 border-black hover:bg-primary/90 transition-all text-lg font-black rounded-none uppercase tracking-wider"
                >
                  {isLoading ? "Processando..." : "Solicitar Acesso"}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
                🔒 Vagas limitadas para o Q1 2026
              </p>
            </div>
            
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-30 animate-pulse"></div>
              
              {/* Mockup Container */}
              <div className="relative bg-black border-2 border-black rounded-none shadow-[12px_12px_0px_0px_rgba(204,255,0,1)] p-2 rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-white text-black border-2 border-black p-2 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm z-20 uppercase tracking-widest">
                  Simulação Institucional
                </div>
                
                {/* Mock UI */}
                <div className="bg-[#111] border border-[#333] p-8 space-y-8 min-h-[400px]">
                  <div className="flex justify-between items-end border-b border-[#333] pb-6">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Total Equity</p>
                      <h3 className="text-5xl font-black font-['Space_Grotesk'] text-white tracking-tighter">R$ 1.240.500<span className="text-gray-500 text-2xl">,00</span></h3>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-primary text-black border-none text-lg font-bold px-3 rounded-sm">+12.4%</Badge>
                      <p className="text-xs text-gray-400 mt-1 uppercase">YTD Return</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#222] p-4 border border-[#333]">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-xs font-bold uppercase">Sharpe Ratio</span>
                        <span className="text-primary text-xs font-bold">EXCELLENT</span>
                      </div>
                      <p className="text-2xl font-bold text-white">2.45</p>
                    </div>
                    <div className="bg-[#222] p-4 border border-[#333]">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-xs font-bold uppercase">Max Drawdown</span>
                        <span className="text-red-500 text-xs font-bold">LOW RISK</span>
                      </div>
                      <p className="text-2xl font-bold text-white">-4.2%</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Active Positions</p>
                    <div className="flex items-center justify-between p-4 bg-[#222] border border-[#333] hover:border-primary transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-ping"></div>
                        <div>
                          <p className="font-bold text-white">NVDA</p>
                          <p className="text-xs text-gray-500">NVIDIA Corp</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">$ 145.20</p>
                        <p className="text-xs text-primary">+3.2%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#222] border border-[#333] hover:border-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div>
                          <p className="font-bold text-white">BTC</p>
                          <p className="text-xs text-gray-500">Bitcoin</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">$ 68,450</p>
                        <p className="text-xs text-red-500">-0.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-white border-b-2 border-black">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-6xl font-black leading-[0.9] uppercase max-w-2xl">
              SEU GERENTE DO BANCO <br/>
              <span className="bg-black text-white px-2">NÃO É SEU AMIGO</span>.
            </h2>
            <p className="text-xl text-muted-foreground max-w-md font-medium text-right md:text-left">
              O jogo mudou. Deixar dinheiro parado ou em fundos com taxas abusivas é o maior risco que você corre.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border-2 border-black bg-black">
            {[
              {
                icon: <Activity className="w-12 h-12" />,
                title: "CUSTO DE OPORTUNIDADE",
                desc: "A inflação real está comendo seu poder de compra. 'Segurança' custa caro."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "COMPLEXIDADE GLOBAL",
                desc: "Stocks, REITs, Crypto. Montar um portfólio antifrágil exige tese, não sorte."
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "VALIDAÇÃO DE ESTRATÉGIA",
                desc: "Você não testaria um negócio sem plano. Por que testar R$ 1M na conta real?"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-r-0 hover:bg-primary/10 transition-colors group">
                <div className="mb-6 text-black group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-[#FAFAFA] border-b-2 border-black" id="features">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="flex-1 space-y-10">
              <div className="inline-block border-2 border-black px-4 py-1 font-bold uppercase tracking-widest bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                The Go Horse Way
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[0.85] uppercase">
                SIMULAÇÃO <br/>
                <span className="text-primary bg-black px-2">INSTITUCIONAL</span>. <br/>
                PARA VOCÊ.
              </h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                O <strong>Go Horse</strong> é uma ferramenta profissional. Dados em tempo real, execução instantânea e análises profundas. É o seu sandbox para construir riqueza geracional.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Multi-Asset Class", desc: "Ações Globais, Cripto, Opções e Futuros em um dashboard." },
                  { title: "Análise de Risco", desc: "Sharpe Ratio, Drawdown e Correlação. Olhe para o risco, não só retorno." },
                  { title: "War Room", desc: "Networking com quem está no mesmo nível. Discuta teses, não dicas." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 items-start border-l-4 border-black pl-6 py-2">
                    <div>
                      <h4 className="text-xl font-black uppercase mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
               <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-2 border-black"></div>
               <div className="relative h-full bg-white border-2 border-black p-8 flex flex-col justify-between">
                  <div className="space-y-8">
                    <div className="flex justify-between items-center border-b-2 border-black pb-4">
                      <span className="font-black text-2xl uppercase">Market Pulse</span>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { pair: "BTC/USD", price: "68,420.50", change: "+2.4%", sentiment: "BULLISH" },
                        { pair: "ETH/USD", price: "3,450.20", change: "+1.8%", sentiment: "NEUTRAL" },
                        { pair: "SPX", price: "5,240.00", change: "-0.4%", sentiment: "BEARISH" },
                        { pair: "US10Y", price: "4.20%", change: "+0.1%", sentiment: "RISK OFF" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 border border-black font-mono text-sm hover:bg-primary hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                          <span className="font-bold">{row.pair}</span>
                          <span>{row.price}</span>
                          <span className={row.change.startsWith('+') ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{row.change}</span>
                          <Badge variant="outline" className="bg-white border-black rounded-none text-[10px]">{row.sentiment}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t-2 border-black text-center">
                    <p className="font-black text-4xl uppercase tracking-tighter">Ready to deploy?</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-black text-white border-b-2 border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">
            PARE DE TRATAR SEU DINHEIRO COMO UM <span className="text-primary">HOBBY</span>.
          </h2>
          <p className="text-2xl font-medium mb-12 text-gray-400">
            O Go Horse é para quem joga para ganhar. Garanta seu lugar na fila.
          </p>
          
          <div className="bg-white p-2 border-2 border-white/20 inline-block w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="SEU MELHOR E-MAIL" 
                className="h-16 border-2 border-black rounded-none text-lg bg-gray-100 text-black placeholder:text-gray-500 font-bold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-16 px-8 bg-primary text-black border-2 border-black hover:bg-white transition-colors text-lg font-black rounded-none uppercase tracking-widest whitespace-nowrap"
              >
                {isLoading ? "..." : "ENTRAR NA LISTA"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
