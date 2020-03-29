import { parseString } from 'xml2js';
import request from 'request';

const RSS = 'http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

//RSS다운로드 => RSS는 보통 XML과 구조가 거의 같음
request(RSS, (err, res, body) => {
  if (!err && res.statusCode === 200) {
    analyzeRSS(body);
  }
});

const analyzeRSS = (xml) => {
  //XML을 JSON으로 변환
  parseString(xml, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    //기상예보 정보 출력
    const datas =
      result.rss.channel[0].item[0].description[0].body[0].location[0].data;
    const city =
      result.rss.channel[0].item[0].description[0].body[0].location[0].city;

    for (const i in datas) {
      const data: DataType = datas[i];
      console.log(
        `${city}의 ${data.tmEf} 날씨는 ${data.wf} 온도는 ${data.tmn} ~ ${data.tmx}`
      );
    }
  });
};

interface DataType {
  tmEf: string;
  wf: string;
  tmn: string;
  tmx: string;
  rsSt: string;
}
