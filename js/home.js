var content = document.getElementsByClassName('content')[0];
for (var index = 0; index < 7; index++) {
    // 人数
    var number_element = document.createElement("span");
    var number_txt = document.createTextNode(`${rando()}人`);
    number_element.appendChild(number_txt);

    // 收藏
    var collection_element = document.createElement("span");
    if (rando() > 5) {
        var collection_txt = document.createTextNode("🌑");
    } else {
        var collection_txt = document.createTextNode("🌕");
    }
    collection_element.appendChild(collection_txt);

    // 底部
    var bottom_element = document.createElement("span");
    bottom_element.setAttribute("class", "Check_collect");
    bottom_element.appendChild(number_element);
    bottom_element.appendChild(collection_element);

    // 日期
    var months = month();
    var years = year();
    switch (months) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            while (true) {
                if (year <= 31) {
                    year();
                } else {
                    break;
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            while (true) {
                if (year <= 30) {
                    year();
                } else {
                    break;
                }
            }
            break
        case 2:
            while (true) {
                if (year <= 29) {
                    year();
                } else {
                    break;
                }
            }
            break
    }
    var top_element = document.createElement("span");
    top_element.setAttribute("class", "release_date");
    var top_txt = document.createTextNode(`${months}/${years}`);
    top_element.appendChild(top_txt);

    // 外框
    var outline_element = document.createElement("div");
    outline_element.setAttribute("class", "contentC");
    outline_element.appendChild(top_element);
    outline_element.appendChild(bottom_element);

    content.appendChild(outline_element);
}

function rando() {
    return Math.round(Math.random() * 10);
}

function month() {
    var items = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return items[Math.floor(Math.random() * items.length)];
}


function year() {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    years = items[Math.floor(Math.random() * items.length)];
    return years;
}