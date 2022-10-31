$(document).ready(function(){
 //console.log("ready");
 $("header h1").delay(500).slideDown();
 //.delay(500) -> 500은 0.5 기준이다.
 
//향수의 어원 h2
/*$("#f1").click(function(){
	$(this).animate({marginLeft:"100vw"});

});*/
//상단 오른쪽 햄버거 아이콘 클릭(이벤트형 메소드는 함수와 함께 사용)
$("header button").click(function(){
	$("nav").slideDown(); // 결론적.. display:block;이 된다.
	$("body").css("overflow","hidden"); // 스크롤 액션이 overflow 기능 . 그것을 숨기는것.
	
});

$("header rt").click(function(){
	$("nav").slideUp();
	$("body").css("overflow","auto");
	
});

// 메뉴 항목 또는 top 아이콘 클릭시..
$("a").click(function(){
	$("nav").slideUp(); //	display가 none이 된다.
	$("body").css("overflow","auto"); // 스크롤 액션 재 구현.
});

//figure 요소 넓이
console.log($("figure").width()); //output_420..

//figure 자동 슬라이드
//setInterval 은 일정한 시간간격으로 지속적 함수 호출하는 메소드..
const x = setInterval(y, 5000);//(함수이름,시간간격) 자바스크립트 에서 1초는 1000 이다. // .append의 .eq가 먹으려면 y와 .animate 의 시간 함수값이 달라야 한다..
function y(){
	$("figure div").stop().animate({left : "-430px"},3000, function(){
		$(this).append( $("figure img").eq(0) ); //.append 는 .eq의 0 번째의 이미지를 자녀들의 맨뒤 번순으로 보내고 다시 애니메이션을 받게 하는것..
		$(this).css("left", 0); // 0과 -430px은 0 -> -430px 까지의 애니메이션의 함수 이다.

	});
	;//stop 메소드는 브라우저를 다른 브라우저로 움직이거나 내렸을때 함수 값이 고정되고 움직이지 않게 하고 , 다시 활성화 하였을때 리셋 되도록 하는 함수..이다?
	
}

// 콜백 함수란 시간이 필요한 함수에서 , 해당 실행이 끝난후 호출한다.
/*$("footer").click(function(){
	$(this).slideUp(1000, function(){alert("슬라이드 됨")});//시간이 필요한 메소드.. 
	//alert("슬라이드 됨");// 즉시 실행되는 윈도기능
	$(this).fadeOut(2000, function(){}); //이미지가 천천히 투명해지며 사라지는 애니메이션 효과.
	
});*/

//eq(index)알아내기.
$("section").children().click(function(){
	const z= $(this).index();
	console.log(z);
	$("section").children().eq(z).css("background","tomato").siblings().css("background","none"); //siblings 는 콘텐츠를 클릭후 다음 콘텐츠를 클릭시 이전 콘텐츠의 값을  "background","none"으로 다시 적용 시키는 순환 일종의 메소드.
	
});


});///////마무리