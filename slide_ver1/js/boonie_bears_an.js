$(function(){ //약식 준비핸들러(약식 초기화)

	//window.alert("연결확인");

	/*
		알고리즘

		1. 클릭한 인디케이트(a)가 몇 번째 요소인지를 나타내는 index 번호 추출

		2. 그 index 번호에 해당하는 a 요소의 부모에 .on 클래스를 추가한다.

		3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on 클래스를 제거한다.

		4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
	*/


	//제이쿼리로 셀렉팅 할 경우 배열방식으로 저장된다.
	console.log('$("#slides>.slides-pagination>li>a")=',$("#slides>.slides-pagination>li>a"));

	var $indicator = $("#slides>.slides-pagination>li>a");

	//인디케이터에 대한 클릭이벤트 구문
	$indicator.click(function(evt){
		//window.alert("클릭");

		//.index() 메소드는 지정된 요소의 인덱스 번호를 추출한다.(0부터 시작한다.)
		var nowIdx = $indicator.index($(this));
		console.log("nowIdx = ",nowIdx);

		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");


		// .animate({}JSON 옵션(필수), 시간, 이징효과, 콜백함수) 
		// .stop() 는 .animate 앞에 항상 붙여준다. (현재 실행 중인 애니메이션 중지하고 새로운 애니메이션을 실행-여러번 중복 누를 경우 이벤트가 딜레이 되기 때문)
		$("#slides>.slides-container").stop().animate({  //css 는 탁탁 바뀌고 animate는 바뀌는 과정이 보인다.
			"left" : -665 * nowIdx //자동으로 px로 들어간다. 

		},3000);// 3초 

		evt.preventDefault();

	});
});