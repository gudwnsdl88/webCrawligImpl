const TARGET_URL = 'https://jpub.tistory.com';

const casper = require('casper').create();

// 실행할떄 작업을 지정해주는것이지 실제 실행되지는 않는다
casper.start(TARGET_URL, () => {
  //타이틀 출력
  this.echo(this.getTitle());
});

// 실제로 실행시킴
casper.run();
