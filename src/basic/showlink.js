import { fetch } from 'cheerio-httpcli';

const url = 'https://jpub.tistory.com';

const param = {};

fetch(url, param, (err, $, res) => {
  if (err) {
    console.log('error');
    return;
  }
  $('a').each((index) => {
    let text = $(this).text();
    let href = $(this).attr('href');
    console.log(`text : ${text}`);
    console.log(`href : ${href}`);
  });
});
