# HDC的空间 (HDC's Space)

> 思考、沉淀与好物指南 • Thoughts, Curated Gear & Field Notes

- 🌐 **线上正式地址**：[https://hdc-space.pages.dev](https://hdc-space.pages.dev)
- 📦 **代码仓库**：[https://github.com/Mr-loster/hdc-space](https://github.com/Mr-loster/hdc-space)
- 👤 **创作者**：HDC ([@HDC_211](https://x.com/HDC_211) / `hande211@gmail.com`)

---

## 🌟 核心特性与架构亮点

1. **温和浅牛皮纸质感视觉**：采用经典温润的浅牛皮纸主色调（`#F5EFE6`）与深暖碳咖色（`#171513`）暗黑模式，阅读体验极其舒适温和。
2. **毫秒级中英文双语即时切换**：首访默认呈现中文，点击右上角 `🌐` 按钮可在中文与英文之间丝滑切换，自动记忆用户偏好。
3. **中心化短链重定向（`/go/[slug]`）**：
   - 币安注册直达：`/go/binance`
   - Wise 开户直达：`/go/wise`
   - iFAST 英国银行直达：`/go/ifast`
   - 自动附带 `rel="nofollow sponsored"` 和 `noindex`，全方位保护主站 SEO 权重。
4. **全球边缘极速部署**：基于 **Astro 5 + Tailwind CSS** 纯静态架构（SSG），托管于 **Cloudflare Pages**，享全球 CDN 节点秒开与无限流量。

---

## 📁 核心目录架构

```text
personal-affiliate-website/
├── docs/                             # 运营手册与全周期规划方案
│   ├── 网站日常运营与维护手册.md
│   └── 商业化与全周期规划方案.md
├── public/                           # 静态资源（头像、海报、图标）
│   ├── avatar.jpg                    # HDC 个人头像
│   └── binance-poster.png            # 币安官方邀请海报
├── src/
│   ├── data/
│   │   ├── siteConfig.ts             # 站点基础信息（作者、标题、邮箱、社交账号）
│   │   └── affiliates.ts             # 真实好物与返佣链接数据库 ⭐核心文件
│   ├── components/                   # UI 组件（Header、Footer、ProductCard、合规声明）
│   ├── layouts/                      # 基础页面与文章骨架
│   └── pages/                        # 路由页面（首页、好物目录、测评专栏、关于我、/go/转跳）
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🛠️ 常用开发与维护命令

```bash
# 启动本地开发与实时预览（默认监听 http://localhost:4321）
npm run dev

# 编译打包静态产物（输出至 dist/）
npm run build

# 提交更新并自动发布到全网
git commit -am "feat: 更新内容"
git push origin main
```

详细日常使用指南请阅读：[网站日常运营与维护手册](docs/网站日常运营与维护手册.md)。
