# 图片优化脚本
# 需要安装 ImageMagick: https://imagemagick.org/script/download.php#windows

$publicDir = "public"
$imagesDir = "$publicDir/Images"
$originalImage = "$imagesDir/b71f54d23e1517e62a9235a7760e265.jpg"
$optimizedImage = "$imagesDir/b71f54d23e1517e62a9235a7760e265-optimized.jpg"
$webpImage = "$imagesDir/b71f54d23e1517e62a9235a7760e265.webp"

# 检查 ImageMagick 是否安装
if (!(Get-Command "magick" -ErrorAction SilentlyContinue)) {
    Write-Host "ImageMagick 未安装。请从 https://imagemagick.org/script/download.php#windows 下载安装" -ForegroundColor Red
    Write-Host "或者使用在线工具如 TinyPNG (https://tinypng.com/) 手动压缩图片" -ForegroundColor Yellow
    exit 1
}

if (Test-Path $originalImage) {
    Write-Host "优化图片: $originalImage" -ForegroundColor Green
    
    # 创建优化版本 (JPEG, 300x300, 质量85%)
    & magick "$originalImage" -resize 300x300 -quality 85 "$optimizedImage"
    
    # 创建 WebP 版本 (300x300, 质量80%)
    & magick "$originalImage" -resize 300x300 -quality 80 "$webpImage"
    
    Write-Host "图片优化完成!" -ForegroundColor Green
    Write-Host "原始文件: $(Get-Item $originalImage | Select-Object -ExpandProperty Length) bytes" -ForegroundColor Cyan
    
    if (Test-Path $optimizedImage) {
        Write-Host "优化JPEG: $(Get-Item $optimizedImage | Select-Object -ExpandProperty Length) bytes" -ForegroundColor Cyan
    }
    
    if (Test-Path $webpImage) {
        Write-Host "WebP版本: $(Get-Item $webpImage | Select-Object -ExpandProperty Length) bytes" -ForegroundColor Cyan
    }
} else {
    Write-Host "原始图片文件不存在: $originalImage" -ForegroundColor Red
}

Write-Host "`n建议:" -ForegroundColor Yellow
Write-Host "1. 如果优化后的文件大小合适 (<30KB)，请替换原始文件" -ForegroundColor Yellow
Write-Host "2. 考虑使用 WebP 格式获得更好的压缩效果" -ForegroundColor Yellow
Write-Host "3. 如果没有 ImageMagick，可以使用在线工具: https://squoosh.app/" -ForegroundColor Yellow
