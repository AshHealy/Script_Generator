function myFunction() {
    
    const blues = ["I think you are smelly and your feet are too.", "I hired a lawyer and so should you.", "sometimes I jobby and sometimes I poo.", "your laces are untied and you're missing a shoe.", "have you ever wondered about the number 42?"]
    let blue = Math.floor(Math.random() * blues.length);
    let rhyme = blues[blue]
    document.getElementById("opening").innerHTML = "Roses are red, violets are blue... " + rhyme
    
}
