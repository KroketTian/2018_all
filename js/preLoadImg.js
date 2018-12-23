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