function getWildlife(){
    return fetch("http://localhost:3000/Wildlife", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => res.json())
    .then(Wildlife => Wildlife)
}
