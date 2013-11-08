$(document).ready(function(){
	
	var trip = new Trip([
		{
			sel : $("#webticker"),
			content : "This is a webTicker that displays any info you want"
		}
	]);
	
	$("#demobtn").on("click", function(){
		trip.start();
	});
	
	$("div.sidemenu").on("click", function(){
		$(this).find("li").slideToggle();
	});
	
	$("#commentForm").validate();
	
	$("button#b1").on("click", function(){
		$("body").animatescroll({scrollSpeed:1500,easing:'easeOutBounce'});
	});
	
	$("div#nav").find("li > a").on("click", function(){
		$($(this).data("href")).animatescroll({scrollSpeed:2000,easing:'easeInOutBack'});
	});
	
	/*$("#commentForm.attr(type)").on("click", function(){
		$(this).parent().toggle("fold");  
	});*/
	
	$("ul#webticker").webTicker();


	
	
});