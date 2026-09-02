(() => {
  const button = document.getElementById('language');
  const saved = localStorage.getItem('silora-language');
  const browserLanguage = (navigator.language || '').toLowerCase();
  let language = saved || (browserLanguage.startsWith('zh') ? 'zh' : 'en');
  const labels = {
    zh: { privacy: '隐私政策', terms: '服务条款', support: '支持' },
    en: { privacy: 'Privacy Policy', terms: 'Terms of Service', support: 'Support' }
  };

  function render() {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.body.classList.toggle('is-english', english);
    document.querySelectorAll('.language-zh').forEach((node) => { node.hidden = english; });
    document.querySelectorAll('.language-en').forEach((node) => { node.hidden = !english; });
    document.querySelectorAll('[data-zh][data-en]').forEach((node) => {
      node.textContent = english ? node.dataset.en : node.dataset.zh;
    });
    document.querySelectorAll('[data-page]').forEach((node) => {
      node.textContent = labels[language][node.dataset.page];
    });
    if (button) {
      button.textContent = english ? '中文' : 'English';
      button.setAttribute('aria-label', english ? '切换到中文' : 'Switch to English');
      button.setAttribute('title', english ? 'Switch to Chinese' : '切换到英文');
    }
  }

  button?.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    localStorage.setItem('silora-language', language);
    render();
  });
  render();
})();
