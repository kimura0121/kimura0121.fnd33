function comment(content){

    // 空のコメントを宣言
    let comment = "";
    // imgArea取得
    let imgArea = document.getElementById("imgArea");
    // 乱数取得
    let random = Math.floor( Math.random() * document.querySelector("#imgArea").childElementCount );
    // ランダムなidを取得
    let name = imgArea.children[random].id;

    switch(content) {
        case "admission":
            comment = "第一回シスカサマーダッシュ元町競馬場は晴れ,馬場状態は良,本日の一番人気" + name + "。今年はどんな花を咲かせるのか!!"
        case "start":
            comment = "第一回シスカサマーダッシュ今スタートが切られました、" + name + "がいいスタートを決めてくれました"
        case "last":
            comment = name + "が追い上げる!最後100m追いつけるのか!!"
    }

    // commentAreaを取得
    let commentArea = document.getElementById("commentArea");
    // 作成したコメントをcomentAreに追加
    commentArea.textContent = comment;
}
