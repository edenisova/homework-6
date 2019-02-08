//1 задание
function getSevenCol(arr) {
  var col = 0;
  var res = arr.reduce(function(col, current) {
    var pos = current.toString().indexOf("7");
    while (pos != -1) {
      col++;
      pos = current.toString().indexOf("7", pos + 1);
    }
    return col;
  }, 0);
  return res;
}

console.log(getSevenCol([1, 7, 4, 77, 73]));

//2 задание
function arrToStr(arr) {
  var res = [];
  if (arr.length % 2 == 0) {
    for (var i = 0; i < arr.length / 2; i++) {
      res.push(arr[i], arr[arr.length - i - 1]);
    }
  }
  if (arr.length % 2 == 1) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
      res.push(arr[i], arr[arr.length - i - 1]);
    }
    res.push(arr[Math.floor(arr.length / 2)]);
  }
  return res.join("");
}

console.log(arrToStr(["a", "b", "c", "g", "i","d", "e", "f"]));
