$(document).ready(function(){

	/*Выпадающее меню*/
	$('nav li').on('mouseenter', function(){
		$(this).children('ul').slideDown('fast');
	})
	
	$('nav li').on('mouseleave', function(){
		$(this).children('ul').slideUp('fast');
	})
	
	/*Fancybox*/
	$('a.fancy').fancybox();
	
	/*Раздигающиеся пункты каталога*/
	$('.catalog-menu li').on('click', function(e){
		if($(this).find('ul').length > 0) {
			e.preventDefault();
			$(this).toggleClass('expanded');
			$(this).find('ul').slideToggle();		
		}
	})
})