# ryOS MCP Agent 🚀

Servidor MCP em TypeScript para auxiliar no desenvolvimento do ryOS dentro do Cursor.

## Visão Geral

O ryOS combina estética nostálgica (Mac System 7, Aqua, Windows XP/98) com experiência moderna.
Este agente fornece conhecimento integrado sobre filosofia, padrões e apps, além de
ferramentas para validar código e design seguindo os princípios ryOS.

## Requisitos

- Node.js 18+ na máquina local
- npm ou pnpm para instalar dependências
- Cursor IDE com suporte a MCP

## Instalação

```bash
git clone https://github.com/seu-usuario/ryos-mcp-agent.git
cd ryos-mcp-agent
npm install
npm run build
```

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

## Conexão com Cursor

1. **Localize o arquivo de configuração MCP:**
   - Windows: `%LOCALAPPDATA%\Cursor\User\mcp_servers.json`
   - macOS: `~/Library/Application Support/Cursor/User/mcp_servers.json`
   - Linux: `~/.config/Cursor/User/mcp_servers.json`

2. **Adicione a configuração do ryOS Agent:**
   ```json
   {
     "mcpServers": {
       "ryos-agent": {
         "command": "node",
         "args": ["/caminho/para/ryos-mcp-agent/dist/index.js"],
         "env": {}
       }
     }
   }
   ```
   
   **Importante:** Substitua `/caminho/para/ryos-mcp-agent/` pelo caminho real do seu projeto.

3. **Reinicie o Cursor** completamente para carregar o novo servidor.

## Como Usar

Após configurar, use o agente no chat do Cursor:

```
@ryos-agent validate_ryos_code
```

```
@ryos-agent get_ryos_philosophy
```

```
@ryos-agent check_ryos_design
```

## Ferramentas Disponíveis

| Ferramenta | Descrição |
|------------|-----------|
| `validate_ryos_code` | Analisa trechos TS/TSX/CSS e aponta aderência aos padrões ryOS |
| `check_ryos_design` | Verifica se o componente respeita a estética minimalista |
| `get_ryos_philosophy` | Retorna a filosofia completa do ryOS |
| `get_ryos_patterns` | Lista padrões técnicos e de design |
| `get_ryos_apps_guide` | Descreve apps oficiais e interações |
| `get_ryos_example` | Fornece componente exemplo com boas práticas |
| `get_ryos_best_practices` | Destaca recomendações gerais |

## Exemplos de Uso

### Validar código
```
@ryos-agent validate_ryos_code
```
Cole seu código TSX/TS/CSS para análise automática.

### Consultar filosofia
```
@ryos-agent get_ryos_philosophy
```

### Ver exemplo de componente
```
@ryos-agent get_ryos_example
```

## Filosofia ryOS

- **Nostalgia + Modernidade**: Estética clássica (Mac System 7, Windows XP) com tecnologia atual
- **Privacidade Total**: 100% client-side, localStorage apenas, zero armazenamento em servidor
- **Apps Interconectados**: Compartilhamento de estado entre aplicações
- **Tailwind-Only**: Apenas Tailwind CSS para estilos, sem CSS inline
- **Animações Suaves**: Transições responsivas e microinterações

## Stack Técnica

- **Frontend**: React + TypeScript
- **Estilos**: Tailwind CSS
- **Persistência**: localStorage
- **Arquitetura**: Single-page app, sem backend dedicado
- **Build**: Vite + ESBuild

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Troubleshooting

### O agente não aparece no Cursor
- Verifique se o caminho no `mcp_servers.json` está correto
- Confirme que `npm run build` executou sem erros
- Reinicie o Cursor completamente
- Verifique se o arquivo `dist/index.js` existe

### Erro de conexão
- Verifique se Node.js 18+ está instalado
- Confirme que todas as dependências foram instaladas (`npm install`)

## Próximos Passos

- [ ] Expandir guias com exemplos adicionais
- [ ] Incluir verificações específicas para temas (system7, macosx, xp, win98)
- [ ] Adicionar integração com ferramentas de linting do projeto principal
- [ ] Suporte a mais tipos de arquivo (JSX, Vue, etc.)

## Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**Construído para manter o equilíbrio ryOS entre nostalgia e inovação.** 🎨✨

