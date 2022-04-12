

function myFunction() {
    const protagonists = ["Cold Simon", "Stan", "Booger", "Noodle", "Jen", "My Partner Steve", "The Final Pam", "Big Nessa", "Rob, Rob and David", "Chris", "Craig", "Matt", "Tam"]
    var protagonist = Math.floor(Math.random() * protagonists.length);
    let goodguy = protagonists[protagonist]
    document.getElementById("demo").innerHTML = goodguy
}


//Step 1. Create Function
//Step 2. Create list/array
//Step 3. Create Character Generator with Math.random
//Step 4. Create a variable and apply result of generator
//Step 5. Connect apply result to an ID that is connected to <p> in HTML 