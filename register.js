//arrays []
//objects {}

let petSalon ={
    //attributes
    name:"El Sombrero",
    address:"Ave Starlight 804",
    pets:[
        {
            //anonymous object
            name:"Scooby",
            age:50,
            breed:"Dane",
            gender:"Male",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"666-666-666"
        },
        {
            name:"Scrappy",
            age:40,
            breed:"Mixed",
            gender:"Male",
            service:"Vaccine",
            ownerName:"Shaggy",
            contactPhone:"666-666-666"
        },
        {
            name:"Hachiko",
            age:20,
            breed:"Akita Inu",
            gender:"Male",
            service:"Grooming",
            ownerName:"Hidesaburō Ueno",
            contactPhone:"111-111-111"
        },
        {
            name:"Fido",
            age:8,
            breed:"Golden Retriever",
            gender:"Male",
            service:"Vaccine",
            ownerName:"Luigi",
            contactPhone:"567-567-567"
        }
    ],
    hours:{
        open:"9:00am",
        close:"6:00pm"
    },
    services:["grooming","wash"]
}

function displayInfo(){
    document.getElementById("info").innerHTML=`
    Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}.`;
}

//display the name of the pets registered into the console
function logPets(){
    for(let i=0; i<petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }
}

//alerts the user how many pets are registered
function alertPets(){
    alert(`There are currently ${petSalon.pets.length} pets registered!`);
}

displayInfo();
logPets();
alertPets();