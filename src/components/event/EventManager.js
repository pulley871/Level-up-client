export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
}
export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const joinEvent = (eventId, status) => {
    
    return fetch(`http://localhost:8000/events/${ eventId }/signup`, {
        method: status?"DELETE":"POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => (status ? null:response.json()))
}
