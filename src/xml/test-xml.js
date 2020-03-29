var parseString = require('xml2js').parseString;

//테스트용 XML 데이터
var xml =
  "<fruits shop='AAA'" +
  "<item price='140'>Banana</item>" +
  "<item price='200'>Apple</item>" +
  '</fruits>';

//XML전달
parseString(xml, (err, result) => {
  console.log(JSON.stringify(result));
});
