var indexPage = false;
var chkDevice = navigator.userAgent;
var deviceList = ['iPad','SHW-M180','SHV-E140','SHWM380','iPhone','SHW-M110','SHW-M250','SHV-E210','SHV-E160','SHV-E250','SHV-E120','SHW-M440','SHV-E230','Sample']; // 7인치 이상 디바이스
var deviceLangth = deviceList.length;
var deviceTabs;
var devicenone = false;
var trc22v = false;
$("meta[name='viewport']").remove();
for (i=0; i <= deviceLangth ; i++) {
	if (chkDevice.indexOf(deviceList[i]) > -1) {
		$("meta[name='viewport']").remove(); // 뷰포트 재설정을 위한 기본 뷰포트값 제거.
		devicenone = true;
		switch(i) {
			case 0: // iPad 시리즈 (5)
				setView("user-scalable=no, initial-scale=0.6, maximum-scale=0.6, minimum-scale=0.6");
				$(window).load(function(){
					deviceTabs = true; // 태블릿 처리
					var bd_wid = $("body").outerWidth()-460; // 사이드를 위한 본문 넓이 처리
					userAgent = navigator.userAgent.toLowerCase();
					window.onorientationchange = function() {
						var win_change = window.orientation;
						bd_wid = $("body").outerWidth()-460;
						$("#container").css({"width":bd_wid}); // 회전시 넓이 처리
						if(!trc22v){
							$("#left_side").css({"display":"block","left":"0"});
							$("#right_side").css({"display":"block","right":"200%"});
							$("#container").css({"margin-left":"460px"});
						} else {
							$("#left_side").css({"display":"block","left":"-200%"});
							$("#right_side").css({"display":"block","right":"0"});
							$("#container").css({"margin-left":"0"});
						}
						if(bd_wid > 820) {
							$(".search_area").css("width","85%");
						} else {
							$(".search_area").css("width","70%");
						}
						set_side();
					}
					if(bd_wid > 820) {
						$(".search_area").css("width","85%");
					} else {
						$(".search_area").css("width","70%");
					}
					$("#left_side").css({"display":"block","left":"0"});
					$("#container").css({"width":bd_wid,"margin-left":"460px"}); // 처음 로딩시 넓이 처리
				});
				break;
			case 1: // 갤럭시탭 7.7
				setView("user-scalable=no, initial-scale=0.7, maximum-scale=0.7, minimum-scale=0.7, target-densitydpi=254");
				break;
			case 2: // 갤럭시탭 8.9
			case 3: // 갤럭시탭 10.1
				$(window).load(function(){
					deviceTabs = true; // 태블릿 처리
					var bd_wid = $("body").outerWidth()-460; // 사이드를 위한 본문 넓이 처리
					userAgent = navigator.userAgent.toLowerCase();
					window.onorientationchange = function() {
						var win_change = window.orientation;
						bd_wid = $("body").outerWidth();
						if(win_change=="-90"){
							bd_wid = 815;
						} else if(win_change=="90"){
							bd_wid = 815;
						} else {
							bd_wid = 1580;
						}

						$("#container").css({"width":bd_wid}); // 화면 회전 후 넓이 설정

						if(!trc22v){
							$("#left_side").css({"display":"block","left":"0"});
							$("#right_side").css({"display":"block","right":"200%"});
							$("#container").css({"margin-left":"460px"});
						} else {
							$("#left_side").css({"display":"block","left":"-200%"});
							$("#right_side").css({"display":"block","right":"0"});
							$("#container").css({"margin-left":"0"});
						}
						set_side();
					}
					//$("body").css("width","1100px");
					$("#left_side").css({"display":"block","left":"0"});
					$("#container").css({"width":bd_wid,"margin-left":"460px"}); // 태블릿 처음 로딩시 넓이 처리
				});
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=255");
				break;
			case 4: // iPhone 시리즈 (4)
				setView("user-scalable=no, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, target-densitydpi=device-dpi");
				$(window).load(function(){
					$("footer").css("font-size","12px")
				})
				break;
			case 5: // 갤스 1 800*480
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=320");
				break;
			case 6: // 갤스 2 800*480
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=320");
				break;
			case 7: // 갤스 3 1280*720
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=285");
				break;
			case 8: // 갤노트 1 1280*800
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=255");
				break;
			case 9:  // 갤노트 2 1280*720
			case 10: //갤스 2 LTE
			case 11: //갤스 3 3G
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=285");
				break;
			case 12: //갤탭10.1 LTE
				$(window).load(function(){
					deviceTabs = true;
					var bd_wid = $("body").outerWidth()-460;
					userAgent = navigator.userAgent.toLowerCase();
					window.onorientationchange = function() {
						var win_change = window.orientation;
						bd_wid = $("body").outerWidth();
						if(win_change=="-90"){
							bd_wid = 815;
							$(".search_area").css("width","70%");
						} else if(win_change=="90"){
							bd_wid = 815;
							$(".search_area").css("width","70%");
						} else {
							bd_wid = 1580;
							$(".search_area").css("width","88%");
						}
						$("#container").css({"width":bd_wid});
						if(!trc22v){
							$("#left_side").css({"display":"block","left":"0"});
							$("#right_side").css({"display":"block","right":"200%"});
							$("#container").css({"margin-left":"460px"});
						} else {
							$("#left_side").css({"display":"block","left":"-200%"});
							$("#right_side").css({"display":"block","right":"0"});
							$("#container").css({"margin-left":"0"});
						}
						set_side();
					}
					if(bd_wid > 815) {
						$(".search_area").css("width","88%");
					} else {
						$(".search_area").css("width","70%");
					}
					//$("body").css("width","1100px");
					$("#left_side").css({"display":"block","left":"0"});
					$("#container").css({"width":bd_wid,"margin-left":"460px"});
				});
				setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=255");
				break;
			case 13: //Sample
				break;
			default: // for문 구조상, default가 들어가면 안됩니다.
		}
	}
}

