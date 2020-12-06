
$(document).ready(function () {
    $(".pom-agile_txt").hover(function () {
        $(".pom-agile_txt_ts").slideDown();
    },function () {
        $(".pom-agile_txt_ts").slideUp();
    })

    $(".pom-agile_pwd").hover(function () {
        $(".pom-agile_pwd_ts").slideDown();
    },function () {
        $(".pom-agile_pwd_ts").slideUp();
    })

})

function b() {
    var id = document.getElementById("id").value;
    var pwd = document.getElementById("pwd").value;
    if(id=="NQ"&&pwd=="19960722"){
        return true;
    }else {
        window.alert("用户名或密码错误！")
        return false;
    }

}
function a() {
    window.alert("此网站NQ一人独享，不予注册")

}
