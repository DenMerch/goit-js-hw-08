import { save, load } from "./localStorage.js";
import throttle from 'lodash.throttle';
const STORAFE_KEY = 'feedback-form-state';
const formEl = document.querySelector("form");
const formSubmit = {
    email: "",
    message: ""
}

formEl.addEventListener("input", throttle(handlInput, 300));
formEl.addEventListener("submit", handleSubmit);

function handlInput(event) {
    event.preventDefault();
    formSubmit.email = formEl.email.value;
    formSubmit.message = formEl.message.value;
    save(STORAFE_KEY, formSubmit)

}
if (load(STORAFE_KEY)) {
    formEl.email.value = load(STORAFE_KEY).email;
    formEl.message.value = load(STORAFE_KEY).message;
} else { return }

function handleSubmit(event) {
    event.preventDefault();
    formSubmit.email = formEl.email.value;
    formSubmit.message = formEl.message.value;
    console.log(formSubmit);
    localStorage.removeItem(STORAFE_KEY);;
    event.currentTarget.reset();
}
