// example7_script.js
// 以函式封裝 BMI 計算與等級判斷

// 計算 BMI
function calcBMI(heightCm, weightKg) {
  var h = heightCm / 100;
  var bmi = weightKg / (h * h);
  return bmi;
}

// 判斷 BMI 等級文字
function bmiLevel(bmi) {
  if (bmi < 18.5) return '過輕';
  else if (bmi < 24) return '正常';
  else if (bmi < 27) return '過重';
  else if (bmi < 30) return '輕度肥胖';
  else if (bmi < 35) return '中度肥胖';
  else return '重度肥胖';
}

// 判斷是否理想體重（18.5 ~ 24）
function isIdeal(bmi) {
  return bmi >= 18.5 && bmi < 24;
}

// 使用者輸入身高與體重
var hStr = prompt('請輸入身高（公分）：');
var wStr = prompt('請輸入體重（公斤）：');
var hNum = parseFloat(hStr);
var wNum = parseFloat(wStr);

var text = '';
if (isNaN(hNum) || isNaN(wNum) || hNum <= 0 || wNum <= 0) {
  text = '輸入不正確';
} else {
  var bmi = calcBMI(hNum, wNum);
  text = '身高：' + hNum + ' cm\n'
       + '體重：' + wNum + ' kg\n'
       + 'BMI：' + bmi.toFixed(2) + '\n'
       + '等級：' + bmiLevel(bmi) + '\n'
       + '理想體重？ ' + (isIdeal(bmi) ? '是' : '否');
}

// 顯示結果在頁面
document.getElementById('result').textContent = text;
console.log(text);
