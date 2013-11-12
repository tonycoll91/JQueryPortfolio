$(document).ready(function(){
	
	var trip = new Trip([
		{
			sel : $(".webticker.step1"),
			position : 'n', 
			content : "This is a webTicker that displays any info you want",
			delay : 4000
		}, 
		{
			sel : $(".step2"),
			position : 's',
			content : "Click on each menu for some awesome scrolling effect!!!",
			delay : 4000
		},
		{
			sel : $(".step3"),
			position : 'e',
			content : "Click this to take you back to the top with a cool effect.",
			delay : 4000
		}, 
		{
			sel : $(".step4"),
			position : 'w',
			content : "Name validation",
			delay : 2000
		},
		{
			sel : $(".step5"),
			position : 'w',
			content : "Email validation",
			delay : 2000
		},
		{
			sel : $(".step6"),
			position : 'e',
			content : "Click an image to display a lightbox display",
			delay : 3000
		},
		{
			sel : $(".step7"),
			position : 'n',
			content : "This website is a template from styleshout.com. Only small changes were made.",
			expose : true,
			delay : 7000
		}
	],{
		backToTopWhenEnded : true,
		delay : 2000
	});
	
	$("#demobtn").on("click", function(){
		trip.start();
	});
	
	$("div.sidemenu").on("click", function(){
		$(this).find("li").slideToggle();
	});
	
	$("#commentForm").validate();
	
	$("input#b1").on("click", function(){
		$("body").animatescroll({scrollSpeed:1500,easing:'easeOutBounce'});
	});
	
	$("div.nav").find("li > a").on("click", function(){
		$($(this).data("href")).animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	
	/*$("#commentForm.attr(type)").on("click", function(){
		$(this).parent().toggle("fold");  
	});*/
	
	$("ul.webticker").webTicker();


	
	
});