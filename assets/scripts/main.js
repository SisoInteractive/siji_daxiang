// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var app = {

    loading:function(){
        var img_SrcArr = [
            'jiaochaxian.png',
            'quan-2.png',
            'banquan.png',
            'quan-1.png',
            'logo.png',
            'hengtiao.png',
            'xiang.png',
            'zi.png',
            'zi-02.png',
            'p2/di.jpg',
            'p2/zhuzi.png',
            'p2/xiang.png',
            'p2/zi.png',
            'p2/dian.png',
            'p2/fu.png',
            'p2/ji.png',
            'p2/hui.png',
            'p2/zi-01.png'
        ];
        var imgPath = "assets/images/";
        var imgLength = img_SrcArr.length;
        var loadLength = 0;

        for( var i = 0; i< imgLength; i++ ){
            var img = new Image();
            img.src = imgPath + img_SrcArr[i];
            img.onload = function(){
                ++loadLength
                console.log(loadLength)

                if(loadLength == imgLength ){
                    setTimeout(function(){
                        $('.loading_box').hide();
                        $('.swiper-container').fadeIn();
                        app.create();
                    },200)
                }

            };




        }
    },
    create: function (){
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            parallax : true,
            speed:300,
            // init
            onInit: function () {
            },


            onTransitionStart: function (swiper) {
                //delete animation-delay
                $('.swiper-slide').eq(swiper.activeIndex)
                    .siblings('.swiper-slide').addClass('resetAnimation');
                setTimeout(function () {
                    $('.swiper-slide').removeClass('resetAnimation');
                }, 20);
            },

            onTransitionEnd: function (swiper) {

                if(app.mySwiper.isEnd){
                    $('.arrow').hide();
                }else{
                    $('.arrow').show();
                }
            }
        });

        //  first time play BGM
        var initSound = function () {
            //  delay play
            $('#audio')[0].play();
            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);
    },

    start: function (){
        this.loading();
    }
};

$(function (){
    // init app
    app.start();
    console.log('app started success...');
});