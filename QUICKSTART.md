# Quick Start - 10 Minutes to Live Website

## Step 1: Install Git (if needed)
Download from: https://git-scm.com

## Step 2: Open Command Line

**Windows**: Press Win+R, type `cmd`
**Mac**: Press Cmd+Space, type `terminal`

## Step 3: Navigate to Folder

```bash
cd path/to/mistresssanjana.com
```

## Step 4: Run These Commands

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

## Step 5: Create GitHub Account

Go to https://github.com and sign up (free)

## Step 6: Create New Repository

1. Click **+** → **New repository**
2. Name: `mistresssanjana.com`
3. Public: ✓
4. Click **Create repository**
5. **Copy the HTTPS URL**

## Step 7: Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/mistresssanjana.com.git
git push -u origin main
```

## Step 8: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** (left sidebar)
3. Source: **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

## Step 9: Website is LIVE!

Wait 2-5 minutes, then visit:
```
https://YOUR-USERNAME.github.io/mistresssanjana.com
```

## Customization

- Replace images in `/images` folder
- Update Amazon wishlist link (search for "PLACEHOLDER" in HTML files)
- Change colors in `css/style.css`

## Making Updates

After changes:
```bash
git add .
git commit -m "Updated [what you changed]"
git push
```

Website updates automatically in 2-5 minutes!

---

**Cost**: $0/month (GitHub Pages is free)
**Time**: ~10 minutes
**Difficulty**: Easy

🎉 **Congratulations! Your website is live!**
