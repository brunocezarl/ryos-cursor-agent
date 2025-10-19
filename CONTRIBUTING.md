# Contributing to ryOS MCP Agent

Thank you for your interest in contributing to the ryOS MCP Agent! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

## Development

### Running the Agent
```bash
npm run dev
```

### Building
```bash
npm run build
```

### Testing
Make sure your changes work by testing the agent in Cursor:
1. Build the project: `npm run build`
2. Update your `mcp_servers.json` configuration
3. Restart Cursor
4. Test the tools you've modified

## Code Style

- Use TypeScript for all new code
- Follow the existing code patterns
- Add comments explaining the "why" behind decisions
- Keep functions concise and focused
- Use meaningful variable names

## ryOS Philosophy

When contributing, keep in mind the ryOS principles:
- **Nostalgia + Modernity**: Blend classic aesthetics with modern technology
- **Privacy First**: Client-side only, localStorage for persistence
- **Simplicity**: Simple concepts for complex functionality
- **Interconnection**: Apps should share state and context

## Adding New Tools

To add a new MCP tool:

1. **Define the tool** in `src/index.ts`:
```typescript
{
  name: 'your_tool_name',
  description: 'Description of what the tool does',
  inputSchema: {
    type: 'object',
    properties: {
      // Define input parameters
    },
    required: ['required_params'],
  },
}
```

2. **Implement the handler** in the switch statement
3. **Add validation/utility functions** if needed
4. **Update documentation** in README.md

## Adding Knowledge

To add new ryOS knowledge:

1. **Create or update** files in `src/knowledge/`
2. **Export constants** with proper TypeScript types
3. **Update the guide** in `src/tools/ryos-guide.ts`
4. **Test the integration** with existing tools

## Submitting Changes

1. **Test your changes** thoroughly
2. **Update documentation** if needed
3. **Commit with descriptive messages**:
   ```
   git commit -m "Add new validation rule for ryOS components"
   ```
4. **Push to your fork**:
   ```
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a clear description

## Pull Request Guidelines

- Provide a clear description of what your PR does
- Reference any related issues
- Include screenshots or examples if applicable
- Ensure all tests pass
- Update documentation as needed

## Questions?

Feel free to open an issue for questions or discussions about the project.

Thank you for contributing to ryOS! 🚀
