/**
 * Padrões de design e código do ryOS.
 */

export const CODE_PATTERNS = {
  style: {
    concise: 'Prefira implementações concisas e funcionais.',
    variableNames: 'Use nomes curtos quando fizer sentido (i, j, el) mas preserve clareza.',
    selfContained: 'Evite dependências externas desnecessárias.',
    typescriptPreferred: 'TypeScript como padrão para segurança e documentação.',
    commentWhy: 'Explique o porquê das decisões em comentários ao invés do que está acontecendo.',
  },
  animations: {
    smoothTransitions: 'Animações suaves com easing natural para entradas e saídas.',
    duration: 'Duração padrão entre 200ms e 300ms.',
    easing: 'Use ease-in-out para entrada e ease-out para saída.',
    hoverStates: 'Forneça estados de hover consistentes em componentes interativos.',
    loadingStates: 'Inclua feedback visual para operações assíncronas.',
  },
  responsive: {
    mobileFirst: 'Comece projetando para mobile e expanda para telas maiores.',
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    touchFriendly: 'Alvos interativos com pelo menos 44px de área útil.',
    keyboardNavigation: 'Compatibilidade total com navegação via teclado.',
  },
} as const;

export const TAILWIND_PATTERNS = {
  spacing: {
    xs: '1px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '48px',
  },
  colors: {
    primary: 'gray-900',
    secondary: 'gray-600',
    accent: 'blue-500',
    background: 'white',
    surface: 'gray-50',
    text: 'gray-900',
    muted: 'gray-500',
  },
  typography: {
    headings: 'font-bold text-lg',
    body: 'text-sm',
    caption: 'text-xs text-gray-500',
    mono: 'font-mono text-sm',
  },
} as const;