// 모바일 뷰포트 기본값
if(!devicenone){
	$("meta[name='viewport']").remove();
	setView("user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, target-densitydpi=285");
}

function setfooter(){ // 패드 맨위로 버튼
	$('#container footer nav ul li:last-child a').attr({href:'#', onclick:'btnTop(0)'})
	var btnImgSrc = "http://image.hyundaihmall.com/static/smart/2013/img/common/btn_footer_top.gif"
	if (deviceTabs) {
		if (indexPage) {
			btnImgSrc = "http://image.hyundaihmall.com/static/smart/2013/img/common/btn_footer_top.gif"
		}
		$('#container footer nav ul li:last-child a img').attr({src:btnImgSrc, alt:'맨 위로'})
	}
}

function addTopbtn(){ // 모바일 서브페이지에서 맨위로 버튼
	$('#container footer nav').before("<a href='#' class='btns_top' onclick='btnTop(0)'><span>맨위로</span></a>")
}

function removeTop(){
	$('#container footer nav').before('.btns_top').remove();
}

function btnTop(set){
	$('body').scrollTop(set+'px');
	return false;
}

function set_side(){
	setSideH = $('#container').outerHeight()
	setSideBgH = $('#container').outerHeight() - 98;
	$('.side_set').css('height',setSideH+'px')
	$('#left_side .bg_note').css('height',(setSideBgH-20)+'px')
	$('#right_side .bg_note').css('height',setSideBgH+'px')
}

function addCSS(cssname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('link');
	s.setAttribute('type','text/css');
	s.setAttribute('rel','stylesheet');
	s.setAttribute('href',cssname);
	th.appendChild(s);
}

function setView(viewval) { //width=device-width
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('meta');
	s.setAttribute('name','viewport');
	s.setAttribute('content',viewval);
	th.appendChild(s);
}

function acodi(targetClass) {
	if ($(targetClass).hasClass('acd_off')) {
		$(targetClass).removeClass('acd_off')
	} else {
		$(targetClass).addClass('acd_off')
	}
}

function pad_css(){
	var cssSrc = "../css/hmall_pad.css"
	if (deviceTabs) {
		if (indexPage) {cssSrc = "./css/hmall_pad.css"}
		addCSS(cssSrc) //루트 파일에서의 css 경로 수정
	}
}

// 탭
function tabtabtab (tab,target,num) {
	$(tab+' li').removeClass('on')
	$(tab+' li:eq('+num+')').addClass('on')
	$(target).removeClass('on');
	$(target+':eq('+num+')').addClass('on');
	set_side();
//	bodyScroll.refresh();
	return false;
}

