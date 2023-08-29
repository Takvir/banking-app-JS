document.getElementById('submit-button').addEventListener('click' , function(){
    // For Email
    var userEmail = document.getElementById('user-email');
    var emailText = userEmail.value;
    
    // For User Password
    var userPassword = document.getElementById('user-password');
    var passwordText = userPassword.value;
    
    // For Confirm Password
    var confirmPassword = document.getElementById('confirm-password');
    var confirmPasswordText = confirmPassword.value;

    if(passwordText != confirmPasswordText)
    {   
        alert('Please give valid user and password')

    }

    else{
        if(emailText == 'takvir@gmail.com' && passwordText == 123456)
        {
            window.location.href = "banking.html";
        }
    }

    
})