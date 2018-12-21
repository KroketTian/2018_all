(function preLoadImg(){
    let arr = materialList;
    let materialListDetail = [];
    let index = 0;
    let len = arr.length;
    for(let i = 0 , len = arr.length ; i < len ; i++){
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
      var pro = parseInt( index / len * 100 );
      $('#loadingProgress .pregress-num').html( pro + '%')
      $('#loadingProgress .progress-bar').css( 'width' , pro + '%')
      if(index == len){
        clearInterval(time);
        console.log("ok");
        // $('#loadingIcon').hide();
        // $('#loadingBtn').show();
        var time2 = setTimeout(function(){
            loadEnd();
            clearTimeout(time2);
            if(callback){
                callback.call(window);
            }
        },2000)
        
        return;
      }
    }, 50);
    return preload = {

    }
})()

//闭包限定命名空间
(function ($) {
    $.fn.extend({
        "highLight": function (options) {
            //检测用户传进来的参数是否合法
            if (!isValid(options))
                return this;
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            return this.each(function () {  //这里的this 就是 jQuery对象。这里return 为了支持链式调用
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.foreground
                });
                //格式化高亮文本
                var markup = $this.html();
                markup = $.fn.highLight.format(markup);
                $this.html(markup);
            });

        }
        'preloadImg': function (options){
            //检测用户传进来的参数是否合法
            if (!isValid(options))
                return this;
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数

    		let arr = opts.imgList;
    		let materialListDetail = [];
    		let index = 0;
    		let len = arr.length;

    		for(let i = 0 , len = arr.length ; i < len ; i++){
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
    		  var pro = parseInt( index / len * 100 );
    		  $('#loadingProgress .pregress-num').html( pro + '%')
    		  $('#loadingProgress .progress-bar').css( 'width' , pro + '%')
    		  if(index == len){
    		    clearInterval(time);
    		    console.log("ok");
    		    // $('#loadingIcon').hide();
    		    // $('#loadingBtn').show();
    		    var time2 = setTimeout(function(){
    		        loadEnd();
    		        clearTimeout(time2);
    		        if(callback){
    		            callback.call(window);
    		        }
    		    },2000)
    		    
    		    return;
    		  }
    		}, 50);
        }
    });
    //默认参数
    var defaluts = {
        loadingProgressDom : null,
        loadingProgressBarDom : null,
        imgList : [], 
    };
    //公共的格式化 方法. 默认是加粗，用户可以通过覆盖该方法达到不同的格式化效果。
    $.fn.highLight.format = function (str) {
        return "<strong>" + str + "</strong>";
    }
    //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
})(window.jQuery);