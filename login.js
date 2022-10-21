function login(){
    //get the values from the username and password
    let password = $("#inputPassword").val();
    let userName = $("#inputUserName").val();
}

let users = readUsers();

for(let){
    
    if(!users){
        return[];
    }else{
        let list = JSON.parse(users);
        return list;
    }
}
}