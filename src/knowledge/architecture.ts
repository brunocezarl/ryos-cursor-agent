/**
 * Arquitetura e estrutura de apps do ryOS.
 */

export const RYOS_ARCHITECTURE = {
  coreSystem: {
    stateManagement: 'Estado compartilhado entre apps com sincronização reativa.',
    localStorage: 'Persistência e recuperação de preferências e dados do usuário.',
    themeSystem: 'Temas comutáveis entre System 7, Mac OS X, XP e Win98.',
    appRegistry: 'Registro central de apps com metadados e permissões.',
  },
  appStructure: {
    baseApp: 'Classe ou hook base fornecendo ciclo de vida e integração com o sistema.',
    windowManager: 'Gerencia janelas, z-index, posicionamento e snapping.',
    menuSystem: 'Menus contextuais e barra superior com interações clássicas.',
    fileSystem: 'Sistema virtual de arquivos com suporte a arrastar e soltar.',
  },
  dataFlow: {
    unidirectional: 'Fluxo de dados previsível através de eventos e contextos.',
    eventDriven: 'Eventos publicados pelos apps e consumidos por assinantes interessados.',
    reactiveUpdates: 'Atualizações reativas quando o estado compartilhado é alterado.',
    optimisticUI: 'Interações exibem feedback imediato enquanto confirmam mudanças.',
  },
} as const;

export const APP_TYPES = {
  system: ['Finder', 'Control Panels', 'Terminal'],
  productivity: ['TextEdit', 'Paint', 'Videos'],
  entertainment: ['iPod', 'Minesweeper', 'Synth', 'Soundboard'],
  communication: ['Internet Explorer', 'Chats', 'Photo Booth'],
} as const;

export const TECHNICAL_STACK = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS'],
  state: ['React Context', 'localStorage'],
  animations: ['CSS Transitions', 'Framer Motion (opcional)'],
  build: ['Vite', 'ESBuild'],
  deployment: ['Static hosting', 'CDN'],
} as const;

