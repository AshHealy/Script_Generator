

function myFunction() {

    //Generates the greeting line of the cover letter
    const greetings = ["Hello there,", "Dear Sir, ", "To Whom It May Concern, ", "Dear Madam, ", "What's up nerd, ", "Hi there!"]
    var greeting = Math.floor(Math.random() * greetings.length);
    let hello = greetings[greeting]
    document.getElementById("opening").innerHTML = hello
    
    //Generates the first section of the cover letter
    const names = ["Alan", "Simon", "Theo", "John", "Jim", "Sam", "Alex", "Amber", "Angela", "Eva", "Stella", "Lucy"]
    var name = Math.floor(Math.random() * names.length);
    let firstname = names[name]
    
    const surnames = ["Shannon", "McGreagor", "Philips", "Jackson", "Patterson", "Donelly", "Hues", "Smith", "Doe"]
    var surname = Math.floor(Math.random() * surnames.length);
    let lastname = surnames[surname]

    const openingphrases = ["In my persuit of new creative endeavors ", "After seeing this position listed on Indeed. ", "Having lost my job after a lengthy legal battle with my former employer, the details of which I am not at liberty to discus.\n", "Legally I must disclose that I was let go due to incidents involving bathroom conduct, I will not elaborate further.", "After my former employer made the mistake of underestimating my ability to procrastinate I was let go and so "]
    var openingphrase = Math.floor(Math.random() * openingphrases.length);
    let part1= openingphrases[openingphrase]

    const oppertunities = ["*Insert Job Role Here*", "Senior Frontend Developer", "Exorcist", "Junior Backend Developer", "Storm Trooper", "Actual Comedian Professional Cannibal", ]
    var oppertunity = Math.floor(Math.random() * oppertunities.length);
    let job = oppertunities[oppertunity]

    const businesses = ["Life co.", "Death co.", "Mystery Inc", "CodeGang", "PJ", "Fyre ltd", "Phonix Games", "DSD", "Monsters Inc"]
    var business = Math.floor(Math.random() * businesses.length); 
    let employer = businesses[business]

    document.getElementById("sentenceOne").innerHTML = "My name is " + firstname + " " + lastname + ". " + part1 + "I became interested in the position of " + job + " available at " + employer + "."

    //generate next section of cover letter 
    const abilities = [""]
    var ability = Math.floor(Math.random() * abilities.length);
    let skill =abilities[ability]
}


//Step 1. Create Function
//Step 2. Create list/array
//Step 3. Create Character Generator with Math.random
//Step 4. Create a variable and apply result of generator
//Step 5. Connect apply result to an ID that is connected to <p> in HTML 