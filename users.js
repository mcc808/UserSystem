function displayUsers(usersArray){
    let usrTable="";
    //travel the array
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        usrTable+=`
        <tr 
            <td>Email: ${user.email}</td>
            <td>Password: ${user.password}</td>
            <td>First Name: ${user.firstname}</td>
            <td>Last Name: ${user.lastname}</td>
            <td>Age: ${user.age}</td>
            <td>Address: ${user.address}</td>
            <td>Phone Number: ${user.phonenumber}</td>
            <td>Payment Method: ${user.paymentmethod}</td>
            <td>Favorite Color: ${user.favoritecolor}</td>
        </tr>
    `;   
    $("#users-table").append(usrTable)
    }
    //create the html row
    
    //append the user into the table
    
}

function init(){
    console.log("Listing users...");
    let users = readUsers();//getting the users from the JS
    displayUsers(users);//display the users
}

window.onload = init;