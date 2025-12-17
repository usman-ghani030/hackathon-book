# Physical AI & Humanoid Robotics Course

This repository contains a comprehensive course on Physical AI and Humanoid Robotics, built with Docusaurus for documentation and GitHub Pages deployment.

## Vercel Deployment

This project is configured for deployment on Vercel. The deployment uses a custom configuration that sets the base URL to `/` for proper Vercel routing.

### Deployment Configuration

- Root directory: `book`
- Build command: `npm run build:vercel`
- Output directory: `build`

### Build Scripts

- `npm run build`: Builds for GitHub Pages (with base URL `/hackathon-book`)
- `npm run build:vercel`: Builds for Vercel deployment (with base URL `/`)

## Local Development

1. Install dependencies:
   ```bash
   cd book
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build for Production

To build the documentation site for production deployment:

```bash
cd book
npm run build:vercel
```

This command generates static content into the `build` directory that can be served using any static hosting service.

## Contributing

To add new content:
1. Create new Markdown files in the appropriate module directory under `/book/docs`
2. Update `sidebars.js` to include the new content in the navigation
3. Use Docusaurus frontmatter in your Markdown files for proper metadata