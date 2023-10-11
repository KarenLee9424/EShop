const tabNav = document.querySelector('.tab-nav')
const pane = document.querySelectorAll('.tab-pane')
tabNav.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
    tabNav.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    }

    for(let i = 0; i < pane.length; i++) {
    pane[i].style.display = 'none'
    }

    pane[e.target.dataset.id].style.display = 'block'
})


const form = document.querySelector('form')
const agree = document.querySelector('[name = agree]')
const username = document.querySelector('[name = username]')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if(!agree.checked) {
    return alert('请勾选协议')
    }

localStorage.setItem('shp-uname', username.value)
location.href = './index.html'

})