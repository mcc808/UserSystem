function login(){
    //get the values from the username and password
    let password = $("#inputPassword").val();
    let userName = $("#inputUserName").val();
}

let users = readUsers();

for(let i=0;users.lenght;i++){
    let user = users[i];
    
    if(user.password==password && user.email==userName){
        window.location="users.html"
    }
       
}