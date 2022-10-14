//create user constructor

function User(email,password,firstname,lastname,age,address,phone,payment,color){
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.ddress = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

//get the values from the inputs


//register function

function register(){
    
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtfirstname").val();
    let inputLastName = $("#txtlastname").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    //create the obj using the constructor
    let user = new User(inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputAddress,inputPhone,inputPayment,inputColor);
    //display the obj on the console
    console.log(user);
    //create a btn on the register.html and trigger the registration function
}


