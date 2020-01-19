function createXML() {
    let xhr;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xhr = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
}
//每当 readyState 改变时，就会触发 onreadystatechange 事件

/*************************get 请求************************* */
function ajaxGet(url, success, fail) {
    let xhr = this.createXML();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText);
            } else {
                fail(xhr.responseText);
            }
        }
    }
}


// 调用
ajaxGet('/user.json', function (data) {
    console.log("成功：", data);
}, function (data) {
    console.log("失败：：", data);
});


/*************************post 请求************************* */
function ajaxPost(url, param, success, fail) {
    let xhr = this.createXML();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(stringParam);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText);
            } else {
                fail(xhr.responseText);
            }
        }
    }
}
// let param="id=9&com=aicoder";
let obj = {
    id: 9,
    com: "aicoder"
};
let param = JSON.stringify(obj);
// 调用
ajaxPost('/api/user', param, function (data) {
    // 后台返回的数据就是 字符串类型。要转成json，必须自己手动转换。
    var user = JSON.parse(data);
    console.log(user.id);
    console.log(user.com);
}, function () {});