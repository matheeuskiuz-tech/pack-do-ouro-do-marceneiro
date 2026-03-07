/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  PlayCircle, 
  ShieldCheck, 
  ClockAlert, 
  Calculator, 
  Scissors, 
  CheckSquare, 
  TrendingUp, 
  FileSpreadsheet, 
  FileText, 
  Star, 
  Check, 
  X, 
  CheckCircle,
  Gift,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500/30">
      {/* Urgency Topbar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold animate-pulse">
        ⚠️ ATENÇÃO: Últimas horas para garantir acesso com desconto promocional!
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4 font-display text-zinc-900"
          >
            PARE DE PERDER <span className="text-blue-600">TEMPO E DINHEIRO</span> TENTANDO CRIAR MÓVEIS DO ZERO
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto mb-8"
          >
            Receba +1000 projetos de marcenaria em arquivo, completos com medidas exatas 
            e lista de materiais. O fim da quebra de cabeça na sua oficina.
          </motion.p>

          {/* VSL Video Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-blue-600/50 shadow-2xl shadow-blue-500/10"
          >
            <div className="aspect-video bg-black relative">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="https://picsum.photos/seed/woodwork/1280/720"
                playsInline
              >
                <source src="/vsl.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-xl font-black shadow-xl shadow-blue-600/30 transition-all w-full sm:w-auto"
            >
              👉 QUERO O PLANO PREMIUM POR R$27,00
            </motion.button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Pagamento 100% Seguro | Acesso Imediato
          </div>
        </div>
      </header>

      {/* Emotional Pain Section */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-zinc-900">
            Nós sabemos qual é a <span className="text-blue-600">sua frustração:</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ClockAlert, text: "Virar noites fazendo desenhos confusos e complexos que tomam horas do seu descanso." },
              { icon: Calculator, text: "Não saber exatamente quanto cobrar por um serviço e descobrir no fim da semana que você quase pagou para trabalhar." },
              { icon: Scissors, text: "Cortar uma chapa inteira de MDF errado e ver seu lucro indo direto para a lata de lixo." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-500/50 transition-colors group shadow-sm">
                <item.icon className="w-10 h-10 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-zinc-700 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Testimonials) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-zinc-900">
            O que os <span className="text-blue-600">Marceneiros</span> estão dizendo:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos Mendes",
                role: "Marceneiro Iniciante",
                text: "Sempre sofri muito para calcular os cortes da chapa. Agora eu pego o PDF pronto, levo na madeireira e eles já entregam cortado certinho. Economizei um tempão.",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Ricardo Alencar",
                role: "Oficina R&A",
                text: "Essa planilha de cálculo é ouro! Eu tava cobrando R$1.200 num guarda-roupa que eu deveria estar cobrando R$2.100. Só de ter isso já pagou o pack mil vezes.",
                img: "https://randomuser.me/api/portraits/men/44.jpg"
              },
              {
                name: "Fernando Silva",
                role: "Silva Planejados",
                text: "Fechei 3 móveis planejados só mostrando a lista dos 50 projetos mais vendidos pro cliente no celular. O visual passa muita confiança.",
                img: "https://randomuser.me/api/portraits/men/75.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                <div className="flex gap-1 text-blue-600 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-zinc-600 italic mb-8 leading-relaxed font-medium">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-blue-600" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-zinc-900">{item.name}</h4>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-zinc-50" id="pricing">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-zinc-900 uppercase tracking-tight">ESCOLHA SEU PACOTE:</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            {/* Basic */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 flex flex-col shadow-sm relative pt-12">
              <div className="text-center mb-6">
                <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">OFERTA BÁSICA</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-zinc-900">R$</span>
                  <span className="text-6xl font-black text-zinc-900">10,00</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-bold mt-2 uppercase tracking-[0.3em]">PAGAMENTO ÚNICO</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-zinc-700 font-bold text-sm">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                  Acesso aos +1000 Projetos
                </li>
                <li className="flex items-center gap-3 text-zinc-700 font-bold text-sm">
                  <Check className="w-5 h-5 text-blue-600 shrink-0" /> 
                  Lista de Materiais e Medidas
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-bold text-sm line-through">
                  <X className="w-5 h-5 text-zinc-300 shrink-0" /> 
                  Os 50 Mais Vendidos
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-bold text-sm line-through">
                  <X className="w-5 h-5 text-zinc-300 shrink-0" /> 
                  Calculadora e Planilhas
                </li>
              </ul>
              <button 
                onClick={() => setIsUpsellOpen(true)}
                className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 uppercase text-sm tracking-wider"
              >
                👉 GARANTIR ACESSO BÁSICO POR R$10,00
              </button>
            </div>

            {/* Premium */}
            <div className="bg-white p-8 rounded-3xl border border-blue-100 relative flex flex-col shadow-xl shadow-blue-900/5 pt-12 ring-1 ring-blue-50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase shadow-md shadow-blue-600/20">MAIS VENDIDO</div>
              <div className="text-center mb-6">
                <h3 className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-[0.2em]">OFERTA PREMIUM</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-zinc-900">R$</span>
                  <span className="text-6xl font-black text-zinc-900">27,00</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-bold mt-2 uppercase tracking-[0.3em]">PAGAMENTO ÚNICO</p>
              </div>
              <ul className="space-y-2 mb-8 flex-grow max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {[
                  "Tudo da Oferta Básica",
                  "Planilha de Precificação Automática",
                  "Lista de Fornecedores (Madeira/Ferragens)",
                  "Os Móveis Mais Vendidos",
                  "400 Projetos Residenciais",
                  "200 Projetos Planejados",
                  "150 Projetos de Mesas e Bancadas",
                  "120 Projetos de Cadeiras e Bancos",
                  "100 Projetos de Estantes e Prateleiras",
                  "80 Projetos de Camas e Beliches",
                  "70 Projetos de Portas e Janelas",
                  "60 Projetos de Móveis Rústicos",
                  "50 Projetos Área Gourmet",
                  "50 Projetos Comerciais",
                  "Guia de Corte Inteligente",
                  "Tabela de Medidas Padrão",
                  "Manual de Montagem Passo a Passo",
                  "Guia de Ferramentas Essenciais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-zinc-900 text-[13px]">
                    <Check className="w-4 h-4 text-blue-600 shrink-0" /> 
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 uppercase text-sm tracking-wider">
                👉 GARANTIR ACESSO PREMIUM POR R$27,00
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-zinc-50 p-8 rounded-3xl border border-zinc-200 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <ShieldCheck className="w-24 h-24 text-blue-600 shrink-0" />
          <div>
            <h2 className="text-2xl font-black mb-3 text-zinc-900">Risco Zero: 7 Dias de Garantia</h2>
            <p className="text-zinc-600 leading-relaxed font-medium text-sm">
              Teste todos os projetos e arquivos. Se você abrir o pacote e concluir que o material não facilitou o trabalho do seu dia a dia, mande apenas um e-mail. Nós extornaremos o seu pequeno investimento de R$10 ou R$27 totalmente. Você literalmente não perde nada tentando.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-zinc-900">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {[
              { q: "Eu consigo visualizar os projetos direto no celular?", a: "Sim! Muitas vezes você só precisa pegar as medidas rápido para olhar na madeireira ou falar com cliente. Os arquivos podem ser visualizados na palma da sua mão na oficina." },
              { q: "Como o acesso é liberado?", a: "Ao realizar a confirmação simples do pagamento (Pix e Cartão confirmam em 1 minuto), todo o pacote vai imediatamente para o e-mail que você cadastrou." },
              { q: "Funciona pra quem só tem ferramentas básicas em casa?", a: "Totalmente. O segredo desse pack é que ele te manda até as medidas da chapa. É levar pra cortar na madeireira de bairro e montar sozinho usando sua parafusadeira básica em casa." }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                <summary className="p-6 font-bold cursor-pointer flex justify-between items-center hover:bg-zinc-50 transition-colors text-zinc-900">
                  {item.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100 font-medium">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full text-2xl font-black shadow-2xl shadow-blue-600/40 transition-all">
              👉 QUERO O PACK OURO PREMIUM POR R$27,00
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-black text-blue-600 text-xl mb-4">Pack Ouro do Marceneiro &copy; 2026</p>
          <div className="text-zinc-500 text-xs max-w-2xl mx-auto leading-relaxed font-medium space-y-1">
            <p>Material independente, sem vínculo com plataformas terceiras.</p>
            <p>Resultados podem variar conforme aplicação.</p>
            <p className="mt-4 font-bold">Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isUpsellOpen && (
          <div key="upsell-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUpsellOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl flex flex-col max-h-[95vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsUpsellOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 md:p-8 flex flex-col items-center text-center overflow-y-auto custom-scrollbar">
                {/* Gift Icon */}
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 shrink-0">
                  <Gift className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl font-black text-zinc-900 mb-2">
                  Parabéns! Você ganhou um presente!
                </h2>
                
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rotate-45" />
                  <div className="w-2 h-2 bg-emerald-500 rotate-45" />
                  <div className="w-2 h-2 bg-emerald-500 rotate-45" />
                </div>

                <p className="text-zinc-600 font-bold mb-6">
                  Oferta exclusiva só para você!
                </p>

                {/* Offer Box */}
                <div className="w-full bg-[#FFFCF2] border-2 border-emerald-500 rounded-3xl p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-black text-zinc-900 mb-4">
                    Leve a Versão Completa + Bônus
                  </h3>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-red-500 line-through text-sm font-bold mb-1">R$ 147,00</span>
                    <div className="flex items-baseline justify-center text-emerald-600">
                      <span className="text-4xl font-black mr-1">R$</span>
                      <span className="text-7xl font-black tracking-tighter">14</span>
                      <span className="text-3xl font-black">,99</span>
                    </div>
                    <span className="text-emerald-600 font-black text-sm mt-3">
                      Economia de R$ 132,01!
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="w-full text-left space-y-3 mb-8 px-2">
                  <p className="font-black text-zinc-900 mb-4">Você vai receber:</p>
                  {[
                    "+1000 Projetos de Marcenaria completos",
                    "Planilha de Precificação Automática (Bônus)",
                    "Guia de Corte Inteligente (Bônus)",
                    "Lista de Fornecedores VIP (Bônus)",
                    "Atualizações mensais vitalícias"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-zinc-700 leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="w-full space-y-4">
                  <button className="w-full bg-[#22C55E] hover:bg-[#16a34a] text-white py-5 rounded-2xl font-black text-xl shadow-lg shadow-emerald-500/20 transition-all uppercase tracking-tight">
                    QUERO APROVEITAR O DESCONTO!
                  </button>
                  <button 
                    onClick={() => setIsUpsellOpen(false)}
                    className="w-full bg-white border border-zinc-200 text-zinc-400 py-4 rounded-2xl font-bold text-base hover:bg-zinc-50 transition-all"
                  >
                    Não, Quero o pacote básico.
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
