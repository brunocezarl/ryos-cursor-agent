/**
 * Validador de código ryOS.
 * Analisa trechos para garantir aderência à filosofia e aos padrões.
 */

export type RyOSFileType = 'tsx' | 'ts' | 'css';

export interface ValidationResult {
  isValid: boolean;
  issues: string[];
  suggestions: string[];
  score: number;
}

export class RyOSCodeValidator {
  validateCode(code: string, fileType: RyOSFileType): ValidationResult {
    const issues: string[] = [];
    const suggestions: string[] = [];

    if (fileType === 'tsx' || fileType === 'ts') {
      this.validateReactPatterns(code, issues, suggestions);
      this.validateTypeSafety(code, issues, suggestions);
    }

    if (fileType === 'css') {
      this.validateCSSPatterns(code, issues, suggestions);
    }

    this.validateGeneralPatterns(code, issues, suggestions);

    const score = this.calculateScore(issues.length);

    return {
      isValid: issues.length === 0,
      issues,
      suggestions,
      score,
    };
  }

  private validateReactPatterns(code: string, issues: string[], suggestions: string[]): void {
    if (code.includes('style={{')) {
      issues.push('Evite estilos inline; prefira classes Tailwind.');
      suggestions.push('Migre estilos inline para utilitários Tailwind.');
    }

    if (code.includes('transition') && !code.includes('duration-')) {
      suggestions.push('Adicione duração às transições (ex.: duration-300).');
    }

    if (!code.includes('hover:') && code.includes('className')) {
      suggestions.push('Inclua estados hover para comunicar interatividade.');
    }
  }

  private validateTypeSafety(code: string, issues: string[], suggestions: string[]): void {
    if (code.includes(': any') || code.includes('<any>')) {
      issues.push('Evite o tipo any; use tipos específicos.');
    }

    const totalLines = code.split('\n').length;
    const commentLines = (code.match(/\/\/.*$/gm) || []).length;
    if (commentLines / totalLines < 0.08) {
      suggestions.push('Acrescente comentários explicando decisões de design.');
    }

    const longIdentifiers = code.match(/\b[a-zA-Z_][a-zA-Z0-9_]{12,}\b/g) || [];
    if (longIdentifiers.length > 0) {
      suggestions.push('Revise identificadores longos e considere nomes mais concisos.');
    }
  }

  private validateCSSPatterns(code: string, issues: string[], suggestions: string[]): void {
    if (code.includes('gradient')) {
      issues.push('Gradientes não combinam com o visual ryOS; utilize backdrop-blur.');
    }

    if (code.match(/rgb\(|hsl\(/)) {
      suggestions.push('Substitua valores rgb/hsl por tokens Tailwind.');
    }
  }

  private validateGeneralPatterns(code: string, issues: string[], suggestions: string[]): void {
    const breakpointTokens = ['sm:', 'md:', 'lg:', 'xl:'];
    const usedTokens = breakpointTokens.filter((token) => code.includes(token));

    if (usedTokens.length === 0) {
      suggestions.push('Inclua breakpoints responsivos (sm:, md:, lg:, xl:).');
    } else if (usedTokens.length === 1) {
      suggestions.push('Aproveite múltiplos breakpoints para experiência responsiva refinada.');
    }

    if (!code.includes('hover:') && code.includes('className')) {
      suggestions.push('Inclua estados hover para comunicar interatividade.');
    }
  }

  private calculateScore(issueCount: number): number {
    if (issueCount === 0) return 100;
    if (issueCount <= 2) return 85;
    if (issueCount <= 4) return 70;
    return Math.max(20, 100 - issueCount * 10);
  }
}

