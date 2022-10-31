$(document).ready(function(){
 //console.log("ready");
 $("header h1").delay(500).slideDown();
 //.delay(500) -> 500은 0.5 기준이다.
 
//향수의 어원 h2
$("#f1").click(function(){
	$(this).animate({marginLeft:"100vw"});

});
});///////마무리