export function keySetValue() {
  let [
    resultArray = [],
    resultObject = {},
    keyArr = ["key"],
    valueArr = ["value"]
  ] = arguments;
  if (JSON.stringify(resultObject) === "{}") return resultArray;
  return resultArray.map(item => {
    keyArr.forEach((ele, index) => {
      if (resultObject.hasOwnProperty(item[ele])) {
        let resultValue = resultObject[item[ele]];
        item[valueArr[index]] =
          resultValue === null ? "" : resultValue.toString();
      }
    });
    return item;
  });
}
