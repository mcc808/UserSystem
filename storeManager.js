function saveUser(newUser){
    let oldUsers = readUsers();
    oldUsers.push(newUser);
    let val = JSON.stringify(oldUsers);
    localStorage.setItem('user',val);
}

function readUsers(){
    let users = localStorage.getItem('user');

    if(!users){
        return[];
    }else{
        let list = JSON.parse(users);
        return list;
    }
}