//Each section should be a separate function
//Interior or ext, place, time

function genSetting (){
//int or ext
const places = ["Int. ", "Ext. "]
const weathers = ["it is raining ", "there is lava ", "zombies bang on the doors", "a dog barks in the distance"]
const locales = ["A wet kitchen ", "A classroom ", "a hot dog farm ", "a volcano ", "a gotham rooftop ", "a pirateship ", "a gas station "]
var place = Math.floor(Math.random() * places.length);
var weather = Math.floor(Math.random() * weathers.length);
var locale = Math.floor(Math.random() * locales.length);

let x = places[place]
let z = weathers[weather]
let y = locales[locale]
document.getElementById("demo").innerHTML = x + " - " + y + " - " + z
}


//Camera Direction and scene setting
function genCamera (){

}

//First Character & Description

function characterOne () {

    //if Jen then - music quote responses 

    //Else generic responses 


}

//Second Characrer & Descripton 

function characterTwo () { 

    //if Jen then - music quote responses 

    //Else generic responses 


}


function myFunction(){
    genSetting();
}




