window.onload = function () {
    //绑定元素的ID
    var bodyDH = document.getElementById("Calculation");
    var bodyDH2 = document.getElementById("Tips");
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
                bodyDH2.className = "tipsFive";
            } else {
                bodyDH.className = "allcompute";
                bodyDH2.className = "tips";
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

