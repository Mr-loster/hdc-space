# HDC的空间 (HDC's Space) - AI Agent 自动化维护与交接全量手册
> **面向接手 Agent 的指令**：当你被要求维护、更新或扩展本网站时，**首先阅读本文档**。本文档包含了本站的一切底层架构、设计系统规则、数据结构、部署工作流及严禁触碰的红线。阅读完毕后，你可以零障碍直接开始执行任何修改。

---

## 1. 项目全貌与核心元数据 (Project Metadata)

| 属性 | 对应值 / 链接 |
| :--- | :--- |
| **本地绝对路径** | `/Users/hdc/Desktop/工作/反重力/personal-affiliate-website` |
| **线上正式生产地址** | `https://hdc-space.pages.dev/` |
| **GitHub 远程仓库** | `git@github.com:Mr-loster/hdc-space.git` （主分支：`main`） |
| **技术底座** | **Astro 5 (纯静态 SSG 模式)** + **Tailwind CSS** + **Cloudflare Pages** |
| **站长身份** | **HDC**（效率追求者 / 独立创作者） |
| **联系邮箱** | `hande211@gmail.com` |
| **社交媒体 (X)** | `@HDC_211` (`https://x.com/HDC_211`) |

---

## 2. 核心架构与底层设计哲学 (Architecture & Principles)

### 2.1 零服务器运维与边缘极速分发 (Zero-Cost Static Edge)
* **纯静态输出（SSG）**：项目执行 `npm run build` 后会直接生成纯 HTML/CSS/JS 静态文件至 `dist/` 目录。
* **CI/CD 自动化部署**：Cloudflare Pages 已经与 GitHub 的 `main` 分支建立 Webhook 联动。**只要向 GitHub `main` 分支 push 代码，Cloudflare 会在 30 秒内全自动拉取、编译并发布到全球 300+ 边缘节点，严禁做任何手动上传。**

### 2.2 温和浅牛皮纸视觉系统 (Warm Kraft Paper Theme)
用户明确要求：**全站拒绝生硬刺眼的纯白与纯黑，统一采用高质感的温和浅牛皮纸复古质感**。
* **浅色主背景**：`#F5EFE6`（温和浅牛皮纸色）
* **卡片/容器背景**：`#FAF7F2`（淡羊皮纸微白）
* **主文字颜色**：`#2D261E`（深暖焦茶色，非死黑）
* **辅助次级文字**：`#6C5A48`
* **品牌点缀色（Accent）**：`#9D6828` / `#A98B6D`（暖棕皮具金）
* **暗黑模式背景**：`#171513`（深暖碳咖色）
* **暗黑模式文字**：`#EFE9DF`
* *维护准则*：添加新页面或新组件时，必须沿用以上 Tailwind 配色（参考 `tailwind.config.mjs` 中的 `kraft` 色系）。

### 2.3 无刷新中英文即时双语引擎 (Instant Zero-Flicker i18n)
* **实现原理**：CSS 属性选择器驱动：
  ```css
  html[data-lang="zh"] .lang-en { display: none !important; }
  html[data-lang="en"] .lang-zh { display: none !important; }
  ```
* **首访默认值**：首次进入网站**强制默认中文（`zh`）**；用户点击右上角 `🌐` 按钮后在 `localStorage` 记忆偏好。
* *维护准则*：**所有新增的任何 UI 文案、按钮、提示语，必须同时包裹中文与英文**：
  ```html
  <span class="lang-zh">中文内容</span>
  <span class="lang-en">English Content</span>
  ```

### 2.4 返佣链接工程化与权重保护 (Affiliate Cloaking Engine)
* **路由位置**：`/src/pages/go/[slug].astro`
* **运行机制**：
  * 访问 `https://hdc-space.pages.dev/go/binance` ➡️ 瞬间 302/0秒 Meta Refresh 跳转至真实带返佣参数的目标地址；
  * 全站外链统一附加 `rel="nofollow sponsored"`；
  * 中转页统一设置 `<meta name="robots" content="noindex, nofollow" />`，**防止搜索引擎误判为垃圾链接农场，保护域名权重**。
* *维护准则*：**严禁在前端页面或文章中直接写死长串原始返佣链接**，所有推广链接必须登记在 `src/data/affiliates.ts` 中，通过 `/go/[slug]` 统一分发。

---

## 3. 核心文件结构与维护动作指引 (File Directory & Operations)

