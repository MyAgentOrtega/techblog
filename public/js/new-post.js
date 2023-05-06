
function createPost(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const obj = {
        title,
        body
    }

    fetch("/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    });
}

document.getElementById("new-post").addEventListener("submit", createPost);