import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config'
import {validate} from "./helpers/validate";
import {resetError, showFormError} from "./views/form";
import {login} from "./services/auth.service";


const {
    form,
    inputEmail,
    inputPassword
} = UI

const inputs = [inputEmail, inputPassword]

//Events
form.addEventListener('submit', e => {
    e.preventDefault()
    onSubmit()
})

inputs.forEach(i => i.addEventListener('focus', (el) => resetError(el)))


//Handlers
async function onSubmit() {

    const formValid = inputs.every(el => {
        const isValid = validate(el)
        if (!isValid) {
            showFormError(el)
        }
        return isValid
    })

    console.log(formValid)

    if (!formValid) return

    try {
        await login(inputEmail.value, inputPassword.value)
    } catch (err) {
        //
    }

}