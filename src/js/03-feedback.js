import { save, load } from "./localStorage.js";
const throttle = require('lodash.throttle');
const formEl = document.querySelector("form");
formEl.addEventListener("submit", throttle(handleSubmit, 1000));
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    if (email.value === "" || message.value === "") {
        return console.log("Please fill in all the fields!");
    }
    save("feedback-form-state", { email: email.value, message: message.value })
    event.currentTarget.reset();
}
if (load("feedback-form-state")) {
    formEl.email.value = load("feedback-form-state").email;
    formEl.message.value = load("feedback-form-state").message;

} else { return }