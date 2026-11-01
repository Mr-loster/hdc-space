# 反重力指南 (Antigravity Guide) - 个人独立网站与返佣商业化系统

这是一个专为**个人 IP 沉淀、高价值内容创作、以及商品/返佣链接商业化变现**量身定制的现代化静态网站系统。

基于 **Astro 5 + Tailwind CSS** 深度构建，具有极致的首屏加载速度、完善的 SEO 元标签、安全合规的 `/go/` 短链转跳系统，以及零服务器运维费用的特性。

---

## 🌟 核心特性与架构亮点

1. **秒开性能与 SEO 满分**：采用静态站点生成（SSG），全站纯 HTML 输出，无需数据库与 Node.js 动态计算，被 Google、百度等搜索引擎优先索引收录。
2. **中心化返佣短链转跳（`/go/[slug]`）**：
   - 彻底避免在文章中写死长串推广链接；
   - 自动添加 `rel="nofollow sponsored"` 和 `robots: noindex, nofollow` 标签，保护主站 SEO 权重；
   - 任何推广参数变动只需修改 `src/data/affiliates.ts` 即可全站生效。
3. **内容驱动型架构（Content Collections）**：
   - 文章采用本地 Markdown（`.md`）写作；
   - 自动支持标签、分类、评分、优缺点清单（Pros/Cons）与关联返佣商品卡片。
4. **深色/浅色模式自适应**：
   - 带有防闪烁脚本（FOUC-free）；
   - 一键丝滑切换系统主题。
5. **零服务器成本部署**：
   - 原生支持 **Cloudflare Pages**、**Vercel**、**GitHub Pages** 等平台；
   - 代码推送到 GitHub 即可自动打包构建上线，终身免费。

---

## 📁 目录结构概览

```text
personal-affiliate-website/
├── 网站使用与运营指南.md                 # 详细的日常使用、添加文章与商品说明
├── 零成本免费部署上线指南.md              # 如何绑定域名并上线到全球 CDN
├── astro.config.mjs                   # Astro 核心配置文件
├── tailwind.config.mjs                # 样式与设计主题配置
├── package.json
└── src/
    ├── data/
    │   ├── siteConfig.ts              # 网站基本信息（标题、作者、导航菜单）
    │   └── affiliates.ts              # 核心返佣与商品库（所有外链集中维护处）
    ├── content/
    │   ├── config.ts                  # 文章字段校验 Schema
    │   └── reviews/                   # 评测文章 Markdown 目录
    ├── components/
    │   ├── Header.astro               # 导航栏组件（带深色模式切换）
    │   ├── Footer.astro               # 页脚（含版权与合规指引）
    │   ├── ProductCard.astro          # 高转化率好物推荐卡片
    │   ├── AffiliateDisclosure.astro  # 联盟合规声明 Banner
    │   └── SeoMeta.astro              # SEO 与社交分享卡片 Meta 标签
    ├── layouts/
    │   ├── BaseLayout.astro           # 通用骨架
    │   └── ArticleLayout.astro        # 文章与测评排版骨架
    └── pages/
        ├── index.astro                # 首页
        ├── gear.astro                 # 精选好物分类检索页
        ├── about.astro                # 关于本站与商业透明度声明
        ├── reviews/
        │   ├── index.astro            # 测评文章列表
        │   └── [slug].astro           # 动态文章渲染页
        └── go/
            └── [slug].astro           # 返佣极速重定向中心
```

---

## 🚀 常用开发命令

进入项目目录：
```bash
cd /Users/hdc/Desktop/工作/反重力/personal-affiliate-website
```

- **启动本地预览**：
  ```bash
  npm run dev
  ```
  在浏览器中打开 `http://localhost:4321` 即可实时预览编辑效果。

- **打包生产静态文件**：
  ```bash
  npm run build
  ```
  生成的纯静态文件将存放在 `dist/` 目录下。

- **本地预览打包产物**：
  ```bash
  npm run preview
  ```
