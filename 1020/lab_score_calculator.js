// lab_score_calculator.js
// 以 prompt 取得五科成績，計算平均與等第

// 將輸入字串轉成數字
function toNumber(str) {
  var n = parseFloat(str);
  return isNaN(n) ? null : n;
}

// 根據平均分數回傳等第
function gradeFrom(avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 60) return 'D';
  else return 'F';
}

// 使用者輸入姓名
var name = prompt('請輸入姓名：');
if (!name) name = '同學';

// 使用陣列存 5 科分數
var subjects = ['國文', '英文', '數學', '自然', '社會'];
var scores = [];
for (var i = 0; i < subjects.length; i++) {
  var s = toNumber(prompt('請輸入 ' + subjects[i] + ' 成績：'));
  if (s === null || s < 0 || s > 100) {
    alert('輸入錯誤，請輸入 0~100 的數字');
    i--; // 重新輸入該科
  } else {
    scores.push(s);
  }
}

// 計算總和與平均
var sum = 0;
var failFlag = false; // 是否有不及格
for (var j = 0; j < scores.length; j++) {
  sum += scores[j];
  if (scores[j] < 60) failFlag = true;
}
var avg = sum / scores.length;

// 組合輸出文字
var text = '姓名：' + name + '\n';
for (var k = 0; k < subjects.length; k++) {
  text += subjects[k] + '：' + scores[k] + '\n';
}
text += '平均：' + avg.toFixed(2) + '\n';
text += '等第：' + gradeFrom(avg) + '\n';
if (failFlag) text += '⚠️ 有不及格科目！';

// 顯示在頁面與 Console
document.getElementById('result').textContent = text;
console.log(text);
