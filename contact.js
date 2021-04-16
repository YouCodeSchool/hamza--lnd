document.querySelector("body > section > div.container > div.contactform > form > div:nth-child(5)").addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.querySelector("body > section > div.container > div.contactform > form > div:nth-child(2) > input[type=text\\ ]").value;
    let email = document.querySelector("body > section > div.container > div.contactform > form > div:nth-child(3) > input[type=text\\ ]").value;
    let message = document.querySelector("body > section > div.container > div.contactform > form > div:nth-child(4) > textarea").value;

    if (name == '' || email == '' || message == '') {
        Swal.fire({
            title: 'Error',
            text: 'please fil inputs',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
    // var ffn ='name' +email+message ;
    
         else {
        Swal.fire({
        
            title: 'message has been sent',
            html:
             'NAME : ' + name +  '<br> EMAIL:' + email  + '<br> MESSAGE :' + message,
            
            confirmButtonText: 'Ok'
        })


    }




})