# Modern Portfolio Website

A sleek, responsive portfolio website with a macOS-inspired interface. This project uses Next.js, React, TypeScript, and Tailwind CSS to create a beautiful, interactive user experience with light and dark mode support.

![Portfolio Demo](https://via.placeholder.com/800x400?text=Portfolio+Website+Demo)

## Features

- 🌓 Dark/Light mode toggle with system preference detection
- 🖥️ macOS-inspired UI elements (window, dock, controls)
- 🌈 Beautiful background gradient effects
- 📱 Fully responsive design for all device sizes
- ⚡ Fast page navigation with Next.js
- 🎨 Sleek animations and transitions

## Live Demo

[View the live demo](https://your-portfolio-website.com) • [Watch demo video](https://youtu.be/your-demo-video)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/           # Static assets
├── src/              # Source code
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── contexts/     # Context providers
│   └── styles/       # CSS files
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Customization

### Changing Content

1. Update the personal information in `src/app/page.tsx`
2. Modify the dock items in `src/components/ClientLayout.tsx`
3. Add your projects in the Projects section

### Changing Theme Colors

The theme colors can be customized in the `src/contexts/ThemeContext.tsx` file.

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-website)

## How to Use

### Navigation

Navigate between different sections using the dock at the bottom of the screen:

- **Home**: Overview of your portfolio
- **About**: Your background and skills
- **Projects**: Showcase of your projects
- **Contact**: Contact information and form

### Theme Toggle

Use the theme toggle button in the top-right corner to switch between light and dark mode. The website also respects the user's system preference for dark mode.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- macOS for the design inspiration

---

Created with ❤️ by [Your Name](https://github.com/yourusername)
