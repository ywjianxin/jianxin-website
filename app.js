const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  if (!toggle || !nav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', '메뉴 열기');
  nav.classList.remove('open');
}
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      if (status) status.textContent = `${value} — 복사했습니다.`;
    } catch {
      if (status) status.textContent = `직접 선택해 복사해 주세요: ${value}`;
    }
  });
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.service-card,.why-list article,.steps article').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Display supplied originals only. Screen captures are framed with CSS; QR pixels
// are neither recolored, regenerated nor passed through image-generation tools.
const assetScript = document.querySelector('script[src$="assets/site-images.js"]');
if (assetScript) {
  const assetBase = new URL('.', assetScript.src);
  document.querySelectorAll('[data-site-image]').forEach(slot => {
    const key = slot.dataset.siteImage;
    const filename = window.JIANXIN_IMAGES?.[key];
    if (!filename || !/^[a-z0-9-]+\.(png|jpe?g|webp)$/i.test(filename)) return;
    const image = new Image();
    image.alt = key === 'logo' ? 'JIANXIN | 지안신(簡信) 로고' : `${key === 'wechat' ? 'WeChat' : 'KakaoTalk'} 친구 추가 QR 코드`;
    image.decoding = 'async';
    image.onload = () => {
      slot.replaceChildren(image);
      slot.classList.add('has-original');
      if (key !== 'logo') {
        const caption = slot.parentElement.querySelector('.qr-description');
        if (caption) caption.textContent = '앱에서 QR 코드를 스캔해 친구를 추가해 주세요.';
      }
    };
    image.src = new URL(filename, assetBase).href;
  });
}

// Native dialog keeps keyboard focus inside and restores focus to the opener.
const qrDialog = document.querySelector('#qr-dialog');
if (qrDialog) {
  const dialogImage = qrDialog.querySelector('.dialog-qr');
  const title = qrDialog.querySelector('#qr-dialog-title');
  document.querySelectorAll('[data-qr]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.qr;
      const source = button.querySelector('.qr-image-window img');
      if (!source) return;
      dialogImage.className = `dialog-qr qr-image-window qr-${key}`;
      dialogImage.replaceChildren(source.cloneNode(true));
      title.textContent = `${key === 'kakao' ? 'KakaoTalk' : 'WeChat'} QR`;
      qrDialog.showModal();
      document.documentElement.classList.add('qr-dialog-open');
    });
  });
  qrDialog.querySelector('.dialog-close').addEventListener('click', () => qrDialog.close());
  qrDialog.addEventListener('click', event => {
    const rect = qrDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) qrDialog.close();
  });
  qrDialog.addEventListener('close', () => document.documentElement.classList.remove('qr-dialog-open'));
}
