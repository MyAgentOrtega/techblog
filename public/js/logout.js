const logout = async function() {
    const response = await fetch("/api/user/logout", {
        method: "POST", 
        headers: {"content-type": "application/json"},
    })
    if (response.ok){document.location.replace("/")}
    else {alert("logout failed")}
    }
    document.getElementById("logout-button").addEventListener("click", logout)