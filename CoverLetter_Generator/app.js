

function myFunction() {

    //Generates the greeting line of the cover letter
    const greetings = ["Hello there,", "Dear Sir, ", "To Whom It May Concern, ", "Dear Madam, ", "What's up nerd, ", "Hi there!"]
    var greeting = Math.floor(Math.random() * greetings.length);
    let hello = greetings[greeting]
    document.getElementById("opening").innerHTML = hello
    
    //Generates the first sentence of the cover letter
    const names = ["Alan", "Simon", "Theo", "John", "Jim", "Sam", "Alex", "Amber", "Angela", "Eva", "Stella", "Lucy"]
    var name = Math.floor(Math.random() * names.length);
    let firstname = names[name]
    
    const surnames = ["Shannon", "McGreagor", "Philips", "Jackson", "Patterson", "Donelly", "Hues", "Smith", "Doe"]
    var surname = Math.floor(Math.random() * surnames.length);
    let lastname = surnames[surname]

    const openingphrases = ["In my persuit of new creative endeavors I was put on to the position available", "After seeing this position listed on Indeed", "Having lost my job after a lengthy legal battle with my former employer, the details of which I am not at liberty to discus,\n", ""]
    var openingphrase = Math.floor(Math.random() * openingphrases.length);
    let part1= openingphrases[openingphrase]

    const oppertunities = ["Assistant Position", "Senior Frontend Developer", "Exorcist", "Junior Backend Developer", "Your Reson For Living"]
    var oppertunity = Math.floor(Math.random() * oppertunities.length);
    let job = oppertunities[oppertunity]

    document.getElementById("sentenceOne").innerHTML = "My name is " + firstname + " " + lastname + ". " + part1 + ". I became interested in the position of" + job + "available at your company."
}


//Step 1. Create Function
//Step 2. Create list/array
//Step 3. Create Character Generator with Math.random
//Step 4. Create a variable and apply result of generator
//Step 5. Connect apply result to an ID that is connected to <p> in HTML 