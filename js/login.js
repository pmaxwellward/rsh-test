let but = document.getElementById("password-submit");

but.addEventListener("click", auth());

function auth() {
    let pw = "rshtest";
    let userSubmit = document.getElementById("password-field");
    console.log(userSubmit.value);
    alert("hello");

    /*
    if (pw == userSubmit) {
        userSubmit.innerHTML = "";
        document.getElementById("login-screen").display = none;
    } else {
        userSubmit.innerHTML = "";
        window.alert("Incorrect password.");
    }
    */
}