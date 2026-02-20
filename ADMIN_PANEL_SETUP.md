# WinningEQ Admin Panel Setup Guide 🎛️

Your website now has a **no-code admin panel** where you can upload photos, change text, and update your site WITHOUT touching any code!

---

## 🎯 What You Can Edit

Once set up, you'll be able to log in and change:

✅ **Photos** - Upload your headshot, speaking photos, logo  
✅ **Contact Info** - Change email, social media links  
✅ **Demo Reel Video** - Add your Vimeo/YouTube video  
✅ **Client Logos** - Upload client logo images  

**No coding required - just click "Upload" and select your photo!**

---

## 📦 Setup Steps (One-Time Only)

### Step 1: Deploy Your Updated Site

1. **Download the new netlify-deploy-with-cms folder** (I'll provide this)
2. **Go to Netlify** - app.netlify.com
3. **Drag the folder** to deploy (same as before)
4. **Wait 30 seconds** for deployment

### Step 2: Enable Netlify Identity (5 minutes)

This creates user accounts so you can log in securely.

1. **In Netlify**, click on your site
2. **Go to "Identity"** tab in the top menu
3. **Click "Enable Identity"** button
4. **Done!** Identity is now active

### Step 3: Enable Git Gateway (2 minutes)

This allows the CMS to save your changes.

1. **Still in Identity tab**, scroll down
2. **Find "Git Gateway"** section
3. **Click "Enable Git Gateway"** button
4. **Done!**

### Step 4: Create Your Admin Account (2 minutes)

1. **Still in Identity tab**, click **"Invite users"**
2. **Enter your email address** (your real email)
3. **Click "Send"**
4. **Check your email** for invitation
5. **Click the link** in the email
6. **Set your password**
7. **You're now an admin!**

---

## 🎨 How to Use Your Admin Panel

### Accessing the Admin Panel:

**Go to:** `https://your-site-name.netlify.app/admin/`

(Replace `your-site-name` with your actual Netlify site name)

**Or:** Visit your homepage and click "Identity" widget in top right

### Logging In:

1. **Click "Log in"** on the admin page
2. **Enter your email and password**
3. **You're in!**

---

## 📸 How to Upload Photos (No Code!)

### Upload Your Headshot:

1. **Log into admin:** yoursite.com/admin/
2. **Click "Site Settings"** in left sidebar
3. **Click "Photos & Logo"**
4. **Find "Your Professional Headshot"**
5. **Click "Choose an image"** or drag & drop
6. **Select your photo** from your computer
7. **Click "Publish"** button at top
8. **Done!** Photo is live in 30 seconds

### Upload Your Logo:

1. **In admin**, go to **"Photos & Logo"**
2. **Find "Site Logo"** field
3. **Click "Choose an image"**
4. **Upload your logo file** (PNG with transparent background works best)
5. **Click "Publish"**
6. **Logo appears in navigation!**

### Upload Speaking/Interview Photos:

Same process - just click the field and upload!

---

## 📧 How to Change Your Contact Info

1. **Log into admin**
2. **Click "Site Settings"**
3. **Click "Contact Information"**
4. **Change any field:**
   - Email Address
   - LinkedIn URL
   - Twitter URL  
   - Instagram URL
5. **Click "Publish"**
6. **Updates live in 30 seconds!**

---

## 🎥 How to Add Your Demo Reel Video

### If you have a Vimeo video:

1. **Go to your Vimeo video**
2. **Copy the video ID from URL:**
   - URL: `https://vimeo.com/123456789`
   - Video ID: `123456789` ← Copy just this number

3. **In admin**, click **"Demo Reel Video"**
4. **Select "Vimeo"** from dropdown
5. **Paste the Video ID:** `123456789`
6. **Click "Publish"**
7. **Video appears on Speaking page!**

### If you have a YouTube video:

1. **Go to your YouTube video**
2. **Copy the video ID from URL:**
   - URL: `https://www.youtube.com/watch?v=ABC123xyz`
   - Video ID: `ABC123xyz` ← Copy just this part

3. **In admin**, select **"YouTube"** from dropdown
4. **Paste the Video ID**
5. **Click "Publish"**

---

## 🖼️ What the Admin Panel Looks Like

```
┌─────────────────────────────────┐
│  WinningEQ Admin                │
│                                 │
│  Site Settings                  │
│  ├── Contact Information        │
│  ├── Photos & Logo             │
│  └── Demo Reel Video           │
│                                 │
│  [Logout]                       │
└─────────────────────────────────┘
```

**It's a clean, simple interface - you'll get it in 2 minutes!**

---

## ⚡ Quick Reference

| What You Want to Do | Where to Go | What to Click |
|---------------------|-------------|---------------|
| **Upload your headshot** | Site Settings → Photos & Logo | "Your Professional Headshot" |
| **Add your logo** | Site Settings → Photos & Logo | "Site Logo" |
| **Change email** | Site Settings → Contact Information | "Email Address" |
| **Add social links** | Site Settings → Contact Information | LinkedIn/Twitter/Instagram |
| **Add demo reel** | Site Settings → Demo Reel Video | "Video ID" |

**Always click "Publish" at the top after making changes!**

---

## 🔄 Making Updates

Every time you make a change:

1. **Edit the content** in admin panel
2. **Click "Publish"** button (top of page)
3. **Wait 30 seconds** for Netlify to deploy
4. **Refresh your website** - changes are live!

*Note: You might need to do a "hard refresh" (Cmd+Shift+R or Ctrl+Shift+R) to see changes immediately*

---

## 🎓 Tutorial: Your First Photo Upload

Let's do your first upload together:

### Step-by-Step:

1. **Go to:** `https://your-site.netlify.app/admin/`
2. **Log in** with your email/password
3. **Click:** "Site Settings" (left sidebar)
4. **Click:** "Photos & Logo"
5. **You'll see fields for:**
   - Site Logo
   - Your Professional Headshot
   - Speaking Photo
   - Interview Photo
   - Casual Portrait

6. **Click:** "Choose an image" next to "Your Professional Headshot"
7. **Select your photo** from computer
8. **Wait** for upload (green checkmark appears)
9. **Click "Publish"** button at top
10. **Success message appears!**
11. **Wait 30 seconds**
12. **Visit your About page** - your photo is there!

---

## 🆘 Troubleshooting

### "Can't access /admin/"
- Make sure you completed Steps 2 & 3 (Enable Identity & Git Gateway)
- Check you're using the right URL: yoursite.netlify.app/admin/

### "Can't log in"
- Check your email for the invitation
- Make sure you set a password from the email link
- Try "Forgot password" if needed

### "Changes not appearing"
- Wait 30 seconds for Netlify to deploy
- Do a hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check you clicked "Publish" after making changes

### "Photo won't upload"
- Check file size (keep under 5MB)
- Use JPG or PNG format
- Try a different browser (Chrome works best)

---

## 💡 Pro Tips

### Image Best Practices:
- **Headshot:** 600x800px, JPG, under 500KB
- **Logo:** PNG with transparent background, 300x100px
- **Speaking photos:** 1200x800px, JPG, under 1MB

### Workflow:
1. Prepare all your photos/content first
2. Upload everything in one session
3. Review on your live site
4. Make any tweaks needed

### Stay Organized:
- Name photos clearly before uploading: `marc-headshot.jpg`, `logo.png`
- Keep originals backed up on your computer
- Document what photos you used where

---

## 🎯 What Happens Next

Once you complete the setup:

✅ You'll have a login at: `yoursite.com/admin/`  
✅ You can upload photos by clicking "Choose image"  
✅ You can change text by typing in fields  
✅ Changes go live in 30 seconds after clicking "Publish"  
✅ **No coding ever required!**

---

## 🚀 Getting Started Checklist

- [ ] Deploy updated netlify-deploy-with-cms folder
- [ ] Enable Netlify Identity (Step 2)
- [ ] Enable Git Gateway (Step 3)
- [ ] Invite yourself and set password (Step 4)
- [ ] Log into admin panel
- [ ] Upload your first photo
- [ ] Change your email address
- [ ] Update social media links
- [ ] Add demo reel video (if ready)
- [ ] Celebrate - you can now edit your site! 🎉

---

## 📞 Need Help?

If you get stuck:

1. **Try the Troubleshooting section** above
2. **Netlify Docs:** https://docs.netlify.com/visitor-access/identity/
3. **Ask me!** Just say: "Help with admin panel - I'm stuck on [specific step]"

---

## 🎉 You're Ready!

This admin panel means:

✅ **No more coding** - just click and upload  
✅ **No more waiting** - make changes anytime  
✅ **No more complexity** - simple interface  
✅ **No extra cost** - still just $15/year  

**Your website, your control, zero code! 🚀**

---

## Next Steps

1. Download the **netlify-deploy-with-cms.zip** I'm creating
2. Deploy it to Netlify
3. Complete the 4 setup steps above
4. Start uploading your photos!

**Estimated setup time:** 15 minutes (one-time only)  
**Then you'll be able to make changes in:** 30 seconds anytime!
