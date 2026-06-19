# Databricks Shield

Landing page conceitual que apresenta o Azure Databricks como um centro de comando de dados, usando uma linguagem visual inspirada em defesa, coordenação e resposta tática para explicar componentes do ecossistema Lakehouse.

## O que esta landing demonstra

A página mostra como o Databricks pode ser entendido como uma plataforma unificada para:

- ingestão e orquestração de dados
- armazenamento escalável em lakehouse
- processamento distribuído com Spark
- confiabilidade transacional com Delta Lake
- governança centralizada com Unity Catalog
- consumo analítico com Databricks SQL
- ciclo de vida de modelos de IA com MLflow

O objetivo não é documentar a plataforma de forma exaustiva, mas transformar conceitos de arquitetura em uma narrativa visual mais fácil de entender para públicos executivos, técnicos e comerciais.

## Databricks e segurança

O ponto central da landing é mostrar que Databricks não deve ser visto apenas como motor de processamento, mas como uma camada estratégica de controle sobre dados, acesso e rastreabilidade.

Na narrativa da página, a segurança aparece em quatro frentes principais:

- governança de acesso com Unity Catalog
- rastreabilidade e lineage dos dados
- integridade transacional com Delta Lake
- organização de dados em uma arquitetura controlada de lakehouse

Isso comunica que a proteção do ambiente não depende só de armazenar dados, mas de controlar quem acessa, como os dados evoluem, qual transformação ocorreu e quais ativos podem ser promovidos para uso analítico ou IA.

## Estrutura da experiência

A landing está organizada em blocos interativos:

- visão principal da proposta visual
- galeria dos componentes da arquitetura
- simulador de missão com fluxo operacional
- laboratório de arquitetura com impacto por componente
- diagrama de linhagem e distribuição de capacidades

Esses blocos ajudam a explicar, de forma visual, como ingestão, processamento, governança e consumo analítico se conectam dentro de uma mesma plataforma.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion

## Executar localmente

```bash
npm install
npm run dev
```

No PowerShell do Windows, se `npm` estiver bloqueado por policy:

```powershell
npm.cmd install
npm.cmd run dev
```

## Build de produção

```bash
npm run build
```

O artefato final é gerado em `dist/`.

## Deploy

Este projeto pode ser publicado facilmente no Vercel usando:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
