function $(selector) {
	return document.querySelector(selector)
}

const burgerBtn = $('.header__open');

burgerBtn.onclick = function() {
	burgerBtn.classList.add('header__open--active');
	$('.header__navbar').classList.add('header__navbar--active');
}

$('.header__close').onclick = function() {
    burgerBtn.classList.remove('header__open--active');
    $('.header__navbar').classList.remove('header__navbar--active');
}
