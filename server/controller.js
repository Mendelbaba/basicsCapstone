const parks = require('./db.json')
const parkItinerary = [

]
module.exports = {
    getParks : (req, res) => {
       res.status(200).send(parks)
    },

    addToMyParks : (req, res) => {
        const {id} = req.body

        const foundPark = parkItinerary.find(park => park.id === id )
        if(!foundPark){
            const newPark = parks[id]
            parkItinerary.push(newPark)
        }
       res.status(200).send(parkItinerary)
    },

    deleteFromToDo : (req, res) => {
        const {id} = req.params
    

        console.log(parkItinerary)
        for(let i = 0; i < parkItinerary.length; i++){
            if(parkItinerary[i].id=== +id){
                parkItinerary.splice(i,1)
            } 
        } 
        console.log(parkItinerary)
        
        
        res.status(200).send(parkItinerary)
    }

}

