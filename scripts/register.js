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
            age:60
        },
        {
            name:"Scooby",
            age:50
        },
        {
            name:"Tweety birdy",
            age:80
        }
    ] // pet arry
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

//use a for loop to travel the array
for (let i=0; i<salon.pets.length; i++){
    console.log(salon.pets[i].name);
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p>Welcome to the ${salon.name} is located in ${salon.address.street}, ${salon.address.number}, ${salon.address.zip} you can call us ${salon.phone}</p>
    `;
}
displayFooterInfo();