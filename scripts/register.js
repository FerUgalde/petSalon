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

// replace
function getE(id){
    return document.getElementById(id);
}

// get elements from HTML
let inputName = getE("txtName");
let inputAge = getE("numAge");
let inputGender = getE("selectGender");
let inputBreed = getE("txtBreed");
let inputService = getE("selectService");

function register(){
    let fields = [inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value];

    if(fields.every(value => value !== "")){
        let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    
        salon.pets.push(newPet);
    
        petsCount();
        displayPetCards();
        displayPetTable();
    
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
    displayPetTable();
    displayPetCards();
    petsCount();
}

displayFooterInfo();
window.onload=init();