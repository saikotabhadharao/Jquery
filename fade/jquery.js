$("Document").ready(function(){
	$("p1").css("color","blue");
	$("h1").css("backgroundColor","green");
	
	$(":text").css("color",'Red');
	$(":text").css("backgroundColor",'blue');
	$(":submit").css("color",'blue');

});
$("document").ready(function(){
	$("#fadeOut").click(function(){
		$("h1").fadeOut(3000);
	});
	$("#fadeIn").click(function(){
		$("h1").fadeIn(3000);
	});
	$("#fadetoggle").click(function(){
		$("h1").fadeToggle(3000); 
	});
	$("#fadeto").click(function(){
		$("h1").fadeTo(2000,0.5,function(){
			$("#fadeto").click(function(){
				$('h1').fadeTo(2000,1);
			});
		});
	});
});