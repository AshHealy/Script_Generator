function sayGoodMorning() { 

    const cohort = "G31"
    //is const the best way to store this
    const array_greetings = [
        " Hello there... ", "What's up ", "Ey am walkin' here ", "Syntactical sweetness ", "We need to talk ",  `I've been trying to reach you about your cars extended warranty ${cohort} ` 
    ]

    let let_greetings = Math.floor(Math.random()  * array_greetings.length);
    let greeting = array_greetings[let_greetings]
    

    const array_groupnames = [
        "Mutants", "Troops", "Younglings", `${cohort}`, "Fire Nation", 
    ]

    let let_group = Math.floor(Math.random()  * array_groupnames.length);
    let group = array_groupnames[let_group]


    // why use a query selector instead here?
    //if yes, how
    document.getElementById("good_morning").innerHTML = greeting + group + "!"
}