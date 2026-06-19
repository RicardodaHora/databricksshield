import { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Hero } from '../types';

interface HeroCardProps {
  key?: string;
  hero: Hero;
  isSelected: boolean;
  onClick: () => void;
}

export default function HeroCard({ hero, isSelected, onClick }: HeroCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Dynamic icon resolution
  const IconComponent = (LucideIcons as any)[hero.iconName] || LucideIcons.HelpCircle;

  // Color mapping for borders, glows, and badges
  const colorMap: Record<string, {
    bg: string;
    text: string;
    border: string;
    glow: string;
    subtleBg: string;
    gradient: string;
  }> = {
    indigo: {
      bg: 'bg-indigo-600',
      text: 'text-indigo-400',
      border: 'border-indigo-500/30 hover:border-indigo-500/80',
      glow: 'shadow-indigo-500/20',
      subtleBg: 'bg-indigo-500/10',
      gradient: 'from-indigo-600/20 to-indigo-950/40',
    },
    red: {
      bg: 'bg-red-600',
      text: 'text-red-400',
      border: 'border-red-500/30 hover:border-red-500/80',
      glow: 'shadow-red-500/20',
      subtleBg: 'bg-red-500/10',
      gradient: 'from-red-600/20 to-red-950/40',
    },
    amber: {
      bg: 'bg-amber-500',
      text: 'text-amber-400',
      border: 'border-amber-500/30 hover:border-amber-500/80',
      glow: 'shadow-amber-500/20',
      subtleBg: 'bg-amber-500/10',
      gradient: 'from-amber-600/20 to-amber-950/40',
    },
    blue: {
      bg: 'bg-blue-600',
      text: 'text-blue-400',
      border: 'border-blue-500/30 hover:border-blue-500/80',
      glow: 'shadow-blue-500/20',
      subtleBg: 'bg-blue-500/10',
      gradient: 'from-blue-600/20 to-blue-950/40',
    },
    emerald: {
      bg: 'bg-emerald-600',
      text: 'text-emerald-400',
      border: 'border-emerald-500/30 hover:border-emerald-500/80',
      glow: 'shadow-emerald-500/20',
      subtleBg: 'bg-emerald-500/10',
      gradient: 'from-emerald-600/20 to-emerald-950/40',
    },
    sky: {
      bg: 'bg-sky-500',
      text: 'text-sky-400',
      border: 'border-sky-500/30 hover:border-sky-500/80',
      glow: 'shadow-sky-500/20',
      subtleBg: 'bg-sky-500/10',
      gradient: 'from-sky-600/20 to-sky-950/40',
    },
    purple: {
      bg: 'bg-purple-600',
      text: 'text-purple-400',
      border: 'border-purple-500/30 hover:border-purple-500/80',
      glow: 'shadow-purple-500/20',
      subtleBg: 'bg-purple-500/10',
      gradient: 'from-purple-600/20 to-purple-950/40',
    },
  };

  const style = colorMap[hero.vibeColor] || colorMap.indigo;

  // Custom stats for aesthetic immersion (non-tech larping, pure character stats)
  const getStats = (id: string) => {
    switch (id) {
      case 'adls': return { cap: 'Armazenamento', val: 'Ilimitado', p: 98, l: 'Resiliência' };
      case 'adf': return { cap: 'Ingestão/Orquestra', val: '+100 Conectores', p: 95, l: 'Magia de Fluxo' };
      case 'compute': return { cap: 'Efi. Computação', val: 'Veloz (Photon)', p: 99, l: 'Processamento' };
      case 'delta': return { cap: 'Integridade ACID', val: 'Inviolável', p: 100, l: 'Fidelidade' };
      case 'unity': return { cap: 'Governança & Lineage', val: 'Nível S.H.I.E.L.D.', p: 97, l: 'Visão Global' };
      case 'sql': return { cap: 'Consultas Recorrentes', val: 'Sub-segundo', p: 96, l: 'Velocidade do Raio' };
      case 'mlflow': return { cap: 'Inovação de IA', val: 'MLOps Wakanda', p: 94, l: 'Calibração de Modelos' };
      default: return { cap: 'Capacidade', val: 'Nível Estelar', p: 90, l: 'Eficiência' };
    }
  };

  const stats = getStats(hero.id);

  return (
    <motion.div
      layoutId={`card-${hero.id}`}
      id={`hero-${hero.id}`}
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border bg-slate-900/60 p-6 transition-all duration-300 backdrop-blur-md ${
        isSelected 
          ? `border-2 border-opacity-100 ${style.border.split(' ')[0]} ring-1 ring-offset-2 ring-offset-slate-950 ring-${hero.vibeColor}-500/40 shadow-xl ${style.glow}` 
          : `${style.border} hover:shadow-lg`
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle color gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-20 pointer-events-none`} />

      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          {/* Avatar Icon */}
          <div className={`p-3 rounded-xl ${style.subtleBg} ${style.text} ring-1 ring-white/10 flex items-center justify-center`}>
            <IconComponent className="h-6 w-6" id={`icon-${hero.id}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${style.subtleBg} ${style.text}`}>
                {hero.marvelHero}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 tracking-tight mt-1">
              {hero.name.split(' (')[0]}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {hero.role}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-amber-200/90 italic flex items-center gap-1.5">
          <LucideIcons.Sparkles className="h-3.5 w-3.5 text-amber-300" />
          {hero.superpower}
        </p>
        <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-3">
          {hero.description}
        </p>
      </div>

      {/* Visual Stats Block (Aesthetic Infographics) */}
      <div className="mt-5 pt-4 border-t border-slate-800/60 space-y-3">
        <div>
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>Atributo: {stats.l}</span>
            <span className={style.text}>{stats.p}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-950 rounded-full mt-1 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${stats.p}%` }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`h-full ${style.bg} rounded-full`}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-[11px] font-mono bg-slate-950/40 p-2 rounded border border-white/5">
          <span className="text-slate-400">{stats.cap}:</span>
          <span className="text-slate-200 font-semibold">{stats.val}</span>
        </div>
      </div>

      {/* Expanded Ficha Técnica */}
      <div className="mt-4">
        <button
          id={`toggle-details-${hero.id}`}
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(!showDetails);
          }}
          className={`w-full flex items-center justify-between text-xs font-mono py-1 px-2 rounded hover:bg-white/5 transition-colors ${style.text}`}
        >
          <span>{showDetails ? '▲ Ocultar Blueprint Técnico' : '▼ Expandir Blueprint Técnico'}</span>
          <LucideIcons.FileCode className="h-3.5 w-3.5" />
        </button>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 space-y-2 bg-slate-950/70 p-3 rounded-lg border border-white/5 text-xs text-slate-300"
          >
            <p className="font-mono text-slate-400 border-b border-white/10 pb-1 mb-1 flex items-center gap-1">
              <LucideIcons.ShieldAlert className="h-3 w-3" />
              Especificações sob o Capô (Azure + Databricks):
            </p>
            {hero.technicalDetails.map((detail, idx) => (
              <div key={idx} className="flex gap-2 items-start leading-tight">
                <span className={`text-sm select-none leading-none mt-0.5 ${style.text}`}>•</span>
                <span>{detail}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
