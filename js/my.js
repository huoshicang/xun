// 改头像
function showImg() {
    const file = document.getElementsByTagName('input')[1].files[0];
    const re = new FileReader();
    re.readAsDataURL(file);
    re.onload = function(re) {
        document.getElementById("img").setAttribute("style", "opacity:1");
        document.getElementById("img").setAttribute("src", `${re.target.result}`);
    }
}

// 改变标题
var navigation = document.getElementsByClassName("navigation")[0];
var h1 = navigation.getElementsByTagName("h1")[0];
var history_collect = document.getElementsByClassName('history_collect')[0].getElementsByTagName("div");
for (let index = 0; index < history_collect.length; index++) {
    history_collect[index].addEventListener("click", () => {
        h1.innerHTML = history_collect[index].innerHTML;
    });
};
navigation.addEventListener("click", () => {
    h1.innerHTML = "个人信息";
});