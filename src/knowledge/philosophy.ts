/**
 * Filosofia core do ryOS.
 */

export const RYOS_PHILOSOPHY = {
  core: {
    nostalgia:
      'Classic Mac (System 7, Aqua) e Windows (XP, 98) mesclados com tecnologia atual.',
    privacy: '100% client-side com persistência em localStorage e zero armazenamento em servidor.',
    simplicity: 'Conceitos simples e acessíveis para representar software complexo com abstrações mínimas.',
    interconnection: 'Apps, música, documentos e navegador integrados em um único sistema coerente.',
    balance:
      'Equilíbrio entre velocidade e qualidade, permitindo que ideias emergentes sejam exploradas com cuidado.',
  },
  designPrinciples: {
    minimal: 'Design suíço minimalista com texto pequeno e paleta neutra.',
    avoidGradients: 'Evite gradientes; prefira glassmorphism com backdrop-blur.',
    simpleColors: 'Use cores e animações suaves para manter o foco no conteúdo.',
    detailsMatter: 'Capriche em tipografia, espaçamento e micro-interações.',
    unobtrusiveControls: 'Controles nunca devem bloquear a interface do sistema (evite canto superior direito).',
    fullCanvas: 'Use largura e altura totais para áreas de trabalho e containers principais.',
  },
  technicalApproach: {
    clientSideOnly:
      'Sem backend dedicado; apenas integrações AI/online com logging mínimo e transparente.',
    spa: 'Arquitetura single-page app para transições suaves e manutenção de estado.',
    tailwindOnly: 'Tailwind CSS como única camada de estilo; evite CSS inline.',
    smoothTransitions: 'Transições suaves em toda a interface com feedback consistente.',
    responsive: 'Interface fluida e funcional em qualquer tamanho de tela.',
  },
};

export const FONT_MAPPING = {
  body: 'Geneva',
  headings: 'Neuebit Bold',
  serif: 'Mondwest',
  mono: 'Monaco',
  blackletter: 'Jacquard',
} as const;

export const THEMES = ['system7', 'macosx', 'xp', 'win98'] as const;

