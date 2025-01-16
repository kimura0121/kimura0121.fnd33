// ループのためループ範囲外で宣言する
// 座標をずらした回数を宣言
let animationCount = 1;
// ゴール前のループの回数を宣言
let roopCount = 1;

// スタートボタン押下処理
function raceAnimation(){

    // コメント変更
    comment("start");

    // 座標をずらした回数を判断
    if(animationCount <= 5){

        if(animationCount === 4) {
            comment("last");
        }

        // imgAreaを取得
        let img = document.getElementById("imgArea");
        // imgAreaの子要素を取得
        let imgCount = document.querySelector("#imgArea").childElementCount;
        // 子要素の数だけループ
        for (let i = 1; i <= imgCount; i++) {
            // 子要素の0番目を取得
            let driveImg = img.children[i-1];
            // 5から10の中のランダムな数字を取得
            let random = Math.floor( Math.random() * 6 ) + 5;
            // ランダムな数字と動かす最低値を足して、画像の位置を決めなおす
            driveImg.style.left = random + (animationCount * 8) + "vw";
    
        }

        // 画像を動かした数を＋1する
        animationCount++;

        // 1,5秒後にraceAnimationを実行
        setTimeout(raceAnimation,1500);

    } else {
        // startPreparationを実行
        startPreparation();
    }

}

// 順位を決める
function startPreparation() {

    // 順位の配列を作成
    let randomCount = [1,2,3,4,5,6,7,8,9,10];

    // 空の配列を作成
    let result = [];

    // imgAreaの画像の数を取得
    let horseCount = document.querySelector("#imgArea").childElementCount;

    // 配列の値をランダムに並び替える
    randomCount.sort(() => Math.random() - 0.5);

    // 画像の数だけループ
    for (let i = 1; i <= horseCount; i++){

        // 空のオブジェクト作成
        let obj = {};

        // 指定の数値の要素を取得
        let imgArea = document.getElementById("imgArea");
        // imgAreaの子要素を取得(0番目から)
        let horseName = imgArea.children[i-1];

        // ランダムの値を取得　※0個目の要素の取得のため-1
        let num = randomCount[i-1];

        // オブジェクトにランダムな値を出力
        obj.rank = num;
        // オブジェクトに画像のidを出力
        obj.id = horseName.id;

        // 配列にpush
        result.push(obj);

    }
    // 配列の中のオブジェクトを順位順に並び替える
    result.sort((a,b) => a.rank - b.rank);
    // resultの数だけ繰り返す
    lastAnimation(result);

}


// ゴール前のアニメーションを表示(順位の配列,ループの回数)
function lastAnimation(result) {
    // lastDialogを取得
    let lastDialogContents = document.getElementById("lastDialog");
    // lastDialogの子要素を取得
    let lastDialog = document.querySelector("#lastDialog");
    // ダイアログを表示
    lastDialog.show();
    // imgタグを追加
    let img = document.createElement("img");
    // resultのループの回数の数のrankを取得
    let num = result[roopCount-1].rank;
    // 取得した番号の画像を表示
    img.src = "horse" + num + ".png";
    // imgタグにidを追加
    img.id = "lastImg";
    // imgタグをダイアログに追加
    lastDialogContents.appendChild(img);
    // 1秒後にdriveHorseImgを実行
    setTimeout(driveHorseImg,500);

    // 配置した画像を動かす
    function driveHorseImg() {
        // 配置した画像を取得
        let lastImg = document.getElementById("lastImg");
        // 画像を右に動かす
        lastImg.style.left = "10vw";
        // 1秒後にremoveimgを実行
        setTimeout(removeimg,500);

        // 画像を消す
        function removeimg() {
            
            // ループの回数を+1
            roopCount++;

            // 配列の要素分ループしたか判断
            if(roopCount < result.length) {
                // 画像を消す
                img.remove();
                // 再度result処理へ動く
                lastAnimation(result);
            } else {
                // 表示しているダイアログを閉じる
                lastDialog.remove();
                // resultDialogに移動(順位の配列)
                resultDialog(result);
            }

        }
    }

}

