function comment(content){
    switch(content) {
        case "admission":
            comment = "第一回シスカサマーダッシュ元町競馬場は晴れ,馬場状態は良"
        case "start":
            comment = "第一回シスカサマーダッシュ今スタートが切られました、"
        case "last":
            comment ="最後100m追いつけるのか!!"
    }

    // commentAreaを取得
    let commentArea = document.getElementById("commentArea");
    // 作成したコメントをcomentAreに追加
    commentArea.textContent = comment;
}
