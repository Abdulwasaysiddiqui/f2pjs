function validation(){
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let number = document.getElementById('number').value

    let userCheck = /^[A-Za-z]+$/ ;
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[A-Za-z]\w{7,14}$/;
    let numberCheck = /^[0-9]+$/;

    if(userCheck.test(username)){
        document.getElementById('usererror').innerHTML="";
    }
    else{
        document.getElementById('usererror').innerHTML="** Invalid Username";
        return false;
    }
    if(emailCheck.test(email)){
        document.getElementById('emailerror').innerHTML="";
    }
    else{
        document.getElementById('emailerror').innerHTML="** Invalid Email";
        return false;
    }
    if(passwordCheck.test(password)){
        document.getElementById('passworderror').innerHTML="";
    }
    else{
        document.getElementById('passworderror').innerHTML="** Invalid Password";
        return false;
    }
    if(numberCheck.test(number)){
        document.getElementById('numbererror').innerHTML="";
    }
    else{
        document.getElementById('numbererror').innerHTML="** Invalid Number";
        return false;    
    }
    if(userCheck.test(username) && emailCheck.test(email) && passwordCheck.test(password) && numberCheck.test(number)){
        swal("Good job!", "Your form has been submitted!", "success")
        return false;
    } 
    else{
        alert("Invalid")
        return false;
    }
}
