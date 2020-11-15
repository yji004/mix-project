function bli() {
    modal.text.style.display = 'none';
    modal.medlem.style.display = 'block';
}

var variable = {
    epost: document.getElementById("epost"),
    tele: document.getElementById("telepone"),
    send: document.getElementById("btn_3"),
    input: document.getElementsByTagName("input"),
    error: document.getElementsByTagName("span"),
    lable: document.getElementsByClassName("lable"),
}
var modal = {
    btn_2: document.getElementsByClassName('btn_2'),
    text: document.getElementById('text'),
    medlem: document.getElementById('medlem'),
    register: document.getElementById('register'),
}

variable.send.onclick = function () {
    var list = ["fornavn", "etternavn", "epost", "telepone"];
    var input = variable.input;
    var pass = [];
    for (var i = 0; i < 5; i++) {
        if (check(i) == false) {
            var p=i+1;
            variable.error[i].style.display = "block";
            input[p].style.borderBottom = "1px red solid";
            console.log(list[i] + " is" + input[p].value);
            console.log("result of " + input[p].value + " is " + check(i));
        } else {
            var p=i+1;
            variable.error[i].style.display = "none";
            input[p].style.borderBottom = "1px black solid";
            pass.push(i);
        }
    }
    if (pass.length == 5) {
        modal.medlem.style.display = 'none';
        modal.register.style.display = 'block';
    } else {

    }

}

document.oninput = function (e) {
    console.log("target is " + e.target.name);
    var name = e.target.name;
    var list = ["fornavn", "etternavn", "epost", "telepon", "check"];
    var n = list.indexOf(name);
    var resualt = check(n);
    if (resualt != true) {
        variable.error[n].style.display = "block";
        variable.input[n+1].style.borderBottom = "1px red solid";
    } else {
        variable.error[n].style.display = "none";
        variable.input[n+1].style.borderBottom = "1px black solid";
    }
}

function check(n) {
    var value = variable.input[n+1].value;
    var reg_epost = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var reg_navn = /^["ø","å","æ"]|["Ø","Å","Æ"]|[a-zA-Z]{1,20}|[\u4e00-\u9fa5]{1,10}$/;
    var reg_pone = /^(\+?47)?[49]\d{7}$/;
    if (n == 0 || n == 1) {
        var result = reg_navn.test(value);
        return result;
    } else if (n == 2) {
        var result = reg_epost.test(value);
        return result;
    } else if (n == 3) {
        var result = reg_pone.test(value);
        return result;
    } else if (n == 4) {
        var result = variable.input[n+1].checked
        return result;
    }
}
