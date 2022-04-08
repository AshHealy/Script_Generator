// //Script Generator

//"the 13th reason",

const protagonists = ["Cold Simon", "Stan", "Booger", "Noodle", "Jen", "My Partner Steve", "The Final Pam", "Big Nessa", "Rob, Rob and David", "Chris", "Craig", "Matt", "Tam"]
const antagonists = ["Warm Simon", "Phantom Pisser", "An Orc", "A Single Rubber Duck", "Fireman Sam", "Henry Hoover", "The Passive Agressive Bike Man", ]
const dialogue_statements = ["You won't get away with this!",  "We got you!", "Oh no, it's YOU!", "He's a morally reprehensible man.", "Does it fill you with helpful notions?"]
const dialogue_responses = ["Oh but I already have", "and that's how I met your mother", "And I would have gotten away with it too... if it weren't for you meddeling kids!", "this is your final warning before I unleash the beast.", "How dare you!"]
const places = ["Int. ", "Ext. "]
const timeofdays = ["Night", "Mid-day", "Day", "Lunch", "Breakfast"]
const ys = ["A wet kitchen ", "A classroom ", "a hot dog farm ", "a volcano ", "a gotham rooftop ", "a pirateship ", "a gas station "]
const doings = ["Our characters face each other. ", "the drama hangs in the air like a wet towel. ", "it's a mexican stand off. ", "someone sneezes. "]
const weathers = ["it is raining ", "there is lava ", "zombies bang on the doors", "a dog barks in the distance"]
const actions = [" turns around", " throws a snowball", " withdraws from the union", " becomes a spiral", " invests in an NFT"]
const reactions = [" ran away", " punches elon musk", " didn't like that.", " inherits a million $$$.", " liked that."]
const dialogue_challenges = [" I have the high ground", " you can't stop the beat", " get away from my daughter BITCH", " I need to kill the queen to defeat the drones, will you come with me?", "this is your last chance bub.", " my career in this town is just getting started!"]
const dialogue_challenge_responses = [" you have my respect but no.", " I can't believe you've done this.", " it was for the children. ", " listen. I just can.", " I don't care. ", " I am returning to academia effective immediately. "]




var protagonist = Math.floor(Math.random() * protagonists.length);
var antagonist = Math.floor(Math.random() * antagonists.length);
var dialogue_statement = Math.floor(Math.random() * dialogue_statements.length);
var dialogue_response = Math.floor(Math.random() * dialogue_responses.length);
var y = Math.floor(Math.random() * ys.length);
var place = Math.floor(Math.random() * places.length);
var doing = Math.floor(Math.random() * doings.length);
var action = Math.floor(Math.random()* actions.length);
var reaction = Math.floor(Math.random()* reactions.length);
var dialogue_challenge = Math.floor(Math.random()* dialogue_challenges.length);
var timeofday = Math.floor(Math.random() * timeofdays.length);
var dialogue_challenge_response = Math.floor(Math.random() * dialogue_challenge_responses.length);


let goodguy = protagonists[protagonist]
let badguy = antagonists[antagonist]
let saything =dialogue_statements[dialogue_statement]
let respondthing = dialogue_responses[dialogue_response]
let where = ys[y]
let x = places[place]
let d = doings[doing]
let a = actions[action]
let r = reactions[reaction]
let dialoguec = dialogue_challenges[dialogue_challenge]
let tod = timeofdays[timeofday]
let dialoguecr = dialogue_challenge_responses[dialogue_challenge_response]




function myFunction() {
        document.getElementById("demo").innerHTML = x + " - " + where +  " - " + tod;
        document.getElementById("demo2").innerHTML = goodguy + ": " + saything
        document.getElementById("demo3").innerHTML = badguy + ": " + respondthing
        document.getElementById("demo4").innerHTML = badguy + a 
        document.getElementById("demo5").innerHTML = goodguy + r
        document.getElementById("demo6").innerHTML = goodguy + " : " + dialoguec
        document.getElementById("demo7").innerHTML = badguy + " : " + dialoguecr
        // document.getElementById("demo8").innerHTML = 
}






// console.log(goodguy + ": " + saything)
// console.log(badguy + ": " + respondthing )