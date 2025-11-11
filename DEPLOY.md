# 🚀 Deploy Adgecy to GitHub Pages

## 📋 Summary of Changes

This is a **light mode version** of the Tropiflo landing page with:

✅ **White background** with subtle blue gradient
✅ **Dark text** (instead of white on black)
✅ **Knowledge discovery focus** (instead of quant/hedge fund)
✅ **Updated copy:**
   - "Unlock insights. Discover connections."
   - "Transform how you explore knowledge. Let AI guide your research journey."
✅ **Rebranded to Adgecy** (emails: info@adgecy.io, Sales@adgecy.io)

---

## 🎯 Step-by-Step GitHub Deployment

### 1. Create a New GitHub Repository

Go to: https://github.com/new

- **Repository name:** `adgecy-landing` (or your preferred name)
- **Visibility:** Public or Private (your choice)
- **DO NOT** initialize with README, .gitignore, or license (we already have these)
- Click **Create repository**

---

### 2. Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd /home/ozkilim/adgecy

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote
# REPLACE with your actual repository URL from GitHub
git remote add origin https://github.com/YOUR_USERNAME/adgecy-landing.git

# Push to GitHub
git push -u origin main
```

**Note:** You'll need to authenticate. Use one of these methods:
- Personal Access Token (recommended)
- GitHub CLI (`gh auth login`)
- SSH key

---

### 3. Enable GitHub Pages

1. Go to your repository settings:
   `https://github.com/YOUR_USERNAME/adgecy-landing/settings/pages`

2. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**

3. That's it! GitHub will automatically deploy.

---

### 4. Monitor Deployment

View deployment progress:
`https://github.com/YOUR_USERNAME/adgecy-landing/actions`

Once complete (1-2 minutes), your site will be live at:
`https://YOUR_USERNAME.github.io/adgecy-landing/`

---

### 5. (Optional) Add Custom Domain

If you own `adgecy.io`:

1. In repository settings → Pages → Custom domain
2. Enter: `adgecy.io`
3. Update your DNS:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for apex domain to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

The CNAME file is already configured in `public/CNAME`.

---

## 🎨 Design Differences from Tropiflo

| Feature | Tropiflo (Dark) | Adgecy (Light) |
|---------|----------------|----------------|
| Background | Black (#000000) | White (#ffffff) |
| Text color | White | Dark gray (#1a1a1a) |
| Gradient | Bold blue | Subtle blue |
| Noise | 6.5% opacity | 3% opacity |
| Focus | Quant/Trading | Knowledge Discovery |

---

## 🔧 Local Development

```bash
cd /home/ozkilim/adgecy

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

---

## 📝 Quick Reference Commands

```bash
# Push new changes
git add .
git commit -m "Your commit message"
git push origin main

# View git status
git status

# View remote URL
git remote -v
```

---

## 🆘 Troubleshooting

**Authentication Error:**
Generate a Personal Access Token:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic) with `repo` scope
3. Use token as password when pushing

**White Page After Deploy:**
- Wait 2-3 minutes for deployment to complete
- Check GitHub Actions for errors
- Ensure base path is `/` in `vite.config.js` (already set)

---

## ✅ Checklist

- [ ] Created new GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages (Source: GitHub Actions)
- [ ] Waited for deployment to complete
- [ ] Verified site loads at GitHub Pages URL
- [ ] (Optional) Configured custom domain

---

**Need help?** Check the GitHub Actions logs for any deployment errors.

