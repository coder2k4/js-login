/**
 * Регулярные выражения для проверки input элементов формы.
 * @type {{password: RegExp, email: RegExp}}
 */
const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
}


/**
 * Функция валидации инпутов формы, через регулярные выражения regExpDic
 * @param {HTMLInputElement} el
 * @returns {boolean} - Возвращает true если инпут валидный или у него нет атрибута data-required.
 */
export function validate(el) {
    const requiredValidator = el.dataset.required

    if(!regExpDic[requiredValidator]) return true

    return regExpDic[requiredValidator].test(el.value)
}