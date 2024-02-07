let salon={
    name:"The fashion pet",
    phone:"999-999-9999",
    address:{
        street:"Palm",
        number:"262-k",
        zip:"123345"
    },
    pets:[] // pet arry
}

// constructor
function Pet(name, age, gender, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
}

// display registered pets count
function petsCount(){
    document.getElementById("count").innerHTML =`
    <p>The number of pets currently registered are: <span class="num-pets">${salon.pets.length}</span></p>
    `;
}

// display pet names
function petsBreeds(){
    // document.getElementById("breeds").innerHTML = "";
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
    // document.getElementById("names").innerHTML = "";
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
    <p>🐩Welcome to ${salon.name}🐈</p><p>📍We are located in ${salon.address.street}, ${salon.address.number}, ${salon.address.zip}</p><p>You can call us 📞${salon.phone}</p>
    `;
}

// get elements from HTML
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("numAge");
let inputGender = document.getElementById("selectGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("selectService");

function register(){

    let fields = [inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value];

    if(fields.every(value => value !== "")){
        let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    
        salon.pets.push(newPet);
    
        petsCount();
        petsBreeds();
        petsNames();
    
        inputName.value = "";
        inputAge.value = "";
        inputGender.value = "";
        inputBreed.value = "";    
        inputService.value = "";
    }
}


// pets default
function init(){
    // creating predefined obj
    let pet1 = new Pet("Scooby",60,"Male","Great Dane","Dental cleaning");
    let pet2 = new Pet("Scrappy",50,"Male","Doberman","Bath and drying");
    let pet3 = new Pet("Tweety",80,"Female","Parrot","Nail trimming");
    salon.pets.push(pet1, pet2, pet3);
    // executing fn
    petsCount();
    petsBreeds();
    petsNames();
}

displayFooterInfo();
window.onload=init();