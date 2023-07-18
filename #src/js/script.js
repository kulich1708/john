$('.burger-menu').click(function (event) {
	$('.burger-menu, .menu__body').toggleClass('_active')
	$('body').toggleClass('_lock')
})//открытие меню бургер