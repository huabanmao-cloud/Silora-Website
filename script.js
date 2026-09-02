const languageButton = document.getElementById('language');
let english = false;
function updateLanguage() {
  document.documentElement.lang = english ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-zh][data-en]').forEach((node) => {
    if (!node.querySelector('[data-zh]')) node.textContent = english ? node.dataset.en : node.dataset.zh;
  });
  document.querySelectorAll('[data-zh="privacy"]').forEach((node) => node.hidden = english);
  document.querySelectorAll('[data-en="privacy-en"]').forEach((node) => node.hidden = !english);
  document.querySelectorAll('.bilingual .en').forEach((node) => node.hidden = !english);
  languageButton.textContent = english ? '中' : 'EN';
}
languageButton.addEventListener('click', () => { english = !english; updateLanguage(); });
