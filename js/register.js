const getCode = document.querySelector('.code')
let flag = true
getCode.addEventListener('click', function() {
    if(flag) {
    flag = false
    let i = 5
    getCode.innerHTML = `0${i}秒后重新获取`
    let timerId = setInterval(function() {
        i--
        getCode.innerHTML = `0${i}秒后重新获取`
        if(i === 0) {
        clearInterval(timerId)
        getCode.innerHTML = `重新获取`
        flag = true
        }
    }, 1000)
    }
})


const username = document.querySelector('[name = username]')
username.addEventListener('change', verifyName)
function verifyName() {
    const reg = /^[a-zA-Z0-9-_]{6,10}$/
    const span = username.nextElementSibling

    if(!reg.test(username.value)) {
    span.innerHTML = '请输入6-10位字母或数字'
    return false
    }
    span.innerHTML = ''
    return true
}

const phone = document.querySelector('[name = phone]')
phone.addEventListener('change', verifyPhone)
function verifyPhone() {
    const reg = /^(60){1}1\d{8,9}$/
    const span = phone.nextElementSibling

    if(!reg.test(phone.value)) {
    span.innerHTML = '以601开头，请输入8-9位手机号码'
    return false
    }
    span.innerHTML = ''
    return true
}

const code = document.querySelector('[name = code]')
code.addEventListener('change', verifyCode)
function verifyCode() {
    const reg = /^\d{6}$/
    const span = code.nextElementSibling

    if(!reg.test(code.value)) {
    span.innerHTML = '请输入6位验证码'
    return false
    }
    span.innerHTML = ''
    return true
}

const password = document.querySelector('[name = password]')
password.addEventListener('change', verifyPwd)
function verifyPwd() {
    const reg = /^[a-zA-Z0-9-_]{6,20}$/
    const span = password.nextElementSibling

    if(!reg.test(password.value)) {
    span.innerHTML = '请输入6-20位密码 (支持字母大小写，数字以及下划线)'
    return false
    }
    span.innerHTML = ''
    return true
}

const confirm = document.querySelector('[name = confirm]')
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {
    const span = password.nextElementSibling

    if(confirm.value !== password.value) {
    span.innerHTML = '密码输入不一致'
    return false
    }
    span.innerHTML = ''
    return true
}

const agree = document.querySelector('.icon-icon-test19')
agree.addEventListener('click', function() {
    this.classList.toggle('icon-icon-test21')
})


const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
    if(!agree.classList.contains('icon-icon-test21')) {
    alert('请勾选同意协议')
    e.preventDefault()
    }

    if(!verifyName()) e.preventDefault()
    if(!verifyPhone()) e.preventDefault()
    if(!verifyCode()) e.preventDefault()
    if(!verifyPwd()) e.preventDefault()
    if(!verifyConfirm()) e.preventDefault()
})