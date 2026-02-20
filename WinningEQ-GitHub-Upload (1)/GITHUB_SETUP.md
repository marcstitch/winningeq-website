# WinningEQ Website - GitHub Setup Instructions

## Step 1: Create New Repository on GitHub

1. Go to https://github.com/marcstitch
2. Click the green "New" button (top right)
3. Repository name: `winningeq-website`
4. Description: "WinningEQ official website"
5. Keep it **Private** (recommended) or Public
6. **DO NOT** check "Add a README file"
7. Click "Create repository"

## Step 2: Upload Your Website Files

After creating the repo, GitHub will show you an empty repository page.

1. Click "uploading an existing file" link
2. Drag and drop ALL the files from the zip I provide
3. Scroll down and click "Commit changes"

## Step 3: Connect to Netlify

1. Go to Netlify: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub (if needed)
5. Select repository: `marcstitch/winningeq-website`
6. Build settings:
   - Build command: (leave blank)
   - Publish directory: `/`
7. Click "Deploy site"

## Step 4: Configure Domain

1. In Netlify, go to Site settings → Domain management
2. Add custom domain: `winningeq.com`
3. Follow DNS instructions to point your domain to Netlify

## Done!

Future updates:
- Just upload new files to GitHub
- Netlify automatically deploys within seconds!

