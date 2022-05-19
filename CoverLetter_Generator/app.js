

function myFunction() {

    //Generates the greeting line of the cover letter
    const greetings = ["Hello there,", "Dear Sir, ", "To Whom It May Concern, ", "Dear Madam, ", "What's up nerd, ", "Hi there!"]
    let greeting = Math.floor(Math.random() * greetings.length);
    let hello = greetings[greeting]
    document.getElementById("opening").innerHTML = hello
    
    //Generates the first section of the cover letter
    const names = ["Alan", "Simon", "Theo", "John", "Jim", "Sam", "Alex", "Amber", "Angela", "Eva", "Stella", "Lucy"]
    let name = Math.floor(Math.random() * names.length);
    let firstname = names[name]
    
    const surnames = ["Shannon", "McGreagor", "Philips", "Jackson", "Patterson", "Donelly", "Hues", "Smith", "Doe"]
    let surname = Math.floor(Math.random() * surnames.length);
    let lastname = surnames[surname]

    const openingphrases = ["In my persuit of new creative endeavors ", "After seeing this position listed on Indeed. ", "Having lost my job after a lengthy legal battle with my former employer, the details of which I am not at liberty to discus.\n", "Legally I must disclose that I was let go due to incidents involving bathroom conduct, I will not elaborate further.", "After my former employer made the mistake of underestimating my ability to procrastinate I was let go and so ", "My former employer crossed my for the last time, the less that is said of their transgression... the better. Anyway, I'm onto bigger and better things and they're in the clink."]
    let openingphrase = Math.floor(Math.random() * openingphrases.length);
    let part1= openingphrases[openingphrase]

    const oppertunities = ["*Insert Job Role Here*", "Senior Frontend Developer", "Exorcist", "Junior Backend Developer", "Storm Trooper", "Actual Comedian Professional Cannibal", "Satan in Training", "Dead Poet"]
    let oppertunity = Math.floor(Math.random() * oppertunities.length);
    let job = oppertunities[oppertunity]

    const businesses = ["Life co.", "Death co.", "Mystery Inc", "CodeGang", "PJ", "Fyre ltd", "Phonix Games", "DSD", "Monsters Inc"]
    let business = Math.floor(Math.random() * businesses.length); 
    let employer = businesses[business]

    document.getElementById("sentenceOne").innerHTML = "My name is " + firstname + " " + lastname + ". " + part1 + "I became interested in the position of " + job + " available at " + employer + "."

    //generate next section of cover letter 
    const abilities = ["I do have are a very particular set of skills. Skills I have acquired over a very long career. Skills that make me a nightmare for people like you","I can cook a mean scrambled egg", "Javascript, CSS and HTML are foreign to me BUT I do have expierience working with Pizza", "Backend, frontend these are the same to me"]
    let ability = Math.floor(Math.random() * abilities.length);
    let skill =abilities[ability]

    const interests = ["Watching paint dry. ", "Updating the vast library of information I collect about everyone in my social circles", "Setting fire to all of my worldly possessions, really Marie Kondo that shit.", "Burning every bridge and connection I have to those in my support network. "]
    let interest = Math.floor(Math.random() * interests.length);
    let hobby = interests[interest]

 
    document.getElementById("skills").innerHTML = "I feel I could make a really good fit in your team. " + skill + ". I'm not all about work however and I do have hobbies such as my favorite hobby " + hobby

    const candidateinfos = ["Highly intelligent, my IQ is the best score. Nobody could believe it. Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid or insecure,it's not your fault ", "coniving, evil and downright scum. But that doesn't mean I don't deserve a job. Look at Borris Johnson, someone out there looked at him and said 'sure I'll hire you'. But yes, given the chance I would definitely stab you in the back. ", "relaxed, some even say to the extreme.", "I'm, like, a smart person, I don't have to be told the same thing in the same words every single day for the next eight years.", "I was a good student I comprehend very well, okay, better than I think almost anybody.", "I have a very good brain and I’ve said a lot of things... I know what I’m doing and I listen to a lot of people, I talk to a lot of people and at the appropriate time I’ll tell you who the people are. But I speak to a lot of people. My primary consultant is myself, and I have, you know, I have a good instinct for this stuff. "]
    let candidateinfo = Math.floor(Math.random() * candidateinfos.length)
    let candidate = candidateinfos[candidateinfo]

    document.getElementById("aboutme").innerHTML = "I would describe myself as " + candidate

    
}


//Step 1. Create Function
//Step 2. Create list/array
//Step 3. Create Character Generator with Math.random
//Step 4. Create a variable and apply result of generator
//Step 5. Connect apply result to an ID that is connected to <p> in HTML 