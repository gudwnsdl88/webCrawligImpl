import xml2js from 'xml2js';

//JSON을 XML로 변환함

const obj = {
  item: {
    name: 'banana',
    price: 150
  }
};

//xml로 변환

const builder = new xml2js.Builder();
const xml = builder.buildObject(obj);

console.log(xml);
