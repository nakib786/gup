# E&G Tree Barrier Installation Website

Professional tree barrier installation services website for British Columbia.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
├── src/
│   ├── app.js          # Main application HTML
│   ├── main.js         # Entry point and slideshow logic
│   ├── interactions.js # Form handling and interactions
│   ├── animations.js   # Scroll animations
│   ├── style.css       # Main styles
│   └── seo.css         # SEO-specific styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vercel.json          # Vercel deployment config
```

## 🚀 Vercel Deployment

### Automatic Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite project
3. Deploy with default settings

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables
No environment variables required for basic deployment.

## 🔧 Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📱 Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Contact form with FormSubmit.co
- ✅ Image slideshow
- ✅ Smooth animations
- ✅ Mobile-friendly navigation
- ✅ Structured data markup

## 🎨 Styling

- **CSS Framework**: Tailwind CSS
- **Build Tool**: Vite
- **PostCSS**: Autoprefixer

## 📧 Contact Form

The contact form uses FormSubmit.co to send emails to `info@egtreebarrier.ca`.

## 🔍 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Structured data (Schema.org)
- Sitemap generation
- Robots.txt configuration

## 📁 File Naming Convention

**Important**: All image files should use hyphens instead of spaces:
- ✅ `hero-pic.jpeg` (correct)
- ❌ `hero pic.jpeg` (incorrect)

## 🚨 Common Issues

### Build Errors
- Ensure all image files use hyphens instead of spaces
- Check that all dependencies are installed
- Verify Node.js version compatibility

### Form Issues
- FormSubmit.co requires the email address to be verified
- Check browser console for JavaScript errors

## 📞 Support

For technical support, contact:
- **Developer**: Aurora N&N Business Solution Inc.
- **Website**: https://aurorabusiness.ca

## 📄 License

Private project - All rights reserved.