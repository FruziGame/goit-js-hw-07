

const registerForm = document.querySelector(".login-form")

const users = {

}


registerForm.addEventListener("submit" , event => {

    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if  (email === "" || password === "") {
            alert("All form fields must be filled in") 
        } else { 
            users.email = email.trim() 
            users.password = password.trim()
            console.log(users)
        }

    form.reset()


});
