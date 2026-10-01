# Bytespace

Bytespace is a modern, responsive web application for discovering, browsing, and managing creative courses. Built with a sleek, vibrant neon-blue aesthetic and a highly modular component architecture, the platform enables users to seamlessly explore high-quality educational content.

## 🚀 Features

- **Dynamic Landing Page**: A gorgeous discovery section featuring responsive course cards, interactive category tags, and dynamic overlapping avatar stacks for social proof.
- **Advanced Search View**: A dedicated search interface with a robust `FilterBar`, reusable `Pagination` controls, and a flexible `CategorySelector`.
- **Creator Portfolios**: Personalized creator pages showcasing dynamic bio headers over a vibrant grid layout, paired with the creator's specific portfolio of courses.
- **Custom 404 Experience**: A beautifully designed "Not Found" page that leverages a global `GridBackground` layout wrapper to maintain brand aesthetic even on errors.
- **Highly Modular UI**: The entire application is powered by a robust set of abstracted, reusable React components (`AvatarStack`, `CategorySelector`, `CourseCard`, `FilterBar`, `GridBackground`, `Icon`, and `Pagination`) to ensure maximum maintainability and DRY code.
- **Inline SVG System**: A central `<Icon />` system that manages dozens of scalable vector graphics effortlessly.

## 🛠 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **Library**: [React](https://react.dev/) 19
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Modules
- **Package Manager**: NPM

## 📂 Project Structure

```
bytespace/
├── app/
│   ├── components/
│   │   ├── AvatarStack.tsx      # Handles overlapping user avatar rendering
│   │   ├── CategorySelector.tsx # Renders horizontal lists of toggleable pills
│   │   ├── CourseCard.tsx       # Standardized display block for course data
│   │   ├── CreatorHeader.tsx    # Header block for Creator portfolios
│   │   ├── FilterBar.tsx        # Flexible toolbar for sorting and filtering
│   │   ├── Footer.tsx           # Global footer
│   │   ├── GridBackground.tsx   # Global layout wrapper for vibrant grid aesthetic
│   │   ├── Icon.tsx             # Centralized repository for all SVG paths
│   │   ├── Navbar.tsx           # Global navigation
│   │   └── Pagination.tsx       # Reusable page navigation controls
│   ├── creators/
│   │   └── page.tsx             # Dynamic Creator Portfolio Page
│   ├── search/
│   │   └── page.tsx             # Advanced Course Search Page
│   ├── data/
│   │   └── courses.ts           # Mock data modeling
│   ├── globals.css              # Global styles & Tailwind config
│   ├── not-found.tsx            # Custom 404 Error Page
│   └── page.tsx                 # Main Landing / Discover Page
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
