const li1 = document.querySelector('.shortcut .wrapper ul li:first-child')
const li2 = li1.nextElementSibling
function render() {
    const uname = localStorage.getItem('shp-uname')
    if(uname) {
        li1.innerHTML = `<a href="javascript:;"><i class="iconfont icon-icon-test16">${uname}</i></a>`
        li2.innerHTML = `<a href="javascript:;">退出登录</a>`
    } else {
        li1.innerHTML = `<a href="./login.html">请先登录</a>`
        li2.innerHTML = `<a href="./register.html">免费注册</a>`

    }
}
render()


li2.addEventListener('click', function() {
    localStorage.removeItem('shp-uname')
    render()
})