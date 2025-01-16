// 結果のダイアログを表示
function resultDialog(result) {
    // rankResultを取得
    let rankResult = document.getElementById("rankResult");
    // resultDialogの子要素を取得
    let resultDialog = document.querySelector("#resultDialog");
    // resultの要素数を取得
    let resultElementCount = result.length;
    // 配列の要素の数だけループさせる
    for (let i = 1; i <= resultElementCount; i++){
        // rankResultを取得
        let rankResult = document.getElementById("rankResult");
        // divを作成
        let div = document.createElement("div");
        
        // laebl要素作成
        let rankLabel = document.createElement('label');
        // laebl要素作成
        let nameLabel = document.createElement('label');

        // 作成したlabelに数字を追加
        rankLabel.textContent = i + "位 ";
        // 名前を追加
        nameLabel.textContent = result[i-1].id;

        // divの中にnameTextを書き込む
        div.appendChild(rankLabel);
        // divの中にnameLabelを書き込む
        div.appendChild(nameLabel);

        // divを画面に表示する
        rankResult.appendChild(div);

    }
    // winnerNameを取得
    let winnerName = document.getElementById("winnerName");
    // winnerImgを取得
    let winnerImg = document.getElementById("winnerImg");
    // テキストを追加
    winnerName.textContent = "優勝は " + result[0].id + "!";
    // ダイアログ表示
    resultDialog.show();
}

// 閉じるボタン押下処理
function closeDialog() {
    // resultDialogの子要素を取得
    let resultDialog = document.querySelector("#resultDialog");
    // 表示しているダイアログを閉じる
    resultDialog.close();
    // 画面を読み込みなおす
    window.location.reload();
}