/*global $, alert, console*/

$(document).ready(function(){
	
	//add active class to links
	$('.nav-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	//smooth scroll
	$(".n-home").click(function(){
		$("html, body").animate({
			scrollTop: $("#home").offset().top
		}, 1000);
	});
	
	$(".n-about").click(function(){
		$("html, body").animate({
			scrollTop: $("#about").offset().top
		}, 1000);
	});
	
	$(".n-service").click(function(){
		$("html, body").animate({
			scrollTop: $("#service").offset().top
		}, 1000);
	});
	
	$(".n-portoflio").click(function(){
		$("html, body").animate({
			scrollTop: $("#portoflio").offset().top
		}, 1000);
	});
	
	$(".n-team").click(function(){
		$("html, body").animate({
			scrollTop: $("#h-team").offset().top
		}, 1000);
	});
	
	$(".n-faq").click(function(){
		$("html, body").animate({
			scrollTop: $("#questions_page").offset().top
		}, 1000);
	});
	
	$(".n-blog").click(function(){
		$("html, body").animate({
			scrollTop: $("#blog").offset().top
		}, 1000);
	});
	
	$(".n-subscribe").click(function(){
		$("html, body").animate({
			scrollTop: $("#subscribe").offset().top
		}, 1000);
	});
	
	$(".n-contact").click(function(){
		$("html, body").animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});
	
	
	// faq hide and show
    $(".div1").hide();
	$(".div2").hide();
    $(".div3").hide();
    $(".div4").hide();
    $(".div5").hide();
	$(".div6").hide();
	$(".div7").hide();
	$(".div8").hide();
                
                $('.head1').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div8").hide();

                    $('.div1').show();
                    });
                
                $('.head2').hover(function () {
                    $(".div1").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div8").hide();

                    $('.div2').show();
                    });
                
                $('.head3').hover(function () {
                    $(".div2").hide();
                    $(".div1").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div8").hide();

                    $('.div3').show();
                    });
                
                $('.head4').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div1").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div8").hide();
					
                    $('.div4').show();
                    });
                
                $('.head5').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div1").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div8").hide();

                    $('.div5').show();
                    });
	
				$('.head6').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div1").hide();
					$(".div7").hide();					
					$(".div8").hide();

                    $('.div6').show();
                    });
	
				$('.head7').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div1").hide();					
					$(".div8").hide();

                    $('.div7').show();
                    });
	
				$('.head8').hover(function () {
                    $(".div2").hide();
                    $(".div3").hide();
                    $(".div4").hide();
                    $(".div5").hide();
					$(".div6").hide();
					$(".div7").hide();					
					$(".div1").hide();

                    $('.div8').show();
                    });
    
    //carosel interval
    
    $('#carouselExampleIndicators').carousel({
    interval: 1500
});
    
//loading

});