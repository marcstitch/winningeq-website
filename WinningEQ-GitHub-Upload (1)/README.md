# WinningEQ Website - Ready for Netlify Deployment

This folder contains everything needed to deploy your professional speaking website to Netlify.

## 📁 What's Included

- **index.html** - Homepage with hero, services, themes, client logos
- **speaking.html** - Speaking engagements page with 4 keynotes and booking form
- **interviews.html** - Interviews & moderation page with pricing and booking form
- **about.html** - About Marc page with bio and credentials
- **media.html** - Media kit with bios, photos, and press materials
- **styles.css** - Complete responsive stylesheet
- **script.js** - JavaScript for mobile menu and interactions
- **netlify.toml** - Netlify configuration
- **DEPLOY_TO_NETLIFY.md** - Detailed deployment guide

## 🚀 Quick Deploy (2 Minutes)

1. Go to https://app.netlify.com
2. Drag this entire folder to the deploy zone
3. Done! Your site is live

See `DEPLOY_TO_NETLIFY.md` for detailed instructions.

## ✅ Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Professional design with gold/blue/dark color scheme  
✅ Working contact forms (Netlify Forms integration)  
✅ Mobile-friendly navigation  
✅ Fast loading and optimized  
✅ SEO-friendly structure  
✅ Clean, modern design  

## 📝 What You Need to Customize

### 1. Contact Email
Find and replace `booking@winningeq.com` with your actual email address in:
- All HTML files (footer sections)
- Form notification settings in Netlify

### 2. Social Media Links
Update these in the footer of all HTML files:
- LinkedIn: `https://linkedin.com/in/marcstcherbina`
- Twitter: `https://twitter.com/marcstcherbina`
- Instagram: `https://instagram.com/marcstcherbina`

### 3. Demo Reel Video
In `speaking.html`, find the video placeholder and replace with:
```html
<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; fullscreen" 
        allowfullscreen></iframe>
```

### 4. Photos
Replace placeholder images with your professional photos:
- Create an `images` folder in this directory
- Add your photos
- Update image URLs in HTML files

### 5. Client Logos
Add real client logos (with permission) in the clients section

## 🎨 Color Customization

To change colors, edit `styles.css` and find:

```css
:root {
  --color-primary-dark: #1a1a1a;
  --color-accent-gold: #c49a47;
  --color-accent-blue: #1e3a5f;
}
```

Change the hex codes to your preferred colors.

## 📱 Testing Checklist

Before going live, test:

- [ ] All 5 pages load without errors
- [ ] Mobile menu works on phone
- [ ] Forms submit successfully
- [ ] All links work
- [ ] Site looks good on mobile, tablet, desktop
- [ ] Works in Chrome, Safari, Firefox, Edge

## 🔄 Updating Your Site

### Method 1: Drag and Drop
1. Make changes to files locally
2. Go to Netlify → Your site → Deploys
3. Drag the updated folder
4. Site updates in 30 seconds

### Method 2: Git Integration
1. Push changes to your Git repository
2. Netlify auto-deploys
3. Site updates in 1-2 minutes

## 📊 What's Next

1. **Deploy** - Get site live on Netlify
2. **Custom Domain** - Buy winningeq.com and connect it
3. **Content** - Add your videos, photos, testimonials
4. **Forms** - Set up email notifications
5. **Analytics** - Add Google Analytics
6. **Marketing** - Share your new site!

## 💰 Cost

- Netlify Hosting: **FREE**
- Custom Domain: **$10-15/year**
- Total: **$10-15/year**

## 🆘 Need Help?

See `DEPLOY_TO_NETLIFY.md` for:
- Step-by-step deployment guide
- Custom domain setup
- Form configuration
- Troubleshooting common issues

## 📞 Support

For technical questions about the website:
- Check the deployment guide
- Review Netlify documentation
- Contact: booking@winningeq.com

---

**Ready to launch! 🎉**

Your professional speaker website is complete and ready for the world to see.
