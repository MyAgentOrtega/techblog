console.log("hello")

const formEl = document.getElementById("user-login");

function userLogin(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const obj = {
        username: username,
        password: password
    }

    fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        },
        
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        document.location.replace("/");
    })
}

formEl.addEventListener("submit", userLogin);