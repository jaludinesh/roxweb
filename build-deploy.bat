@echo off
echo 🧹 Cleaning up old docs folder...
rmdir /s /q docs

echo 🏗️ Running Vite build...
call npm run build
if %errorlevel% neq 0 (
  echo ❌ Build failed. Aborting.
  exit /b %errorlevel%
)

echo 📄 Copying index.html to 404.html...
copy docs\index.html docs\404.html

echo 📦 Committing and pushing to GitHub...
git add -A
git commit -m "🚀 Deploy with 404.html for GitHub Pages"
git push origin main

echo.
echo ✅ Deployment Complete! Visit: https://jaludinesh.github.io/roxweb/
pause
