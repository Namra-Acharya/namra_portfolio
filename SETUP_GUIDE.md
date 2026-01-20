# Portfolio Setup Guide

## ✅ What's Been Added

### 1. **Resume Section** (`/resume`)
- Comprehensive resume display with all education, experience, and skills
- One-click download button for your resume PDF
- Professional layout with skill categories
- Quick stats about your experience

### 2. **Certificates Section** (`/certificates`)
- Beautiful gallery of all 11 certificates
- Individual certificate cards with:
  - Certificate title and issuer
  - Issue date
  - Animated icons
  - Gradient backgrounds
  - Hover effects

### 3. **Enhanced Components**
- **About Section**: Detailed professional profile with your story and philosophy
- **Skills Section**: Comprehensive skill breakdown with subcategories
- **Projects Section**: Already included with your major projects
- **Services Section**: NexusGroups company services
- **Contact Section**: Email and LinkedIn links
- **Navbar**: Updated with Resume and Certificates navigation links
- **Footer**: Social links to GitHub and LinkedIn

## 📋 Resume PDF Setup

To enable the resume download functionality, follow these steps:

### Option 1: Using Vite's Public Folder (Recommended)

1. Create a `public` folder in your project root if it doesn't exist:
   ```
   E:/Documents/Projects/Portfolio/public/
   ```

2. Place your resume PDF in this folder:
   ```
   E:/Documents/Projects/Portfolio/public/Namra_Acharya_Resume.pdf
   ```

3. The download button in the Resume section will automatically work!

### Option 2: Direct File Reference

If you have the resume PDF in a different location or hosted online, you can update the download link in `src/components/Resume.jsx`:

```javascript
const handleDownload = () => {
  const link = document.createElement('a')
  link.href = '/Namra_Acharya_Resume.pdf'  // Update this path
  link.download = 'Namra_Acharya_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
```

## 🎨 Design Features

### Animations & Effects
- ✨ Smooth fade-in and slide-up animations on page load
- 🎯 Interactive hover effects on all cards and buttons
- 🌊 Floating background shapes with continuous animations
- 📊 Staggered animations for list items and grid elements
- 💫 Glowing borders and shadow effects on hover

### Color Scheme
- **Primary Background**: Dark blue-black (`#0f172a`)
- **Secondary**: Slate blue (`#1e293b`)
- **Accent**: Bright blue (`#3b82f6`)
- **Gradients**: Blue to cyan, purple to pink, and multi-color gradients throughout

### Responsive Design
- Mobile-optimized navigation with hamburger menu
- Responsive grid layouts for skills and certificates
- Touch-friendly buttons and interactive elements
- Optimized font sizes and spacing for all screen sizes

## 📱 Sections Overview

| Section | Content | Key Features |
|---------|---------|--------------|
| **Home/Hero** | Introduction & CTAs | Animated background, floating card |
| **About** | Personal & professional story | Skill badges, detailed description |
| **Skills** | Technical expertise (6 categories) | Icon-based cards, subcategories |
| **Projects** | Featured work (6 projects) | Featured project highlight, live links |
| **Services** | NexusGroups offerings | Service cards with features |
| **Resume** | Professional summary | Download button, quick stats |
| **Certificates** | All 11 certifications | Interactive certificate cards |
| **NexusGroups** | Platform showcase | Feature highlights, stats |
| **Contact** | Get in touch | Contact form, email/LinkedIn links |
| **Footer** | Navigation & social | Social links, back-to-top button |

## 🔧 Customization Tips

### To Update Contact Information:
Edit `src/components/Contact.jsx`:
```javascript
const contactMethods = [
  { icon: Mail, label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
  // Add more contact methods
]
```

### To Update Social Links:
Edit `src/components/Footer.jsx`:
```javascript
const socialLinks = [
  { icon: Github, link: 'https://github.com/YOUR-USERNAME', label: 'GitHub' },
  { icon: Linkedin, link: 'https://linkedin.com/in/YOUR-PROFILE/', label: 'LinkedIn' },
]
```

### To Add New Certificates:
Edit `src/components/Certificates.jsx` and add to the `certificates` array:
```javascript
{
  id: 12,
  title: 'New Certificate',
  issuer: 'Organization',
  date: 'Date',
  description: 'Description',
  color: 'from-COLOR1 to-COLOR2',
  icon: '🎓'
}
```

## 🚀 Deployment

Your portfolio is built with Vite and React. To deploy:

1. Build for production:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to:
   - Vercel (automatic from Git)
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 📊 File Structure

```
Portfolio/
├── public/
│   └── Namra_Acharya_Resume.pdf  ← Add resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Resume.jsx            ← Download functionality
│   │   ├── Certificates.jsx      ← All 11 certificates
│   │   ├── NexusGroups.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js            ← Styling configuration
├── package.json
└── vite.config.js
```

## 💡 Tips & Best Practices

1. **Keep Resume Updated**: Update both the Resume section and the PDF file
2. **Add Project Links**: Update project links in `Projects.jsx`
3. **Maintain Consistency**: All animations use Framer Motion - keep the animation style consistent
4. **Mobile Testing**: Test on mobile devices regularly
5. **Analytics**: Consider adding Google Analytics or similar tracking

## 🎯 Next Steps

1. ✅ Add resume PDF to public folder
2. ✅ Update contact information with your actual email
3. ✅ Add links to your GitHub projects
4. ✅ Deploy to Vercel, Netlify, or your hosting service
5. ✅ Test all links and download functionality
6. ✅ Monitor analytics and user engagement

---

**Built with ❤️ using React, Framer Motion, Tailwind CSS, and Vite**
