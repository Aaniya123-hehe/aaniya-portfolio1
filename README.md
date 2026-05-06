# Aaniya Khairdi — Portfolio

A personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## 📁 File Structure

```
AaniyaPortfolio/
├── index.html               ← Main HTML file
├── style.css                ← All styles
├── script.js                ← All JavaScript
├── profile.png              ← Profile photo
├── Aaniya_Khairdi_81811.pdf ← Certificate PDF (add this file)
└── README.md                ← This file
```

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up if you don't have an account.

### Step 2 — Create a New Repository
1. Click the **"+"** icon (top-right) → **"New repository"**
2. Name it exactly: `aaniya-portfolio` *(or any name you like)*
3. Set it to **Public**
4. Leave everything else as default
5. Click **"Create repository"**

### Step 3 — Upload Your Files
1. On the new repo page, click **"uploading an existing file"** (or "Add file" → "Upload files")
2. Drag and drop ALL these files at once:
   - `index.html`
   - `style.css`
   - `script.js`
   - `profile.png`
   - `Aaniya_Khairdi_81811.pdf` *(your certificate)*
3. Scroll down, write a commit message like `"Initial upload"`, click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. Go to your repo → click **"Settings"** tab
2. In the left sidebar, click **"Pages"**
3. Under **"Branch"**, select `main` and click **Save**
4. Wait 1–2 minutes

### Step 5 — Visit Your Live Website 🎉
Your portfolio will be live at:
```
https://YOUR-GITHUB-USERNAME.github.io/aaniya-portfolio/
```
*(Replace `YOUR-GITHUB-USERNAME` with your actual username)*

---

## ✏️ How to Update Content

Open `index.html` in any text editor (Notepad, VS Code, etc.) and find the section you want to change. Each section is clearly commented:
- `<!-- HOME -->` — Hero section with your name & quote
- `<!-- ABOUT -->` — Career objective & personal info
- `<!-- EDUCATION -->` — Timeline of your education
- `<!-- EXPERIENCE -->` — Work & volunteer experience
- `<!-- ACHIEVEMENTS -->` — Awards & recognitions
- `<!-- CERTIFICATES -->` — Certificates with PDF links
- `<!-- CONTACT -->` — Contact details & form

After editing, re-upload the file to GitHub (same drag-and-drop process).

---

## 💡 Tips

- **Add a resume PDF:** Save your resume as `resume.pdf`, upload it to the repo, then in `index.html` find `href="#"` on the Download Resume button and change it to `href="resume.pdf"`.
- **Change profile photo:** Replace `profile.png` with a new photo (keep the same filename).
- **Custom domain:** You can add your own domain in Settings → Pages → Custom domain.
