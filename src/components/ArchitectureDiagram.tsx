import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

export default function ArchitectureDiagram() {
  const steps = [
    {
      id: 'step-1',
      title: '1. Ingestão Mágica',
      hero: 'Dr. Estranho',
      tech: 'Azure Data Factory (ADF)',
      color: 'border-red-500/50 text-red-400 bg-red-500/5',
      desc: 'Abre conexões cósmicas para sugar dados estruturados e brutos.'
    },
    {
      id: 'step-2',
      title: '2. Armazenamento Real',
      hero: 'Asgard',
      tech: 'Azure Data Lake Storage (ADLS)',
      color: 'border-indigo-500/50 text-indigo-400 bg-indigo-500/5',
      desc: 'Consolida arquivos brutos (Bronze) em diretórios seguros de alta escala.'
    },
    {
      id: 'step-3',
      title: '3. Engine Stark',
      hero: 'Homem de Ferro',
      tech: 'Databricks Spark Clusters',
      color: 'border-amber-500/50 text-amber-400 bg-amber-500/5',
      desc: 'Voa veloz com nós distribuidos para transformar, agrupar e limpar o bruto.'
    },
    {
      id: 'step-4',
      title: '4. Escudo da Verdade',
      hero: 'Capitão América',
      tech: 'Delta Lake (Camada ACID)',
      color: 'border-blue-500/50 text-blue-400 bg-blue-500/5',
      desc: 'Cria tabelas de Prata/Ouro e garante isolamento ACID e histórico.'
    }
  ];

  return (
    <div className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-6 backdrop-blur-md" id="architecture-diagram">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-sm font-semibold text-amber-400 font-mono tracking-wider flex items-center gap-1.5 uppercase">
          <LucideIcons.GitFork className="h-4.5 w-4.5 text-amber-400" />
          Mapeamento Visual da Linhagem (Data Lineage Map)
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Veja abaixo a esteira linear (Data Pipeline) unificada pelo Databricks Lakehouse.
        </p>
      </div>

      {/* Main flow map */}
      <div className="mt-8 space-y-8 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-4 overflow-x-auto pb-4">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex-1 flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`w-full max-w-sm rounded-xl border p-4 text-center ${step.color} relative`}
            >
              <span className="absolute -top-3 left-4 bg-slate-950 px-2 py-0.5 text-[9px] font-mono tracking-widest text-slate-400 uppercase rounded border border-white/10">
                {step.title}
              </span>
              <h4 className="text-xs font-mono font-bold mt-1 text-slate-100">{step.hero}</h4>
              <p className="text-[10px] text-slate-400 font-semibold">{step.tech}</p>
              <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">{step.desc}</p>
            </motion.div>

            {/* Connecting Chevron arrow pointing to next step */}
            {idx < steps.length - 1 && (
              <div className="flex justify-center items-center py-2 lg:py-0 lg:absolute lg:top-1/2 lg:-right-3 lg:-translate-y-1/2 text-slate-600">
                <LucideIcons.ChevronRight className="h-5 w-5 rotate-90 lg:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Branching of Final insights: SQL and AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-800/60 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-slate-950 border border-slate-800/80 rounded-full px-4 py-1 text-[10px] font-mono text-slate-400">
          <LucideIcons.ChevronDown className="h-3 w-3" />
          DIFUSÃO DE INSIGHTS (GOLD ZONE)
          <LucideIcons.ChevronDown className="h-3 w-3" />
        </div>

        {/* SQL Warehouse Row */}
        <div className="bg-slate-950/40 p-5 rounded-xl border border-sky-500/20 hover:border-sky-500/40 transition-colors flex gap-4">
          <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 h-fit">
            <LucideIcons.Zap className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-sky-300">BI Estelar: Thor (Databricks SQL)</h4>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Descarrega o trovão analítico Mjolnir para alimentar de forma veloz dashboards executivos, relatórios de Power BI, consultas de auditores e sandbox imediata de analistas em milissegundos.
            </p>
          </div>
        </div>

        {/* MLflow Row */}
        <div className="bg-slate-950/40 p-5 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors flex gap-4">
          <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 h-fit">
            <LucideIcons.FlaskConical className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-purple-300">Ciência de Dados: Pantera Negra (MLflow)</h4>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Refina dados limpos da Gold zone dentro do avançado laboratório tecnológico para instanciar e empacotar modelos preditivos, previsões comportamentais e inteligências artificiais com MLOps seguro.
            </p>
          </div>
        </div>
      </div>

      {/* Global Security Wrapper: Nick Fury / Unity Catalog */}
      <div className="mt-6 p-4 bg-emerald-950/10 border border-emerald-500/20 rounded-xl text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
        <p className="text-xs font-mono text-emerald-400 font-bold flex items-center justify-center gap-1.5 uppercase">
          <LucideIcons.Eye className="h-4.5 w-4.5" />
          Círculo de Governança Estrito: Nick Fury (Unity Catalog)
        </p>
        <p className="text-xs text-slate-300 max-w-2xl mx-auto mt-1 leading-relaxed">
          Soberania sob todo o perímetro. Nick Fury cobre e gerencia a linhagem completa, auditoria das consultas de Thor, registros de modelos do Pantera Negra e acessos estritos de Asgard. Nada acontece no QG sem a sua credencial expressa.
        </p>
      </div>
    </div>
  );
}
