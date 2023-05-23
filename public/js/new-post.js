
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
function deletePost(event) {
    const postId = event.target.getAttribute("data-postId")
    console.log(event.target.getAttribute("data-postId"))

    fetch(`/api/post/${postId}`, {
        method: "DELETE",
        // headers: {
        //     "Content-Type": "application/json",
        // },
    })
window.location.reload()
}
const allDeleteButtons = document.querySelectorAll (".deleteButton")
document.getElementById("new-post").addEventListener("submit", createPost);
// document.querySelectorAll(".deleteButton").addEventListener("click",deletePost)
allDeleteButtons.forEach(el => el.addEventListener("click",deletePost))