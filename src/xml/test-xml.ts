import { parseString } from 'xml2js';

//테스트용 XML 데이터
const xml: string =
  "<fruits shop='AAA'>" +
  "<item price='140'>Banana</item>" +
  "<item price='200'>Apple</item></fruits>";

// XML을 JSON으로 변환시
//{"fruits":{"$":{"shop":"AAA"},"item":[{"_":"Banana","$":{"price":"140"}},{"_":"Apple","$":{"price":"200"}}]}}
// 태그안의 내용은 _ 로 표시되고 프로퍼티는 $로 표시된다

//XML전달
parseString(xml, (err, result) => {
  //console.log(JSON.stringify(result));

  const shop = result.fruits.$.shop;
  console.log(`shop : ${shop}`);

  const items = result.fruits.item;

  for (const i in items) {
    let item = items[i];
    console.log(`name : ${item._}`);
    console.log(`price : ${item.$.price}`);
  }
});
