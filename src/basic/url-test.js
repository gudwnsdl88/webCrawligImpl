const urlType = require('url');

// 상대경로를 절대경로로 변환
const base = 'http://kujirahand.com/url/test/index.html';
const ul = urlType.resolve(base, 'a.html');
console.log(`ul : ${ul}`);

const u2 = urlType.resolve(base, '../b.html');
console.log(`u2 : ${u2}`);

const u3 = urlType.resolve(base, '/c.html');
console.log(`u3 : ${u3}`);
