# 部署指南 - Fengming Liu 学术网站

本指南将帮助您将学术网站部署到各种平台。

## 🚀 快速部署

### 方法一：GitHub Pages（推荐）

1. **准备代码**
   ```bash
   # 构建项目
   npm run build
   ```

2. **上传到GitHub**
   - 创建新的GitHub仓库
   - 上传所有项目文件
   - 在仓库设置中启用GitHub Pages
   - 选择源为`/ (root)`或`/docs`文件夹

3. **自动部署**
   - 可以设置GitHub Actions自动构建和部署

### 方法二：Vercel

1. **连接GitHub**
   - 访问 [vercel.com](https://vercel.com)
   - 连接您的GitHub账户
   - 选择此项目仓库

2. **配置设置**
   - 构建命令：`npm run build`
   - 输出目录：`dist`
   - 安装命令：`npm install`

3. **部署**
   - Vercel会自动检测为Vite项目
   - 每次推送代码都会自动重新部署

### 方法三：Netlify

1. **拖放部署**
   - 运行 `npm run build`
   - 将 `dist` 文件夹拖到Netlify部署区域

2. **Git集成**
   - 连接GitHub仓库
   - 设置构建命令：`npm run build`
   - 设置发布目录：`dist`

### 方法四：传统Web主机

1. **构建项目**
   ```bash
   npm run build
   ```

2. **上传文件**
   - 将 `dist` 文件夹中的所有内容上传到服务器
   - 确保上传到网站根目录

## 🔧 自定义域名

### GitHub Pages
1. 在仓库设置中添加自定义域名
2. 配置DNS指向GitHub Pages
3. 等待SSL证书自动配置

### Vercel
1. 在项目设置中添加域名
2. 配置DNS记录
3. SSL自动配置

### Netlify
1. 在站点设置中添加自定义域名
2. 配置DNS记录
3. 启用HTTPS

## 📝 环境变量

如果需要配置环境变量（如Google Analytics），在各平台设置：

- **Vercel**: 项目设置 → Environment Variables
- **Netlify**: 站点设置 → Environment Variables
- **GitHub Pages**: 使用GitHub Secrets + Actions

## 🔄 持续部署

推荐设置GitHub Actions实现自动部署：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📊 性能优化

部署后可以考虑以下优化：

1. **启用CDN**（Vercel和Netlify自带）
2. **配置缓存策略**
3. **启用Gzip压缩**
4. **优化图片**（如果添加了图片）

## 🌐 SEO设置

1. **Google Search Console**
   - 验证网站所有权
   - 提交站点地图

2. **Google Analytics**（可选）
   - 添加跟踪代码
   - 配置目标和事件

3. **社交媒体元标签**
   - 已在HTML中预配置
   - 可以进一步自定义Open Graph标签

## 🔧 故障排除

### 构建失败
- 检查Node.js版本（推荐16+）
- 清除node_modules并重新安装
- 检查所有依赖是否正确安装

### 部署后页面空白
- 检查构建输出是否正确
- 确认服务器支持单页应用
- 配置适当的重定向规则

### 路由不工作
- 为SPA配置服务器重定向
- GitHub Pages需要添加404.html文件

---

**需要帮助？** 
- 邮箱：leo.liu.23@ucl.ac.uk
- 项目仓库：提交Issue获取支持
