//Each section should be a separate function
//Interior or ext, place, time


//int or ext
//This should maybe be a class
const places = ["Int. ", "Ext. "]
const weathers = ["it is raining ", "there is lava ", "zombies bang on the doors", "a dog barks in the distance"]
const locales = ["A wet kitchen ", "A classroom ", "a hot dog farm ", "a volcano ", "a gotham rooftop ", "a pirateship ", "a gas station "]
var place = Math.floor(Math.random() * places.length);
var weather = Math.floor(Math.random() * weathers.length);
var locale = Math.floor(Math.random() * locales.length);

let x = places[place]
let z = weathers[weather]
let y = locales[locale]

// document.getElementById("demo").innerHTML = x + " - " + y + " - " + z

class genSetting {
    constructor(place, weather, locale){
    var place = Math.floor(Math.random() * places.length);
    var weather = Math.floor(Math.random() * weathers.length);
    var locale = Math.floor(Math.random() * locales.length);

    this.place = places[place]
    this.weather = weathers[weather]
    this.locale = locales[locale]
    }
}

function myFunction(){

}


//Camera Direction and scene setting
//This should maybe be a class
function genCamera (){

}

//First Character & Description
//This should maybe be a class

function characterOne () {

    //if Jen then - music quote responses 

    //Else generic responses 



}

//Second Characrer & Descripton 
//This should maybe be a class

function characterTwo () { 

    //if Jen then - music quote responses 

    //Else generic responses 


}


function myFunction(){

}




