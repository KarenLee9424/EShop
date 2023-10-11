$(function() {
    // 1. 全选 全不选功能模块e
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    
    // 2. 如果小复选框被选中的个数等于选中数量，就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function() {
        // console.log($(".j-checkbox:checked").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    });

    // 3. 增减商品数量模块：首先声明一个变量，当我们点击+号，就让这个值++，然后赋值给文本框。
    $(".increment").click(function() {
        let n = $(this).siblings(".itxt").val();
        console.log(n);
        n++;
        $(this).siblings(".itxt").val(n);
        // 3. 计算小计模块:根据文本框的值乘以当前商品的价格就是商品的小计
        let p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(2);
        console.log(p);
        let price = (p * n).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("RM" + price);
        getSum();
    });
    $(".decrement").click(function() {
        let n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        // console.log(n);
        n--;
        $(this).siblings(".itxt").val(n);
        let p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(2);
        console.log(p);
        $(this).parents(".p-num").siblings(".p-sum").html("RM" + (p * n).toFixed(2));
        getSum();
    });

    //  4. 用户修改文本框的值计算小计模块  
    $(".itxt").change(function() { 
        let n = $(this).val();
        let p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(2);
        $(this).parents(".p-num").siblings(".p-sum").html("RM" + (p * n).toFixed(2));
        getSum();
    });

    // 5. 计算总计和总额模块
    getSum();

    function getSum() {
        let count = 0; // 计算总件数 
        let money = 0; // 计算总价钱
        $(".itxt").each(function(i, ele) {
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele) {
            money += parseFloat($(ele).text().substr(2));
        });
        $(".price-sum em").text("RM" + money.toFixed(2));
    }

    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // (2) 删除选中的商品
    $(".remove-batch").click(function() {
        // 删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // (3) 清空购物车 删除全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
})