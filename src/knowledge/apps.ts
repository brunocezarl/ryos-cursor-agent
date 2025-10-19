/**
 * Detalhes sobre os apps principais do ryOS.
 */

type AppDetails = {
  purpose: string;
  features: string[];
  uiElements: string[];
  interactions?: string[];
};

export const RYOS_APPS: Record<string, AppDetails> = {
  Finder: {
    purpose: 'Gerenciar arquivos, preferências do sistema e lançador de apps.',
    features: ['Navegação hierárquica', 'Busca', 'Criação e organização de arquivos', 'Atalhos'],
    uiElements: ['Sidebar', 'Toolbar', 'Lista de arquivos', 'Visualização rápida'],
    interactions: ['Arrastar e soltar', 'Menus contextuais', 'Atalhos de teclado'],
  },
  InternetExplorer: {
    purpose: 'Explorar a web com suporte a viagens no tempo via Wayback Machine.',
    features: ['Navegação web', 'Histórico', 'Favoritos', 'Time-travel'],
    uiElements: ['Barra de endereço', 'Botões de navegação', 'Tabs', 'Lista de favoritos'],
    interactions: ['Entrada de URL', 'Seleção de data na Wayback', 'Atalhos de navegação'],
  },
  TextEdit: {
    purpose: 'Editor de texto leve para anotações e documentação.',
    features: ['Edição rich-text leve', 'Formatação básica', 'Autosave'],
    uiElements: ['Barra de ferramentas', 'Área de edição', 'Barra de status'],
    interactions: ['Atalhos de teclado', 'Arrastar arquivos para abrir', 'Salvar automático'],
  },
  Paint: {
    purpose: 'Ferramenta criativa para desenhos e mockups rápidos.',
    features: ['Brushes', 'Formas', 'Camadas básicas', 'Paleta de cores'],
    uiElements: ['Canvas', 'Ferramentas', 'Painel de cores', 'Lista de camadas'],
    interactions: ['Caneta', 'Arrastar para selecionar', 'Atalhos para zoom'],
  },
  iPod: {
    purpose: 'Player de música nostálgico com interface click wheel.',
    features: ['Playlists', 'Visualizações', 'Shuffle/Repeat', 'Equalizador leve'],
    uiElements: ['Click wheel', 'Display retro', 'Lista de músicas'],
    interactions: ['Gestos circulares', 'Cliques', 'Hold para bloquear'],
  },
  Chats: {
    purpose: 'Central de conversas com bots e assistentes ryOS.',
    features: ['Chats múltiplos', 'Context sharing', 'Histórico persistente'],
    uiElements: ['Lista de conversas', 'Área de mensagens', 'Input com sugestões'],
    interactions: ['Envio via teclado', 'Attachments', 'Menções a bots especializados'],
  },
  Terminal: {
    purpose: 'Interface de linha de comando com comandos nostálgicos e modernos.',
    features: ['Comandos internos', 'Alias', 'Histórico', 'Integração com apps'],
    uiElements: ['Janela full', 'Prompt', 'Saída monoespaçada'],
    interactions: ['Atalhos de teclado', 'Autocompletar', 'Processos simulados'],
  },
};

export const APP_INTERACTIONS = {
  dragDrop: 'Apps suportam arrastar arquivos entre si e reagir contextualmente.',
  contextMenu: 'Menus contextuais adaptados ao tipo de recurso selecionado.',
  keyboardShortcuts: 'Atalhos globais e específicos por app, inspirados em OS clássicos.',
  windowManagement: 'Janelas com minimizar, maximizar, fechar e snapping suave.',
  appSwitching: 'Switcher de apps semelhante a Alt+Tab com pré-visualização.',
} as const;

