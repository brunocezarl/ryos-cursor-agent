/**
 * Avaliador de design ryOS.
 * Analisa componentes buscando aderência a visual minimalista e nostálgico.
 */

export interface DesignCheckResult {
  followsPhilosophy: boolean;
  issues: string[];
  recommendations: string[];
  visualScore: number;
}

export class RyOSDesignChecker {
  checkDesign(componentCode: string): DesignCheckResult {
    const issues: string[] = [];
    const recommendations: string[] = [];

    this.checkMinimalism(componentCode, issues, recommendations);
    this.checkTypography(componentCode, issues, recommendations);
    this.checkSpacing(componentCode, issues, recommendations);
    this.checkColors(componentCode, issues, recommendations);
    this.checkAnimations(componentCode, issues, recommendations);

    const visualScore = this.calculateVisualScore(issues.length);
    const followsPhilosophy = issues.length === 0;

    return {
      followsPhilosophy,
      issues,
      recommendations,
      visualScore,
    };
  }

  private checkMinimalism(code: string, issues: string[], recommendations: string[]): void {
    const divCount = (code.match(/<div/g) || []).length;
    if (divCount > 12) {
      issues.push('Quantidade excessiva de divs; simplifique a hierarquia.');
    }

    if (code.match(/text-(2xl|3xl|4xl)/)) {
      recommendations.push('Reduza tamanhos de fonte para manter estética minimalista.');
    }
  }

  private checkTypography(code: string, issues: string[], recommendations: string[]): void {
    if (!code.match(/text-(xs|sm)/)) {
      recommendations.push('Considere usar text-sm ou text-xs para manter a identidade ryOS.');
    }

    if (!code.match(/font-(mono|bold|medium)/)) {
      recommendations.push('Adote mapeamento de fontes ryOS (monoespaçada, bold para títulos).');
    }
  }

  private checkSpacing(code: string, issues: string[], recommendations: string[]): void {
    if (!code.match(/[mp][trblxy]?-(0|1|2|3|4)/)) {
      issues.push('Inclua espaçamento consistente (p-2, m-2 etc.).');
    }

    if (code.match(/[mp][trblxy]?-(8|9|10|11|12)/)) {
      recommendations.push('Espaçamento muito grande para o padrão compacto do ryOS.');
    }
  }

  private checkColors(code: string, issues: string[], recommendations: string[]): void {
    if (code.match(/bg-(red|green|blue|purple|pink|yellow)-/)) {
      recommendations.push('Prefira tons neutros (gray-*, white, black).');
    }

    if (code.includes('gradient')) {
      issues.push('Gradientes não fazem parte do visual ryOS.');
    }
  }

  private checkAnimations(code: string, issues: string[], recommendations: string[]): void {
    if (code.includes('transition') && !code.includes('duration-')) {
      recommendations.push('Defina duração nas transições (ex.: duration-300).');
    }

    if (code.match(/animate-(bounce|spin|ping|pulse)/)) {
      recommendations.push('Troque por animações mais sutis e contextualizadas.');
    }
  }

  private calculateVisualScore(issueCount: number): number {
    if (issueCount === 0) return 100;
    if (issueCount === 1) return 90;
    if (issueCount === 2) return 80;
    return Math.max(40, 100 - issueCount * 15);
  }
}

