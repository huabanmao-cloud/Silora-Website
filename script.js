(() => {
  const button = document.getElementById('language');
  const saved = localStorage.getItem('silora-language');
  const browserLanguage = navigator.language.toLowerCase();
  let language = saved || (browserLanguage.startsWith('zh') ? 'zh' : 'en');

  function render() {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.querySelectorAll('.language-zh').forEach((node) => { node.hidden = english; });
    document.querySelectorAll('.language-en').forEach((node) => { node.hidden = !english; });
    if (button) {
      button.textContent = english ? '中文' : 'EN';
      button.setAttribute('aria-label', english ? 'Switch to Chinese' : '切换到英文');
    }
  }

  button?.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    localStorage.setItem('silora-language', language);
    render();
  });
  render();
})();
