// JavaScript

//console.log(document.getElementById('myColor').value);

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');
const cr = document.getElementById('colorR');
const cg = document.getElementById('colorG');
const cb = document.getElementById('colorB');


text.textContent = color.value;

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);

function changeColor(){

    //カラーコードを表示
    if (color.value === '#ffffff'){
        text.textContent = 'カラーコード：' + color.value + '(white)';
    } else if (color.value === '#000000'){
        text.textContent = 'カラーコード：' + color.value + '(black)';
    } else{
        text.textContent = 'カラーコード：' + color.value;
    }
    //背景色を変更
    document.body.style.backgroundColor = color.value;

    // カラーコードからRGBを取得
    const rgb = color.value.substring(1); // "#"を除去
    const R = parseInt(rgb.slice(0, 2), 16);
    const G = parseInt(rgb.slice(2, 4), 16);
    const B = parseInt(rgb.slice(4, 6), 16);

    // RGB値を表示
    cr.textContent = 'R: ' + R;
    cg.textContent = 'G: ' + G;
    cb.textContent = 'B: ' + B;
}
