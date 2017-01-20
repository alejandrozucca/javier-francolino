$(document).ready(main);

function main(){
	
	showMap();
	
	var hidden = 1;
	
	$(".menuBar").click(function(){
		//$("nav").toggle();
		if(hidden){
			$("nav").animate({
				left: "0"
			});
			$(".buttonMenu img").attr("src","pictures/close-button.png");
			hidden = 0;
		} else {
			$("nav").animate({
				left: "-100%"
			});
			$(".buttonMenu img").attr("src","pictures/menu-alt-512.png");
			hidden = 1;
		}
		
	});
	
	var stickyOffset = $('header').offset().top;

	$(window).scroll(function(){
	  var sticky = $('header'),
		  scroll = $(window).scrollTop();

	  if (scroll >= stickyOffset) sticky.addClass('fix-nav');
	  else sticky.removeClass('fix-nav');
	});
	
}

function showMap(){
	
	var myCenter = new google.maps.LatLng(41.878114, -87.629798);
			
	function initialize() {
			var mapProp = {
				center: myCenter,
				zoom: 12,
				scrollwheel: false,
				draggable: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
				
		var marker = new google.maps.Marker({
				position: myCenter,
		});
				
		marker.setMap(map);
	}
			
	google.maps.event.addDomListener(window, 'load', initialize);
	
}