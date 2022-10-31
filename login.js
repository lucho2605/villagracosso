function login(){
    var user, password;

    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;


    if(user == "luis" && pass == "1234"){

        window.location= "Libreta-de-Notas.html";

    }

    if(user == "matias" && pass == "5678")
        
        window.location = "http://localhost:7902"
}



