window.onload = function () {
    //绑定元素的ID
    var bodyDH = document.getElementById("Calculation");
    document.onscroll = function () {
        // 获取当前下滑的像素
        var tempfive = document.documentElement.scrollTop;
        // 获取当前视口宽度
        var shikoufive = document.documentElement.clientWidth;
        // 获取计算框到顶部的距离
        var CheckboxOffset = $("#scllTo").offset().top;
        
        // 切换样式
        if (shikoufive > 960) {
            if (tempfive >= CheckboxOffset) {
                bodyDH.className = "allcomputeFive";
            } else {
                bodyDH.className = "allcompute";
            }
        } else {
            if (tempfive >= CheckboxOffset) {
                bodyDH.className = "allcomputeFive";
            } else {
                bodyDH.className = "allcompute";
            }
        }

    }
}

