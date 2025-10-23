var target = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var guess = 0;
var msg = '';

while (guess !== target) {
  var input = prompt('請猜一個 1–100 的數字：');
  guess = parseInt(input);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('輸入錯誤，請輸入 1–100 的整數');
    continue;
  }

  if (guess < target) {
    alert('再大一點！');
  } else if (guess > target) {
    alert('再小一點！');
  } else {
    alert('恭喜你猜中了！總共嘗試 ' + attempts + ' 次');
    msg = '你猜中了數字 ' + target + '，總共嘗試 ' + attempts + ' 次';
    break;
  }
}

document.getElementById('guessResult').textContent = msg;
console.log(msg);