// 탭2
function tabtab (tab,num,commonClass,targetClass) {
	$(tab+' li').removeClass('on')
	$(tab+' li:eq('+num+')').addClass('on')
	$(commonClass).removeClass('on');
	$(targetClass).addClass('on');
	set_side();
//	bodyScroll.refresh();
	return false;
}
$(window).load(function(){


	$('body').delay('500').queue(function(){
		set_side();
		jQuery.dequeue( this );
	})

	if (deviceTabs) {
		setfooter();
	} else {
		addTopbtn();
		phone();
	}

	//인기검색어
	$(".hit_keyword > a").click(function(){
		if($(".key_list").hasClass("on")){
			$(".key_list").css('display','none')
			$(".hit_keyword, .key_list").removeClass("on");
		} else {
			$(".key_list").css('display','block')
			$(".hit_keyword, .key_list").addClass("on");
		}
		return false;
	});

	$(".colse").click(function(){
		if($(".key_list").hasClass("key_list on")){
			$(".key_list").css('display','none')
			$(".key_list").removeClass("on");
		}
		return false;
	});


	// 메인부분 카테고리
	if ($('.sp_box_wrap').length > 0) {
		$('.sp_box_wrap .swiper-slide a').click(function(){
			$('.sp_box_wrap .swiper-slide').removeClass('on');
			$(this).parent('.swiper-slide').addClass('on');
		})
	}

	// 고객센터 FAQ 카테고리 보기 버튼
	if ($('a.faq_cate_onoff').length > 0) {
		$('a.faq_cate_onoff').addClass('on')
		$('.custormer_menu').removeClass('acd_off');
		$('a.faq_cate_onoff').click(function(){
			if ($('a.faq_cate_onoff').hasClass('on')) {
				$('a.faq_cate_onoff').removeClass('on')
			} else {
				$('a.faq_cate_onoff').addClass('on')
			}
			clearTimeout(faq_timer);
		});
		var faq_timer = setTimeout(function(){
			$('a.faq_cate_onoff').removeClass('on');
			$('.custormer_menu').addClass('acd_off');
		}, 3000);
	}

	// 고객센터 공지사항 버튼
	if ($('.quest').length > 0) {
		$('.quest a').click(function(){
			if (!$(this).parent('.quest + div').hasClass('acd_off')) {
				$('.quest').removeClass('on')
				$(this).parent('.quest').addClass('on')
			}
		})
	}

	// 고객센터 FAQ 목록
	if ($('.tgg_box').length > 0) {
		$('.tgg_box .quest a').click(function(){
			$('.tgg_box .acodian_box').addClass('acd_off')
			$(this).parent().next('div').removeClass('acd_off')
		})
	}

	// 상품상세 faq
	if ($('.detail_infobox')) {
		$('.qna_list .fl_l span a').click(function(){
			var a_par = $(this).parent().parent().parent()
			if (a_par.hasClass('on')) {
				a_par.removeClass('on')
			} else {
				$('.qna_list li').removeClass('on')
				a_par.addClass('on')
			}
		});
	}

	// + - 버튼
	if ($('.inputs.number .setting').length > 0) {
		$('.inputs.number input').next('.setting').click(function(){
			var optionNumber = Number($(this).prev('input').val()) + 1
			$(this).prev('input').val(optionNumber)
		});
		$('.inputs.number input').prev('.setting').click(function(){
			var optionNumber = Number($(this).next('input').val()) - 1
			if (optionNumber > 0) {
				$(this).next('input').val(optionNumber)
			}
		});
	}

	// 버튼 토글 * .btns.swch.setblock
	if ($('.btns.swch.setblock').length > 0) {
		$('.btns.swch.setblock').click(function(){
			if ($(this).hasClass('on')) {
				$(this).removeClass('on');
			} else {
				$(this).addClass('on');
			}
		});
	}

	//체크박스 스타일에 따른 스크립트
		$('.inputs.chek label').click(function(){
			if (!$(this).parent('.chek').hasClass('ked')) {
				$(this).parent('.chek').addClass('ked')
				$(this).parent('.chek').find('input').attr('checked','checked')
			} else {
				$(this).parent('.chek').removeClass('ked')
				$(this).parent('.chek').find('input').removeAttr('checked')
			}
		});

	//라디오박스 스타일에 따른 스크립트
		$('.inputs.radio label').click(function(){
			var fafa = $(this).parent().parent().get(0).tagName;
			var mama;
			if (fafa=='DIV') {
				mama = $(this).parent().parent().attr('class');
				if (!$(this).find('input').is(':checked')) {
					$('.' + mama + ' .inputs').removeClass('ked');
					$(this).parent('.inputs').addClass('ked');
				};
			} else if (fafa=='LI') {
				mama = $(this).parent().parent().parent().attr('class');
				if (!$(this).find('input').is(':checked')) {
					$('.' + mama + ' .inputs').removeClass('ked');
					$(this).parent('.inputs').addClass('ked');
				};
			};
		});

	// 마이페이지,
	if ( $('.myhmall.mytransit.affairs.main .btns.swch').length > 0 ){
		$('header .btns.swch').click(function(){
			if ($(this).hasClass('dw')) {
				$(this).removeClass('dw').parent().removeClass('on')
			} else {
				$(this).addClass('dw').parent().addClass('on')
			}
		});
		$('.mypage_menu p a').click(function(){
			if ($('header .btns.swch').hasClass('dw')) {
				$('header .btns.swch').removeClass('dw').parent().removeClass('on')
			} else {
				$('header .btns.swch').addClass('dw').parent().addClass('on')
			}
		});
	}

	// 장바구니 삭제, 변경 목록 열닫, 쿠폰 목록 열닫
	if ( $('.shoppingbasket').length > 0 ){
		$('.basket_list li .option_list .btns.swch').click(function(){
			if ($(this).hasClass('dw')) {
				$(this).removeClass('dw').parent().removeClass('on')
			} else {
				$(this).addClass('dw').parent().addClass('on')
			}
		});
		$('.basket_list li > .product_btns .btns.ac').click(function(){
			if ($(this).hasClass('on')){
				$(this).removeClass('on').parent().removeClass('on')
			} else {
				$(this).addClass('on').parent().addClass('on')
			}
		});
	}

	/* 모바일에서 본문 클릭 처리
	$('.dim').click(function(){
		$('body').scrollTop(0);
		$('.dim').removeClass('on').css('height','0');
		$("#left_side").css("left","-200%");
		$("#right_side").css("right","200%");
		return false;
	})*/

	if(deviceTabs) {
		$("#left_side").css({"left":"0","z-index":"10000"});
		$("#right_side").css({"right":"200%","position":"absolute"});
		$(".colse").click(function(){
			$("#left_side").css("left","-200%");
			$("#right_side").css("right","0");
			$("#container").css({"margin-left":"0"});
			trc22v = true;
			return false;
		});
		$(".lt_on").click(function(){
			$("#left_side").css("left","0");
			$("#right_side").css("right","200%");
			$("#container").css({"margin-left":"460px"});
			trc22v = false;
			return false;
		});

		$(".rt_on").click(function(){
			$("#left_side").css("left","-200%");
			$("#right_side").css("right","0");
			$("#container").css({"margin-left":"0"});
			trc22v = true;
			return false;
		});
		$(".col").click(function(){
			$("#left_side").css("left","0");
			$("#right_side").css("right","200%");
			$("#container").css({"margin-left":"460px"});
			trc22v = false;
			return false;
		});
	} else {
		$("#left_side").css("left","-200%");
		$("#right_side").css("right","200%");
		$(".colse").append("<img src='http://image.hyundaihmall.com/static/smart/2013/img/common/btn_slideclose.png' alt='닫기' />");
		$(".col").append("<img src='http://image.hyundaihmall.com/static/smart/2013/img/common/btn_slideclose.png' alt='닫기' />");
	}

// 오른쪽 사이드 카테고리
	$('#right_side h3 a').click(function(){
		$('#right_side h3').removeClass('on');
		$(this).parent('h3').addClass('on');
	})
});


