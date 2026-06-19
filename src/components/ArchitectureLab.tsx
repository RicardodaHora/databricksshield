import { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { HEROES_DATA } from '../data';

export default function ArchitectureLab() {
  // All components are enabled by default
  const [activeComponents, setActiveComponents] = useState<Record<string, boolean>>({
    adls: true,
    adf: true,
    compute: true,
    delta: true,
    unity: true,
    sql: true,
    mlflow: true,
  });

  const toggleComponent = (id: string) => {
    setActiveComponents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const enableAll = () => {
    setActiveComponents({
      adls: true,
      adf: true,
      compute: true,
      delta: true,
      unity: true,
      sql: true,
      mlflow: true,
    });
  };

  // Calculate scores based on active combination
  const calculateScores = () => {
    let security = 15; // Base storage security if ADLS is active
    let performance = 10;
    let integrity = 10;
    let rIA = 0;

    if (activeComponents.adls) {
      security += 20;
      integrity += 10;
    }
    if (activeComponents.adf) {
      performance += 15;
    }
    if (activeComponents.compute) {
      performance += 35;
    }
    if (activeComponents.delta) {
      integrity += 60;
      performance += 5;
    }
    if (activeComponents.unity) {
      security += 45;
      integrity += 15;
    }
    if (activeComponents.sql) {
      performance += 30;
    }
    if (activeComponents.mlflow) {
      rIA += 80;
      performance += 5;
    }

    // Storage is required for anything else
    if (!activeComponents.adls) {
      security = Math.floor(security / 3);
      integrity = Math.floor(integrity / 4);
      performance = Math.floor(performance / 2);
      rIA = Math.floor(rIA / 2);
    }

    return {
      security: Math.min(security, 100),
      performance: Math.min(performance, 100),
      integrity: Math.min(integrity, 100),
      rIA: Math.min(rIA + (activeComponents.compute ? 20 : 0), 100),
    };
  };

  const scores = calculateScores();

  // Find warnings
  const getWarnings = () => {
    const alerts: { id: string; msg: string; severity: 'high' | 'warn'; hero: string }[] = [];

    if (!activeComponents.adls) {
      alerts.push({
        id: 'adls-off',
        hero: 'Asgard (ADLS)',
        msg: 'Falta de Repositório Estável! Sem Asgard, todos os seus dados estão dispersos e inseguros no vazio cósmico. Seus heróis não têm onde pisar.',
        severity: 'high'
      });
    }
    if (!activeComponents.delta) {
      alerts.push({
        id: 'delta-off',
        hero: 'Capitão América (Delta Lake)',
        msg: 'Ameaça de Anarquia de Dados/Corrupção! Sem transações ACID, você terá dados corrompidos por colisões assíncronas e "viagem no tempo" desregulada.',
        severity: 'high'
      });
    }
    if (!activeComponents.unity) {
      alerts.push({
        id: 'unity-off',
        hero: 'Nick Fury (Unity)',
        msg: 'Invasão Hacker da Hydra! Sem governança centralizada, qualquer renegado planetário pode ler arquivos altamente confidenciais.',
        severity: 'high'
      });
    }
    if (!activeComponents.compute) {
      alerts.push({
        id: 'compute-off',
        hero: 'Homem de Ferro (Compute)',
        msg: 'Gargalo Computacional Fatal! Nenhuma rotina de transformação de grande densidade consegue ser inicializada.',
        severity: 'high'
      });
    }
    if (!activeComponents.sql && (activeComponents.adls || activeComponents.delta)) {
      alerts.push({
        id: 'sql-off',
        hero: 'Thor (Databricks SQL)',
        msg: 'Fúria dos Analistas Corporativos! Usuários de Power BI enfrentam queries pesadíssimas e lentidão absurda nos relatórios gerenciais.',
        severity: 'warn'
      });
    }
    if (!activeComponents.mlflow && activeComponents.compute) {
      alerts.push({
        id: 'mlflow-off',
        hero: 'Pantera Negra (MLflow)',
        msg: 'Inércia de Inteligência de IA! Sem governança de MLflow, seus cientistas treinam modelos em planilhas locais e perdem histórico científico.',
        severity: 'warn'
      });
    }

    return alerts;
  };

  const activeWarnings = getWarnings();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="architecture-lab">
      {/* Component Toggle deck */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md">
          <div className="flex border-b border-slate-800 pb-4 justify-between items-center flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-semibold text-rose-400 font-mono tracking-wider flex items-center gap-1.5 uppercase">
                <LucideIcons.LockKeyhole className="h-4.5 w-4.5 text-rose-500" />
                Painel Acoplador dos Vingadores
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Remova ou insira heróis na formação de dados e analise o impacto na telemetria do complexo.
              </p>
            </div>
            <button
              id="enable-all-btn"
              onClick={enableAll}
              className="text-xs font-mono font-bold bg-white/10 hover:bg-white/15 text-slate-200 py-1.5 px-3 rounded border border-white/10 active:scale-95 transition-all text-center"
            >
              Restaurar Liga Completa
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {HEROES_DATA.map((hero) => {
              const ToggleIcon = (LucideIcons as any)[hero.iconName] || LucideIcons.Layers;
              const isActive = activeComponents[hero.id];
              return (
                <div
                  key={hero.id}
                  id={`lab-toggle-${hero.id}`}
                  onClick={() => toggleComponent(hero.id)}
                  className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-900/80 border-cyan-500/50 hover:bg-slate-900 shadow-md shadow-cyan-500/5'
                      : 'bg-slate-950/20 border-slate-900 opacity-60 hover:opacity-100 hover:bg-slate-900/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-900 text-slate-600'}`}>
                      <ToggleIcon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">{hero.name.split(' (')[0]}</h4>
                      <p className="text-[10px] text-slate-400 font-mono italic">Codinome: {hero.marvelHero}</p>
                    </div>
                  </div>
                  
                  {/* Neon Toggle Switch */}
                  <div className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                    isActive ? 'bg-cyan-500 justify-end' : 'bg-slate-800 justify-start'
                  }`}>
                    <span className="h-4 w-4 rounded-full bg-slate-950 shadow-sm" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Warnings Console */}
        <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md">
          <h4 className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <LucideIcons.ShieldAlert className="h-4 w-4 text-red-500 animate-pulse" />
            Vulnerabilidades de Arquitetura Identificadas ({activeWarnings.length})
          </h4>

          {activeWarnings.length === 0 ? (
            <div className="mt-4 bg-emerald-900/10 border border-emerald-500/30 rounded-xl p-4 flex gap-3 text-xs leading-normal">
              <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 h-fit self-start">
                <LucideIcons.CheckCircle className="h-4 w-4" />
              </div>
              <div className="text-emerald-300">
                <p className="font-bold">Arquitetura Totalmente Segura!</p>
                <p className="text-slate-400 mt-0.5">
                  Excelente coordenação de dados. Os 7 heróis estão acoplados garantindo escalabilidade, integridade ACID, orquestração e blindagem contra anomalias.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-4 space-y-3 max-h-80 overflow-y-auto pr-1">
              {activeWarnings.map((item) => (
                <div
                  key={item.id}
                  className={`border rounded-xl p-3 text-xs leading-normal flex gap-3 ${
                    item.severity === 'high'
                      ? 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                      : 'bg-amber-950/20 border-amber-500/30 text-amber-300'
                  }`}
                >
                  <div className={`p-1.5 rounded h-fit self-start ${
                    item.severity === 'high' ? 'bg-rose-500/20 text-rose-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    <LucideIcons.AlertTriangle className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="font-bold font-mono text-[10px] uppercase block mb-1">
                      ETAPA PARALISADA: {item.hero}
                    </span>
                    <p className="text-slate-300 leading-normal">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Real-time Dials Right Col */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-slate-900/60 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md">
          <h3 className="text-xs font-mono font-bold text-slate-100 flex items-center gap-1.5 border-b border-slate-800 pb-3">
            <LucideIcons.PieChart className="h-4 w-4 text-cyan-400" />
            KPIs de Eficiência do Complexo
          </h3>

          <div className="space-y-6 mt-6">
            {/* Metric 1: Data Security */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1">
                  <LucideIcons.ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  Segurança & Governança S.H.I.E.L.D.
                </span>
                <span className={scores.security > 60 ? 'text-emerald-400 font-bold' : scores.security > 30 ? 'text-amber-400 font-bold' : 'text-red-500 font-bold'}>
                  {scores.security}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    scores.security > 60 ? 'bg-emerald-500' : scores.security > 30 ? 'bg-amber-500' : 'bg-rose-600'
                  }`}
                  animate={{ width: `${scores.security}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1 text-right italic">
                {scores.security > 60 ? 'Mapeamento de Linhagem ativo e coberto contra vazamentos' : 'Políticas expostas'}
              </p>
            </div>

            {/* Metric 2: Performance */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1">
                  <LucideIcons.Zap className="h-3.5 w-3.5 text-amber-400" />
                  Performance Computacional & Ingestão
                </span>
                <span className={scores.performance > 60 ? 'text-emerald-400 font-bold' : scores.performance > 30 ? 'text-amber-400 font-bold' : 'text-red-500 font-bold'}>
                  {scores.performance}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    scores.performance > 60 ? 'bg-amber-500' : scores.performance > 30 ? 'bg-amber-600' : 'bg-rose-600'
                  }`}
                  animate={{ width: `${scores.performance}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1 text-right italic">
                {scores.performance > 70 ? 'Photon Engine de alta compressão ativo' : 'Baixa velocidade de consulta'}
              </p>
            </div>

            {/* Metric 3: Integrity */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1">
                  <LucideIcons.Shuffle className="h-3.5 w-3.5 text-blue-400" />
                  Confiabilidade & Consistência ACID
                </span>
                <span className={scores.integrity > 60 ? 'text-emerald-400 font-bold' : scores.integrity > 30 ? 'text-amber-400 font-bold' : 'text-red-500 font-bold'}>
                  {scores.integrity}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    scores.integrity > 60 ? 'bg-blue-500' : scores.integrity > 30 ? 'bg-amber-500' : 'bg-rose-600'
                  }`}
                  animate={{ width: `${scores.integrity}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1 text-right italic">
                {scores.integrity > 60 ? 'Mecanismo Delta ativo: Sem medo de colisões de gravação' : 'Alto risco de concorrência corrompida'}
              </p>
            </div>

            {/* Metric 4: AI Readiness */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1">
                  <LucideIcons.FlaskConical className="h-3.5 w-3.5 text-purple-400" />
                  Prontidão científica para IA (ML Ready)
                </span>
                <span className={scores.rIA > 60 ? 'text-emerald-400 font-bold' : scores.rIA > 30 ? 'text-amber-400 font-bold' : 'text-red-500 font-bold'}>
                  {scores.rIA}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full mt-2 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${
                    scores.rIA > 60 ? 'bg-purple-500' : scores.rIA > 30 ? 'bg-amber-500' : 'bg-rose-600'
                  }`}
                  animate={{ width: `${scores.rIA}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1 text-right italic">
                {scores.rIA > 60 ? 'Modelos MLflow auditados e catalogados no Unity' : 'Pesquisa estática desconectada'}
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-950/60 rounded-xl border border-white/5 text-xs text-slate-400 italic">
            <p className="font-semibold text-slate-300 not-italic flex items-center gap-1">
              <LucideIcons.Compass className="h-4.5 w-4.5 text-sky-400" />
              Conselho de Arquitetura S.H.I.E.L.D.:
            </p>
            <p className="mt-1.5 leading-relaxed">
              "Para garantir uma arquitetura verdadeiramente unificada e moderna de Lakehouse, todas as camadas devem colaborar juntas. Ao remover o Delta Lake (Capitão América) ou o Unity Catalog (Nick Fury), você perde as engrenagens cruciais que diferenciam um data-lake bruto e selvagem de uma verdadeira fortaleza analítica de alto nível."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
