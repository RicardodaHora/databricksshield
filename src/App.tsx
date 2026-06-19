import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { HEROES_DATA } from './data';
import { Hero } from './types';
import HeroCard from './components/HeroCard';
import MissionSimulator from './components/MissionSimulator';
import ArchitectureLab from './components/ArchitectureLab';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import leagueOfDataImage from './assets/images/league_of_data_vector_1781883092411.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState<'heroes' | 'simulation' | 'lab' | 'diagram'>('heroes');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  // Dynamic icon resolution helper
  const getHeroIcon = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.Layers;
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* HUD-styled Top Header */}
      <header className="border-b border-sky-500/20 bg-slate-950/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <LucideIcons.ShieldAlert className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-sky-400 font-bold block uppercase">
                QG DOS VINGADORES DE DADOS
              </span>
              <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                A Liga dos Dados: Azure Databricks
              </h1>
            </div>
          </div>

          {/* Quick HUD details */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="hidden md:block bg-slate-900 border border-white/5 py-1.5 px-3 rounded-lg">
              <span className="text-emerald-400">● SISTEMA ONLINE:</span> Databricks Serverless
            </div>
            <div className="bg-slate-900 border border-white/5 py-1.5 px-3 rounded-lg text-[11px]">
              UTC: <span className="font-bold text-slate-200">2026-06-19</span>
            </div>
          </div>

        </div>
      </header>

      {/* Hero Visual Section showcasing the generated Illustration */}
      <section className="relative overflow-hidden border-b border-sky-500/15 py-12 px-4 shadow-2xl bg-gradient-to-b from-[#0c1322] to-[#070b13]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Conceptual Pitch */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-cyan-300">
              <LucideIcons.Zap className="h-3.5 w-3.5 animate-pulse" />
              Analogia Arquitetural de Alto Impacto
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-100 leading-tight">
              Seu Lakehouse como as defesas da <span className="text-red-500 hover:text-red-400 transition-colors cursor-pointer">S.H.I.E.L.D.</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              Imagine o ecossistema corporativo moderno de dados como o Quartel-General dos Vingadores. 
              Cada ferramenta e recurso nativo possui uma função vital, agindo como heróis específicos 
              para manter seus pipelines estáveis, sua governança indestrutível e seu valor analítico afiado.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <LucideIcons.Shield className="h-4 w-4 text-sky-400" />
                Segurança Sólida
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <LucideIcons.Cpu className="h-4 w-4 text-amber-400" />
                Escalabilidade Stark
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <LucideIcons.Gem className="h-4 w-4 text-purple-400" />
                Prontidão Wakanda (IA)
              </div>
            </div>
          </div>

          {/* Generated Banner Image with futuristic overlay border */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl border-2 border-sky-500/30 overflow-hidden shadow-2xl shadow-indigo-950/40 group">
              
              {/* Main Image generated via tool */}
              <img
                src={leagueOfDataImage}
                alt="QG Computacional dos Vingadores de Dados"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* HUD grid line decorative overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  ILUSTRAÇÃO REPROJETADA - S.H.I.E.L.D. LABS
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Main Tab Navigation Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-8">
        
        {/* Navigation Selector Tabs */}
        <div className="flex border-b border-slate-800/80 justify-start gap-2 overflow-x-auto pb-1" id="navigation-tabs">
          {[
            { id: 'heroes', label: 'Os Heróis de Dados', icon: 'Users' },
            { id: 'simulation', label: 'Simulador de Missão', icon: 'Cpu' },
            { id: 'lab', label: 'Laboratório S.H.I.E.L.D.', icon: 'Wrench' },
            { id: 'diagram', label: 'A esteira da Linhagem', icon: 'GitFork' },
          ].map((tab) => {
            const TabIcon = (LucideIcons as any)[tab.icon] || LucideIcons.Compass;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                id={`tab-${tab.id}`}
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedHero(null); // Clear drawer on tab shift
                }}
                className={`py-2 px-4 rounded-xl font-bold font-mono text-xs tracking-wider transition-all duration-200 shrink-0 flex items-center gap-1.5 border-b-2 ${
                  isTabActive
                    ? 'border-cyan-500 bg-cyan-950/20 text-cyan-300'
                    : 'border-transparent text-slate-400 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                <TabIcon className="h-4 w-4" />
                {tab.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display based on active Tab */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Heroes Grid */}
            {activeTab === 'heroes' && (
              <motion.div
                key="heroes-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                <div className="flex border-b border-slate-800 pb-3 justify-between items-center flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-1.5 font-mono">
                      <LucideIcons.Tv className="h-5 w-5 text-indigo-400" />
                      Fichários dos Heróis da Liga
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Clique em qualquer herói da arquitetura Databricks para abrir o dossiê secreto de operações.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {HEROES_DATA.map((hero) => (
                    <HeroCard
                      key={hero.id}
                      hero={hero}
                      isSelected={selectedHero?.id === hero.id}
                      onClick={() => setSelectedHero(selectedHero?.id === hero.id ? null : hero)}
                    />
                  ))}
                </div>

                {/* Drawers / Detailed Panel when selected */}
                <AnimatePresence>
                  {selectedHero && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="bg-slate-950 border-2 border-cyan-500/40 rounded-2xl p-6 shadow-xl relative mt-8 overflow-hidden"
                      id="hero-detail-panel"
                    >
                      <div className="absolute top-0 right-0 p-4">
                        <button
                          id="close-drawer-btn"
                          onClick={() => setSelectedHero(null)}
                          className="p-1 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-slate-200"
                        >
                          <LucideIcons.X className="h-4.5 w-4.5" />
                        </button>
                      </div>

                      {/* Header in Detail panel */}
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400">
                          {(() => {
                            const SvgIcon = getHeroIcon(selectedHero.iconName);
                            return <SvgIcon className="h-8 w-8" />;
                          })()}
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase">
                            Dossiê de Campo: {selectedHero.marvelHero}
                          </span>
                          <h4 className="text-2xl font-black tracking-tight text-white mt-1">
                            {selectedHero.name}
                          </h4>
                          <p className="text-xs font-mono text-slate-400 mt-0.5">
                            Sub-componente tecnológico: {selectedHero.role}
                          </p>
                        </div>
                      </div>

                      {/* Summary Section */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-slate-800">
                        <div className="md:col-span-2 space-y-4">
                          <p className="text-sm text-slate-300 font-medium leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-white/5">
                            {selectedHero.description}
                          </p>

                          <div className="space-y-2">
                            <span className="text-xs font-mono text-slate-400 font-bold block uppercase tracking-wider">
                              Blueprint de Implementação Técnico:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {selectedHero.technicalDetails.map((detail, idx) => (
                                <div key={idx} className="p-3 bg-slate-950 border border-white/5 rounded-lg text-xs leading-normal text-slate-300 font-mono">
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Superpower card card */}
                        <div className="bg-gradient-to-br from-[#0c1322] to-[#121c32] border border-cyan-500/30 p-5 rounded-xl space-y-4 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase block">
                              Poder Sobrenatural de Engenharia
                            </span>
                            <h5 className="text-base font-bold text-slate-100 uppercase mt-1">
                              {selectedHero.superpower}
                            </h5>
                          </div>
                          
                          <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-3">
                            <h6 className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                              Rendimento Operacional
                            </h6>
                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between items-center text-[11px] font-mono">
                                <span className="text-slate-400">Escalabilidade:</span>
                                <span className="text-amber-400 font-bold">Alta Estelar</span>
                              </div>
                              <div className="flex justify-between items-center text-[11px] font-mono">
                                <span className="text-slate-400">Isolamento ACID:</span>
                                <span className="text-emerald-400 font-bold">Inviolável</span>
                              </div>
                              <div className="flex justify-between items-center text-[11px] font-mono">
                                <span className="text-slate-400">Custos (DBU):</span>
                                <span className="text-cyan-400 font-bold">Otimizável Serverless</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}

            {/* Tab 2: Live Mission Simulation */}
            {activeTab === 'simulation' && (
              <motion.div
                key="simulation-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <MissionSimulator />
              </motion.div>
            )}

            {/* Tab 3: Interactive Sandbox Lab */}
            {activeTab === 'lab' && (
              <motion.div
                key="lab-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <ArchitectureLab />
              </motion.div>
            )}

            {/* Tab 4: visual flow diagram */}
            {activeTab === 'diagram' && (
              <motion.div
                key="diagram-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <ArchitectureDiagram />
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </section>

      {/* Footer Branding Area */}
      <footer className="border-t border-sky-500/10 bg-slate-950 py-8 px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            <p>© 2026 S.H.I.E.L.D. Data Operations Center.</p>
            <p className="mt-0.5">Criado com amor e analogias baseadas em Azure Databricks Lakehouse.</p>
          </div>
          <div className="flex items-center gap-2 text-cyan-500 font-semibold bg-cyan-950/20 py-1.5 px-3 rounded-lg border border-cyan-800/30">
            <LucideIcons.Shield className="h-4 w-4" />
            Universo de Dados Blindado
          </div>
        </div>
      </footer>

    </div>
  );
}
