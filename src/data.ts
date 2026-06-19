import { Hero, MissionPreset } from './types';

export const HEROES_DATA: Hero[] = [
  {
    id: 'adls',
    name: 'Azure Data Lake Storage (ADLS)',
    marvelHero: 'Asgard',
    role: 'Repositório Central & Armazenamento Seguro',
    iconName: 'Database',
    superpower: 'Porto de Todo Conhecimento Cósmico',
    description: 'O reino onde todo o conhecimento e as relíquias (dados brutos, limpos e refinados) são armazenados com segurança indestrutível em escala estelar. Sem uma fundação sólida em Asgard, os dados flutuam no vácuo do espaço.',
    technicalDetails: [
      'Estrutura hierárquica baseada em blobs altamente escalável (ADLS Gen2).',
      'Integração nativa com segurança de rede Azure Active Directory e firewalls.',
      'Suporte a múltiplos formatos estruturados (Parquet, Delta) e não-estruturados (JSON, Imagens).'
    ],
    vibeColor: 'indigo'
  },
  {
    id: 'adf',
    name: 'Azure Data Factory (ADF)',
    marvelHero: 'Doutor Estranho',
    role: 'Orquestração & Portais de Ingestão de Dados',
    iconName: 'Sparkles',
    superpower: 'Invocação e Orquestração de Portais Multi-Dimensionais',
    description: 'O mestre supremo da magia dimensional. Capaz de abrir portais com precisão cósmica para sugar dados brutos de sistemas de terceiros, bancos legados ou planetas distantes, despejando-os com segurança dentro de Asgard.',
    technicalDetails: [
      'Processos automatizados de ETL/ELT com agendamentos avançados e loops.',
      'Mais de 100 conectores nativos corporativos de nuvem e servidores on-premise.',
      'Gatilhos baseados em eventos de criação de arquivo e atualizações de tabelas.'
    ],
    vibeColor: 'red'
  },
  {
    id: 'compute',
    name: 'Databricks Clusters (Spark Compute)',
    marvelHero: 'Homem de Ferro',
    role: 'Processamento Distribuído de Alto Desempenho',
    iconName: 'Cpu',
    superpower: 'Nanotecnologia Computacional Auto-Escalável',
    description: 'O cérebro analítico ultra-tecnológico. Constrói armaduras de clusters computacionais (nós Spark) que se expandem em segundos para esmagar cargas massivas de dados e se desligam quando a batalha acaba para economizar recursos.',
    technicalDetails: [
      'Photon Engine: Motor de consultas vectorizado de altíssimo desempenho para Spark.',
      'Auto-scaling automático inteligente que se adequa de acordo com a fila de jobs.',
      'Arquitetura de cluster Serverless para execução rápida pós-gargalos.'
    ],
    vibeColor: 'amber'
  },
  {
    id: 'delta',
    name: 'Delta Lake',
    marvelHero: 'Capitão América',
    role: 'Garantia de Qualidade de Dados (Tabelas ACID)',
    iconName: 'Shield',
    superpower: 'Integridade Inabalável e Viagem no Tempo',
    description: 'O guardião inflexível da ordem e da verdade. Garante que os dados passem pelas fases Bronze (Dados Brutos), Prata (Higienizados) e Ouro (Agregados comerciais) sem corrupção, permitindo consultas históricas com precisão no tempo.',
    technicalDetails: [
      'Garantia de transações totalmente ACID em grandes volumes de dados no Data Lake.',
      'Funcionalidade "Time Travel" integrada para auditar estados antigos da base.',
      'Restrições de schema estritas (Schema Enforcement) para evitar a entrada de lixo analítico'
    ],
    vibeColor: 'blue'
  },
  {
    id: 'unity',
    name: 'Unity Catalog',
    marvelHero: 'Nick Fury',
    role: 'Governança Unificada de Dados, IA e Segurança',
    iconName: 'Eye',
    superpower: 'Visão Global e Controle de Acesso Nível S.H.I.E.L.D.',
    description: 'O diretor soberano da plataforma. Ele vigia e mapeia todas as ações de dados, documenta a linhagem (lineage) de onde a informação veio e para onde vai, e garante que apenas agentes autorizados vejam documentos secretos.',
    technicalDetails: [
      'Governança unificada para tabelas, colunas, arquivos e modelos de Aprendizado de Máquina.',
      'Linhagem automatizada gerada a partir da execução de códigos SQL/Python no cluster.',
      'Controles granulares de segurança com políticas Row-Level e Column-Level Security.'
    ],
    vibeColor: 'emerald'
  },
  {
    id: 'sql',
    name: 'Databricks SQL & Serverless Warehouse',
    marvelHero: 'Thor',
    role: 'Mecanismo de Consulta Rápida (Analytical Sandbox & BI)',
    iconName: 'Zap',
    superpower: 'Poder de Choque e Performance de Query Instantânea',
    description: 'Se os analistas civis de negócios buscam respostas rápidas em gráficos do BI, o Deus do Trovão descarrega a potência do martelo Mjolnir nas queries SQL com velocidade fantástica, derrotando relatórios lentos instantaneamente.',
    technicalDetails: [
      'Iniciação instantânea de warehouses SQL serverless de alto desempenho.',
      'Otimizações inteligentes baseadas em IA (Auto-indexing, query caching estendido).',
      'Compatibilidade total com ferramentas de mercado como Power BI, Tableau e Looker.'
    ],
    vibeColor: 'sky'
  },
  {
    id: 'mlflow',
    name: 'MLflow',
    marvelHero: 'Pantera Negra',
    role: 'Gerenciamento do Ciclo de Vida de Modelos IA',
    iconName: 'FlaskConical',
    superpower: 'Inovação Tecnológica com IA de Wakanda',
    description: 'O responsável pelo avançado laboratório científico. Ele captura dados refinados do Delta Lake para treinar modelos preditivos de inteligência artificial, armazenando e empacotando suas versões de forma segura e elegante.',
    technicalDetails: [
      'Rastreamento detalhado de experimentos, parâmetros de treino e métricas e perda.',
      'Registro centralizado de Modelos com fluxos manuais e automáticos de auditoria.',
      'Otimizado para LLMs e Inteligência Artificial Generativa (LLMops e vetorizadores).'
    ],
    vibeColor: 'purple'
  }
];

