# 지안신(簡信) / JIANXIN

面向韩国企业的韩文官网。使用原生 HTML、CSS、JavaScript 和原创 SVG，无第三方运行依赖或外部字体、图片请求。

## 本地开发

使用 Node.js 20 或更高版本：

Windows 操作步骤：

1. 安装 Node.js LTS（建议 24，最低 20），安装时保留 npm 并添加到 PATH。
2. 解压完整项目，例如 `C:\Projects\jianxin-website`，不要直接在 ZIP 内编辑。
3. 在项目文件夹打开 PowerShell，执行：

```powershell
cd C:\Projects\jianxin-website
npm.cmd run check
npm.cmd start
```

4. 浏览器打开 `http://localhost:3000`。修改文件并保存后刷新页面。
5. 在终端按 `Ctrl+C` 停止服务。

项目没有第三方依赖，因此不需要执行 `npm install`。使用 `npm.cmd` 可避免 PowerShell 对 npm.ps1 的执行策略限制。

若端口 3000 被占用，在 PowerShell 中执行：

```powershell
$env:PORT = "3001"
npm.cmd start
```

然后打开 `http://localhost:3001`。若命令提示找不到 Node.js 或 npm，请安装 Node.js 后重新打开终端。

macOS / Linux：在解压后的项目目录执行 `npm start`。

默认监听端口 3000，可通过 `PORT` 环境变量调整。修改页面后刷新浏览器即可。`npm run check` 检查 JavaScript 语法。

## 文件

- `index.html`：韩文内容、SEO 元信息、原创贸易主题 SVG
- `style.css`：响应式布局、动效及减少动画偏好支持
- `app.js`：移动菜单、邮箱复制、滚动入场
- `server.mjs`：本地静态服务器
- `favicon.svg`：原创网站图标
- `package.json`：启动、开发与语法检查命令，以及 Node.js 版本要求

页面的大幅贸易插画与服务图标直接内嵌在 `index.html` 中，无需额外下载图片。CSS 使用系统字体，不依赖外部字体服务。项目无第三方依赖，因而没有依赖锁文件。ZIP 不包含 `.git` 历史或本机配置，包含完整网站源代码。

所有文本文件采用 UTF-8，请在编辑器中保留此编码，避免韩文乱码。

## 联系与内容

邮件咨询发送至 `ywjianxin@163.com`，打开访客邮件客户端；网站不采集或存储表单信息。复制邮箱功能在安全上下文可用，不可用时显示手动复制提示。文案没有虚构客户、历史、规模或业绩。服务范围和费用需单独协商。

## 部署

可将 `index.html`、`style.css`、`app.js`、`favicon.svg` 部署到静态托管服务，也可使用 Node.js 启动。无需构建步骤。正式上线请使用 HTTPS，并由公司确认文案、服务范围及适用的企业展示要求；当前未配置正式域名或公开部署。
