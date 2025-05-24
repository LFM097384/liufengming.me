# PowerShell脚本用于启动本地开发服务器
# 作者: Fengming Liu
# 日期: 2025年5月24日

Write-Host "🚀 启动Fengming Liu学术网站开发服务器..." -ForegroundColor Cyan

# 检查Node.js是否已安装
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未检测到Node.js，请先安装Node.js" -ForegroundColor Red
    Write-Host "📥 下载地址: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "按任意键退出"
    exit 1
}

# 检查npm是否可用
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未检测到npm" -ForegroundColor Red
    Read-Host "按任意键退出"
    exit 1
}

# 显示Node.js版本信息
$nodeVersion = node --version
$npmVersion = npm --version
Write-Host "✅ Node.js版本: $nodeVersion" -ForegroundColor Green
Write-Host "✅ npm版本: $npmVersion" -ForegroundColor Green

# 检查package.json是否存在
if (!(Test-Path "package.json")) {
    Write-Host "❌ 错误: 未找到package.json文件，请确保在正确的项目目录中运行此脚本" -ForegroundColor Red
    Read-Host "按任意键退出"
    exit 1
}

Write-Host "📦 检查依赖..." -ForegroundColor Yellow

# 检查node_modules是否存在，如果不存在则安装依赖
if (!(Test-Path "node_modules")) {
    Write-Host "📥 首次运行，正在安装依赖包..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 依赖安装失败" -ForegroundColor Red
        Read-Host "按任意键退出"
        exit 1
    }
    Write-Host "✅ 依赖安装完成" -ForegroundColor Green
} else {
    Write-Host "✅ 依赖已存在" -ForegroundColor Green
}

Write-Host ""
Write-Host "🌐 启动开发服务器..." -ForegroundColor Cyan
Write-Host "📍 本地地址: http://localhost:5173/" -ForegroundColor Green
Write-Host "⚡ 使用Vite进行热重载" -ForegroundColor Green
Write-Host ""
Write-Host "💡 提示:" -ForegroundColor Blue
Write-Host "   - 按 Ctrl+C 停止服务器" -ForegroundColor Gray
Write-Host "   - 文件保存后会自动刷新浏览器" -ForegroundColor Gray
Write-Host "   - 在浏览器中打开 http://localhost:5173/ 查看网站" -ForegroundColor Gray
Write-Host ""

# 启动开发服务器
npm run dev
