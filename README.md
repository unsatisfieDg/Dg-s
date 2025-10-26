# 🚀 Danie Glenn Sapdaan Jr. - Portfolio

A modern, responsive portfolio website showcasing my projects, certifications, and skills as a Software Engineer.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

### 🎨 Modern Design
- Clean, minimal UI with dark mode support
- Smooth animations and transitions
- Parallax scrolling effects
- Responsive design for all devices (mobile, tablet, desktop)

### 📱 Fully Responsive
Optimized for all screen sizes:
- 📱 **Mobile**: iPhone X to latest iPhone models (375px - 430px)
- 📱 **Tablets**: iPad Mini, iPad Air (768px - 1024px)
- 💻 **Laptops**: Standard laptops (1024px - 1439px)
- 🖥️ **Desktops**: Large monitors (1440px+)

### 🧭 Multi-Page Navigation
- Home page with all sections
- Dedicated Certifications page
- Dedicated Projects page
- Smooth hash-based navigation
- "Back to Home" with section scrolling

### 🌓 Dark Mode
- Toggle switch with smooth transitions
- Persists preference in local storage
- System preference detection
- Optimized for mobile and desktop

### 🎯 Key Sections
- **Hero**: Profile, resume download, email contact
- **About**: Professional summary and goals
- **Tech Stack**: Animated orbital display of technologies
- **Projects**: Featured projects with hover effects
- **Certifications**: Professional certifications with links
- **Experience**: Timeline of education and work
- **Outside World**: Personal interests and hobbies

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### Deployment
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated deployment

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/unsatisfieDg/danie_portfolio.git
cd danie_portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
danie_portfolio/
├── public/
│   ├── profile.jpg           # Main profile photo
│   ├── profile-hover.jpg     # Alternate profile photo (on hover)
│   └── RESUME.pdf            # Resume file for download
├── src/
│   ├── components/
│   │   ├── About.jsx         # About section
│   │   ├── Certifications.jsx # Certifications section
│   │   ├── DarkModeToggle.jsx # Dark mode toggle button
│   │   ├── Footer.jsx        # Footer with social links
│   │   ├── Hero.jsx          # Hero section with profile
│   │   ├── Projects.jsx      # Projects section
│   │   └── TechStack.jsx     # Tech stack with orbital animation
│   ├── pages/
│   │   ├── Home.jsx          # Main home page
│   │   ├── AllCertifications.jsx # All certifications page
│   │   └── AllProjects.jsx   # All projects page
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── vite.config.js            # Vite configuration
```

## 🎨 Customization

### Update Profile Information
1. Replace `public/profile.jpg` with your profile photo
2. Replace `public/profile-hover.jpg` with an alternate photo
3. Replace `public/RESUME.pdf` with your resume
4. Update personal information in `src/components/Hero.jsx`

### Add/Edit Projects
Edit the `projects` array in:
- `src/components/Projects.jsx` (home page)
- `src/pages/AllProjects.jsx` (projects page)

### Add/Edit Certifications
Edit the `certifications` array in:
- `src/components/Certifications.jsx` (home page)
- `src/pages/AllCertifications.jsx` (certifications page)

### Update Tech Stack
Edit the `techStack` object in `src/components/TechStack.jsx`

## 📝 Key Features Details

### Orbital Tech Stack Animation
The Tech Stack section features a custom CSS animation that displays technologies in orbiting circles, creating a dynamic and visually appealing effect.

### Smart Navigation
- Click "View All" on Certifications/Projects to see full lists
- "Back to Home" links scroll directly to relevant sections
- Smooth parallax effects on scroll

### Performance Optimized
- Lazy loading images
- Optimized bundle size
- Fast initial page load
- Smooth 60fps animations

## 🌐 Deployment

This portfolio is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

1. **Update `vite.config.js`** with your repository name:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
})
```

2. **Build and deploy**:
```bash
npm run build
npm run deploy
```

Or use GitHub Actions for automatic deployment on push to main branch.

## 📧 Contact

- **Email**: sapdaandg02@gmail.com
- **LinkedIn**: [linkedin.com/in/DgSapdaan](https://linkedin.com/in/DgSapdaan)
- **GitHub**: [github.com/unsatisfieDg](https://github.com/unsatisfieDg)
- **Instagram**: [@pulispang.kalawakan](https://instagram.com/pulispang.kalawakan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Built with [React](https://react.dev) + [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

**⭐ If you found this portfolio helpful or inspiring, please consider giving it a star!**

*Made with ❤️ and ☕ by Danie Glenn Sapdaan Jr.*
