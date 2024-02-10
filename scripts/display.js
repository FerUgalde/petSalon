// display registered pets count
function petsCount(){
    getE("count").innerHTML =`
    <p>The number of pets currently registered are: <span class="num-pets">${salon.pets.length}</span></p>
    `;
}

// // display pet names
// function petsBreeds(){
//     // document.getElementById("breeds").innerHTML = "";
//     let breedList = [];
//     for (let i=0; i<salon.pets.length; i++){
//         breedList += `<li>${salon.pets[i].breed}</li>`;
//     }
//     getE("breeds").innerHTML =`
//     <p>The breeds are:</p>
//     <ul>
//     ${breedList}
//     </ul>
//     `;
// }

// // display pet names
// function petsNames(){
//     // document.getElementById("names").innerHTML = "";
//     let nameList = [];
//     for (let i=0; i<salon.pets.length; i++){
//         nameList += `<li>${salon.pets[i].name}</li>`;
//     }
//     getE("names").innerHTML =`
//     <p>Their names are:</p>
//     <ul>
//     ${nameList}
//     </ul>
//     `
// }

// display petCards with all info
function displayPetCards(){
    getE('pets').innerHTML="";
    let card="";
    for(let i=0; i<salon.pets.length; i++){
        let pet = salon.pets[i];
        card +=`
        <div class="petCards">
            <p>Name: ${pet.name}</p>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `;
    }
    getE('pets').innerHTML=card;
}

// display table of pets
function displayPetTable(order){
    getE('t_pet').innerHTML="";
    let infoT="";
    let pet="";
    let lengthPet = salon.pets.length;

    for(let i=0; i<salon.pets.length; i++){
        if(order==true){
            lengthPet -= 1;
            pet = salon.pets[lengthPet];
        }else{
            pet = salon.pets[i];
        }
        infoT += `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
        </tr>
        `;
    }
    getE('t_pet').innerHTML=`
    <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Breed</th>
            <th>Service</th>
        </thead>
        <tbody>
            ${infoT}
        </tbody>
    </table>
    `;
}

// invert information
let invert = true;
function invertPets(){
    invert = !invert;
    displayPetTable(invert);
}

// display the information about the pet salon
function displayFooterInfo(){
    getE("info").innerHTML=`
    <p>🐩Welcome to ${salon.name}🐈</p><p>📍We are located in ${salon.address.street}, ${salon.address.number}, ${salon.address.zip}</p><p>You can call us 📞${salon.phone}</p>
    `;
}
