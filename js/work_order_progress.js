var h3 = document.getElementsByTagName("h3")[0];
var tips = document.getElementsByClassName("tips")[0];
document.getElementsByTagName("button")[0].addEventListener("click", () => {
    var number = document.getElementsByClassName("number")[0].value;
    if (number.length < 15) {
        var tips_t = `少于15位，输入的是${number.length}`;
        tips.innerHTML = tips_t;
    } else {
        var text = '1234';
        var a = text[Math.floor(Math.random() * text.length)];
        var circle = document.getElementsByClassName("circle");
        var progress = document.getElementsByClassName("progress")[0];
        for (let index = 0; index < circle.length; index++) {
            text = circle[index].innerHTML;
            text = Number(text);
            if (a >= text) {
                circle[index].classList.add('active');
                progress.style.width = index * 33.33 + "%";
            } else {
                circle[index].classList.remove('active');
            }
        }

        switch (a) {
            case '1':
                var tips_t = "已接收工单";
                break;
            case '2':
                var tips_t = "正在查看工单";
                break;
            case '3':
                var tips_t = "正在处理工单";
                break;
            case '4':
                var tips_t = "工单处理完成";
                break;
            default:
                var tips_t = "出错了";
                break;
        }
        tips.innerHTML = tips_t;
    }
});