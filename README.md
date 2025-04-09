# Modern Portfolio Website Template

A clean, responsive, and accessible portfolio website template with dark mode support and contact form functionality. Perfect for professionals, freelancers, and creatives looking to showcase their work online.

## 🌟 Features

- 🎨 Modern, clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- ♿ Accessible (WCAG compliant)
- 📧 Contact form with email functionality
- 🎯 SEO optimized
- ⚡ Fast loading
- 🔒 Secure
- 🎭 Customizable sections
- 📊 Skills showcase
- 🖼️ Portfolio grid
- 📝 Services showcase

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

2. Install dependencies:
```bash
cd server
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the email configuration in `.env`:
```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
RECIPIENT_EMAIL=your-email@gmail.com
```

4. Start the development server:
```bash
npm run dev
```

## 🎨 Customization

### Personal Information

1. Update `index.html`:
   - Replace `[Your Name]` with your name
   - Update the meta tags with your information
   - Modify the About section
   - Update social media links
   - Add your own profile picture

2. Update `style.css`:
   - Modify color variables in `:root` for light theme
   - Adjust `[data-theme="dark"]` variables for dark theme
   - Customize fonts, spacing, and other visual elements

### Portfolio Items

1. In `index.html`, find the portfolio section
2. Replace the example projects with your own:
```html
<article class="portfolio-item">
    <h4>Your Project Title</h4>
    <p>Project description and results</p>
</article>
```

### Skills

1. Update the skills section in `index.html`
2. Add or remove skill categories as needed
3. Update your proficiency levels

### Contact Form

1. The contact form is already set up to work with the Node.js backend
2. Update the form fields in `index.html` if needed
3. Customize the success/error messages in `script.js`

## 📧 Email Setup

### Gmail Setup

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account → Security → App Passwords
   - Select "Mail" and your device
   - Use the generated password in your `.env` file

### Other Email Providers

Update the transporter configuration in `server.js`:

```javascript
const transporter = nodemailer.createTransport({
    service: 'your-email-provider',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

## 🛠️ Development

### File Structure

```
portfolio-template/
├── index.html          # Main HTML file
├── style.css          # Styles
├── script.js          # Frontend JavaScript
├── images/            # Image assets
│   ├── favicon/      # Favicon files
│   └── me/           # Profile images
└── server/           # Backend files
    ├── server.js     # Email server
    ├── package.json  # Dependencies
    └── .env          # Environment variables
```

### Adding New Sections

1. Create a new section in `index.html`:
```html
<section id="your-section" class="container" aria-label="Your section">
    <h2>Your Section Title</h2>
    <!-- Your content here -->
</section>
```

2. Add corresponding styles in `style.css`
3. Add any necessary JavaScript functionality in `script.js`

## 📱 Responsive Design

The template is mobile-first and includes breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Security

- Environment variables for sensitive data
- CORS protection
- Input validation
- XSS protection
- Rate limiting (can be enabled)

## 📈 SEO

The template includes:
- Meta tags
- Open Graph tags
- Semantic HTML
- Alt text for images
- Proper heading hierarchy
- Mobile-friendly design

## 🎯 Performance

- Lazy loading images
- Minified CSS and JavaScript
- Optimized assets
- Efficient animations
- Minimal dependencies

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue in the GitHub repository or contact [your-email@example.com](mailto:your-email@example.com).

## 🖼️ Images and Resources

### Image Structure

```
images/
├── favicon/           # Favicon files (16x16, 32x32, 180x180 for Apple Touch)
├── me/               # Profile and about section images
├── portfolio/        # Project screenshots and portfolio images
└── background/       # Background images and patterns
```

### Free Image Resources

1. **Profile Pictures & Team Photos**
   - [Unsplash](https://unsplash.com/s/photos/professional-profile) - High quality, free to use photos
   - [Pexels](https://www.pexels.com/search/professional%20profile/) - Professional stock photos

2. **Portfolio Backgrounds**
   - [SVG Backgrounds](https://www.svgbackgrounds.com/) - Free SVG backgrounds
   - [Hero Patterns](https://heropatterns.com/) - Repeatable SVG background patterns

3. **Icons**
   - [Font Awesome](https://fontawesome.com/) - Vector icons and social logos
   - [Feather Icons](https://feathericons.com/) - Simple, elegant open source icons
   - [Material Icons](https://material.io/resources/icons/) - Material design icons

4. **Favicon Generator**
   - [Favicon.io](https://favicon.io/) - Generate favicons from text, images, or emojis
   - [Real Favicon Generator](https://realfavicongenerator.net/) - Complete favicon solution

### Image Optimization

Before adding images to your portfolio:
1. Compress them using tools like:
   - [TinyPNG](https://tinypng.com/) - Smart PNG and JPEG compression
   - [Squoosh](https://squoosh.app/) - Image compression web app
2. Convert to modern formats (WebP) when possible
3. Use appropriate sizes for different devices
4. Include proper alt text for accessibility

### Recommended Image Sizes

- Profile Photo: 400x400px (1:1 ratio)
- Portfolio Thumbnails: 800x600px (4:3 ratio)
- Background Images: 1920x1080px (16:9 ratio)
- Blog Post Images: 1200x630px (optimal for social sharing)
- Favicon: 
  - 16x16px (standard favicon)
  - 180x180px (Apple Touch Icon)
  - 512x512px (PWA icon)

---

Made with ❤️ by [Your Name](https://github.com/yourusername) 