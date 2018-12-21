// function (option){
    var intervalTime = null;
    var moveSpace = 30;
    // 每一帧的动画列表
    // 动画列表内容：[
    //     [{fun:functionName,parameter:[],callback:functionName}],
    //     [{fun:functionName,parameter:[],callback:functionName}],
    //     [{fun:functionName,parameter:[],callback:functionName}],
    // ]
    var frameList = [];
    // 页面滑动一定程度时定时执行的
    function playAnimateInterval(){
        var lastMoveY = 0;
        var nowMoveY = 0;
        return function(pageY){
            nowMoveY = pageY;
            if(nowMoveY - lastMoveY > moveSpace){
                var iChange = nowMoveY - lastMoveY > 0 ? 1 : -1;
                for(var i = lastMoveY/moveSpace ; i <= nowMoveY/moveSpace ; i++){
                    runFrameList(i);
                }
                lastMoveY = nowMoveY;
            }else if(nowMoveY - lastMoveY < - moveSpace){
                for(var i = lastMoveY/moveSpace ; i >= nowMoveY/moveSpace ; i--){
                    runFrameList(i);
                }
                lastMoveY = nowMoveY;
            }
        }
    }
    // 运行frameList栈内的东西
    function runFrameList(pageI){
        var playList = frameList[parseInt(pageI)];
        if(!playList)return;
        for(var i = 0 ; i < playList.length ; i++){
            playList[i].parameter ? playList[i].parameter.push(playList[i].callback) : '';
            playList[i].fun.apply(window,playList[i].parameter)
        }
    }
    // 把jqDom的文字动画添加到frameList里面
    function setTextAnimate(jqDom,startPage,keepTime) {
        var oneTextTime = 100;

        var textLength = jqDom.children('span').length;
        var allTime = oneTextTime * textLength;

        // 初始化frameList
        if (frameList.length < (startPage + 10 + textLength + keepTime)){
            for(var addI = frameList.length ; addI < (startPage + 10 + textLength + keepTime) ; addI++){
                frameList.push([]);
            }
        }

        for(var spanI = 0 ; spanI < textLength ; spanI++){
            var starSpanI = Math.floor(Math.random()*10);
            for(var i = 0 ; i <= 10 ; i++){
                frameList[startPage + i + starSpanI].push({
                    fun:oneTextAnimate,
                    parameter:[jqDom.children('span').eq(spanI),i],
                    callback:function(){},
                })
                frameList[startPage - i + starSpanI + keepTime +10].push({
                    fun:oneTextAnimate,
                    parameter:[jqDom.children('span').eq(spanI),i],
                    callback:function(){},
                })
            }
        }
    }
    // 一个文字执行的动画
    function oneTextAnimate(jqDom,animateI){
        for(var i = 0 ; i <= 10 ; i++){
            jqDom.removeClass('text-animate-' + i);
        }
        jqDom.addClass('text-animate-' + animateI);
    }

// }
    /********************************执行****************************/

