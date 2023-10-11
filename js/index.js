// 1. Banner模块
const slider_data = [
    { url: './uploads/b01.jpg', title: '初秋来袭，与美肌不期而遇'},
    { url: './uploads/b02.jpg', title: '净热二合一，格调生活'},
    { url: './uploads/b03.jpg', title: '秋季护肤秘籍'},
    { url: './uploads/b04.jpg', title: '智能电饭锅'},
    { url: './uploads/b05.jpg', title: '高效净化，智能家电'},
  ]

const img = document.querySelector('.banner .wrapper img')

const next = document.querySelector('.banner .toggle .next')
let i = 0
next.addEventListener('click', function () {
    // console.log(11)
    i++
    i = i >= slider_data.length ? 0 : i
    toggle()
})

const prev = document.querySelector('.prev')
prev.addEventListener('click', function () {
// console.log(11)
    i--
    i = i < 0 ? slider_data.length - 1 : i
    toggle()
})

function toggle() {
    img.src = slider_data[i].url
    // 更换小圆点   
    document.querySelector('.slider-indicator .current').classList.remove('current')
    document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('current')
}


// banner自动播放模块
let timerId = setInterval(function () {
    next.click()
}, 1500)

const slider = document.querySelector('.banner .wrapper')
// 鼠标经过img，停止定时器
slider.addEventListener('mouseenter', function () {
    // 停止定时器
    clearInterval(timerId)
})

// 鼠标离开slider，开启定时器
slider.addEventListener('mouseleave', function () {
    // 停止定时器
    if (timerId) clearInterval(timerId)
    // 开启定时器
    timerId = setInterval(function () {
    // 利用js自动调用点击事件  click()  一定加小括号调用函数
        next.click()
    }, 1500)
})

// 2. Tab栏切换
$(function() {
    $(".aside li").mouseenter(function() {
        $(this).addClass("current").siblings().removeClass("current")
        let index = $(this).index()
        // console.log(index);
        $(".tab_con").show()
        // $(".tab_con .title").show()
        $(".tab_con .item").eq(index).show().siblings().hide()
    })
})

$(function() {
    $(".tab_con").mouseleave(function() {
        $(".aside ul .current").removeClass("current")
        $(".tab_con item").hide()
        $(".tab_con").hide()
    })
})

// 3. 新鲜好物区
let goods_data = [
    {
        src: './uploads/baby01.png',
        title: '90%白鸭绒，儿童棒球领轻薄羽绒服73-140cm',
        g_price: '139.00'
    },
    {
        src: './uploads/baby02.png',
        title: '冬季不怕冷，婴童加厚保暖爬服',
        g_price: '129.00'
    },
    {
        src: './uploads/baby03.png',
        title: '男女同款情侣立体飞织爆米花运动鞋',
        g_price: '208.00'
    },
    {
        src: './uploads/baby04.png',
        title: '复古绞花，儿童美丽奴羊毛混纺毛衣',
        g_price: '219.00'
    }
]

const goods_ul = document.querySelector('.goods .bd ul')
for (let i = 0; i < goods_data.length; i++) {
    const goods_li = document.createElement('li')
    goods_li.innerHTML = `
        <a href="#">
            <img src=${goods_data[i].src} alt="">
            <h3 class="ellipsis">${goods_data[i].title}</h3>
            <div class="price">RM<span>${goods_data[i].g_price}</span></div>
            <b>新品</b>
        </a>
    `
    goods_ul.appendChild(goods_li)
}


// 4. 美食区域
let fresh_data = [
    {
        src: './uploads/food01.jpg',
        title: '免浆黑鱼片，酸菜鱼350g',
        f_info: '酸中带辣，开胃爽口酸菜鱼',
        f_price: '15.80'
    },
    {
        src: './uploads/food02.png',
        title: '加热速食，手工包制早餐包',
        f_info: '可口多汁，快捷早餐佳选',
        f_price: '26.80'
    },
    {
        src: './uploads/food03.jpg',
        title: '加热即食，甘蔗慢熬红糖馒头',
        f_info: '层层分明，松软可口',
        f_price: '19.90'
    },
    {
        src: './uploads/food04.jpg',
        title: '双味千层，美味随时享，手抓饼烤肉组合',
        f_info: '有饼有肉，喷香美味随时享',
        f_price: '18.80'
    },
    {
        src: './uploads/food05.jpg',
        title: '即食野生小海鲜',
        f_info: '每日现做，弹滑鲜香',
        f_price: '9.90'
    },
    {
        src: './uploads/food06.png',
        title: '可以喝的水果面膜韩国蜂蜜柚子茶560克',
        f_info: '维C满满，营养丰富',
        f_price: '26.80'
    },
    {
        src: './uploads/food07.jpg',
        title: '1小时鲜奶粉新西兰纽仕兰全脂鲜奶粉1kg',
        f_info: '能冲出奶皮，冷水可冲开',
        f_price: '35.00'
    },
    {
        src: './uploads/food08.jpg',
        title: '渔公码头 鲜食入味',
        f_info: '即食海参 辽参刺参',
        f_price: '299.00'
    }
]

const fresh_ul = document.querySelector('.fresh .bd .right ul')
for (let i = 0; i < fresh_data.length; i++) {
    const fresh_li = document.createElement('li')
    fresh_li.innerHTML = `
        <a href="#">
            <img src=${fresh_data[i].src} alt="">
            <h3>${fresh_data[i].title}</h3>
            <p class="type ellipsis">${fresh_data[i].f_info}</p>
            <div class="price">RM<span>${fresh_data[i].f_price}</span></div>
            <div class="extra">
                <a href="#">
                    <span>找相似</span>
                    <span>发现更多宝贝 &gt;</span>
                </a>
            </div>
        </a>
    `
    fresh_ul.appendChild(fresh_li)
}


// // 5. 电梯导航
// (function () {
//     // 获取元素
//     const entry = document.querySelector('.goods')
//     const elevator = document.querySelector('.fixedtool')
//     window.addEventListener('scroll', function () {
//       const n = document.documentElement.scrollTop
//       elevator.style.opacity = n >= entry.offsetTop ? 1 : 0
//     })

//     // 点击返回页面顶部
//     const backTop = document.querySelector('#backTop')
//     backTop.addEventListener('click', function () {
//       window.scrollTo(0, 0)
//     })
//   })();


// // 点击电梯导航
// (function() {
//     const list = document.querySelector('.fixedtool .eleList')
//     list.addEventListener('click', function(e) {
//         if(e.target.tagName === 'A' && e.target.dataset.name) {
//             const old = document.querySelector('.eleList .current')
//             if (old) old.classList.remove('current')
//             e.target.classList.add('current')
//             // console.log(e.target.dataset.name)
//             const top = document.querySelector(`.${e.target.dataset.name}`).offsetTop
//             console.log(top)
//             document.documentElement.scrollTop = top
//         }
//     })
// })();











