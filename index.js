const form = document.querySelector('#form_field')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const emailName = document.querySelector('.email')
const password = document.querySelector('.password')

form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInput(e)
})

function checkInput() {
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = emailName.value
    const passwordValue = password.value

    if (firstNameValue === '') {
        setErrorFor(firstName, 'first-name cannot be blank')
    } else {
        setSuccessFor(firstName)
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'last-name cannot be blank')
    } else {
        setSuccessFor(lastName)
    }
    if (emailValue === '') {
        setErrorFor(emailName, 'email cannot be blank')
    } else {
        setSuccessFor(emailValue)
    }
    if (passwordValue == '') {
        setErrorFor(password, 'password cannot be blank')
    } else {
        setSuccessFor(password)
    }
}






function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('.error_message')
    small.innerText = message;
    formControl.className = 'form_container error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_container success'
}