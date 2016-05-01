

$(document).ready(function() {

	//My code
	$(".about-link").click(function() {
		$(".about").slideToggle().siblings().hide();
	});

	$(".events-link").click(function() {
		$(".events").slideToggle().siblings().hide();
	});

	$(".timetable-link").click(function() {
		$(".timetable").slideToggle().siblings().hide();
	});

//Work with gallery section
	$(".gallery-link").click(function() {
		$(".gallery").slideToggle().siblings().hide();

		var galleryHeight = $(".item").height();
		$(".slider").height(galleryHeight);
	});

	$(".right-arrow").click(function() {
		var currentSlide = $(".active-slide");
		var nextSlide = $(".active-slide").next();
		if (nextSlide.length == 0) {
			nextSlide = $(".item").first();
		}
		currentSlide.fadeOut(600).removeClass("active-slide");
		nextSlide.fadeIn(600).addClass("active-slide");
	});
	$(".left-arrow").click(function() {
		var currentSlide = $(".active-slide");
		var prevSlide = $(".active-slide").prev(".item");
		if (prevSlide.length == 0) {
			prevSlide = $(".item").last();
		}
		currentSlide.fadeOut(600).removeClass("active-slide");
		prevSlide.fadeIn(600).addClass("active-slide");
	});
	$(window).resize(function() {
		var galleryHeight = $(".item").height();
		$(".slider").height(galleryHeight);
	});

	$(".contacts-link").click(function() {
		$(".contacts").slideToggle().siblings().hide();
	});

	$(".menu-icon").click(function() {
		$("nav ul li").css("width","40%");
		$("nav ul").slideToggle();
		$(".name").hide();
		$(".name + p").hide();
	});

});