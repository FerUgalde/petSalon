let salon={
    name:"The fashion pet",
    phone:"999-999-9999",
    address:{
        street:"Palm",
        number:"262-k",
        zip:"123345"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            service:"Dental cleaning",
            breed:"Great Dane"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            service:"Bath and drying",
            breed:"Doberman"
        },
        {
            name:"Tweety birdy",
            age:80,
            gender:"Female",
            service:"Nail trimming",
            breed:"Parrot"
        }
    ] // pet arry
}



// display registered pets count
function petsCount(){
    document.getElementById("count").innerHTML =`
    <p>The number of pets currently registered are: <span class="num-pets">${salon.pets.length}</span></p>
    `;
}

// display pet names
function petsBreeds(){
    let breedList = [];
    for (let i=0; i<salon.pets.length; i++){
        breedList += `<li>${salon.pets[i].breed}</li>`;
    }
    document.getElementById("breeds").innerHTML =`
    <p>The breeds are:</p>
    <ul>
    ${breedList}
    </ul>
    `;
}

// display pet names
function petsNames(){
    let nameList = [];
    for (let i=0; i<salon.pets.length; i++){
        nameList += `<li>${salon.pets[i].name}</li>`;
    }
    document.getElementById("names").innerHTML =`
    <p>Their names are:</p>
    <ul>
    ${nameList}
    </ul>
    `
}

// display the information about the pet salon
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p>🐩Welcome to the ${salon.name}🐈</p><p>📍We are located in ${salon.address.street}, ${salon.address.number}, ${salon.address.zip}</p><p>You can call us 📞${salon.phone}</p>
    `;
}

displayFooterInfo();
petsCount();
petsBreeds();
petsNames();
