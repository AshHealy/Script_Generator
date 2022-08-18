function myFunction() {
    
    const blues = [",", "test"]
    let greeting = Math.floor(Math.random() * blues.length);
    let hello = "Roses are red, violets are blue... " + [greeting]
    document.getElementById("opening").innerHTML = hello
    
}
