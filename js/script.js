// ========= back to top operation ============= 

$(function(){
    $(".b_t").click(function(){
        $("body,html").animate({scrollTop:0},1500);
    })

    // ------------ back to top show hide operation ------------ 

    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll)
        if(scroll > 200){
            $(".b_t").fadeIn(200)
        }else{
            $(".b_t").fadeOut(200) 
        }
        
        // -------------------- navbar fixed operation ------------- 
        if(scroll > 200){
            $("nav").addClass("fixed")
        }else{
            $("nav").removeClass("fixed")
        }

    })
    // ----------------- preloader operation ---------------------- 

    $(window).on('load',function(){
        $("#preloader").delay(1000).fadeOut(500)
    })


    // ============== toggle menu operation ================= 

    $(function(){
        $("#toggleMenu").click(function(){
            $(".nav_menu").toggleClass("toggle");
        })
    })

    // ================= venubox operation ===================== 

    new VenoBox({
        selector: '.my-video-links',
    });

});