export const MISSION_PRESETS: MissionPreset[] = [
  {
    id: 'hydra-hunting',
    title: 'Operação Caça à Hydra (Prevenção de Fraudes de Midgard)',
    description: 'Rastrear movimentações suspeitas de desvio de fundos da S.H.I.E.L.D. em múltiplos reinos de transações e alertar em tempo real.',
    icon: 'ShieldAlert',
    steps: [
      {
        heroId: 'adf',
        description: 'Doutor Estranho abre os portais de dados e drena 2.400.000 registros de logs de transações financeiras externas.',
        technicalLog: '[Portal Doutor Estranho] Extração iniciada de bancos de dados legados via ADF Copy Activity...'
      },
      {
        heroId: 'adls',
        description: 'O material bruto capturado dos reinos é guardado na abóbada inviolável de Asgard de arquivos estruturados.',
        technicalLog: '[Asgard ADLS] 14.5 GB gravados como blobs brutos em contêiner de pré-processamento /bronze/raw_transactions/...'
      },
      {
        heroId: 'compute',
        description: 'O Homem de Ferro decola com sua armadura Spark Serverless para descompilar, decodificar e limpar o bloco financeiro.',
        technicalLog: '[Armadura Stark Compute] Inicializados 12 nós Spark que dividem, transformam e refinam dados milionários em 3.2 segundos!'
      },
      {
        heroId: 'delta',
        description: 'Capitão América impõe a ordem ACID exigindo verificação das transações, permitindo viajar no tempo e restaurar se houver corrupção.',
        technicalLog: '[Escudo Delta Lake] Transação serializável commitada com sucesso na tabela de ouro. Audit records persistidos com viagem no tempo ativa.'
      },
      {
        heroId: 'unity',
        description: 'Nick Fury analisa as permissões de acesso e restringe o acesso dos logs financeiros de transações apenas ao Diretor.',
        technicalLog: '[Diretoria Unity Catalog] Linhagem (Lineage) criada. Permissão de leitura concedida ao grupo de auditores de risco. Hydras barradas!'
      },
      {
        heroId: 'mlflow',
        description: 'Pantera Negra extrai os dados financeiros e calibra o modelo preditivo para identificar transações mascaradas auto-generativas.',
        technicalLog: '[Wakanda MLflow Model] Modelo de classificação random-forest para detecção de fraudes treinado. Curva ROC registrada em 0.992.'
      },
      {
        heroId: 'sql',
        description: 'Thor invoca raios sobre o warehouse SQL, entregando de fita armada o relatório para o Power BI de decisão estratégica instantânea.',
        technicalLog: '[Martelo Thor SQL] Query processada em 72ms sobre 120 milhões de registros. Painel da S.H.I.E.L.D. atualizado com 14 anomalias ativas!'
      }
    ]
  },
  {
    id: 'chitauri-churn',
    title: 'Previsão de Invasão Chitauri (Modelo de Risco Preditivo)',
    description: 'Analisar leituras de assinatura de ondas eletromagnéticas nas pontes de Einstein-Rosen e gerar previsões de risco de fenda espacial em 24h.',
    icon: 'Radio',
    steps: [
      {
        heroId: 'adf',
        description: 'Doutor Estranho rastreia anomalias de sensores ao redor do mundo em tempo real conectando as APIs astrológicas.',
        technicalLog: '[Telepatia ADF] Ingestão em tempo real de logs de ondas gama a partir de 1.400 antenas de satélite espaciais.'
      },
      {
        heroId: 'adls',
        description: 'Os dados do cosmos são jogados no cofre de Asgard com segurança.',
        technicalLog: '[Asgard ADLS] Escrita em partição temporal /bronze/gamma_sensors/year=2026/month=06/day=19/'
      },
      {
        heroId: 'compute',
        description: 'Homem de Ferro calcula as derivadas parciais do tensor multidimensional de flutuações de gravitons.',
        technicalLog: '[Spark Homem de Ferro] cluster autotuned Photon executou transformações matemáticas avançadas (Fourier transforms).'
      },
      {
        heroId: 'delta',
        description: 'Capitão América garante o encadeamento sem conflito, permitindo analisar fendas temporais passadas para calibração.',
        technicalLog: '[Capitão Delta] Restrição de schema aplicada: campos latitude e longitude do portal validados com integridade garantida.'
      },
      {
        heroId: 'mlflow',
        description: 'Pantera Negra faz o deploy do modelo Wakanda de Rede Neural Recorrente que prevê buracos negros de transporte Chitauri.',
        technicalLog: '[Wakanda Labs Engine] Registro MLflow: modelo "chitauri-portal-detector" promovido para versão produtiva "Challenger v3"!'
      },
      {
        heroId: 'unity',
        description: 'Nick Fury criptografa as coordenadas da invasão para que o Conselho de Segurança das Nações Unidas não crie pânico geral.',
        technicalLog: '[Diretório Unity Catalog] Mascaramento de dados ativado. Coordenadas exatas visíveis apenas para os Vingadores.'
      },
      {
        heroId: 'sql',
        description: 'Thor despeja o martelo nos painéis de controle táticos da nave transportadora de helicóptero trazendo visualização em tempo real.',
        technicalLog: '[Thor SQL Warehouse] Atualização instantânea no painel holográfico de crise cósmica da ponte da S.H.I.E.L.D.'
      }
    ]
  },
  {
    id: 'vibranium-mining',
    title: 'Otimização de Mineração de Vibranium (Engenharia de Dados & IoT)',
    description: 'Coletar telemetria das perfuratrizes sônicas do solo de Wakanda para aumentar a velocidade útil sem causar ressonância destrutiva nas minas.',
    icon: 'Gem',
    steps: [
      {
        heroId: 'adf',
        description: 'Mestre dos Portais (ADF) puxa o streaming de telemetria IoT em intervalos de 5 segundos diretamente dos túneis profundos.',
        technicalLog: '[ADF Integration Runtime] Escuta na fila de streaming de sensores vibracionais do vulcão de Wakanda.'
      },
      {
        heroId: 'adls',
        description: 'Os logs de trepidação sônica são depositados em arquivos de Asgard estruturados.',
        technicalLog: '[Asgard Storage] Arquivos comprimidos de telemetria no formato otimizado ORC armazenados no Lakehouse.'
      },
      {
        heroId: 'compute',
        description: 'Homem de Ferro ativa a propulsão Spark Streaming, agregando janelas móveis de vibração média em micro-batches ultrarrápidos.',
        technicalLog: '[Stark Compute Spark] Structured Streaming ativo, janelas de 1 minuto mantendo state em mémoria cached local.'
      },
      {
        heroId: 'delta',
        description: 'Capitão América sela os resultados nas tabelas Silver com isolamento de transações simultâneas de dezenas de mineradores.',
        technicalLog: '[Delta Silver Mining] Operações simultâneas de UPDATE e INSERT (UPSERT) resolvidas de forma consistente sem travar.'
      },
      {
        heroId: 'unity',
        description: 'Nick Fury rastreia a linhagem inteira para garantir que espiões externos não clonem os fluxogramas de mineração do minério precioso.',
        technicalLog: '[S.H.I.E.L.D. Governance] Linhagem mapeada do sensor físico ao dashboard corporativo. Relatórios confidenciais restritos.'
      },
      {
        heroId: 'mlflow',
        description: 'Pantera Negra acopla as equações matemáticas sônicas para prever em que ponto a frequência sônica causará fadiga mineral.',
        technicalLog: '[MLflow Wakanda Registry] Modelo "sonic-resonance-predictor" atualizado. Ponto ótimo calculado em 432 Hz de vibração.'
      },
      {
        heroId: 'sql',
        description: 'Thor descarrega o poder de dezenas de servidores analíticos, guiando os engenheiros de mina a ajustarem as perfuratrizes com precisão cirúrgica.',
        technicalLog: '[Databricks SQL] Query de estatísticas sônicas retornou em tempo recorde com velocidade média de 14ms.'
      }
    ]
  }
];
