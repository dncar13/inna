# 🚀 Deployment Guide - Ina Peretz Website

## Prerequisites
- Node.js 20+ installed
- Git installed
- GitHub account
- Netlify account (free)

## Step-by-Step Deployment

### 1. Local Preparation
```bash
# Verify everything works locally
npm install
npm run build
npm run preview
```

### 2. Push to GitHub

#### If this is a new repository:
```bash
git init
git add .
git commit -m "Initial commit - Ina Peretz website ready for production"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ina-peretz-website.git
git push -u origin main
```

#### If updating existing repository:
```bash
git add .
git commit -m "Production ready - removed Lovable dependencies"
git push origin main
```

### 3. Deploy to Netlify

#### Option A: Through Netlify Dashboard (Recommended)
1. Go to [netlify.com](https://netlify.com) and login
2. Click "Add new site" → "Import from Git"
3. Connect to GitHub and select your repository
4. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20 (from netlify.toml)

#### Option B: Using Netlify CLI
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize (one time setup)
netlify init

# Deploy preview
netlify deploy

# Deploy to production
netlify deploy --prod
```

### 4. Environment Variables Setup

In Netlify Dashboard: Site Settings → Environment Variables

**Required Variables:**
```
VITE_SITE_URL=https://your-site-name.netlify.app
VITE_PHONE_NUMBER=+972522880109
VITE_EMAIL=inaper73@gmail.com
VITE_WHATSAPP_NUMBER=972522880109
```

**Optional (for analytics):**
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

### 5. Custom Domain (Optional)

1. In Netlify: Site settings → Domain management
2. Add custom domain
3. Configure DNS records with your domain provider
4. Enable HTTPS (automatic with Netlify)

### 6. Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages work (test routing)
- [ ] Phone number links work
- [ ] WhatsApp links work
- [ ] Email links work
- [ ] Responsive design works on mobile
- [ ] SEO meta tags are correct
- [ ] No console errors
- [ ] Performance is good (test with PageSpeed Insights)

## Updating the Site

After making changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Netlify will automatically rebuild and deploy!

## Troubleshooting

### Build Fails
- Check Node version is 20+
- Verify all dependencies are installed
- Check build logs in Netlify dashboard

### 404 on Page Refresh
- Verify `_redirects` file exists in `public/`
- Check `netlify.toml` has correct redirects

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Check they're set in Netlify dashboard
- Rebuild site after adding variables

## Support
For issues, check:
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- Build logs in Netlify dashboard
