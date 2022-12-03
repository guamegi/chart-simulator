export function calculateSMA(data, count) {
  var avg = function (data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].close;
    }
    return sum / data.length;
  };
  var result = [];
  for (var i = count - 1, len = data.length; i < len; i++) {
    var val = avg(data.slice(i - count + 1, i));
    result.push({ time: data[i].time, value: val });
  }
  return result;
}
