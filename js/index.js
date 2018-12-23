var materialList = [
    'images/img_0.png',
    'images/img_1.png',
    'images/img_2.png',
    'images/img_3.png',
    'images/img_4.png',
    'images/img_5.png',
    'images/img_6.png',
]
var pageY = 0;
var nowShowPage = 0;
var moveSpace = 20;
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
    ffText.setTextAnimate($('.text-block'), 20,50);
}
// 操作的事件
$('#starPageBtn').on('click',function(){
    $('#loadingPage').hide();
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