function pad_lt_on (){ // 패드용 왼쪽 사이드 오픈
	$("#left_side").css("left","0");
	$("#right_side").css("right","200%");
	$("#container").css({"margin-left":"460px"});
	trc22v = false;
}

function pad_rt_on (){ // 패드용 오른쪽 사이드 오픈
	$("#left_side").css("left","-200%");
	$("#right_side").css("right","0");
	$("#container").css({"margin-left":"0"});
	trc22v = true;
}

function lt_on (){ // 일반 모바일용 왼쪽 사이드 오픈
	$("#left_side").css("left","0");
	$('.dim').addClass('on').css('height',$('#container').outerHeight());
}

function 状态rt_on (){ // 일반 모바일용 오른쪽 사이드 오픈
	$("#right_side").css("right","0");
	$('.dim').addClass('on').css('height',$('#container').outerHeight());
}


function phone() {
	$("#left_side, #right_side").css("position","absolute");
	$(".lt_on").click(function(){
		$("#left_side").css("left","0");
		$('.dim').addClass('on').css('height',$('#container').outerHeight());
		return false;
	});
	$(".rt_on").click(function(){
		$("#right_side").css("right","0");
		$('.dim').addClass('on').css('height',$('#container').outerHeight());
		return false;
	});
	$(".colse").click(function(){
		$("#left_side").css("left","-200%");
		$('.dim').removeClass('on').css('height','0');
		return false;
	});
	$(".col").click(function(){
		$("#right_side").css("right","200%");
		$('.dim').removeClass('on').css('height','0');
		return false;
	});
}