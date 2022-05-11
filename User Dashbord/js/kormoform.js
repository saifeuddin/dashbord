
const form = document.getElementById('form');
const countryname = document.getElementById('countryname');
const userloginid = document.getElementById('userloginid');
const fullname = document.getElementById('fullname');
const dateofbirth = document.getElementById('dateofbirth');
const nidno = document.getElementById('nidno');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const password = document.getElementById('password');

console.log(form, countryname, userloginid, fullname, dateofbirth, nidno, mobile, email, password)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
    console.log('ggg')
})


function checkInputs() {
    console.log('ggggg');

    const countrynameValue = countryname.value.trim()
    const userloginidValue = userloginid.value.trim()
    const fullnameValue = fullname.value.trim()
    const dateofbirthValue = dateofbirth.value.trim()
    const nidnoValue = nidno.value.trim()
    const mobileValue = mobile.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()


    if (countrynameValue === '') {
        setErrorFor(countryname)

    } else {
        setSuccessFor(countryname)
    }


    if (userloginidValue === '') {
        setErrorFor(userloginid, 'Username cannot be blank')

    } else {
        setSuccessFor(userloginid)
    }


    if (fullnameValue === '') {
        setErrorFor(fullname, 'Fullname cannot be blank')

    } else {
        setSuccessFor(fullname)
    }


    if (dateofbirthValue === '') {
        setErrorFor(dateofbirth)

    } else {
        setSuccessFor(dateofbirth)
    }



    if (nidnoValue === '') {
        setErrorFor(nidno)

    } else {
        setSuccessFor(nidno)
    }



    if (mobileValue === '') {
        setErrorFor(mobile)

    } else {
        setSuccessFor(mobile)
    }



    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')

    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email')

    } else {
        setSuccessFor(email)
    }




    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')

    } else {
        setSuccessFor(password)
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.textContent = message
}


function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}



function isEmail(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e);
}









