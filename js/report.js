document.getElementsByTagName("button")[0].addEventListener("click", () => {
    var result = "";
    var text = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var theme = document.getElementsByClassName("theme")[0].value;
    var explain = document.getElementsByClassName("explain")[0].value;
    if (theme.length == 0) {
        setTimeout(() => {
            alert('请输入主题');
        }, 500);
    } else if (explain.length == 0) {
        setTimeout(() => {
            alert('请说明问题');
        }, 500);
    } else {
        for (let index = 0; index < 15; index++) {
            result += text[Math.floor(Math.random() * text.length)];
        }
        setTimeout(() => {
            alert(`已提交，请保存好15位工单号，以便查询。`);
            document.getElementsByClassName("number")[0].innerHTML = result;
        }, 500);
    }
});