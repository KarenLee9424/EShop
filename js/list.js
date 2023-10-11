let list_data = [
    {
        src: './uploads/mobile01.jpg',
        title: 'OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞',
        d_price: '2399.00',
        o_price: '2599.00',
        sold: '70',
        remaining: '255'
    },
    {
        src: './uploads/mobile02.jpg',
        title: '荣耀80 1.6亿像素超清主摄 AI Vlog视频大师 全新Magic OS 7.0系统 5G手机',
        d_price: '1299.00',
        o_price: '1599.00',
        sold: '50',
        remaining: '144'
    },
    {
        src: './uploads/mobile03.jpg',
        title: 'Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB+128GB',
        d_price: '1149.00',
        o_price: '1349.00',
        sold: '45',
        remaining: '97'
    },
    {
        src: './uploads/mobile04.jpg',
        title: 'OPPO K10x 极光 8GB+128GB 67W超级闪充 5000mAh长续航 120Hz高帧屏 6400',
        d_price: '1299.00',
        o_price: '1599.00',
        sold: '60',
        remaining: '61'
    },
    {
        src: './uploads/mobile05.jpg',
        title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 4G手机',
        d_price: '1099.00',
        o_price: '1999.00',
        sold: '87',
        remaining: '29'
    },
    {
        src: './uploads/mobile01.jpg',
        title: 'OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞',
        d_price: '2399.00',
        o_price: '2599.00',
        sold: '70',
        remaining: '255'
    },
    {
        src: './uploads/mobile02.jpg',
        title: '荣耀80 1.6亿像素超清主摄 AI Vlog视频大师 全新Magic OS 7.0系统 5G手机',
        d_price: '1299.00',
        o_price: '1599.00',
        sold: '50',
        remaining: '144'
    },
    {
        src: './uploads/mobile03.jpg',
        title: 'Redmi Note 11 5G 天玑810 33W Pro快充 5000mAh大电池 6GB+128GB',
        d_price: '1149.00',
        o_price: '1349.00',
        sold: '45',
        remaining: '97'
    },
    {
        src: './uploads/mobile04.jpg',
        title: 'OPPO K10x 极光 8GB+128GB 67W超级闪充 5000mAh长续航 120Hz高帧屏 6400',
        d_price: '1299.00',
        o_price: '1599.00',
        sold: '60',
        remaining: '61'
    },
    {
        src: './uploads/mobile05.jpg',
        title: 'Apple苹果iPhone 6s Plus（A1699）32G 金色 4G手机',
        d_price: '1099.00',
        o_price: '1999.00',
        sold: '87',
        remaining: '29'
    },
    {
        src: './uploads/mobile01.jpg',
        title: 'OPPO K9x 8GB+128GB 银紫超梦 天玑810 5000mAh长续航 33W快充 90Hz电竞',
        d_price: '2399.00',
        o_price: '2599.00',
        sold: '70',
        remaining: '255'
    },
    {
        src: './uploads/mobile02.jpg',
        title: '荣耀80 1.6亿像素超清主摄 AI Vlog视频大师 全新Magic OS 7.0系统 5G手机',
        d_price: '1299.00',
        o_price: '1599.00',
        sold: '50',
        remaining: '144'
    }
]

const list_ul = document.querySelector('.list-container .list-bd ul')
for (let i = 0; i < list_data.length; i++) {
    const list_li = document.createElement('li')
    list_li.innerHTML = `
    <a href="./detail.html">
        <img src=${list_data[i].src} alt="">
        <h5 class="list-goods-title">${list_data[i].title}</h5>
    </a>
    <p class="list-goods-price"><em><span>RM</span>${list_data[i].d_price}</em> <del>${list_data[i].o_price_price}</del></p>
    <div class="list-goods-progress">
        已售<i><span class="sold_value">${list_data[i].sold}</span>%</i>
        <div class="bar">
            <div class="bar-in"></div>
        </div>
        剩余<em>${list_data[i].remaining}</em>件
    </div>
    <a href="./detail.html" class="list-goods-buy">立即抢购</a>
    `
    list_ul.appendChild(list_li)
}
