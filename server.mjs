import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, relative, isAbsolute, extname} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp'
};
// Only public site files are served; source data, backups and Git metadata stay private.
const publicPath = /^\/(?:index\.html|about\.html|style\.css|v2\.css|app\.js|favicon\.svg|(?:categories|services)\/[a-z0-9-]+\.html|assets\/[a-z0-9-]+\.(?:svg|jpe?g|png|webp|js))$/;
export function createSiteServer() {
  return http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const route = pathname === '/' ? '/index.html' : pathname;
      const path = resolve(root, '.' + route);
      const local = relative(root, path);
      if (!publicPath.test(route) || local.startsWith('..') || isAbsolute(local)) {
        res.writeHead(404); return res.end('Not found');
      }
      if (!['GET', 'HEAD'].includes(req.method)) {
        res.writeHead(405, {Allow: 'GET, HEAD'}); return res.end('Method not allowed');
      }
      const content = await readFile(path);
      res.writeHead(200, {'Content-Type': types[extname(path)], 'X-Content-Type-Options': 'nosniff'});
      res.end(req.method === 'HEAD' ? undefined : content);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
  });
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const port = Number(process.env.PORT ?? 3000);
  if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('PORT must be between 0 and 65535');
  const server = createSiteServer();
  server.on('error', error => { console.error('Could not start website:', error.message); process.exitCode = 1; });
  server.listen(port, '0.0.0.0', () => console.log(`JIANXIN website: http://localhost:${server.address().port}`));
}
