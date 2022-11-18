var content = document.getElementsByClassName('content')[0];
for (var index = 0; index < 7; index++) {
    // img
    var img_element = document.createElement("img");
    img_element.setAttribute("src", "./img/微信图片_20220919225545.jpg");

    // 发布者名称
    var name_element = document.createElement("span");
    var name_text = document.createTextNode("发布者名称");
    name_element.appendChild(name_text);

    // 分类
    var classification_element = document.createElement("span");
    var classification_text = document.createTextNode("分类");
    classification_element.appendChild(classification_text);

    // right
    var right_element = document.createElement("div");
    right_element.setAttribute("class", "right");
    right_element.appendChild(img_element);
    right_element.appendChild(name_element);
    right_element.appendChild(classification_element);
    // right_element.document.writh('<svg t="1667726247984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2746" width="200" height="200"><path d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z" p-id="2747"></path><path d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z" p-id="2748"></path><path d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z" p-id="2749"></path><path d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z" p-id="2750"></path></svg>');

    // left
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
    var left_element = document.createElement("div");
    left_element.setAttribute("class", "left");
    var span_element = document.createElement("span");
    var span_text = document.createTextNode(`${months}/${years}`);
    span_element.appendChild(span_text);
    left_element.appendChild(span_element);

    // box
    var box_element = document.createElement("div");
    box_element.setAttribute("class", "box");
    box_element.appendChild(left_element);
    box_element.appendChild(right_element);

    content.appendChild(box_element);
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