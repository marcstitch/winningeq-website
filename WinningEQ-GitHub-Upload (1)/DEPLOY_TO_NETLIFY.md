# Deploy to Netlify - Quick Start Guide

This guide will help you deploy your WinningEQ website to Netlify in just a few minutes.

## What You Need

- A Netlify account (free at netlify.com)
- The complete `netlify-deploy` folder from this project

## Deployment Steps

### Option 1: Drag and Drop (Easiest - 2 Minutes)

1. **Go to Netlify**
   - Visit: https://app.netlify.com
   - Log in or create a free account

2. **Deploy Your Site**
   - On your Netlify dashboard, look for "Sites"
   - You'll see a large drag-and-drop area that says "Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"
   - Drag the entire `netlify-deploy` folder to this area
   - OR click "Browse to upload" and select the folder

3. **Wait for Deployment**
   - Netlify will upload and deploy your site (takes 30-60 seconds)
   - You'll see a progress bar
   - When complete, you'll get a URL like: `https://random-name-12345.netlify.app`

4. **Test Your Site**
   - Click the URL to visit your live site
   - Test all pages: Home, Speaking, Interviews, About, Media
   - Test the contact forms

### Option 2: Connect to Git (Recommended for Updates)

1. **Create a Git Repository**
   - Create a new repository on GitHub, GitLab, or Bitbucket
   - Upload your `netlify-deploy` folder contents to the repository

2. **Connect to Netlify**
   - In Netlify, click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your WinningEQ repository

3. **Configure Build Settings**
   - Build command: (leave blank - it's a static site)
   - Publish directory: `.` (current directory)
   - Click "Deploy site"

4. **Automatic Deployments**
   - Now whenever you update your Git repository, Netlify will automatically redeploy
   - This is great for ongoing website updates

## Custom Domain Setup

### Step 1: Purchase Your Domain

Purchase `winningeq.com` (or your preferred domain) from:
- Namecheap (recommended): ~$10/year
- Google Domains: ~$12/year
- GoDaddy: ~$15/year

### Step 2: Connect Domain to Netlify

1. **In Netlify:**
   - Go to your site dashboard
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter: `winningeq.com`
   - Click "Verify"

2. **Update DNS Records:**
   
   **If you bought domain from Netlify:**
   - Netlify will handle everything automatically
   
   **If you bought domain elsewhere:**
   - In your domain registrar (Namecheap, Google Domains, etc.)
   - Go to DNS settings
   - Add these records:
   
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   ```

3. **Wait for DNS Propagation**
   - This can take 1-48 hours (usually < 1 hour)
   - Netlify will show a "Waiting on DNS" message
   - Once complete, your site will be live at winningeq.com

4. **Enable HTTPS**
   - Netlify automatically provides free HTTPS
   - After DNS propagates, HTTPS will activate automatically
   - Your site will be secure (https://winningeq.com)

## Form Setup

Your contact forms are already configured for Netlify Forms.

### Enable Email Notifications:

1. **In Netlify:**
   - Go to your site dashboard
   - Click "Forms" in the left sidebar
   - You'll see your forms listed (speaking-booking, interview-booking)

2. **Add Email Notification:**
   - Click on a form name
   - Click "Form notifications"
   - Click "Add notification" → "Email notification"
   - Enter your email: `booking@winningeq.com` (or your actual email)
   - Click "Save"

3. **Repeat for All Forms:**
   - Do this for both the speaking-booking and interview-booking forms

### Test Your Forms:

1. Visit your live site
2. Fill out a contact form
3. Submit it
4. Check your email - you should receive the form submission within 1-2 minutes

## Updating Your Site

### If You Used Drag and Drop:

1. Make changes to your HTML/CSS/JS files locally
2. Go to Netlify → Your site → Deploys
3. Drag the updated `netlify-deploy` folder to the deploy area
4. Site will update in 30 seconds

### If You Connected to Git:

1. Make changes to your files locally
2. Commit and push to your Git repository
3. Netlify automatically detects changes and redeploys
4. Site updates in 1-2 minutes

## Common Issues & Solutions

### Issue: "404 - Page Not Found" on About or Media Pages

**Solution:**
- Make sure all 5 HTML files are in the folder you're deploying:
  - index.html
  - speaking.html
  - interviews.html
  - about.html ← Check this one
  - media.html ← Check this one
- Redeploy the complete folder

### Issue: Forms Not Working

**Solution:**
- Make sure the forms have `data-netlify="true"` attribute
- Check that `netlify.toml` is in the root of your deploy folder
- Verify email notifications are set up in Netlify dashboard

### Issue: Site Looks Broken on Mobile

**Solution:**
- The CSS has responsive design built in
- Clear your browser cache
- Test in Chrome DevTools mobile simulator

### Issue: Custom Domain Not Working

**Solution:**
- Wait longer (DNS can take up to 48 hours)
- Double-check DNS records in your domain registrar
- Make sure you're using the correct Netlify IP address (75.2.60.5)

## Performance Checklist

After deploying, verify:

- ✅ All pages load (Home, Speaking, Interviews, About, Media)
- ✅ Mobile menu works on phone
- ✅ Forms submit successfully
- ✅ Site loads in under 3 seconds
- ✅ HTTPS is enabled (green padlock in browser)
- ✅ No console errors (check browser DevTools)

## Next Steps

1. **Add Your Content:**
   - Replace placeholder images with your photos
   - Add your demo reel video
   - Update social media links
   - Add real client logos

2. **Set Up Analytics:**
   - Add Google Analytics
   - Submit sitemap to Google Search Console

3. **Marketing:**
   - Update LinkedIn profile with new site URL
   - Update speaker bureau listings
   - Share on social media

## Support

If you need help:
- Netlify Documentation: https://docs.netlify.com
- Netlify Support: https://www.netlify.com/support/

## Cost Summary

- Netlify Hosting: **FREE**
- Custom Domain: **$10-15/year**
- HTTPS Certificate: **FREE** (included with Netlify)
- Form Submissions: **100/month FREE** (Netlify Forms)

**Total: $10-15/year** (just the domain name)

---

**Your site is ready to go live! 🚀**
