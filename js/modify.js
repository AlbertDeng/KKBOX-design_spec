
$(function(){
	

	var $menu_desktop = $(".menu_desktop ul li"),
		$submenu = $(".submenu")



	$menu_desktop.hover(function(){

		$submenu.stop().slideDown(300);

	},function(){


		$submenu.stop().slideUp();

	});


});







