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

});