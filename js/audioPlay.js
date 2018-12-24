var bgm = document.getElementById('bgmAudio');
var isBgmPlay = false;
//加载数据、点赞和点赞功能
$(document).ready(function(){
    document.addEventListener("WeixinJSBridgeReady", function () {
        stopAndPlayAllAudio(true);
    }, false);
})
// 音乐控制

function stopAndPlayAllAudio(isPlay){
    if(!isBgmPlay || isPlay){
        isBgmPlay = true;
        $('#musicing').css('display','block');
        $('#audioBtn').removeClass('audio-no');
        $('#audioBtn').addClass('rotate2d');
        bgm.play();
    }else{
        isBgmPlay = false;
        $('#musicing').css('display','none');
        $('#audioBtn').removeClass('rotate2d');
        $('#audioBtn').addClass('audio-no');
        bgm.pause();
    }
}