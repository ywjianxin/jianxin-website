# JIANXIN | 지안신(簡信) — Website V2

面向韩国 B2B 客户的韩文企业官网。在原有原生 HTML / CSS / JavaScript / Node.js 项目上升级，无第三方运行依赖，不需要 npm install。

## Windows 本地启动

1. 安装 Node.js LTS（建议 24，最低 20）。
2. 解压 `jianxin-website-v2.zip`，进入 `jianxin-website-v2` 文件夹，确认能看到 `package.json`。
3. 在此文件夹空白处右键，选择“在终端中打开”（PowerShell）。
4. 执行：

```powershell
npm.cmd start
```

5. 浏览器打开 **http://localhost:3000**。

保持终端打开；修改文件并保存后刷新页面；按 **Ctrl+C** 停止服务。

若端口 3000 已占用：

```powershell
$env:PORT = "3001"
npm.cmd start
```

此时访问 http://localhost:3001。端口设置仅影响当前终端。恢复默认可运行 `Remove-Item Env:PORT`。

若找不到 `npm.cmd`，请安装 Node.js 后重新打开终端。使用 `npm.cmd` 可避免 PowerShell 对 npm.ps1 的执行策略限制。不要直接在 ZIP 内编辑文件，不要用双击 HTML 代替本地服务器。

macOS / Linux 在项目文件夹运行 `npm start`。

## 页面与内容

- 首页 `index.html`：国际贸易首屏、四大＋六小商品卡片、三个优势、两张场景示意图、四步时间线、服务、公司简介及联系方式。
- `about.html`：公司介绍详情页。
- `categories/`：10 个当前商品分类页；保留 V1 的 `jewelry-parts.html` 旧链接，共 11 页。
- `services/`：4 个采购服务页。
- 共 17 个 HTML 页面，链接使用相对路径，可完整复制到 Windows。
- Email：ywjianxin@163.com；KakaoTalk：multiflora23；WeChat：Oliiiii_20。
- 邮箱可点击发邮件；三个联系账号均可复制；两个真实二维码可点击放大，支持关闭按钮、Esc 和点击遮罩关闭。

## 维护文件

- `style.css`：保留的现有基础样式。
- `v2.css`：V2 视觉升级与响应式样式。
- `app.js`：菜单、复制、图片加载和原生二维码弹窗。
- `server.mjs`：跨平台本地服务器，只公开网站资源，备份和源数据不对外提供。
- `data/catalog.mjs`：统一商品分类、服务内容与分类顺序。
- `scripts/build-home.mjs`：首页模板。
- `scripts/build-pages.mjs`：公司页、详情页和首页分类卡片生成器。
- `scripts/v2-shared.mjs`：共享导航、页脚、原图 Logo、图标与示意图组件。
- `assets/`：所有正式使用的图片、原始 Logo、二维码及图片配置。
- `ASSETS.md`：素材来源与使用限制。

修改数据或模板后运行：

```powershell
npm.cmd run pages
npm.cmd run check
npm.cmd test
```

`npm.cmd start` 不需要先生成页面：交付 ZIP 已包含生成结果。直接编辑生成的 HTML 会在下次 `pages` 命令运行时被覆盖。

新增分类时，在 `data/catalog.mjs` 增加唯一英文 slug、文案、例子和检查项，并更新顺序数组。当前 tile 对应本地 `catalog-scenes.png` 的三列四行示意图；若新品类使用独立图片，可在共享 `photo` 组件及分类模板中扩展。删除分类时，生成器不会自动删除旧文件，以免破坏原有链接，请另行审查旧 URL。

## 真实素材与示意图

- 最终 JX Logo 使用用户原始 PNG，全图等比例展示，没有去背景、重绘、拉伸或裁切。
- 微信与 KakaoTalk 原始 JPG 文件逐字节保留；CSS 显示原卡片二维码部分，不生成、不重绘、不变色。放大窗口沿用同一原图和比例。
- 贸易首屏及商品/场景图为本项目生成的 AI 示意素材，页面有明确说明。建筑示意图**不是真实义乌国际商贸城照片**；仓储图不是公司自有设施或实际案例。若需实景效果，请换成有授权的真实照片。
- 不声称库存、价格、客户数量、业绩、公司历史或认证。不主动推广儿童用品、食品接触用品、药品、化妆品及特殊监管品类。其他商品也需要按规格确认韩国进口、标签和认证要求。
- 图标为项目内 SVG，系统字体不请求外部服务。网站运行不依赖图片 CDN、API 或临时云端路径。

## 验证与边界

- 已在 Linux Node.js 24 / Chromium 上执行本地 HTTP、资源及浏览器验证。Windows 路径使用跨平台 Node API，提供 PowerShell 启动方式，但**没有实际 Windows 电脑上的测试结果**。
- `npm.cmd test` 会启动临时本地端口，检查所有页面、站内链接、资源和非公开路径。
- 真实微信/KakaoTalk 加好友与账号状态需人工在对应 App 中确认；仅检查完整显示，未声称实际扫码成功。
- 邮件按钮依赖访客电脑的默认邮件客户端；剪贴板拒绝时显示可手动复制的原文。
- 未配置域名、公开部署、在线表单或后台数据库。

## V1 备份与交付

V2 修改前已完整备份至 `backups/v1-before-v2-20261030T064747Z.zip`，不删除 V1 源文件。GitHub 交付目录另外保留 `deliverables/jianxin-website-v1-backup.zip` 与 `deliverables/jianxin-website-v2.zip`。

V2 ZIP 只包含可运行项目、源数据、生成器、测试和必要素材；不包含 `.git`、运行进程、缓存、验收截图或嵌套交付 ZIP。`backups/` 为本机备份目录，已被 Git 忽略。
