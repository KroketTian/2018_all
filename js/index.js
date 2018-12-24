var materialList = [
    'images/img_89.png',
    'images/img_0.png',
    'images/img_1.png',
    'images/img_2.png',
    'images/img_3.png',
    'images/img_4.png',
    'images/img_5.png',
    'images/img_6.png',
    'images/img_7.png',
    'images/img_8.png',
    'images/img_9.png',
    'images/img_10.png',
    'images/img_11.png',
    'images/img_12.png',
    'images/img_13.png',
    'images/img_14.png',
    'images/img_15.png',
    'images/img_16.png',
    'images/img_17.png',
    'images/img_18.png',
    'images/img_19.png',
    'images/img_20.png',
    'images/img_21.png',
    'images/img_22.png',
    'images/img_23.png',
    'images/img_24.png',
    'images/img_25.png',
    'images/img_26.png',
    'images/img_27.png',
    'images/img_28.png',
    'images/img_29.png',
    'images/img_30.png',
    'images/img_31.png',
    'images/img_32.png',
    'images/img_33.png',
    'images/img_34.png',
    'images/img_35.png',
    'images/img_36.png',
    'images/img_37.png',
    'images/img_38.png',
    'images/img_39.png',
    'images/img_40.png',
    'images/img_41.png',
    'images/img_42.png',
    'images/img_43.png',
    'images/img_44.png',
    'images/img_45.png',
    'images/img_46.png',
    'images/img_47.png',
    'images/img_48.png',
    'images/img_49.png',
    'images/img_50.png',
    'images/img_51.png',
    'images/img_52.png',
    'images/img_53.png',
    'images/img_54.png',
    'images/img_55.png',
    'images/img_56.png',
    'images/img_57.png',
    'images/img_58.png',
    'images/img_59.png',
    'images/img_60.png',
    'images/img_61.png',
    'images/img_62.png',
    'images/img_63.png',
    'images/img_64.png',
    'images/img_65.png',
    'images/img_66.png',
    'images/img_67.png',
    'images/img_68.png',
    'images/img_69.png',
    'images/img_70.png',
    'images/img_71.png',
    'images/img_72.png',
    'images/img_73.png',
    'images/img_74.png',
    'images/img_75.png',
    'images/img_76.png',
    'images/img_77.png',
    'images/img_78.png',
    'images/img_79.png',
    'images/img_80.png',
    'images/img_81.png',
    'images/img_82.png',
    'images/img_83.png',
    'images/img_84.png',
    'images/img_85.png',
    'images/img_86.png',
    'images/img_87.png',
    'images/img_88.png',
]
var pageY = 0;
var nowShowPage = 0;
var moveSpace =20;
var frameSpave = 25;
var ffText = floatFont({moveSpace: moveSpace});

//加载图片结束后要执行的函数
//现在有初始化canvas
function initAnimate() {
    lottie.loadAnimation({
        container: $('#bm')[0], // the dom element that will contain the animation
        renderer: 'html',
        loop: false,
        autoplay: false,
        path: 'data.json' // the path to the animation json
    });
}

// 初始化触碰，输出：pageY
function initTouch() {
    var startX, startY, endX, endY, X, Y;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    pageY = scrollTop;
    lottie.goToAndStop( pageY / (moveSpace * frameSpave / 1000), false)
    window.onscroll = function() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //为了保证兼容性，这里取两个值，哪个有值取哪一个
        $('#pageY').html(scrollTop);
        // 如果页面滚动速度到达要滚到下一帧上
        // if(scrollTop - nowShowPage <= -moveSpace || scrollTop - nowShowPage >= moveSpace){
            nowShowPage = scrollTop;
            pageY = scrollTop;
            ffText.playAnimateInterval(pageY);
            lottie.goToAndStop( pageY / (moveSpace * frameSpave / 1000), false)
        // }

    }
}

function initText() {
    ffText.setTextAnimate($('.wang-text'), 50,100);
    ffText.setTextAnimate($('.miao-text-1'), 120,140);
    ffText.setTextAnimate($('.miao-text-2'), 147,193);
    ffText.setTextAnimate($('.fu-text-1'), 406,479);
    ffText.setTextAnimate($('.fu-text-2'), 493,503);
    ffText.setTextAnimate($('.yu-text-1'), 669,691);
    ffText.setTextAnimate($('.yu-text-2'), 743,778);
    ffText.setTextAnimate($('.gui-text-1'), 944,1052);
    ffText.setTextAnimate($('.gui-text-2'), 1151,1227);
    ffText.setTextAnimate($('.he-text'), 1311,1341);
    ffText.setTextAnimate($('.shen-text'), 1515,1559);
    ffText.setTextAnimate($('.yi-text'), 1655,1689);
    ffText.setTextAnimate($('.long-text'), 1749,1786);
    ffText.setTextAnimate($('.jiu-text-1'), 1878,1888);
    ffText.setTextAnimate($('.jiu-text-2'), 1964,2025);
    ffText.setTextAnimate($('.xiao-text-1'), 2025,2035);
    ffText.setTextAnimate($('.xiao-text-2'), 2045,2081);
    ffText.setTextAnimate($('.jian-text-1'), 2259,2291);
    ffText.setTextAnimate($('.jian-text-2'), 2312,2350);
    ffText.setTextAnimate($('.jian-text-3'), 2379,2408);
    ffText.setTextAnimate($('.tie-text'), 2444,2512);
    ffText.setTextAnimate($('.yin-text'), 2600,2723);
    ffText.setTextAnimate($('.end-text'), 2803,3000);
}
// 操作的事件
$('#starPageBtn').on('click',function(){
    $('#loadingPage').hide();
    stopAndPlayAllAudio(true);
})
/********************************执行****************************/

preLoadImg(materialList, function() {
    $('body').scrollTop(0);
    $('#loadingProgress').hide();
    $('#starPageBtn').show();
    initAnimate();
    initTouch();
    initText();

});