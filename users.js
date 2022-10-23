function displayUsers(usersArray){
    let usrTable="";
    //travel the array
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        usrTable+=`
            <tr> 
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.age}</td>
                <td>${user.address}</td>
                <td>${user.phonenumber}</td>
                <td>${user.paymentmethod}</td>
                <td>${user.favoritecolor}</td>
            </tr>
        `; //create the html row

        //append the user into the table
        $("#users-table").append(usrTable)
    } 
}

function init(){
    console.log("Listing users...");
    let users = readUsers();//getting the users from the JS
    displayUsers(users);//display the users
}

window.onload=init;