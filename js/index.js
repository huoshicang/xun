window.onload = function() {
    window.chars = 'ABCDEFGHIJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
    window.pwd = '';
    window.h3 = document.getElementsByTagName("h3")[0];
    window.verification = document.getElementById('verification');
    window.prompt = document.getElementsByClassName("prompt")[0];

    // 生成验证码
    for (i = 0; i < 4; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * 51));
    }
}





// 判断用户名、密码、验证码是否正确
document.getElementsByClassName("sub")[0].addEventListener("click", (params) => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const verification = document.getElementById("verification").value;

    if (user !== "123") {
        h3.innerHTML = "用户名错误";
        Fa(params);
    } else if (password !== "123") {
        h3.innerHTML = "密码错误";
        Fa(params)
    } else if (verification !== pwd) {
        h3.innerHTML = "验证码错误";
        Fa(params)
    } else {
        h3.innerHTML = "登录成功";
        setTimeout(() => {
            prompt.setAttribute("style", 'top:25px');;
        }, 1000);

    }
    // 显示错误信息
    function Fa(params) {
        params.preventDefault();
        prompt.setAttribute("style", 'top:25px');
        setTimeout(noPrompt, 2000);
    }
})

// 显示验证码
verification.addEventListener("click", () => {
    h3.innerHTML = pwd;
    prompt.setAttribute("style", 'top:25px');
})

// 提示框消失
function noPrompt() {
    prompt.setAttribute("style", 'top:-75px');
}

// 验证码输入栏提示
document.getElementsByClassName("box")[0].addEventListener("mouseover", () => {
    verification.setAttribute("placeholder", "点击显示");
})
verification.addEventListener("click", () => {
    verification.setAttribute("placeholder", "严格遵守大小写");
})
document.getElementsByClassName("box")[0].addEventListener("mouseout", () => {
    verification.setAttribute("placeholder", "验证码");
})

// 实时监听验证码
function OnInput(event, obj) {
    var long = verification.value;
    if (long.length == 4) {
        setTimeout(noPrompt, 500);
    } else {
        prompt.setAttribute("style", 'top:25px');
    }
}

// 时间
setInterval(() => {
    var myDate = new Date();
    let str = myDate.toTimeString(); //"10:55:24 GMT+0800 (中国标准时间)"
    document.getElementsByClassName("time")[0].innerHTML = str.substring(0, 8);
}, 1000);