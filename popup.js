const DKRR_URL = 'https://alexysbike.github.io/dk-reporeader/';

const button = document.getElementById('openRepo');

button.addEventListener('click', function() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url;
    chrome.tabs.create({ url: `${DKRR_URL}?repo=${url}` });
  });
});
