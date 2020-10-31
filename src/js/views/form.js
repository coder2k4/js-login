/**
 * Функция inputError подготавливает html строку с бутсрап классом invalid-feedback
 * @param {string} msg
 * @return {string} html bootstrap feedback string
 */
function inputError(msg) {
    return `<div class="invalid-feedback">${msg}</div>`
}


/**
 * Функция showFormError добавлет к form-group инпутов ошибку.
 * @param {HTMLInputElement} el
 */
export function showFormError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'Не правильный ввод!'
    const templateError = inputError(msg)
    el.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeend', templateError)
}

/**
 * Функция resetError сбрасывает ошибку.
 * Удаляет класс is-invalid и дом ноду div class="invalid-feedback"
 * @param {HTMLInputElement} el
 */
export function resetError(el){
    const parent = el.parentElement;
    const $err = parent.querySelector('.invalid-feedback')
    if(!$err) return

    parent.removeChild($err)
    el.classList.remove('is-invalid');
}