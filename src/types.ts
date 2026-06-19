export interface Hero {
  id: string;
  name: string;
  marvelHero: string;
  role: string;
  iconName: string;
  superpower: string;
  description: string;
  technicalDetails: string[];
  vibeColor: string; // Tailwind accent color (e.g., 'blue', 'gold', 'red')
}

export interface SimulationStep {
  id: string;
  stepName: string;
  heroId: string;
  status: 'idle' | 'running' | 'success' | 'failed';
  message: string;
  technicalNote: string;
  durationMs: number;
}

export interface SimulationLog {
  timestamp: string;
  hero: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'alert';
}

export interface MissionPreset {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: {
    heroId: string;
    description: string;
    technicalLog: string;
  }[];
}