```text
personal-affiliate-website/
├── AGENTS.md                          # 本文档（Agent 终极维护协议）
├── README.md                          # GitHub 门面说明
├── public/                            # 静态多媒体资源
│   ├── avatar.jpg                     # HDC 头像 (400x400)
│   ├── binance-poster.png             # 币安邀请海报
│   └── favicon.svg                    # 站点图标
├── src/
│   ├── data/
│   │   ├── siteConfig.ts              # 站点基础信息（作者、标题、邮箱、社交账号）
│   │   └── affiliates.ts              # ⭐ 核心：真实好物与返佣短链数据库
│   ├── components/
│   │   ├── Header.astro               # 导航栏（双语切换、深色模式、HDC头像）
│   │   ├── Footer.astro               # 全局页脚（联系邮箱、社交链接、免责声明）
│   │   ├── ProductCard.astro          # 好物卡片（价格、优惠码、直达按钮、海报弹窗）
│   │   ├── AffiliateDisclosure.astro  # 联盟合规披露 Banner
│   │   └── SeoMeta.astro              # SEO Meta & OpenGraph 标签
│   ├── layouts/
│   │   ├── BaseLayout.astro           # 通用基础布局骨架（牛皮纸背景、防闪烁脚本）
│   │   └── ArticleLayout.astro        # 测评长文专用布局（优缺点对比盒、文章底栏卡片）
│   └── pages/
│       ├── index.astro                # 首页（Hero 横幅、好物展示、测评列表）
│       ├── gear.astro                 # 精选好物专区（支持类别过滤）
│       ├── about.astro                # 关于 HDC 与商业合作透明度
│       ├── reviews/
│       │   ├── index.astro            # 评测长文汇总页
│       │   └── [slug].astro           # 动态 Markdown 评测文章详情页
│       └── go/
│           └── [slug].astro           # 返佣核心重定向引擎
```

---

## 4. 日常维护标准化流程 (SOP for Next Agent)

### 任务场景 A：录入新商品或新返佣链接
1. 打开 `src/data/affiliates.ts`；
2. 在 `affiliateList` 数组中追加对象，严格遵循 `AffiliateItem` 接口：
   ```typescript
   {
     slug: "new-product",               // 生成短链：/go/new-product
     name: "商品或平台名称",
     taglineZh: "一句话中文卖点",
     taglineEn: "One-line English tagline",
     categoryZh: "数字金融与Web3",       // 可选：生产力软件 / 硬件数码 / 开发与AI / 生活好物 / 数字金融与Web3
     categoryEn: "Crypto & Finance",
     targetUrl: "https://partner-link.com/?ref=HDC_CODE", // 真实的返佣推广URL
     badgeZh: "核心主力",
     badgeEn: "Top Pick",
     rating: 4.9,
     priceZh: "新人专享特惠",
     priceEn: "Special Offer",
     couponZh: "专属优惠码：XXXX",
     couponEn: "Code: XXXX",
     descriptionZh: "真实的使用体验与推荐理由...",
     descriptionEn: "Detailed review in English...",
     icon: "🪙",
     featured: true,                    // true 则在首页展示，false 仅在 /gear 展示
     posterImage: "/poster-name.png",   // 若有海报，放于 public/ 并在该字段注明，卡片会自动激活海报弹窗
   }
   ```
3. 若有宣传海报或二维码图片，存入 `public/` 目录；
4. 运行 `npm run build` 验证是否编译成功；
5. 执行 Git 提交并推送：
   ```bash
   git add . && git commit -m "feat: 添加 [产品名称] 推荐链接" && git push origin main
   ```

### 任务场景 B：发布长篇深度测评文章
1. 在 `src/content/reviews/` 目录下创建新文件，例如 `my-review.md`；
2. 撰写标准 Frontmatter 头信息：
   ```markdown
   ---
   title: "文章标题"
   description: "文章一句话导读"
   pubDate: 2026-11-07
   category: "数字金融与Web3"
   tags: ["Web3", "出海工具"]
   rating: 4.9
   heroEmoji: "⚡"
   affiliateSlug: "binance"  # 关联 affiliates.ts 里的 slug，文章底部会自动渲染对应的购买与折扣卡片！
   pros:
     - "亮点1"
     - "亮点2"
   cons:
     - "短板或门槛1"
   ---

   正文内容支持标准 Markdown...
   ```
3. 运行 `npm run build` 验证；
4. Git 提交并推送到 `main` 分支。

### 任务场景 C：售卖自有商品/礼品卡等数字卡密（站内转化升级）
* **轻量内嵌方案**：在 `ProductCard.astro` 中将直达按钮绑定至站内 `<dialog>` 浮层，展示个人收款二维码（币安 Pay / 微信 / 支付宝）并附带邮箱输入框，买家付款后由站长手工或邮件交付卡密。
* **全自动发卡方案**：利用 Cloudflare Pages 免费内置的 **Functions (API)** 与 **KV 数据库**，将卡密密文保存在 KV 中，买家通过集成支付组件付款成功后，Cloudflare Function 后端自动解密卡密并投递至买家屏幕与邮箱。

---

## 5. Agent 自动化执行铁律 (Strict Rules)

1. **真实性第一**：坚守站长设定的“宁缺毋滥，只推亲测真品”准则。严禁擅自填充虚假占位测试数据，没有真实链接的模块保持优雅空白。
2. **构建校验强制性**：在执行 `git push` 前，**必须先在本地运行 `npm run build` 并确认输出 `Complete!`**，严禁将导致 Cloudflare Pages 编译失败的代码推送到远程。
3. **样式一致性**：新模块必须继承 `#F5EFE6` 浅牛皮纸色调与优雅圆角（`rounded-2xl` / `rounded-3xl`），禁止引入破坏风格的高饱和度刺眼色块。
4. **双语完整性**：凡新写的前端文案，必须保证 `lang-zh` 与 `lang-en` 同时齐备。
5. **部署唯一源**：远程仓库唯一源为 `git@github.com:Mr-loster/hdc-space.git`，分支唯一为 `main`。
