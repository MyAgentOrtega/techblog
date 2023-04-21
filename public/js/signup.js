console.log("hello")

const formEl = document.getElementById("user-signup");

function createUser(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const obj = {
        username,
        email,
        password
    }

    fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        // document.location.replace("/");
    })
}

formEl.addEventListener("submit", createUser);