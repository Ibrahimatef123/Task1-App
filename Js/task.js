
var emailInput = document.getElementById("email");

var nameInput = document.getElementById("name");

var domainInput = document.getElementById("domain");


function cutEmail(){

    var emailValue = emailInput.value;

if( emailValue!=='' && emailValue.includes('@')){

    var atIndex = emailValue.indexOf('@');

    var emailDomain = emailValue.slice(atIndex+1);

if(emailDomain.length > 4 && emailDomain.includes('.')){

var emailName =  emailValue.slice( 0 , atIndex );


nameInput.value = emailName ;  

domainInput.value = emailDomain ;

}else{
        alert('please write correct domain ex: @ex.com')
}

}
else{
    
  alert('please write correct email')
}

}


