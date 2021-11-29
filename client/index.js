

const getListbBtn = document.getElementById('get-list')
const parkList = document.querySelector('#park-list')
const toDoList = document.querySelector('#to-do-list')


function getList(){
    axios.get(`http://localhost:5050/parks`)
    .then(res => {
        res.data.forEach(elem => {
        
            let parkCard = `<div class="park-card">
            <h2 class="park-card-name">${elem.name}</h2>
            <img class="park-pic" src=${elem.image}>
            <button class="addition-to-list-btn" onclick="addToItinerary(${elem.id})">Add to check list</button> 
           

            </div>`
            parkList.innerHTML += parkCard
        })
       
    })
}
getList()

// getListbBtn.addEventListener("click", getList)
// here endeth the show list of places funcionality.

// here starteth the add it to your itinerary funcionality.

function addToItinerary(id){
    axios.post(`http://localhost:5050/parks`,{id})
    .then(res => {
        toDoList.innerHTML = ""


        res.data.forEach(elem => {
            console.log(elem.id)
            let toDoCard = `<div class="park-card">
            <h2 class="park-card-name">${elem.name}</h2>
            <img class="park-pic" src=${elem.image}>
            <button class="delete-from-list-btn" onclick="markVisited(${elem.id})">Mark visited</button> 
           

            </div>`
            toDoList.innerHTML += toDoCard
        })
    })

}

// if there are already parks in the to do list but the page has been reloaded
function loadtoDoList(){
    axios.get(`http://localhost:5050/toDoList`)
    .then(res => {
        toDoList.innerHTML = ""


        res.data.forEach(elem => {
            console.log(elem.id)
            let toDoCard = `<div class="park-card">
            <h2 class="park-card-name">${elem.name}</h2>
            <img class="park-pic" src=${elem.image}>
            <button class="delete-from-list-btn" onclick="markVisited(${elem.id})">Mark visited</button> 
           

            </div>`
            toDoList.innerHTML += toDoCard
        })
    })
}
loadtoDoList()

// here endeth the add to parks function and starteth the delete from list function

function markVisited(id){
    axios.delete(`http://localhost:5050/parks/${id}`)
    .then(res => {
        toDoList.innerHTML = ""


        res.data.forEach(elem => {
            let toDoCard = `<div class="park-card">
            <h2 class="park-card-name">${elem.name}</h2>
            <img class="park-pic" src=${elem.image}>
            <button class="delete-from-list-btn" onclick="markVisited(${elem.id})">Mark visited</button> 
           

            </div>`
            toDoList.innerHTML += toDoCard
        })
    })
}










// .then(res => {
//     res.data.forEach(elem => {
//         let countryCard = `<div class="country-card">
//             <h2>${elem.city}, ${elem.country}</h2>
//             <h3>Rating: ${elem.rating}/5</h3>
//             <button onclick="deleteCard(${elem['city_id']})">Delete</button>
//             </div>
//         `

//         countryList.innerHTML += countryCard
//     })
// })
// }

