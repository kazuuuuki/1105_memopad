
//modal window
// $(function() {
//   // 入力ダイアログを表示
//   $("#btn3").click(function() {
//     $("#input").dialog("open");
//     return false;
//   });

//   // 入力ダイアログを定義
//   $("#input").dialog({
//     autoOpen: false,
//     modal: true,
//     buttons: {
//       "ＯＫ": function() {
//         displayMessage("保存しました。（ ID："
//           + $("#inputId").val()
//           + "、名前："
//           + $("#inputName").val()
//           + " ）");
//         $(this).dialog("close");},
//       "キャンセル": function() {
//         displayMessage("キャンセルしました。");
//         $(this).dialog("close");}
//     }
//   });
// });

// 処理メッセージ表示
function displayMessage(str) {
  $("#info").html(str);
}

//1.Save クリックイベント

  // saveのボタンが押されたら、実行したい🤗
  $("#save").on("click", function(){
    const key = $("#key").val();
    const memo =$("#memo").val();
    localStorage.setItem(key,memo);

    //更新日時を反映
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let day = new Date().getDate();
    let week = new Date().getDay();
    let wd = ["日","月","火","水","木","金","土"]
    let youbi = wd[week]
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let ymd = year + "年" +month + "月" + day + "日" + "(" + youbi + ")";
    let hms = hour +"時" + min + "分" + sec +"秒";
    
    $(".rem_b").on("click",function(){
        $(this).parent().remove();
    });

    const html =`
    <div class="input_wrapper">
    <button class="rem_b">×</button>
    <ul class="input_data">
        <li class="input_title">${key}</li>
        <li class="input_content">${memo}</li>
        <li class="ymd">${ymd}</li>
        <li class="hms">${hms}</li>
    </ul>
    </div>
    `
    $("#list").append(html)

    $(function(){
        let classCount = $(".input_wrapper").length;
        $("#count").text(classCount + "つの言葉を登録中");
    
    
    });


});




//2.clear クリックイベント


 $("#clear").on("click",function(){
        localStorage.clear();
        $("#list").empty();
    });


//3.ページ読み込み：保存データ取得表示


for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const memo = localStorage.getItem(key);

    //更新日時を反映
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let day = new Date().getDate();
    let week = new Date().getDay();
    let wd = ["日","月","火","水","木","金","土"]
    let youbi = wd[week]
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let ymd = year + "年" +month + "月" + day + "日" + "(" + youbi + ")";
    let hms = hour +"時" + min + "分" + sec +"秒";
    
    $(".rem_b").on("click",function(){
        $(this).parent().remove();
    });

    const html =`
    <div class="input_wrapper">
    <button class="rem_b">×</button>
    <ul class="input_data">
        <li class="input_title">${key}</li>
        <li class="input_content">${memo}</li>
        <li class="ymd">${ymd}</li>
        <li class="hms">${hms}</li>
    </ul>
    </div>
    `
    $("#list").append(html)
    $(function(){
        let classCount = $(".input_wrapper").length;
        $("#count").text(classCount + "つの知見を登録中");
    
    
    });

}




//front.html→index.html
$('.front').click(function() {
 
    location.href = 'index.html';
 
});

