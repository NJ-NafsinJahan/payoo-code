console.log('login functionality')

document.getElementById("login-btn").addEventListener("click", function(){
    //1. get the mobile number input
   const numberInput= document.getElementById('input-number');
   const contactNumber= numberInput.value;
   console.log(contactNumber);
    //2. get the pin input
    const inputPin= document.getElementById('input-pin');
    const pin= inputPin.value;
    console.log(pin);
    //3. Match the mobile number & pin input
    if (contactNumber== "01234567890" && pin=="1234"){
    // 3.1. if true:::>> alert>homePage 
    alert('Login Successful')
    // window.location.replace("/home.html");
    window.location.assign("./home.html");
    } else {
        // 3.1. if false:::>> alert>return
        alert("Login Failed")
        return;
    }
    
})