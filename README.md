# ryOS MCP Agent 🚀

TypeScript MCP server to assist with ryOS development within Cursor.

## Overview

ryOS combines nostalgic aesthetics (Mac System 7, Aqua, Windows XP/98) with modern experience.
This agent provides integrated knowledge about philosophy, patterns, and apps, plus
tools to validate code and design following ryOS principles.

## Requirements

- Node.js 18+ on local machine
- npm or pnpm to install dependencies
- Cursor IDE with MCP support

## Installation

```bash
git clone https://github.com/brunocezarl/ryos-cursor-agent.git
cd ryos-cursor-agent
npm install
npm run build
```

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

## Cursor Connection

1. **Locate the MCP configuration file:**
   - Windows: `%LOCALAPPDATA%\Cursor\User\mcp_servers.json`
   - macOS: `~/Library/Application Support/Cursor/User/mcp_servers.json`
   - Linux: `~/.config/Cursor/User/mcp_servers.json`

2. **Add the ryOS Agent configuration:**
   ```json
   {
     "mcpServers": {
       "ryos-agent": {
         "command": "node",
         "args": ["/path/to/ryos-mcp-agent/dist/index.js"],
         "env": {}
       }
     }
   }
   ```
   
   **Important:** Replace `/path/to/ryos-mcp-agent/` with the actual path to your project.

3. **Restart Cursor** completely to load the new server.

## How to Use

After configuration, use the agent in Cursor chat:

```
@ryos-agent validate_ryos_code
```

```
@ryos-agent get_ryos_philosophy
```

```
@ryos-agent check_ryos_design
```

## Available Tools

| Tool | Description |
|------|-------------|
| `validate_ryos_code` | Analyzes TS/TSX/CSS snippets and points out adherence to ryOS patterns |
| `check_ryos_design` | Verifies if the component respects minimalist aesthetics |
| `get_ryos_philosophy` | Returns the complete ryOS philosophy |
| `get_ryos_patterns` | Lists technical and design patterns |
| `get_ryos_apps_guide` | Describes official apps and interactions |
| `get_ryos_example` | Provides example component with best practices |
| `get_ryos_best_practices` | Highlights general recommendations |

## Usage Examples

### Validate code
```
@ryos-agent validate_ryos_code
```
Paste your TSX/TS/CSS code for automatic analysis.

### Consult philosophy
```
@ryos-agent get_ryos_philosophy
```

### View component example
```
@ryos-agent get_ryos_example
```

## ryOS Philosophy

- **Nostalgia + Modernity**: Classic aesthetics (Mac System 7, Windows XP) with current technology
- **Total Privacy**: 100% client-side, localStorage only, zero server storage
- **Interconnected Apps**: State sharing between applications
- **Tailwind-Only**: Only Tailwind CSS for styles, no inline CSS
- **Smooth Animations**: Responsive transitions and microinteractions

## Technical Stack

- **Frontend**: React + TypeScript
- **Styles**: Tailwind CSS
- **Persistence**: localStorage
- **Architecture**: Single-page app, no dedicated backend
- **Build**: Vite + ESBuild

## Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## Troubleshooting

### Agent doesn't appear in Cursor
- Check if the path in `mcp_servers.json` is correct
- Confirm that `npm run build` executed without errors
- Restart Cursor completely
- Verify that the `dist/index.js` file exists

### Connection error
- Check if Node.js 18+ is installed
- Confirm that all dependencies were installed (`npm install`)

## Next Steps

- [ ] Expand guides with additional examples
- [ ] Include specific checks for themes (system7, macosx, xp, win98)
- [ ] Add integration with main project linting tools
- [ ] Support for more file types (JSX, Vue, etc.)

## License

MIT License - see [LICENSE](LICENSE) for details.

---

**Built to maintain the ryOS balance between nostalgia and innovation.** 🎨✨

