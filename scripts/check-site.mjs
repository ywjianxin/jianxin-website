import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {once} from 'node:events';
import {createSiteServer} from '../server.mjs';
import {categories,services} from '../data/catalog.mjs';
const root = new URL('../',import.meta.url);
const server = createSiteServer();
server.listen(0,'127.0.0.1');
await once(server,'listening');
const base = `http://127.0.0.1:${server.address().port}`;
const files = ['index.html','about.html','categories/jewelry-parts.html',...categories.map(i=>'categories/'+i.slug+'.html'),...services.map(i=>'services/'+i.slug+'.html')];
let links = 0;
try {
  for (const file of files) {
    const response = await fetch(base+'/'+file);
    assert.equal(response.status,200,file);
    const html = await response.text();
    assert.match(html,/<html lang="ko">/);
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file);
    assert.ok(!html.includes('의우'),file);
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const value = match[1];
      if (value.startsWith('mailto:')) continue;
      const url = new URL(value,base+'/'+file);
      const r = await fetch(url);
      assert.equal(r.status,200,`${file}: ${value}`);
      if (url.hash) {
        const target = await r.text();
        assert.ok(target.includes(`id="${url.hash.slice(1)}"`),`${file}: missing anchor ${value}`);
      }
      links++;
    }
  }
  for (const css of ['style.css','v2.css']) {
    const content = await readFile(new URL(css,root),'utf8');
    for (const match of content.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) {
      assert.equal((await fetch(base+'/'+match[1])).status,200,`${css}: ${match[1]}`);
      links++;
    }
  }
  const images = await readFile(new URL('assets/site-images.js',root),'utf8');
  for (const match of images.matchAll(/(?:logo|wechat|kakao):\s*'([^']+)'/g)) {
    assert.equal((await fetch(base+'/assets/'+match[1])).status,200,match[1]);
    links++;
  }
  const home = await readFile(new URL('index.html',root),'utf8');
  assert.equal((home.match(/class="category-card /g)||[]).length,categories.length);
  assert.equal((home.match(/class="service-card"/g)||[]).length,services.length);
  assert.equal((home.match(/<figure>/g)||[]).length,2);
  assert.equal((home.match(/class="qr-open"/g)||[]).length,2);
  for(const value of ['ywjianxin@163.com','multiflora23','Oliiiii_20']) assert.ok(home.includes(`data-copy="${value}"`));
  for(const path of ['/package.json','/data/catalog.mjs','/.git/config','/backups/before-round-2.html','/missing.html','/assets/%2e%2e%5cREADME.md']) assert.equal((await fetch(base+path)).status,404,path);
  assert.equal((await fetch(base+'/',{method:'HEAD'})).status,200);
  assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
  console.log(`PASS: ${files.length} Korean pages, ${links} local links/assets, ${categories.length} categories, ${services.length} services, 2 scene figures, 2 QR zoom buttons, 3 copy contacts and private-path restrictions.`);
} finally {server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
