// 代入する値は任意（今回は3と5の倍数）
let num = 60;

// 3と5の倍数だったら
if (num % 3 == 0 && num % 5 == 0) {
  console.log("3と5の倍数です");
}

// 5の倍数だったら
else if (num % 5 == 0) {
  console.log("5の倍数です");
}

//3の倍数だったら
else if (num % 3 == 0) {
  console.log("3の倍数です");
}

// それ以外の場合： 変数numの値を出力する
else {
  console.log(num);
}