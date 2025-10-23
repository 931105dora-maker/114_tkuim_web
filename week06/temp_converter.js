// 溫度轉換函式
function toCelsius(f) {
  return (f - 32) * 5 / 9;
}

function toFahrenheit(c) {
  return c * 9 / 5 + 32;
}

// 使用者輸入
var input = prompt('請輸入溫度與單位，例如 36.5C 或 98F：');
var temp = parseFloat(input);
var unit = input.slice(-1).toUpperCase();

var output = '';
if (isNaN(temp) || (unit !== 'C' && unit !== 'F')) {
  output = '輸入格式錯誤！例如 36.5C 或 98F';
} else {
  if (unit === 'C') {
    output = temp + '°C = ' + toFahrenheit(temp).toFixed(2) + '°F';
  } else {
    output = temp + '°F = ' + toCelsius(temp).toFixed(2) + '°C';
  }
}

alert(output);
document.getElementById('tempResult').textContent = output;
