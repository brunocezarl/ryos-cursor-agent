#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, Tool } from '@modelcontextprotocol/sdk/types.js';

import { RyOSCodeValidator } from './tools/code-validator.js';
import { RyOSDesignChecker } from './tools/design-checker.js';
import { RyOSGuide } from './tools/ryos-guide.js';

const server = new Server({
  name: 'ryos-mcp-agent',
  version: '1.0.0',
});

const codeValidator = new RyOSCodeValidator();
const designChecker = new RyOSDesignChecker();
const ryosGuide = new RyOSGuide();

const tools: Tool[] = [
  {
    name: 'validate_ryos_code',
    description: 'Valida se o código segue padrões visuais e técnicos do ryOS.',
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Trecho de código a ser avaliado.',
        },
        fileType: {
          type: 'string',
          enum: ['tsx', 'ts', 'css'],
          description: 'Tipo de arquivo para análise contextual.',
        },
      },
      required: ['code', 'fileType'],
    },
  },
  {
    name: 'check_ryos_design',
    description: 'Verifica se um componente atende à estética e UX ryOS.',
    inputSchema: {
      type: 'object',
      properties: {
        componentCode: {
          type: 'string',
          description: 'Código JSX/TSX do componente.',
        },
      },
      required: ['componentCode'],
    },
  },
  {
    name: 'get_ryos_philosophy',
    description: 'Retorna a filosofia completa do ryOS.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_ryos_patterns',
    description: 'Lista padrões técnicos e de design do ryOS.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_ryos_apps_guide',
    description: 'Detalha os apps oficiais e suas interações.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_ryos_example',
    description: 'Mostra um componente exemplar no estilo ryOS.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_ryos_best_practices',
    description: 'Fornece práticas recomendadas para construir com ryOS.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const toolArgs = (args ?? {}) as Record<string, unknown>;

  switch (name) {
    case 'validate_ryos_code': {
      const result = codeValidator.validateCode(
        toolArgs.code as string,
        toolArgs.fileType as 'tsx' | 'ts' | 'css',
      );
      return {
        content: [
          {
            type: 'text',
            text: formatValidationResult(result),
          },
        ],
      };
    }

    case 'check_ryos_design': {
      const result = designChecker.checkDesign(toolArgs.componentCode as string);
      return {
        content: [
          {
            type: 'text',
            text: formatDesignResult(result),
          },
        ],
      };
    }

    case 'get_ryos_philosophy':
      return { content: [{ type: 'text', text: ryosGuide.getPhilosophyExplanation() }] };

    case 'get_ryos_patterns':
      return { content: [{ type: 'text', text: ryosGuide.getCodePatterns() }] };

    case 'get_ryos_apps_guide':
      return { content: [{ type: 'text', text: ryosGuide.getAppGuidelines() }] };

    case 'get_ryos_example':
      return { content: [{ type: 'text', text: ryosGuide.getExampleComponent() }] };

    case 'get_ryos_best_practices':
      return { content: [{ type: 'text', text: ryosGuide.getBestPractices() }] };

    default:
      return {
        content: [
          {
            type: 'text',
            text: `Ferramenta desconhecida: ${name}`,
          },
        ],
        isError: true,
      };
  }
});

function formatIssues(list: string[]): string {
  if (list.length === 0) {
    return '- Nenhum item encontrado.';
  }
  return list.map((item) => `- ${item}`).join('\n');
}

function formatScore(label: string, value: number): string {
  return `- ${label}: ${value}/100`;
}

function formatStatus(isValid: boolean): string {
  return isValid ? '- Status: ✅ Pronto para o ryOS' : '- Status: ⚠️ Ajustes necessários';
}

function formatDesignStatus(follows: boolean): string {
  return follows
    ? '- Filosofia: ✅ Em linha com o ryOS'
    : '- Filosofia: ⚠️ Ajuste para alcançar a estética ryOS';
}

function formatValidationResult(result: ReturnType<RyOSCodeValidator['validateCode']>): string {
  return `# Validação de Código ryOS\n\n${formatStatus(result.isValid)}\n${formatScore(
    'Score',
    result.score,
  )}\n\n## Issues\n${formatIssues(result.issues)}\n\n## Sugestões\n${formatIssues(result.suggestions)}`;
}

function formatDesignResult(result: ReturnType<RyOSDesignChecker['checkDesign']>): string {
  return `# Avaliação de Design ryOS\n\n${formatDesignStatus(result.followsPhilosophy)}\n${formatScore(
    'Score visual',
    result.visualScore,
  )}\n\n## Issues\n${formatIssues(result.issues)}\n\n## Recomendações\n${formatIssues(result.recommendations)}`;
}

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('ryOS MCP Agent iniciado. Pronto para colaborar!');
}

main().catch((error) => {
  console.error('Erro ao iniciar servidor:', error);
  process.exit(1);
});

