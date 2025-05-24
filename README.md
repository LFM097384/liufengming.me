# Fengming Liu - Academic Website

这是一个基于React和Material UI构建的现代学术个人网站，展示了Fengming Liu的学术成就、研究经历和发表的论文。

## 项目特点

- 🎨 **现代设计**: 使用Material UI设计系统
- 📱 **响应式布局**: 完美支持桌面和移动设备
- 🚀 **快速加载**: 基于Vite构建工具
- 📝 **内容丰富**: 包括教育背景、研究经历、发表论文等
- 🔍 **SEO优化**: 包含完整的meta标签和结构化数据

## 网站结构

### 主页 (Home)
- 个人介绍和联系信息
- 教育背景展示
- 研究经历概览
- 技能和专业领域

### 发表论文 (Publications)
- 已发表论文
- 预印本文章
- 工作论文
- 论文统计信息

### 研究工作 (Research)
- 当前研究项目
- 研究兴趣领域
- 研究方法论
- 合作机构

### 联系方式 (Contact)
- 详细联系信息
- 学术档案链接
- 办公时间
- 研究合作信息

## 技术栈

- **React 18**: 现代前端框架
- **Material UI 5**: Google Material Design组件库
- **React Router 6**: 单页面应用路由
- **Vite**: 快速构建工具
- **Emotion**: CSS-in-JS样式解决方案

## 开发环境设置

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```
网站将在 `http://localhost:5173/` 运行

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构

```
liufengming.me/
├── src/
│   ├── components/          # 可复用组件
│   │   └── Header.jsx      # 导航栏组件
│   ├── pages/              # 页面组件
│   │   ├── Home.jsx        # 主页
│   │   ├── Publications.jsx # 发表论文页
│   │   ├── Research.jsx    # 研究工作页
│   │   └── Contact.jsx     # 联系方式页
│   ├── App.jsx             # 主应用组件
│   └── main.jsx            # 应用入口
├── public/                 # 静态资源
├── index.html              # HTML模板
├── vite.config.js          # Vite配置
└── package.json            # 项目配置
```

## 自定义内容

要更新网站内容，请编辑以下文件：

1. **个人信息**: `src/pages/Home.jsx`
2. **论文列表**: `src/pages/Publications.jsx` 
3. **研究项目**: `src/pages/Research.jsx`
4. **联系信息**: `src/pages/Contact.jsx`

## 部署

### GitHub Pages
1. 构建项目: `npm run build`
2. 将 `dist/` 文件夹内容上传到GitHub Pages

### Vercel
1. 连接GitHub仓库到Vercel
2. 设置构建命令: `npm run build`
3. 设置输出目录: `dist`

### Netlify
1. 将项目推送到Git仓库
2. 在Netlify中连接仓库
3. 设置构建设置并部署

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：
- Email: leo.liu.23@ucl.ac.uk
- ORCID: orcid.org/0009-0009-3881-496X
