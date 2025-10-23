// example5_script.js
// 以巢狀 for 產生 1~9 的乘法表
// example5_script.js
// 使用者輸入起始與結束數字，生成乘法表

var startInput = prompt("請輸入起始乘數 (1~9)：");
var endInput = prompt("請輸入結束乘數 (1~9)：");

var start = parseInt(startInput, 10);
var end = parseInt(endInput, 10);

// 驗證輸入
if (isNaN(start) || isNaN(end) || start < 1 || end > 9 || start > end) {
  document.getElementById('result').textContent = "輸入不合法，請輸入 1~9 的數字，且起始 ≤ 結束";
} else {
  var output = '';
  for (var i = start; i <= end; i++) {        // 外層控制被乘數
    for (var j = start; j <= i; j++) {       // 內層控制乘數
      output += j + 'x' + i + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
  document.getElementById('result').textContent = output;
  console.log(output);
}
