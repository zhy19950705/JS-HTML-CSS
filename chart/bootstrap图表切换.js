// tab页面变换的时候，调整图表宽度
$('.grid_tab').on('shown.bs.tab',function(){
    let target=$(this).attr('href');
    let controls=$(target).find('.tab-char');
    for(let i=0;i<controls.length;i++){
        $(controls[i]).highcharts().reflow()
    }
})

// 窗口大小变化的时候，调整图表宽度
$(window).resize(function(){
    let controls=$(document).find('div.tab-char');
    for(let i=0;i<controls.length;i++){
        $(controls[i].highcharts().reflow())
    }
})


// 用Jquery动态遍历出Highcharts对象，然后调用它的reflow()方法进行更新