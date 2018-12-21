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

function preLoadImg(materialList, callback) {
    let arr = materialList;
    let materialListDetail = [];
    let index = 0;
    let len = arr.length;
    for (let i = 0, len = arr.length; i < len; i++) {
        let newImage = new Image();
        newImage.crossOrigin = "anonymous";
        newImage.onload = () => {
            index++;
        }
        newImage.onerror = () => {
            index++;
        }
        newImage.src = arr[i];
    }
    let time = setInterval(() => {
        // var pro = index/len * 100 > 99 ? 99 : parseInt( index / len * 100 ) + '%';
        var pro = parseInt(index / len * 100);
        $('#loadingProgress .pregress-num').html(pro + '%')
        $('#loadingProgress .progress-bar').css('width', pro + '%')
        if (index == len) {
            clearInterval(time);
            console.log("ok");
            if (callback) {
                callback.call(window);
            }

            return;
        }
    }, 50);
}

// 初始化触碰，输出：pageY
function initTouch() {
    var startX, startY, endX, endY, X, Y;
    var playAnimate = playAnimateInterval();
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    pageY = scrollTop;
    lottie.goToAndStop(pageY / 0.8, false)
    window.onscroll = function() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //为了保证兼容性，这里取两个值，哪个有值取哪一个
        pageY = scrollTop;
        $('#pageY').html(pageY);
        playAnimate(pageY);
        lottie.goToAndStop(pageY / 0.8, false)
    }
}

function initText() {
    setTextAnimate($('.text-block'), 20,50);
}
/********************************执行****************************/

preLoadImg(materialList, function() {
    $('#loadingPage').hide();
    initAnimate();
    initTouch();
    initText();
    $('body').scrollTop(0);

});