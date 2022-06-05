window.onload = function () {
    //绑定元素的ID
    var bodyDH = document.getElementById("Calculation");
    var bodyDH2 = document.getElementById("Tips");
    document.onscroll = function () {
        // 获取当前下滑的像素
        var tempfive = document.documentElement.scrollTop;
        // 获取当前视口宽度
        var shikoufive = document.documentElement.clientWidth;
        // var xiahuapxfive = 120;
        //根据视口宽度调整下滑
        if (shikoufive > 960) {
            // PC
            xiahuapxfive = 130;
            // xiahuapxtofive = 120;
        } else {
            // PE
            xiahuapxfive = 255;
            // xiahuapxtofive = 40;
            //下滑判定
        }
        // 切换样式
        if (shikoufive > 960) {
            if (tempfive >= xiahuapxfive) {
                bodyDH.className = "allcomputeFive";
                bodyDH2.className = "tipsFive";
            } else {
                bodyDH.className = "allcompute";
                bodyDH2.className = "tips";
            }
        } else {
            if (tempfive >= xiahuapxfive) {
                bodyDH.className = "allcomputeFive";
            } else {
                bodyDH.className = "allcompute";
                bodyDH2.className = "tips";
            }
        }

    }
}

