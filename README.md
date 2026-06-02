# Hello World - Next.js 14 App

A simple and elegant "Hello World" website built with **Next.js 14** (App Router) and **vanilla CSS**. This project demonstrates clean code practices, responsive design, and smooth animations without relying on UI frameworks.

## ✨ Features

- ✅ **Next.js 14** with App Router architecture
- ✅ **TypeScript** for type safety
- ✅ **Vanilla CSS** with CSS variables for theming
- ✅ **Responsive Design** - works perfectly on mobile, tablet, and desktop
- ✅ **Smooth Animations** - fade-in and slide-down effects
- ✅ **Interactive Elements** - hover effects and click handlers
- ✅ **Accessibility** - focus states, semantic HTML, keyboard navigation
- ✅ **No Dependencies** - no heavy UI frameworks (Tailwind, CSS-in-JS)
- ✅ **Clean Code** - well-commented and organized structure

## 🚀 Quick Start

### Prerequisites

Make sure you have **Node.js 18+** and **npm** (or yarn/pnpm) installed on your system.

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd Hello-World
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

Open your browser and you should see the "Hello, World!" page with animations.

**Hot Reload:** The page will automatically refresh when you make changes to the code.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Check and fix code style issues:
```bash
npm run lint
```

## 📁 Project Structure

```
Hello-World/
├── app/
│   ├── layout.tsx          # Root layout with metadata and HTML structure
│   ├── page.tsx            # Home page component with "Hello, World!" content
│   └── globals.css         # Global styles with CSS variables and animations
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 📄 File Descriptions

### `app/layout.tsx`
- **Purpose:** Root layout component that wraps all pages
- **Contains:** HTML structure, metadata (title, description), language settings
- **Exports:** Global layout used by all pages in the app

### `app/page.tsx`
- **Purpose:** Home page component displayed at root route (/)
- **Contains:** Main title, description, interactive button with click handler
- **Features:** Fully typed with TypeScript, accessible button with aria-label

### `app/globals.css`
- **Purpose:** Global styles and CSS variables
- **Contains:**
  - CSS Custom Properties (variables) for colors, fonts, spacing
  - Reset styles for consistent rendering
  - Main container and content styling
  - Animation keyframes (fadeIn, slideDown)
  - Responsive media queries for tablet and mobile
  - Accessibility features (focus states, reduced motion)
- **Features:** Mobile-first approach, smooth transitions, semantic CSS

### `package.json`
- **Purpose:** Project metadata and dependency management
- **Scripts:**
  - `dev` - Start development server with hot reload
  - `build` - Create optimized production build
  - `start` - Run production server
  - `lint` - Run ESLint code quality checks

### `tsconfig.json`
- **Purpose:** TypeScript compiler configuration
- **Features:** Strict mode enabled, path aliases, ES2020 target

### `next.config.js`
- **Purpose:** Next.js framework configuration
- **Current Settings:** React Strict Mode enabled for development

## 🎨 CSS Architecture

### CSS Variables (Custom Properties)
The project uses CSS variables defined in `:root` for easy theming:

```css
--color-primary: #0066cc         /* Main brand color */
--color-text: #1a1a1a            /* Primary text color */
--font-size-large: 48px          /* Large heading size */
```

To change the theme, simply update these variables in `app/globals.css`.

### Animations
- **fadeIn:** Smooth opacity transition (0.8s)
- **slideDown:** Top-to-bottom slide with fade effect (0.6s)

All animations respect user preferences for reduced motion.

## 📱 Responsive Breakpoints

The design includes responsive styles for different screen sizes:

| Breakpoint | Size | Changes |
|-----------|------|----------|
| Desktop   | 769px+ | Full size fonts and spacing |
| Tablet    | 481px - 768px | Adjusted font sizes |
| Mobile    | ≤ 480px | Optimized layout for small screens |

## ♿ Accessibility Features

- ✅ **Semantic HTML:** Proper heading hierarchy, semantic tags
- ✅ **Focus States:** Visible focus ring for keyboard navigation
- ✅ **ARIA Labels:** Button has descriptive aria-label
- ✅ **Reduced Motion:** Respects `prefers-reduced-motion` media query
- ✅ **Color Contrast:** Text colors meet WCAG AA standards
- ✅ **Keyboard Navigation:** All interactive elements are keyboard accessible

## 💡 Customization

### Change the Title
Edit `app/page.tsx`:
```tsx
<h1 className="title">Your Title Here</h1>
```

### Change Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #your-color;
  --color-text: #your-color;
}
```

### Adjust Font Sizes
Modify font size variables:
```css
--font-size-large: 52px;  /* Increase title size */
```

### Add More Pages
Create new files in the `app/` directory:
```bash
app/about/page.tsx        # Creates /about route
app/contact/page.tsx      # Creates /contact route
```

## 🔧 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|----------|
| Next.js | 14.1.0+ | React framework with SSR/SSG |
| React | 18.3.1+ | UI library |
| TypeScript | 5.3.3+ | Type-safe JavaScript |
| Node.js | 18+ | JavaScript runtime |

## 🐛 Troubleshooting

### Port 3000 is already in use
```bash
npm run dev -- -p 3001
```
This will run the dev server on port 3001 instead.

### Node version issues
Check your Node.js version:
```bash
node --version
```
Ensure you have Node.js 18 or higher. Update if needed.

### CSS not loading
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Other Platforms
This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku
- Any Node.js hosting

Refer to [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

---

**Made with ❤️ using Next.js and vanilla CSS**
