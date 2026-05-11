function login() {
    var userVariable = document.getElementById('userInput');
    var passVariable = document.getElementById('passInput');

  
    switch (userVariable.value == "NBautista") { 
        case true: 
            if (passVariable.value == "19205") { 
                window.alert("Welcome to Demon Slayer Academy, NBautista!");
                window.location.href = "notebook.html";
            }
            else { 
                window.alert("Wrong password!");
            }
            break;

        case false:
            
            if (passVariable.value == "19205") {
                window.alert("Wrong ID number!"); 
            }
            else {
                window.alert("Wrong ID number and password!"); 
            }
            break;
    }
}