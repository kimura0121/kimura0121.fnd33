
// 人数を決めるセレクトボックスが変化
function getHeadcount() {
        
    // 画像を初期化
    let imgArea = document.getElementById("imgArea");

    // imgArea内の子要素の数だけループ
    while(imgArea.lastChild){
        // 取得した子要素を削除
        imgArea.removeChild(imgArea.lastChild);
    }
    
    // 選択した値のidを取得
    let peopleCount = document.getElementById('num').selectedIndex
    // 選択した値の数を取得
    let selectCount = document.getElementById('num').value;
    // selectCountを保存
    localStorage.setItem('selectCount',selectCount);

    // nameFormを取得
    let textCount = document.getElementById('nameForm');
    // nameFormの子要素の数を取得
    beforeCount = textCount.childElementCount;

    // 人数が増えるか、減るか判断
    // 人数が増える場合
    if(beforeCount < selectCount){
        
        // 追加する数を取得
        let insertCount = selectCount - beforeCount;
        
        // 追加する数になるまで、要素を追加し続ける
        for (let i = 1; i <= insertCount; i++){
    
            // div要素作成
            let div = document.createElement('div');
            // laebl要素作成
            let nameLabel = document.createElement('label');
            // テキストボックス作成
            let nameText = document.createElement('input');
            // nameForm取得
            let nameForm = document.getElementById('nameForm');
    
            // divにidを付与
            div.id = "num" + (i + beforeCount);

            // テキストタイプ追加
            nameText.type = "text";

            // id追加
            nameText.id = "text" + i;

            // 作成したlabelに数字を追加
            nameLabel.textContent = i + beforeCount;
    
            // divの中にnameLabelを書き込む
            div.appendChild(nameLabel);
            // divの中にnameTextを書き込む
            div.appendChild(nameText);
    
            // divを画面に表示する
            nameForm.appendChild(div);
    
        }
    // 人数が減る場合
    } else if (beforeCount > selectCount){
        
        // 削除する数を取得
        let deleteCount = beforeCount - selectCount;

        // 指定の数に達するまで削除し続ける
        for (let i = 1; i <= deleteCount; i++){

            // リストの中でidに含まれる数値が一番大きい要素を取得
            let deleteContent = document.getElementById("num" + beforeCount);

            // 取得するidの数値を-1
            beforeCount--;

            // 取得した要素を削除する
            deleteContent.remove();
        }

    }
}

// 名前決定ボタンが押下された
function createRaceArea(){

    // selectCountを取得してnumに代入
    let num = localStorage.getItem('selectCount');

    // リストの数だけ画像、名前を出力
    for(let i = 1; i <= num; i++){

        // div要素作成
        let div = document.createElement('div');
        // p要素作成
        let label = document.createElement('label');
        // img要素作成
        let img = document.createElement('img');
        // 画像を貼る位置を取得
        let imgArea = document.getElementById("imgArea");
        // 入力された名前の取得
        let name = document.getElementById("text" + i).value;

        // 要素を番号ごとで分けるためid付与
        div.id = name;

        // 要素のvalueを設定(iで判別するため)
        div.value = "horseNum" + i;
        // css:相対位置設定
        div.style.position = "relative";
        // x座標を0pxで指定
        div.style.left = "0px";
        

        // 作成したlabelに数字を追加
        label.textContent = name;
        // labelの高さを設定
        label.style.height = "4vh";
        // 画像にclassを割り当てる
        label.classList.add("nameLabel");
        
        // 画像追加
        img.src = 'horse' + i +'.png';
        // 画像にclassを割り当てる
        img.classList.add("img");
        // 横並びにする
        div.style.display = "flex";

        // div要素の中にimgを入れる
        div.appendChild(img);
        // div要素の中にnameを入れる
        div.appendChild(label);
        // imgArea要素の中にdiv要素を入れる
        imgArea.appendChild(div);

    }

    // コメントを追加
    comment("admission");

}