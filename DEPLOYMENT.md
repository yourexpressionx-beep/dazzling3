# Vercel Deployment Guide for Dazzling Academy

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at vercel.com)
3. Your project pushed to a GitHub repository

## Deployment Steps

### 1. Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - ready for Vercel deployment"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/dazzling-academy.git

# Push to GitHub
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the framework settings

### 3. Configure Environment Variables

In the Vercel dashboard, add these environment variables:

```
DATABASE_URL=your_neon_or_postgres_url
NODE_ENV=production
SESSION_SECRET=generate_a_secure_random_string
SITE_URL=https://your-domain.vercel.app
```

### 4. Build Settings

Vercel will auto-detect settings from `vercel.json`:

- **Framework:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 20.x (recommended)

### 5. Deploy

Click "Deploy" and Vercel will:
- Install dependencies
- Run the build command
- Deploy your application
- Provide a live URL

### 6. Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., dazzlingacademy.com)
4. Update your DNS records as instructed by Vercel

## Security Features

The deployment includes:

- ✅ HTTPS/TLS encryption (automatic)
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ XSS protection
- ✅ Clickjacking protection
- ✅ MIME type sniffing protection
- ✅ HSTS for HTTPS enforcement

## Performance Optimizations

- ✅ Automatic CDN distribution
- ✅ Image optimization
- ✅ Static asset caching
- ✅ Gzip compression
- ✅ Edge network deployment

## SEO Configuration

The site is SEO-ready with:

- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## Monitoring

After deployment:

1. Verify the site loads correctly
2. Check all pages and navigation
3. Test contact methods (WhatsApp, email, phone)
4. Verify SEO tags using tools like:
   - Google Search Console
   - Meta Tags validator
   - Structured Data Testing Tool

## Updates

To deploy updates:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and deploy your changes.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Verify all dependencies are in package.json
- Ensure environment variables are set correctly

### 404 Errors
- Verify vercel.json routing configuration
- Check that dist folder contains built files

### Database Connection Issues
- Confirm DATABASE_URL is set correctly
- Check database provider allows connections from Vercel IPs
- Verify database is accessible from external sources

## Support

For Vercel-specific issues: https://vercel.com/docs
For project issues: Contact your development team
