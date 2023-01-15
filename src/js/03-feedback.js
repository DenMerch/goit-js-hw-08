import { save, load } from "./localStorage.js";
import throttle from 'lodash.throttle';
const formEl = document.querySelector("form");
const formSubmit = {
    email: "",
    message: ""
}

formEl.addEventListener("input", throttle(handlInput, 300));


function handlInput(event) {
    event.preventDefault();
    formSubmit.email = formEl.email.value;
    formSubmit.message = formEl.message.value;
    save("feedback-form-state", formSubmit)

}
if (load("feedback-form-state")) {
    formEl.email.value = load("feedback-form-state").email;
    formEl.message.value = load("feedback-form-state").message;
} else { return }
formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    formSubmit.email = formEl.email.value;
    formSubmit.message = formEl.message.value;
    console.log(formSubmit);
    localStorage.clear();
    event.currentTarget.reset();
}
