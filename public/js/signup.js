console.log("hello")

const formEl = document.getElementById("user-signup");

function createUser(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const obj = {
        username: username,
        email: email,
        password: password
    }

    fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        },
        
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        // document.location.replace("/");
    })
}

formEl.addEventListener("submit", createUser);