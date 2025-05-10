@echo off
echo 🧹 Cleaning up old docs folder...
rmdir /s /q docs

echo 🏗️ Running Vite build...
call npm run build

echo 📄 Copying index.html to 404.html...
copy dist\index.html dist\404.html

echo 📁 Renaming dist to docs...
rename dist docs

echo 📦 Committing and pushing to GitHub...
git add docs
git commit -m "🚀 Deploy with 404.html for GitHub Pages"
git push origin main

echo.
echo ✅ Deployment Complete! Visit: https://jaludinesh.github.io/roxweb/
pause
