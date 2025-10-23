// example4_script.js
// 整合奇偶判斷、switch、分數等第

var resultText = ''; // 用來累積所有輸出

// 1️⃣ 奇偶判斷
var input = prompt('請輸入一個整數：');
var n = parseInt(input, 10);
if (isNaN(n)) {
  resultText += '奇偶判斷：輸入不是有效的整數！\n';
} else if (n % 2 === 0) {
  resultText += '奇偶判斷：' + n + ' 是偶數\n';
} else {
  resultText += '奇偶判斷：' + n + ' 是奇數\n';
}

// 2️⃣ switch 範例
var choice = prompt('輸入 1/2/3 試試 switch：');
switch (choice) {
  case '1':
    resultText += 'switch 判斷：你輸入了 1\n';
    break;
  case '2':
    resultText += 'switch 判斷：你輸入了 2\n';
    break;
  case '3':
    resultText += 'switch 判斷：你輸入了 3\n';
    break;
  default:
    resultText += 'switch 判斷：非 1/2/3\n';
}

// 3️⃣ 分數等第判斷
var scoreInput = prompt("請輸入分數 (0~100)：");
var score = parseFloat(scoreInput);
var grade = '';

if (isNaN(score) || score < 0 || score > 100) {
  grade = "輸入不合法，請輸入 0~100 的數字";
} else if (score >= 90) {
  resultText += "分數判斷：你輸入的分數：" + score + "，等第為A\n";
} else if (score >= 80) {
  resultText += "分數判斷：你輸入的分數：" + score + "，等第為B\n";
} else if (score >= 70) {
  resultText += "分數判斷：你輸入的分數：" + score + "，等第為C\n";
} else if (score >= 60) {
  resultText += "分數判斷：你輸入的分數：" + score + "，等第為D\n";
} else {
  resultText += "分數判斷：你輸入的分數：" + score + "，等第為F\n";
}

// 顯示在網頁上
document.getElementById('result').textContent = resultText;

// 同時輸出到 Console
console.log(resultText);

