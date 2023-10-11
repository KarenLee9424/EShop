$(function() {
    $(".tab-list li").click(function() {
        $(this).addClass("current").siblings().removeClass("current")
        let index = $(this).index()
        console.log(index);
        $(".classify .tab").eq(index).show().siblings().hide()
    })
})


let aside_tab_data = [
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    },
    {
        src: './uploads/aside_img.jpg',
        title: '防爆膜 Apple iPhone 6s（A1700）64G玫瑰金色 4G手机',
        price: '19'
    }
]

const aside_tab_ul = document.querySelector('.tab-con ul')
for (let i = 0; i < aside_tab_data.length; i++) {
    const aside_tab_li = document.createElement('li')
    aside_tab_li.innerHTML = `
        <img src=${aside_tab_data[i].src} alt="">
        <h5>${aside_tab_data[i].title}</h5>
        <div class="aside-price"><i>RM</i>${aside_tab_data[i].price}</div>
        <a href="#" class="as-addcar">加入购物车</a>
    `
    aside_tab_ul.appendChild(aside_tab_li)
}


$(function() {
    $(".detail-tab-list li").click(function() {
        $(this).addClass("current").siblings().removeClass("current")
        let index = $(this).index()
        console.log(index);
        $(".detail-tab-con .item").eq(index).show().siblings().hide()
    })
})


// 放大镜
const small = document.querySelector('.list-item')
const middle = document.querySelector('.prev-img')
const large = document.querySelector('.large')

// 事件委托
small.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'IMG') {
    //   console.log(111)
        console.log(e.target.src)
        // 让中等盒子里面的图片，src 更换为   小图片src
        middle.querySelector('img').src = e.target.src
        // 大盒子更换背景图片
        large.style.backgroundImage = `url(${e.target.src})`
    }
})

// 鼠标经过中等盒子， 显示隐藏 大盒子
middle.addEventListener('mouseenter', show)
middle.addEventListener('mouseleave', hide)
let timeId = null
// 显示函数 显示大盒子
function show() {
// 先清除定时器
    clearTimeout(timeId)
    large.style.display = 'block'
}
// 隐藏函数 隐藏大盒子
function hide() {
    timeId = setTimeout(function () {
        large.style.display = 'none'
    }, 200)
}


// 鼠标经过大盒子， 显示隐藏 大盒子
large.addEventListener('mouseenter', show)
large.addEventListener('mouseleave', hide)


// 鼠标经过中等盒子，显示隐藏 黑色遮罩层
const layer = document.querySelector('.layer')
middle.addEventListener('mouseenter', function () {
  layer.style.display = 'block'
})
middle.addEventListener('mouseleave', function () {
  layer.style.display = 'none'
})


// 移动黑色遮罩盒子
middle.addEventListener('mousemove', function (e) {
    // console.log(11)
    // 鼠标在middle 盒子里面的坐标 = 鼠标在页面中的坐标 - middle 中等盒子的坐标
    // console.log(e.pageX)鼠标在页面中的坐标
    // console.log(middle.getBoundingClientRect().left)
    let x = e.pageX - middle.getBoundingClientRect().left
    let y = e.pageY - middle.getBoundingClientRect().top - document.documentElement.scrollTop
    // console.log(x, y)
    // 黑色遮罩移动 在 middle 盒子内 限定移动的距离
    if (x >= 0 && x <= 400 && y >= 0 && y <= 400) {
      // 声明2个变量 黑色盒子移动的 mx my变量 
      let mx = 0, my = 0
      if (x < 100) mx = 0
      if (x >= 100 && x <= 300) mx = x - 100
      if (x > 300) mx = 200

      if (y < 100) my = 0
      if (y >= 100 && y <= 300) my = y - 100
      if (y > 300) my = 200

      layer.style.left = mx + 'px'
      layer.style.top = my + 'px'
      // 大盒子的背景图片要跟随 中等盒子移动  存在的关系是 2倍   
      large.style.backgroundPositionX = -2 * mx + 'px'
      large.style.backgroundPositionY = -2 * my + 'px'
    }
  })


  


