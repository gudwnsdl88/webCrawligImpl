// import client from 'cheerio-httpcli';
// import urlType from 'url';
const client = require('cheerio-httpcli');
const urlType = require('url');

let url = `https://ko.wikipedia.org/wiki/${encodeURIComponent('강아지')}`;
const param = {};

console.log(typeof url);

client.fetch(url, param, (err, $, res) => {
  if (err) {
    console.log('error');
    return;
  }
  // 링크를 추출해서 표시함
  $('img').each((index) => {
    let src = $(this).attr('src');
    src = urlType.resolve(url, src);
    console.log(src);
  });
});
