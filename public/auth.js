document.getElementById("btnloginReg").onclick = function () {
    document.getElementById('panelLogin').classList.add('d-none');
    document.getElementById('panelReg').classList.remove('d-none');
    gsap.from("#panelReg", { duration: 1, x: 300, opacity: 0, scale: 1 });
}

document.getElementById("btnregLogin").onclick = function () {
    document.getElementById('panelLogin').classList.toggle('d-none');
    document.getElementById('panelReg').classList.toggle('d-none');
    gsap.from("#panelLogin", { duration: 1, x: -300, opacity: 0, scale: 1 });
}

document.getElementById("formLogin").onsubmit = function () {
    var uname = document.getElementById("loginUname").value;
    var pword = document.getElementById("loginPword").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "1") {
                var loginSuccess = document.getElementById("loginSuccess");
                loginSuccess.classList.remove("d-none");
                loginSuccess.classList.add("animate__fadeIn");

                document.getElementById("btnloginLogin").setAttribute("disabled", "");

                setImmediate(function () {
                    window.location.replace("/");
                });
            } else {
                var loginFailed = document.getElementById("loginFailed");
                loginFailed.classList.remove("d-none");

                document.getElementById("btnLogin").setAttribute("disabled", "");

                if (loginFailed.classList.contains("animate__fadeOut")) {
                    loginFailed.classList.toggle("animate__fadeOut");
                }

                loginFailed.classList.toggle("animate__fadeIn");

                setTimeout(function () {
                    loginFailed.classList.toggle("animate__fadeIn");
                    loginFailed.classList.toggle("animate__fadeOut");
                }, 3000);
                setTimeout(function () {
                    loginFailed.classList.add("d-none");
                }, 4000);
                setTimeout(function () {
                    document.getElementById("btnloginLogin").removeAttribute("disabled");
                }, 4500);
                document.getElementById("loginPword").value = "";
            }
        }
    };
    xhr.open("POST", "/auth/login", true);
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.send("uname=" + uname + "&pword=" + pword);
};

document.getElementById("formReg").onsubmit = function () {
    var uname = document.getElementById("regUname").value;
    var email = document.getElementById("regEmail").value;
    var pword = document.getElementById("regPword").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            if (this.responseText == "2") {
                var regSuccess = document.getElementById("regSuccess");
                regSuccess.classList.remove("d-none");
                regSuccess.classList.add("animate__fadeIn");

                document.getElementById("btnregReg").setAttribute("disabled", "");

                setTimeout(function () {
                    window.location.replace("/");
                }, 3000);
            } else if (this.responseText == "1") {
                var regExist = document.getElementById("regExist");
                regExist.classList.remove("d-none");

                document.getElementById("btnregReg").setAttribute("disabled", "");

                if (regExist.classList.contains("animate__fadeOut")) {
                    regExist.classList.toggle("animate__fadeOut");
                }

                regExist.classList.toggle("animate__fadeIn");

                setTimeout(function () {
                    regExist.classList.toggle("animate__fadeIn");
                    regExist.classList.toggle("animate__fadeOut");
                }, 3000);
                setTimeout(function () {
                    regExist.classList.add("d-none");
                }, 4000);
                setTimeout(function () {
                    document.getElementById("btnregReg").removeAttribute("disabled");
                }, 4500);
                document.getElementById("regPword").value = "";
            } else {
                var regFailed = document.getElementById("regFailed");
                regFailed.classList.remove("d-none");

                document.getElementById("btnReg").setAttribute("disabled", "");

                if (regFailed.classList.contains("animate__fadeOut")) {
                    regFailed.classList.toggle("animate__fadeOut");
                }

                regFailed.classList.toggle("animate__fadeIn");

                setTimeout(function () {
                    regFailed.classList.toggle("animate__fadeIn");
                    regFailed.classList.toggle("animate__fadeOut");
                }, 3000);
                setTimeout(function () {
                    regFailed.classList.add("d-none");
                }, 4000);
                setTimeout(function () {
                    document.getElementById("btnReg").removeAttribute("disabled");
                }, 4500);
                document.getElementById("regPword").value = "";
            }
        }
    };
    xhr.open("POST", "/auth/reg", true);
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.send("uname=" + uname + "&email=" + email + "&pword=" + pword);
};