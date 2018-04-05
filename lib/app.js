/* -------------------------------------------------- */
/* LOG
/* -------------------------------------------------- */

console.log("Company, Version 1.0.0 (pre-release)");

/* -------------------------------------------------- */
/* FUNCTIONS
/* -------------------------------------------------- */

// ENABLE / DISABLE CONTENT
var disableContent = function() {		
	"use strict";
	//console.log("Content disabled.");
	
	//$(html).addClass("overflow-hidden");
	$(html).css("overflow-x", "hidden");
	$(html).css("overflow-y", "hidden");
};

var enableContent = function() {		
	"use strict";
	//console.log("Content enabled.");
	
	//$(html).addClass("overflow-vertical");
	$(html).css("overflow-x", "hidden");
	$(html).css("overflow-y", "scroll");
};

/* -------------------------------------------------- */
/* PAGE TRANSITIONS
/* -------------------------------------------------- */			  

// PRELOAD START (SHOW)
var preloadStart = function() {
	"use strict";
	console.log("Loading content...");
    
    disableContent();
    
	//TweenMax.set(["#container", stickyAnchor, navbar, toolbar, main, "#preloader-parent"], {opacity: 0});
	
	var tlPreloadStart = new TimelineMax({paused: false, delay: 0, yoyo: false, repeat: 0,
                                        onComplete: function() {

                                                    $("#preloader-parent").removeClass("hide");
                                                    $("#preloader-indicator").removeClass("hide");
                                                    disableContent();

                                                }
                                        });

		tlPreloadStart.to("#preloader-parent", 0.5, {autoAlpha: 1, ease: Expo.easeIn})
					  .to("#preloader-logo li", 0.5, {autoAlpha: 1, ease: Expo.easeInOut}, 0.12)
					  .to("#preloader-indicator", 0.5, {autoAlpha: 1, ease: Expo.easeOut})
                      .set("#container", {autoAlpha: 1});
    
};





// PRELOAD END (HIDE)
var preloadEnd = function() {
	"use strict";
	//console.log("Content loaded.");	

	var tlPreloadEnd = new TimelineMax({paused: false, delay: 1, yoyo: false, repeat: 0,
                                        onComplete: function() {

                                                    $("#preloader-parent").addClass("hide");
                                                    $("#preloader-indicator").addClass("hide");
                                                    enableContent();

                                                }
                                        });

		var pageContentScrollTop = $(pageContent).scrollTop(),
			windowHeight = $(window).height(),
			documentHeight = $(document).height();

    
    
    
    
			// DETECT: TOP OF PAGE / AWAY FROM TOP OF PAGE
			if ( pageContentScrollTop || isPhone ) {
				//console.log("Not at top.");
				
				tlPreloadEnd.staggerTo("#preloader-logo li", 0.5, {autoAlpha: 0, y: 20, ease: Back.easeInOut}, 0.12)
							.to("#preloader-indicator", 0.5, {autoAlpha: 0, ease: Expo.easeOut})
							.to("#preloader-parent", 1, {autoAlpha: 0, ease: Expo.easeOut});
				
	
			} else if ( !pageContentScrollTop || !isPhone ) {
				//console.log("At top.");
	
				tlPreloadEnd.to("#preloader-logo li:nth-of-type(3)", 0.5, {autoAlpha: 0, y: 20, ease: Back.easeInOut})
				            .to("#preloader-logo li:nth-of-type(2) svg", 0.5, {autoAlpha: 1, y: -90, scale: 2.65, ease: Back.easeInOut})
				            .to("#preloader-indicator", 0.5, {autoAlpha: 0, ease: Expo.easeOut})
				            .to("#preloader-parent", 1, {autoAlpha: 0, ease: Expo.easeOut});

				
			}
	
	
	
	
};

// TRANSITION OUT
/*
var showPreloader = function() {
	console.log("Show preloader.");
	var tlPageTransitionOut = new TimelineMax({paused: false, delay: 0, yoyo: false, repeat: 0});
		tlPageTransitionOut.to(preloaderParent, 1, {display: "block", opacity: 1, ease: Expo.easeOut})
						   .to(preloaderIndicator, 1, {display: "block", opacity: 1, ease: Expo.easeOut})
						   .to(preloaderLogo, 1, {display: "block", opacity: 1, ease: Expo.easeOut});
}
*/
	




// TRANSITION OUT
var navLink = $(".page-transition");

navLink.on("click", "a", function(e) {
	"use strict";
	e.preventDefault();

	var currentNavLink = $(this),
		href = currentNavLink.attr("href");

	var getLink = function() {
		console.log(href);
		window.location = href;
	};

	var tlPageTransitionOut = new TimelineMax({paused: false, delay: 0, yoyo: false, repeat: 0, onComplete: getLink});
		tlPageTransitionOut.to(preloaderParent, 0.25, {display: "block", opacity: 1, ease: Expo.easeIn})
						   .to(preloaderLogo, 0.25, {display: "block", opacity: 1, ease: Expo.easeIn})
						   .to(preloaderIndicator, 0.25, {autoAlpha: 1, ease: Expo.easeIn});

	return false;
	
});	





// TRANSITION BACK
$(".page-transition-back").on("click", function(e) {
	"use strict";
	e.preventDefault();

	var tlPageTransitionOut = new TimelineMax({paused: false, delay: 0, yoyo: false, repeat: 0, onStart: disableContent, onComplete: goBack});
		tlPageTransitionOut.to(preloaderParent, 0.25, {display: "block", opacity: 1, ease: Expo.easeIn})
						   .to(preloaderLogo, 0.25, {display: "block", opacity: 1, ease: Expo.easeIn})
						   .to(preloaderIndicator, 0.25, {autoAlpha: 1, ease: Expo.easeIn});

	var goBack = function() {
		if (isFirefox) {
			window.location.href = "index";
		} else {
			parent.history.back();
		}
	};

	return false;

});

/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

preloadStart();

/* -------------------------------------------------- */
/* APIs / PLUGINS
/* -------------------------------------------------- */

// SCRIPTS
var pageInit = function() {
	"use strict";
	

	
};

// PLUGINS
var pageReady = function() {
	"use strict";

    // Init 'Foundation'.
	$(document).foundation();
	
 	// Reinitialize 'Equalizer' plugin.
	TweenMax.delayedCall(0.1, Foundation.reInit, ["equalizer"]);
	
	loadComponents();
	uiInit();
	uiSmoothScroll();
	uiRelayout();
	uiSocialLinks();
	uiCustom();
	//hashNav();
	runPageDefaults();
	
};

/* -------------------------------------------------- */
/* LOCK AND LOADED
/* -------------------------------------------------- */

// PREPARING CONTENT
 $(document).ready(function () {
	"use strict";
	//console.log("Initializing...");

	//pageInit();
	//loadComponents(); 
	
});





function onLoad(loading, loaded) {
	
	if (document.readyState === "complete") {
		return loaded();
	}
	
	loading();

	if (window.addEventListener) {
		
		window.addEventListener("load", loaded, false);
		
	} else if (window.attachEvent) {
		
		window.attachEvent("onload", loaded);
		
	}
}

onLoad(function () {
	
	console.log("Initializing...");
	
	pageInit();
	
}, function () {
	
	console.log("Content ready: All assets and resources loaded.");

	preloadEnd();
	pageReady();

});





// CONTENT LOADED
/*
 $(window).on("load", function () {
	"use strict";
	console.log("Content ready.");

	preloadEnd();
	pageReady();
    
});
*/
