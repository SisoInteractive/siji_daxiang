// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var app = {

    loading:function(){
        var img_SrcArr = [
            "loading.gif", "p11/p0_01.png", "p11/p0_02.png", "jiaochaxian.png", "quan-2.png", "banquan.png", "quan-1.png", "logo.png", "hengtiao.png", "xiang.png", "p2_07.png", "zi.png", "zi-02.png", "p2/di.jpg", "p2/zi.png", "p2/dian.png", "p2/fu.png", "p2/ji.png", "p2/hui.png", "p2/zi-01.png", "p5/p5-bg.jpg", "p5/zi.png", "p5/xingxing.png", "p5/daqian.png", "p5/daqian.png", "p5/quan3.png", "p5/shou.png", "p5/yi.png", "p5/man1.png", "p5/man2.png", "p7/p5_03.png", "p7/p5_02_01.png", "p7/p5_02_02.png", "p7/p5_02_03.png", "p7/p5_02_04.png", "p7/p5_04.jpg", "p7/p5_05.jpg", "p7/p5_06.jpg", "p2/zhuzi.png", "p5/daqian.png", "p5/daqian.png", "p5/daqian.png", "p8/p6_03.jpg", "p8/p6_04.jpg", "p8/p6_05.jpg", "p8/p6_01_01.png", "p8/p6_01_02.png", "p8/p6_01_03.png", "p8/p6_02_01.png", "p8/p6_02_02.png",
            "p8/p6_02_03.png", "p2/zhuzi.png", "p4/xiang1.png", "p4/xiang2.png", "p4/zi.png", "p4/p7_01_02.png",
            "p4/p7_01_05.png", "p4/p7_01_07.png", "p4/zi1.png", "p2/zhuzi.png", "p9/p7-1_01_01.png", "p9/p7-1_01_02.png",
            "p9/p7-1_01_03.png", "p9/p7-1_01_04.png", "p9/p7-1_03.png", "p9/p7-1_02_01.png", "p9/p7-1_02_02.png",
            "p9/p7-1_02_03.png", "p9/p7-1_02_04.png", "p9/p7-1_02_05.png", "p9/p7-1_02_06.png", "p9/p7-1_02_07.png",
            "p9/p7-1_02_09.png", "p9/p7-1_02_08.png", "p9/p7-1_04_01.png", "p9/p7-1_04_02.png", "p9/p7-1_04_03.png",
            "p9/p7-1_04_04.png", "p2/zhuzi.png", "p6/bizi1.png", "p6/bizi2.png", "p6/bizi3.png", "p6/bizi4.png",
            "p6/bizi5.png", "p6/zi01.png", "p6/zi02.png", "p6/p8_02_02.png", "p6/zi03.png", "p6/zi04.png", "p6/zi05.png",
            "p6/p8_02_03.png", "p6/gu.png", "p6/hai.png", "p6/you.png", "p2/zhuzi.png", "p3/hua1.png", "p3/jiantou.png",
            "p3/piaofu1.png", "p3/piaofu2.png", "p3/piaofu3.png", "p3/piaofu4.png", "p3/piaofu7.png", "p3/piaofu8.png",
            "p3/xiang.png", "p3/piaofu5.png", "p3/piaofu6.png", "p3/zi.png", "p3/gai.png", "p3/xie.png", "p3/shang.png",
            "p3/jie.png", "p2/zhuzi.png", "p10/kuang.png", "p10/zi1.png", "p10/zi2.png", "p10/zi3.png", "p10/zi4.png"
        ];
        var imgPath = "assets/images/";
        var imgLength = img_SrcArr.length;
        var loadLength = 0;//0
        var isLoaded = false;
        for( var i = 0; i< imgLength; i++ ){
            var img = new Image();
            img.src = imgPath + img_SrcArr[i];
            img.onload = function(){
                ++loadLength
                console.log(loadLength/imgLength)
                if( loadLength/imgLength > 0.9 && isLoaded == false  ){
                    isLoaded = true;
                    setTimeout(function(){
                        $('.loading_box').hide();
                        $('.swiper-container').show();
                        app.create();
                    },1400)
                }

            };




        }
    },
    create: function (){
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            speed:600,
            // init
            onInit: function () {
                setTimeout(function(){
                    $('#audio2')[0].play();
                },1600);
                setTimeout(function(){
                    $('#audio')[0].play();
                },2600);

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
                if(swiper.activeIndex == 10){
                    $('.arrow').hide();
                }else{
                    $('.arrow').show();
                }
            }
        });

        //click mp3 box
        $('.mp3-box').click(function(){
            var audio = document.getElementById('audio');
            $(this).toggleClass('active');
            if(!audio.paused){
                $('#audio')[0].pause();
            }else{
                $('#audio')[0].play();
            }
        })

        //first time play BGM
        //var initSound = function () {
        //    // delay play
        //    $('#audio')[0].play();
        //    document.removeEventListener('touchstart', initSound, false);
        //};
        //document.addEventListener('touchstart', initSound, false);

        //var imgsrc = '';
        //$('img').each(function(){
        //    imgsrc += '"' + this.src.replace('http://localhost:63342/for_pc/assets/images/', '') + '", ';
        //})
        //console.log(imgsrc)

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