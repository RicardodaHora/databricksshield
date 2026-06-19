import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { MISSION_PRESETS, HEROES_DATA } from '../data';
import { MissionPreset, SimulationLog } from '../types';

export default function MissionSimulator() {
  const [selectedPreset, setSelectedPreset] = useState<MissionPreset>(MISSION_PRESETS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);
  const [logs, setLogs] = useState<SimulationLog[]>([]);
  const [stats, setStats] = useState({
    recordsProcessed: 0,
    computeSpent: 0,
    costSaved: 0,
  });

  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll console logs
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Handle simulation flow
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && currentStepIdx >= 0 && currentStepIdx < selectedPreset.steps.length) {
      const step = selectedPreset.steps[currentStepIdx];
      const correspondingHero = HEROES_DATA.find((h) => h.id === step.heroId);

      // Add log
      const newLog: SimulationLog = {
        timestamp: new Date().toLocaleTimeString('pt-BR'),
        hero: correspondingHero?.marvelHero || 'Sistema',
        message: step.technicalLog,
        type: currentStepIdx === 0 ? 'info' : currentStepIdx === 4 ? 'warning' : 'success',
      };

      setLogs((prev) => [...prev, newLog]);

      // Incremental stats mimicking active work
      setStats((prev) => ({
        recordsProcessed: prev.recordsProcessed + Math.floor(Math.random() * 500000) + 120000,
        computeSpent: prev.computeSpent + (Math.random() * 1.4 + 0.3),
        costSaved: prev.costSaved + Math.floor(Math.random() * 40) + 15,
      }));

      // Next step schedule
      timer = setTimeout(() => {
        if (currentStepIdx === selectedPreset.steps.length - 1) {
          setIsRunning(false);
          // Final mission complete log
          setLogs((prev) => [
            ...prev,
            {
              timestamp: new Date().toLocaleTimeString('pt-BR'),
              hero: 'Nick Fury (S.H.I.E.L.D.)',
              message: '⚡ SUCESSO ABSOLUTO! O universo dos dados foi sincronizado e garantido com alta performance. Vingadores, desmobilizar!',
              type: 'success',
            },
          ]);
        } else {
          setCurrentStepIdx((prev) => prev + 1);
        }
      }, 1800);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStepIdx, selectedPreset]);

  const startSimulation = () => {
    setLogs([]);
    setCurrentStepIdx(0);
    setIsRunning(true);
    setStats({
      recordsProcessed: 0,
      computeSpent: 0,
      costSaved: 0,
    });
    setLogs([
      {
        timestamp: new Date().toLocaleTimeString('pt-BR'),
        hero: 'Central de Crise',
        message: '🚨 ALERTA GERAL: Nova missão de alta prioridade solicitada. Inicializando barramentos de ETL em Asgard...',
        type: 'alert',
      },
    ]);
  };

  const handleSelectPreset = (preset: MissionPreset) => {
    setSelectedPreset(preset);
    // Reset if it was running or finished
    setIsRunning(false);
    setCurrentStepIdx(-1);
    setLogs([]);
    setStats({
      recordsProcessed: 0,
      computeSpent: 0,
      costSaved: 0,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="simulation-module">
      {/* Selector and Mission Details Left Col */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md">
          <h3 className="text-sm font-semibold text-sky-400 font-mono tracking-wider flex items-center gap-2 uppercase">
            <LucideIcons.ShieldAlert className="h-4.5 w-4.5 text-red-500" />
            1. Selecione a Missão Tática
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Escolha uma operação analítica corporativa para ver a liga entrar em ação no Lakehouse.
          </p>

          <div className="space-y-3 mt-4">
            {MISSION_PRESETS.map((preset) => {
              const PresetIcon = (LucideIcons as any)[preset.icon] || LucideIcons.Compass;
              const isSelected = selectedPreset.id === preset.id;
              return (
                <button
                  id={`preset-btn-${preset.id}`}
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  disabled={isRunning}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                    isSelected
                      ? 'bg-sky-500/10 border-sky-500/70 text-slate-100 shadow-md shadow-sky-500/5'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-400 hover:border-slate-700/80 hover:bg-slate-900/30'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-900 text-slate-500'}`}>
                    <PresetIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-mono font-bold tracking-tight ${isSelected ? 'text-sky-300' : 'text-slate-200'}`}>
                      {preset.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1 block">
                      {preset.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Mission Guide */}
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md">
          <h3 className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <LucideIcons.Tv className="h-4 w-4 text-slate-400" />
            Estrutura do Fluxograma Tático
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            Cada herói cuida de uma etapa necessária da arquitetura Azure Databricks na sequência lógica de processamento:
          </p>

          <div className="space-y-2.5 mt-4 relative pl-3 border-l border-slate-800">
            {selectedPreset.steps.map((step, idx) => {
              const hero = HEROES_DATA.find((h) => h.id === step.heroId);
              const isCurrent = idx === currentStepIdx;
              const isCompleted = idx < currentStepIdx;

              return (
                <div key={idx} className="relative text-xs">
                  {/* Status Node dot */}
                  <span className={`absolute -left-[16.5px] top-1 h-2 w-2 rounded-full ring-2 ring-slate-950 ${
                    isCurrent ? 'bg-sky-400 ring-sky-400 animate-ping' : isCompleted ? 'bg-emerald-500' : 'bg-slate-700'
                  }`} />
                  
                  <div className={`p-2 rounded-lg transition-colors ${isCurrent ? 'bg-sky-950/30 border border-sky-800/30' : ''}`}>
                    <p className="font-mono text-[11px] font-bold text-slate-300">
                      Passo {idx + 1}: {hero?.marvelHero} ({hero?.name.split(' (')[0]})
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <button
              id="start-mission-btn"
              onClick={startSimulation}
              disabled={isRunning}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs font-mono tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                isRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/20'
                  : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 border border-red-500 hover:scale-[1.02]'
              }`}
            >
              {isRunning ? (
                <>
                  <LucideIcons.Loader2 className="h-4 w-4 animate-spin" />
                  AVANTE VINGADORES (SIMULANDO...)
                </>
              ) : (
                <>
                  <LucideIcons.Play className="h-4 w-4" />
                  INICIAR MISSÃO ANALÍTICA
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Simulator Monitoring Frame Right Col */}
      <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
        {/* Real-time Animated Map / Radar of the Avengers Team */}
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
              <span className="font-mono text-xs text-slate-100 font-bold flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isRunning ? 'bg-red-400' : 'bg-slate-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isRunning ? 'bg-red-500' : 'bg-slate-400'}`}></span>
                </span>
                S.H.I.E.L.D. DATA RADAR: MONITORAMENTO DE WORKFLOW
              </span>
              <span className="text-xs font-mono text-slate-500">
                PRESSET: {selectedPreset.id.toUpperCase()}
              </span>
            </div>

            {/* Radar layout depicting Heroes */}
            <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
              {HEROES_DATA.map((hero, idx) => {
                const HeroIcon = (LucideIcons as any)[hero.iconName] || LucideIcons.User;
                const isStepActive = currentStepIdx >= 0 && selectedPreset.steps[currentStepIdx]?.heroId === hero.id;
                const isStepFinished = currentStepIdx > 0 && selectedPreset.steps.findIndex((s) => s.heroId === hero.id) < currentStepIdx;

                return (
                  <div
                    key={hero.id}
                    className={`p-3 rounded-xl border text-center transition-all duration-300 relative ${
                      isStepActive
                        ? 'bg-amber-500/10 border-amber-500 scale-105 shadow-md shadow-amber-500/10'
                        : isStepFinished
                        ? 'bg-emerald-500/5 border-emerald-500/40 text-slate-300'
                        : 'bg-slate-950/60 border-slate-800/40 opacity-50'
                    }`}
                  >
                    {isStepActive && (
                      <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
                      </span>
                    )}

                    <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center p-2 mb-2 ${
                      isStepActive ? 'bg-amber-500/20 text-amber-400' : isStepFinished ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-900 text-slate-600'
                    }`}>
                      <HeroIcon className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] font-semibold text-slate-400 font-mono tracking-tight uppercase truncate">
                      {hero.marvelHero}
                    </p>
                    <p className="text-[11px] font-bold text-slate-200 truncate">
                      {hero.id.toUpperCase()}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Console Output Log */}
          <div className="mt-4 flex-1 flex flex-col justify-end">
            <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <LucideIcons.Terminal className="h-4 w-4" />
              Console de Saída Analítico
            </h4>
            <div className="bg-slate-950 border border-slate-800/60 rounded-xl p-4 h-60 overflow-y-auto font-mono text-[11px] leading-relaxed select-text shadow-inner">
              <AnimatePresence mode="popLayout">
                {logs.length === 0 ? (
                  <div className="h-full flex flex-col justify-center items-center text-slate-600 text-center gap-2">
                    <LucideIcons.Activity className="h-8 w-8 text-slate-700 animate-pulse" />
                    <span>Aguardando inicialização da simulação...</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {logs.map((log, index) => {
                      let colorClass = 'text-sky-400';
                      if (log.type === 'success') colorClass = 'text-green-400';
                      if (log.type === 'warning') colorClass = 'text-yellow-400';
                      if (log.type === 'alert') colorClass = 'text-red-400';

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex gap-2 items-start"
                        >
                          <span className="text-slate-600 shrink-0 select-none">[{log.timestamp}]</span>
                          <span className={`font-semibold shrink-0 select-none ${colorClass}`}>
                            [{log.hero.toUpperCase()}]:
                          </span>
                          <span className="text-slate-200">{log.message}</span>
                        </motion.div>
                      );
                    })}
                    <div ref={consoleEndRef} />
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Telemetry counters */}
          <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-slate-800/80">
            <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Registros Minerados</span>
              <span className="text-lg font-bold text-cyan-400 font-mono">
                {stats.recordsProcessed.toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Custo de Computação</span>
              <span className="text-lg font-bold text-amber-400 font-mono">
                {stats.computeSpent.toFixed(2)} DBU
              </span>
            </div>
            <div className="bg-slate-950/50 p-3 rounded-xl border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Eficiência Líquida</span>
              <span className="text-lg font-bold text-green-400 font-mono">
                +{stats.costSaved}% d/v
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
