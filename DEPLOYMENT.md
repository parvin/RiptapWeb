# Riptap Website — Deployment Guide

## GitHub Pages Setup

### 1. Create the Repository
1. Go to [github.com/new](https://github.com/new)
2. Name the repo (e.g., `riptap-web` or `riptap.com`)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Do **not** initialize with README (you already have files)

### 2. Push Code
```bash
cd /Volumes/workplace/RiptapWeb
git init
git add -A
git commit -m "Initial commit: Riptap website"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repo on GitHub
2. Navigate to **Settings > Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

The `CNAME` file in the repo will automatically configure the custom domain.

---

## GoDaddy DNS Configuration

### 1. Open DNS Management
1. Log in to [GoDaddy](https://www.godaddy.com)
2. Go to **My Products > riptap.com > DNS**

### 2. Configure A Records
Remove any existing A records for `@`, then add these four:

| Type | Name | Value             | TTL    |
|------|------|-------------------|--------|
| A    | @    | 185.199.108.153   | 600    |
| A    | @    | 185.199.109.153   | 600    |
| A    | @    | 185.199.110.153   | 600    |
| A    | @    | 185.199.111.153   | 600    |

### 3. Configure CNAME Record for www
| Type  | Name | Value                      | TTL    |
|-------|------|----------------------------|--------|
| CNAME | www  | `<USERNAME>.github.io`     | 600    |

Replace `<USERNAME>` with your GitHub username.

### 4. Wait for DNS Propagation
- Usually takes a few minutes, can take up to 48 hours
- Check status: `dig riptap.com +short`

### 5. Enable HTTPS
1. Go to repo **Settings > Pages**
2. Check **Enforce HTTPS**
3. If grayed out, wait for DNS to fully propagate and GitHub to issue the SSL certificate

---

## Verification Checklist

- [ ] `https://riptap.com` loads the landing page
- [ ] `https://www.riptap.com` redirects to the site
- [ ] Navigation links work across all pages
- [ ] Mobile hamburger menu works
- [ ] Carousel auto-rotates and dot navigation works
- [ ] Scroll animations trigger on features section
- [ ] Privacy and Terms pages are accessible
- [ ] HTTPS is enforced (no mixed content warnings)
