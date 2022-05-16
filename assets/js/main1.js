var images = ["assets/img/s1.png", "assets/img/s2.png","assets/img/s3.png","assets/img/s4.png","assets/img/s5.png","assets/img/1.png", "assets/img/2(2).jpg", "assets/img/2.png","assets/img/3.png","assets/img/4.png", "assets/img/5.png", "assets/img/6.png", "assets/img/7.png", "assets/img/8.png", ];
var i=0;
function slideShow() {
    document.getElementById("image").src=images[i];
    
    if(i < images.length-1) {
        i++;
    }
    else{
        i=0
    }
    setTimeout("slideShow()",2000);
}
window.onload = slideShow;
