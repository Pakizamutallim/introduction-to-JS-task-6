// alert();

// var name = "Pakiza";
// var surname = "Mutallimova"
// var age = 26;
// var isWorks = true

// console.log(name, surname, age, isWorks == true );

// console.log(4 == 4);
// console.log(4 != 4);
// console.log(4 === "4");
// console.log(4 !== "3");
// console.log(4 !== "3");
// console.log(4 !== "4");
// console.log(4 != 4);
// console.log(4 !== "4");
// console.log(4 === 4);

// prompt("Yasinizi daxil edin" );

// var age = prompt("Yasinizi daxil edin")
// var age2 = 18 - age;
// if (age >= 18){
//     console.log("sizin vesiqe almaga icazeniz var")
// }
// else{
//     console.log("sizin vesiqe almaga hele " + (18-age) + " iliniz var");
// }


// var age = prompt("Yasinizi daxil edin: ");
// var ageDifference = 18 - age;
// if (age >= 18) {
//     console.log("Take your license!");
// } else {
//     console.log("Yo have to wait", ageDifference, "years");
// }



var pointOfStudent = prompt("Balinizi daxil edin");

if (pointOfStudent <= 100) {
    if (pointOfStudent >= 0 && pointOfStudent <= 49) {
        console.log("F");
    }
    
    else if (pointOfStudent >= 50 && pointOfStudent <= 59) {
        console.log("D");
    }
    
    else if (pointOfStudent >= 60 && pointOfStudent <= 69) {
        console.log("C");
    }
    
    else if (pointOfStudent >= 70 && pointOfStudent <= 79) {
        console.log("B");
    }
    
    else if (pointOfStudent >= 80 && pointOfStudent <= 100) {
        console.log("A");
    }
}
else{
    console.log("xahis edirik 100-den kicik eded yazin");
}
