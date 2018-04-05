/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

var runPageDefaults = function() {
	"use strict";

	// > = greatar than
	// < = less than

	/* -------------------------------------------------- */
	/* HOME
	/* -------------------------------------------------- */

	if ($(".page").data("page") === "home") {
		console.log("Home Page");
		
		$(".button-home").addClass("inactive");
		
		/* -------------------------------------------------- */
		/* HERO HEADER INTRO
		/* -------------------------------------------------- */

		// SET-UP
		var tlHeroHeader = new TimelineMax({paused: false, delay: 2, repeat: 0, repeatDelay: 0, yoyo: false});

		var heroHeaderSplitText = new SplitText("#hero-header", {type:"words, chars, lines"}), 
			heroHeaderSplitText = heroHeaderSplitText.chars;

		var heroSubheaderSplitText = new SplitText("#hero-subheader", {type:"words, chars, lines"}), 
			heroSubheaderSplitText = heroSubheaderSplitText.chars;

		// ANIMATION
		TweenLite.set(["#hero-logo", "#hero-header", "#hero-subheader"], {perspective: 400, transformOrigin:"center center"});

		tlHeroHeader.staggerFrom($("#hero-logo"), 2, {opacity: 0,  ease: Expo.easeOut})
					.staggerFrom(heroHeaderSplitText, 2, {opacity: 0, y: 0,  ease: Back.easeInOut}, 0.02, "-=1.5")
					.staggerFrom(heroSubheaderSplitText, 1, {opacity: 0, y: 0, ease: Back.easeInOut}, 0.01, "-=1.75")
					.from("#mc_embed_signup_placeholder_is_top", 0.5, {opacity: 0,  y: 100, ease: Expo.easeOut}, "-=1.25")
					//.staggerFrom($("#mc_embed_signup_placeholder_is_top").children(), 1, {opacity: 0, y: 20,  ease: Back.easeOut}, 0.12, "-=1.25")
					.staggerFrom($(".sidebar-social-icons li"), 1, {opacity: 0, x: 20,  ease: Back.easeOut}, 0.12, "-=1.25")
					//.from($("#hero-elements"), 0.5, {opacity: 0, y: 100,  ease: Expo.easeOut}, "-=1")
					.from(".scroll-hint", 0.5, {opacity: 0,  y: 100, ease: Expo.easeOut}, "-=1.25");
		
	}

	/* -------------------------------------------------- */
	/* TEMPLATE
	/* -------------------------------------------------- */

	else if ($(".page").data("page") === "template") {
		console.log("Template Page");

		$(".button-template").addClass("inactive");
	}

	/* -------------------------------------------------- */
	/* ERROR
	/* -------------------------------------------------- */

	else {
		console.log("Error Page");
	}
	
};
