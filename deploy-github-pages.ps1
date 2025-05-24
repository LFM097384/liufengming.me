# GitHub Pages 部署脚本
# 此脚本用于部署 Fengming Liu 的学术网站到 GitHub Pages

# 确保脚本在出错时停止执行
$ErrorActionPreference = "Stop"

Write-Host "GitHub Pages 部署助手" -ForegroundColor Yellow
Write-Host "============================" -ForegroundColor Yellow
Write-Host ""

# 获取脚本所在目录
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

Write-Host "当前工作目录: $scriptDir" -ForegroundColor Cyan

# 检查是否存在package.json
if (-not (Test-Path "package.json")) {
    Write-Host "错误: 未找到package.json文件，请确保在正确的项目目录中运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查Node.js和npm
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "✅ Node.js版本: $nodeVersion" -ForegroundColor Green
    Write-Host "✅ npm版本: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ 错误: 未检测到Node.js或npm，请先安装Node.js" -ForegroundColor Red
    exit 1
}

# 步骤1: 安装依赖
Write-Host "`n步骤1: 安装项目依赖..." -ForegroundColor Yellow
try {
    npm install
    Write-Host "✅ 依赖安装完成" -ForegroundColor Green
} catch {
    Write-Host "❌ 依赖安装失败: $_" -ForegroundColor Red
    exit 1
}

# 步骤2: 构建项目
Write-Host "`n步骤2: 构建生产版本..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✅ 项目构建完成" -ForegroundColor Green
} catch {
    Write-Host "❌ 项目构建失败: $_" -ForegroundColor Red
    exit 1
}

# 步骤3: 检查构建结果
Write-Host "`n步骤3: 验证构建结果..." -ForegroundColor Yellow
if (Test-Path "dist/index.html") {
    Write-Host "✅ 找到构建输出文件 dist/index.html" -ForegroundColor Green
    
    # 显示构建文件大小
    $distSize = (Get-ChildItem -Recurse dist | Measure-Object -Property Length -Sum).Sum
    $distSizeMB = [math]::Round($distSize / 1MB, 2)
    Write-Host "📊 构建输出大小: $distSizeMB MB" -ForegroundColor Cyan
} else {
    Write-Host "❌ 构建失败: 未找到 dist/index.html" -ForegroundColor Red
    exit 1
}

# 步骤4: Git操作
Write-Host "`n步骤4: Git操作..." -ForegroundColor Yellow

# 检查是否是Git仓库
if (-not (Test-Path ".git")) {
    Write-Host "初始化Git仓库..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git仓库初始化完成" -ForegroundColor Green
}

# 添加所有文件
Write-Host "添加文件到Git..." -ForegroundColor Yellow
git add .

# 检查是否有更改
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "检测到以下更改:" -ForegroundColor Green
    $gitStatus | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    
    # 提交更改
    $commitMessage = "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    Write-Host "✅ 更改已提交: $commitMessage" -ForegroundColor Green
} else {
    Write-Host "⚠️ 没有检测到更改" -ForegroundColor Yellow
}

# 步骤5: 推送到GitHub
Write-Host "`n步骤5: 推送到GitHub..." -ForegroundColor Yellow

# 检查远程仓库
$hasRemote = $false
try {
    $remoteUrl = git remote get-url origin 2>&1
    if ($LASTEXITCODE -eq 0) {
        $hasRemote = $true
        Write-Host "✅ 检测到远程仓库: $remoteUrl" -ForegroundColor Green
    }
} catch {
    # 远程仓库未配置
}

if (-not $hasRemote) {
    $repoUrl = Read-Host "请输入GitHub仓库URL (例如: https://github.com/lfm097384/liufengming.me.git)"
    if ([string]::IsNullOrWhiteSpace($repoUrl)) {
        Write-Host "❌ 未提供仓库URL，退出部署" -ForegroundColor Red
        exit 1
    }
    
    git remote add origin $repoUrl
    Write-Host "✅ 已添加远程仓库: $repoUrl" -ForegroundColor Green
}

# 推送到main分支
Write-Host "推送到main分支..." -ForegroundColor Yellow
try {
    git branch -M main
    git push -u origin main
    Write-Host "✅ 推送完成！" -ForegroundColor Green
} catch {
    Write-Host "❌ 推送失败: $_" -ForegroundColor Red
    Write-Host "💡 提示: 如果是首次推送，可能需要设置GitHub认证" -ForegroundColor Yellow
    exit 1
}

# 部署说明
Write-Host "`n🎉 部署准备完成！" -ForegroundColor Green
Write-Host "============================" -ForegroundColor Yellow
Write-Host ""
Write-Host "接下来的步骤:" -ForegroundColor Cyan
Write-Host "1. 访问您的GitHub仓库页面" -ForegroundColor Gray
Write-Host "2. 转到 Settings -> Pages" -ForegroundColor Gray
Write-Host "3. 在Source中选择 'GitHub Actions'" -ForegroundColor Gray
Write-Host "4. GitHub Actions工作流将自动部署您的网站" -ForegroundColor Gray
Write-Host ""
Write-Host "您的网站将在以下地址访问:" -ForegroundColor Cyan
Write-Host "https://lfm097384.github.io/liufengming.me/" -ForegroundColor Green
Write-Host ""
Write-Host "注意: GitHub Pages部署可能需要几分钟时间" -ForegroundColor Yellow

Read-Host "`n按任意键退出"
