/**
 * Guia interativo com conteúdos e exemplos ryOS.
 */

import { RYOS_PHILOSOPHY, THEMES } from '../knowledge/philosophy.js';
import { CODE_PATTERNS, TAILWIND_PATTERNS } from '../knowledge/patterns.js';
import { RYOS_APPS, APP_INTERACTIONS } from '../knowledge/apps.js';

export class RyOSGuide {
  getPhilosophyExplanation(): string {
    return `# Filosofia ryOS\n\n## Core\n${this.formatEntries(RYOS_PHILOSOPHY.core)}\n\n## Design\n${this.formatEntries(
      RYOS_PHILOSOPHY.designPrinciples,
    )}\n\n## Abordagem Técnica\n${this.formatEntries(RYOS_PHILOSOPHY.technicalApproach)}\n\n## Temas\n- ${
      THEMES.join(', ')
    }`;
  }

  getCodePatterns(): string {
    return `# Padrões de Código\n\n## Estilo\n${this.formatEntries(CODE_PATTERNS.style)}\n\n## Animações\n${this.formatEntries(
      CODE_PATTERNS.animations,
    )}\n\n## Responsividade\n${this.formatMixedEntries(
      CODE_PATTERNS.responsive,
    )}\n\n## Tailwind\n### Espaçamento\n${this.formatEntries(
      TAILWIND_PATTERNS.spacing,
    )}\n\n### Cores\n${this.formatEntries(
      TAILWIND_PATTERNS.colors,
    )}\n\n### Tipografia\n${this.formatEntries(TAILWIND_PATTERNS.typography)}`;
  }

  getAppGuidelines(): string {
    return `# Apps ryOS\n${Object.entries(RYOS_APPS)
      .map(([app, info]) => {
        const interactions = info.interactions
          ? `\n- Interações: ${info.interactions.join(', ')}`
          : '';
        return `\n## ${app}\n- Propósito: ${info.purpose}\n- Funcionalidades: ${info.features.join(
          ', ',
        )}\n- UI: ${info.uiElements.join(', ')}${interactions}`;
      })
      .join('\n')}\n\n## Interações Globais\n${this.formatEntries(APP_INTERACTIONS)}`;
  }

  getExampleComponent(): string {
    return `# Exemplo de Componente ryOS\n\n\`\`\`tsx
import { useState } from 'react';

type Variant = 'primary' | 'secondary';

interface RyOSButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  disabled?: boolean;
}

export function RyOSButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: RyOSButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      className={
        'px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ' +
        (variant === 'primary'
          ? 'bg-gray-900 text-white hover:bg-gray-800'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200') +
        (disabled ? ' opacity-50 cursor-not-allowed' : ' cursor-pointer') +
        (pressed ? ' scale-95' : ' scale-100') +
        ' focus:outline-none focus:ring-2 focus:ring-gray-500'
      }
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
\`\`\`
\n## Destaques
- Transições suaves com duração definida
- Estados hover e focus consistentes
- Cores neutras e tipografia compacta
- Sem estilos inline, usando utilitários Tailwind
- Comentários implícitos via tipos e estrutura`;
  }

  getBestPractices(): string {
    return `# Melhores Práticas ryOS\n\n## Filosofia\n- Combine nostalgia com recursos modernos.\n- Garanta privacidade com operações client-side.\n- Mantenha conceitos simples para funcionalidades poderosas.\n- Promova integração entre apps.\n\n## Código\n- Use TypeScript e evite any.\n- Prefira componentes pequenos e coesos.\n- Comente decisões arquiteturais.\n- Aproveite utilidades Tailwind para consistência.\n\n## Design\n- Aposte em tipografia pequena e espaçamento preciso.\n- Use microinterações suaves para feedback.\n- Garanta acessibilidade de teclado e leitura.\n- Evite gradientes; use blur e sombras suaves.\n\n## Performance\n- Carregue sob demanda sempre que possível.\n- Utilize localStorage para persistir estado.\n- Minimize re-renderizações com memoização inteligente.\n- Otimize assets para experiência nostálgica leve.`;
  }

  private formatEntries(object: Record<string, string>): string {
    return Object.entries(object)
      .map(([key, value]) => `- ${this.formatKey(key)}: ${value}`)
      .join('\n');
  }

  private formatMixedEntries(
    object: Record<string, string | Record<string, string>>,
  ): string {
    return Object.entries(object)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `- ${this.formatKey(key)}: ${value}`;
        }

        const nested = Object.entries(value)
          .map((entry) => `  - ${this.formatKey(entry[0])}: ${entry[1]}`)
          .join('\n');

        return `- ${this.formatKey(key)}:\n${nested}`;
      })
      .join('\n');
  }

  private formatKey(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^\w/, (char) => char.toUpperCase())
      .replace(/_/g, ' ');
  }
}

