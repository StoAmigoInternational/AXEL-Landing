/* -------------------------------------------------- */
/* SET-UP
/* -------------------------------------------------- */

var uiInit = function() {
	"use strict";
	
	/* -------------------------------------------------- */
	/* SET-UP
	/* -------------------------------------------------- */	
	
	//console.log("Initializing UI...");	

	// NAV TOGGLE
	if (hideNavToggle === true) {
		
		$("#navbar-toggle").remove();
		
	}
	
	if ( useNavbarToggleColor === true && navbarToggleColor.indexOf("#") > -1 ) {

		$(navbarToggle).find(".nav-toggle div span").css({"background-color": ''+navbarToggleColor+''});
		
	} else if ( useNavbarToggleColor === true && !(navbarToggleColor.indexOf("#") > -1) ) {
		
		$(navbarToggle).find(".nav-toggle div span").addClass(navbarToggleColor);
		
	}
	
	if ( navPanelToggleColor.indexOf("#") > -1 ) {

		$(navPanelToggle).find(".nav-toggle .cross span").css({"background-color": ''+navPanelToggleColor+''});
		
	} else if ( useNavbarToggleColor === true && !(navbarToggleColor.indexOf("#") > -1) ) {
		
		$(navPanelToggle).find(".nav-toggle .cross span").addClass(navPanelToggleColor);
		
	}
	
	// NAV PANEL
	var navPanelOffCanvas = new Foundation.OffCanvas($(navPanel), {
		closeOnClick: true,
		contentOverlay: true,
		contentId: "content",
		nested: false,
		contentScroll: false, // Set to true or else this will scroll back to the top of page when off-canvas content is open.
		transitionTime: null,
		transition: "overlap", //push, detached, slide
		forceTo: false,
		isRevealed: false,
		revealOn: null,
		autoFocus: false,
		revealClass: "reveal-for-",
		trapFocus: false
	});
	
	// Clone contents of 'navbarItems' and replace to 'navPanelItems'.
	//$(navbarItems).children().clone().appendTo(navPanelItems).children().attr("data-toggle", ''+navPanel.substring(1)+'').addClass(navPanelItemsClass);
	
	// You can add 'no-clone' to remove items from 'navPanelItems'.
	$(navPanelItems).find(".no-clone").children().remove();
	$(navPanelItems).find(".no-clone").remove();
	
	/*
	if ($(navPanelItems).find("*").hasClass("no-clone")) {
		
		$(navPanelItems).find(".no-clone").remove();
		
	}
	*/
	
	// Disable 'href' on elements that have the 'data-toggle' attribute.
    /*
	$("*[data-toggle]").on("click", function(e) {
		e.preventDefault();
	});
    */
	
	// Set 'navPanel' to full width on mobile devices.
	if (isTouch) {

		$(navPanel).addClass("off-canvas-width-full");

	} else {

		$(navPanel).removeClass("off-canvas-width-full");

	}
	
	if (showToolbar === false) {
		
		$(toolbar).remove();
		
	}
    
    // FULLSCREEN / COVER
    /*
    var fullscreenWidth = $(window).width();
    	fullscreenHeight = $(window).height();

    $(".background-fullscreen, .fullscreen").css({"width": fullscreenWidth, "height": fullscreenHeight});
    */
	
	/* -------------------------------------------------- */
	/* WAVES
	/* -------------------------------------------------- */

	if (useButtonRippleEffect === true && !(isEdge || isExplorer) ) {
		
		//$(".button").css({"padding": "0 0 0 0"});
		
		Waves.attach(".button", ["waves-circle"]);

		Waves.attach(".button.background-dark-grey", ["waves-light"]);
		Waves.attach(".button.background-charcoal", ["waves-light"]);
		Waves.attach(".button.background-black", ["waves-light"]);

		Waves.attach(".button.background-primary", ["waves-button"]);
		Waves.attach(".button.background-secondary", ["waves-button"]);
		Waves.attach(".button.background-accent", ["waves-button"]);
		Waves.attach(".button.background-light-grey", ["waves-button"]);
		Waves.attach(".button.background-white", ["waves-button"]);


		Waves.attach(".button.button-fx-waves-button", ["waves-button"]);
		Waves.attach(".button.button-fx-waves-circle", ["waves-circle"]);
		Waves.attach(".button.button-fx-waves-light", ["waves-light"]);
		Waves.attach(".button.button-fx-float", ["waves-float"]);
		Waves.attach(".button.button-fx-waves-block", ["waves-block"]);

		Waves.init();
		
	}
	
	/*
	$(".button").on("click touchend mousedown", function() {
		$(this).css({"color": "initial", "background-color": "initial"});
	});
	*/
	
	/* -------------------------------------------------- */
	/* MOMENTUM SCROLLING
	/* -------------------------------------------------- */

	if (disableNavPanelMomentumScrolling === true) {

		$(navPanel).addClass("touch-scroll-disabled");

	} else {

		$(navPanel).removeClass("touch-scroll-disabled");

	}

	/* -------------------------------------------------- */
	/* NAVBAR / TOOLBAR / CONTENT (MAIN) PROPERTIES
	/* -------------------------------------------------- */

	$(navbarMenubar).css({"width": "100%",
                          "max-width": navbarWidth});
    
	$(toolbarMenubar).css({"width": "100%",
                           "max-width": toolbarWidth});
    
    $(navPanel).find(".menubar-parent").css({"height": navbarHeight});

	$(main).css({"width": "100%",
                 "max-width": contentWidth});

	/* -------------------------------------------------- */
	/* NAV PANEL
	/* -------------------------------------------------- */

	// POSITION
	if (navPanelPosition === "top") {

		$(navPanel).addClass("position-top");

	} else if (navPanelPosition === "bottom") {

		$(navPanel).addClass("position-bottom");

	} else if (navPanelPosition === "left") {

		$(navPanel).addClass("position-left");

	} else if (navPanelPosition === "right") {

		$(navPanel).addClass("position-right");

	} else {

		$(navPanel).addClass("position-left");
	}

	// ANIMATION
	$(navPanel).css({"transition-duration": ''+navPanelTransitionSpeed+''});

	if ($.inArray(navPanelTransitionEase, ["Type 1", "Quad"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.455, 0.03, 0.515, 0.955)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 2", "Cubic"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.645, 0.045, 0.355, 1)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 3", "Quart"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.77, 0, 0.175, 1)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 4", "Quint"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.86, 0, 0.07, 1)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 5", "Sine"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.445, 0.05, 0.55, 0.95)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 6", "Expo"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(1, 0, 0, 1)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 7", "Circ"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.785, 0.135, 0.15, 0.86)"});

	} else if ($.inArray(navPanelTransitionEase, ["Type 8", "BackInOut"]) >= 0) {

		$(navPanel).css({"transition-timing-function": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"});

	} else {

		$(navPanel).css({"transition-timing-function": "ease"});

	}
	
	/* -------------------------------------------------- */
	/* BACKGROUND OPACITY
	/* -------------------------------------------------- */
	
	if (useUIOpacity === true) {
		
		if ( navbarBackgroundOpacity <= 1 ) {

			var a = $(navbar).css("background-color").slice(4).split(',');
			//newBackgroundColor = 'rgba('+a[0]+','+parseFloat(a[1])+','+parseFloat(a[2])+','+navbarBackgroundOpacity+')';
			$(navbar).css({"background-color": 'rgba('+a[0]+','+parseFloat(a[1])+','+parseFloat(a[2])+','+navbarBackgroundOpacity+')'});

		}

		if (showToolbar === true && toolbarBackgroundOpacity <= 1) {

			var a = $(toolbar).css("background-color").slice(4).split(',');
			$(toolbar).css({"background-color": 'rgba('+a[0]+','+parseFloat(a[1])+','+parseFloat(a[2])+','+toolbarBackgroundOpacity+')'});

		}

		if (navPanelBackgroundOpacity <= 1) {

			var a = $(navPanel).css("background-color").slice(4).split(',');
			$(navPanel).css({"background-color": 'rgba('+a[0]+','+parseFloat(a[1])+','+parseFloat(a[2])+','+navPanelBackgroundOpacity+')'});

		}

		if (panelOverlayBackgroundOpacity <= 1) {

			var a = $(panelOverlay).css("background-color").slice(4).split(',');
			$(panelOverlay).css({"background-color": 'rgba('+a[0]+','+parseFloat(a[1])+','+parseFloat(a[2])+','+panelOverlayBackgroundOpacity+')'});

		}
		
	}
	
	/* -------------------------------------------------- */
	/* BACKDROP FILTER
	/* -------------------------------------------------- */
	
	if (hasBackdropFilter && useNavbarBlur === true) {
		
		$(navbar).addClass(navbarBlurClass);
		$(navbar).css({"background-color": ''+blurOpacity+''});
	
	}

	if (hasBackdropFilter && useToolbarBlur === true) {

		$(toolbar).addClass(toolbarBlurClass);
		$(navbar).css({"background-color": ''+blurOpacity+''});
		
	}
	
	if (hasBackdropFilter && useNavPanelBlur === true) {

		$(navPanel).addClass(navPanelBlurClass);
		$(navbar).css({"background-color": ''+blurOpacity+''});

		$(panelOverlay).css({"background-color": "0"});
		
	}
	
	if (hasBackdropFilter && usePanelOverlayBlur === true) {
		
		$(panelOverlay).addClass(panelOverlayBlurClass);
		$(navbar).css({"background-color": ''+blurOpacity+''});
		
	}
	
}; // END uiInit

var uiSocialLinks = function() {
	"use strict";
	
	// PHONE NUMBER
	if (linkToPhoneNumber && usePhoneIcon === true) {
		$(socialItems).append('<li><a href="#" class="go-phone" aria-label="'+linkToPhoneNumber+'"><i class="fa fa-phone" aria-hidden="true"></i></a></li>');
	}

	if (linkToPhoneNumber && usePhoneLabel === true) {
		$(contactInfo).find(".go-phone a").text(phoneNumberLabel);
	}

	if (!linkToPhoneNumber || usePhoneLabel === false) {
		//console.log("You do not have a PHONE NUMBER defined for linkToPhoneNumber.");
		$(contactInfo).find(".go-phone").remove();
	}

	$(".go-phone a").on("click", function(e) {
		e.preventDefault();
		window.open('tel:'+linkToPhoneNumber+'');
	});




	// EMAIL
	if (linkToEmail && useEmailIcon === true) {
		$(socialItems).append('<li><a href="#" class="go-email" aria-label="'+linkToEmail+'"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>');

	}

	if (linkToEmail && useEmailLabel === true) {
		$(contactInfo).find(".go-email a").text(emailLabel);
	}

	if (!linkToEmail || useEmailLabel === false) {
		//console.log("You do not have an EMAIL defined for linkToEmail.");
		$(contactInfo).find(".go-email").remove();
	}

	if (linkToEmail.indexOf("@") > -1) {
		
		//console.log("Valid email detected.");
		
		$(".go-email").on("click", function(e) {
			e.preventDefault();
			window.location.href('mailto:'+linkToEmail+'?subject='+linkToEmailSubject+'');
		});
	
	} else {

		$(".go-email").on("click", function(e) {
			
			e.preventDefault();
			
			window.open(linkToEmail);
			
  			return false;
			
		});
		
		
	}

	// If phone number and email are not specified then completely remove it from the DOM.
	if (useEmailLabel === false && usePhoneLabel === false || !linkToEmail && !linkToPhoneNumber) {
		$(contactInfo).remove();
	}

	
	
	
	
	// SOCIAL ICONS
	if (linkToBehance) {
		//console.log(linkToFacebook);

		$(socialItems).append('<li><a href="#" class="text-behance-hover go-behance" aria-label="Behance"><i class="fa fa-behance" aria-hidden="true"></i></a></li>');

		$(".go-behance").on("click", function(e) {
			e.preventDefault();
			window.open(linkToBehance);
		});	

	}

	if (linkToCodepen) {

		$(socialItems).append('<li><a href="#" class="text-codepen-hover go-codepen" aria-label="Codepen"><i class="fa fa-codepen" aria-hidden="true"></i></a></li>');

		$(".go-codepen").on("click", function(e) {
			e.preventDefault();
			window.open(linkToCodepen);
		});	

	}

	if (linkToDribble) {

		$(socialItems).append('<li><a href="#" class="text-dribble-hover go-dribble" aria-label="Dribble"><i class="fa fa-dribble" aria-hidden="true"></i></a></li>');

		$(".go-dribble").on("click", function(e) {
			e.preventDefault();
			window.open(linkToDribble);
		});	

	}

	if (linkToEtsy) {

		$(socialItems).append('<li><a href="#" class="text-etsy-hover go-etsy" aria-label="Etsy"><i class="fa fa-etsy" aria-hidden="true"></i></a></li>');

		$(".go-etsy").on("click", function(e) {
			e.preventDefault();
			window.open(linkToEtsy);
		});	

	}

	if (linkToFacebook) {

		$(socialItems).append('<li><a href="#" class="text-facebook-hover go-facebook" aria-label="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>');

		$(".go-facebook").on("click", function(e) {
			e.preventDefault();
			window.open(linkToFacebook);
		});	

	}

	if (linkToGithub) {

		$(socialItems).append('<li><a href="#" class="text-github-hover go-github" aria-label="Github"><i class="fa fa-github" aria-hidden="true"></i></a></li>');

		$(".go-github").on("click", function(e) {
			e.preventDefault();
			window.open(linkToGithub);
		});

	}

	if (linkToGooglePlus) {

		$(socialItems).append('<li><a href="#" class="text-google-plus-hover go-google-plus" aria-label="Google+"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>');

		$(".go-google-plus").on("click", function(e) {
			e.preventDefault();
			window.open(linkToGooglePlus);
		});

	}

	if (linkToInstagram) {

		$(socialItems).append('<li><a href="#" class="text-instagram-hover go-instagram" aria-label="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>');

		$(".go-instagram").on("click", function(e) {
			e.preventDefault();
			window.open(linkToInstagram);
		});

	}

	if (linkToLinkedIn) {

		$(socialItems).append('<li><a href="#" class="text-linkedin-hover go-linkedin" aria-label="LinkedIn"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>');

		$(".go-linkedin").on("click", function(e) {
			e.preventDefault();
			window.open(linkToLinkedIn);
		});

	}

	if (linkToMedium) {

		$(socialItems).append('<li><a href="#" class="text-medium-hover go-medium" aria-label="Medium"><i class="fa fa-medium" aria-hidden="true"></i></a></li>');

		$(".go-medium").on("click", function(e) {
			e.preventDefault();
			window.open(linkToMedium);
		});

	}

	if (linkToPinterest) {

		$(socialItems).append('<li><a href="#" class="text-pinterest-hover go-pinterest" aria-label="Pinterest"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>');

		$(".go-pinterest").on("click", function(e) {
			e.preventDefault();
			window.open(linkToPinterest);
		});

	}

	if (linkToReddit) {

		$(socialItems).append('<li><a href="#" class="text-reddit-hover go-reddit" aria-label="Reddit"><i class="fa fa-reddit" aria-hidden="true"></i></a></li>');

		$(".go-reddit").on("click", function(e) {
			e.preventDefault();
			window.open(linkToReddit);
		});

	}

	if (linkToSkype) {

		$(socialItems).append('<li><a href="#" class="text-skype-hover go-skype" aria-label="Skype"><i class="fa fa-skype" aria-hidden="true"></i></a></li>');

		$(".go-skype").on("click", function(e) {
			e.preventDefault();
			window.open(linkToSkype);
		});

	}

	if (linkToSlack) {

		$(socialItems).append('<li><a href="#" class="text-slack-hover go-slack" aria-label="Slack"><i class="fa fa-slack" aria-hidden="true"></i></a></li>');

		$(".go-slack").on("click", function(e) {
			e.preventDefault();
			window.open(linkToSlack);
		});

	}

	if (linkToSnapchat) {

		$(socialItems).append('<li><a href="#" class="text-snapchat-hover go-snapchat" aria-label="Snapchat"><i class="fa fa-snapchat" aria-hidden="true"></i></a></li>');

		$(".go-snapchat").on("click", function(e) {
			e.preventDefault();
			window.open(linkToSnapchat);
		});

	}

	if (linkToTumblr) {

		$(socialItems).append('<li><a href="#" class="text-tumblr-hover go-tumblr" aria-label="Tumblr"><i class="fa fa-tumblr" aria-hidden="true"></i></a></li>');

		$(".go-tumblr").on("click", function(e) {	
			e.preventDefault();
			window.open(linkToTumblr);	
		});

	}

	if (linkToTwitch) {

		$(socialItems).append('<li><a href="#" class="text-twitch-hover go-twitch" aria-label="Twitch"><i class="fa fa-twitch" aria-hidden="true"></i></a></li>');

		$(".go-twitch").on("click", function(e) {		
			e.preventDefault();
			window.open(linkToTwitch);	
		});

	}

	if (linkToTwitter) {

		$(socialItems).append('<li><a href="#" class="text-twitter-hover go-twitter" aria-label="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>');

		$(".go-twitter").on("click", function(e) {
			e.preventDefault();
			window.open(linkToTwitter);		
		});

	}

	if (linkToVimeo) {

		$(socialItems).append('<li><a href="#" class="text-vimeo-hover go-vimeo" aria-label="Vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>');

		$(".go-vimeo").on("click", function(e) {
			e.preventDefault();
			window.open(linkToVimeo);
		});

	}

	if (linkToWhatsApp) {

		$(socialItems).append('<li><a href="#" class="text-whatsapp-hover go-whatsapp" aria-label="WhatsApp"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>');

		$(".go-whatsapp").on("click", function(e) {
			e.preventDefault();
			window.open(linkToWhatsApp);
		});

	}

	if (linkToYelp) {

		$(socialItems).append('<li><a href="#" class="text-yelp-hover go-yelp" aria-label="Yelp"><i class="fa fa-yelp" aria-hidden="true"></i></a></li>');

		$(".go-yelp").on("click", function(e) {
			e.preventDefault();
			window.open(linkToYelp);
		});

	}

	if (linkToYoutube) {

		$(socialItems).append('<li><a href="#" class="text-youtube-hover go-youtube" aria-label="YouTube"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>');

		$(".go-youtube").on("click", function(e) {
			e.preventDefault();
			window.open(linkToYoutube);
		});

	}

	// Show social icons in 'navPanel' or 'footer'.
	if ( showSocialIconsInNavPanel === true ) {

		// Define styles.
		$("#nav-panel-social-icons").find("li a").addClass(socialIconsNavPanelClass);

	} else {
        
        $("#nav-panel-social-icons").remove();
        
    }
    
    
	if ( showSocialIconsInFooter === true ) {

		// Define styles.
		$("#footer-social-icons").find("li a").addClass(socialIconsFooterClass);

	} else {
        
        $("#footer-social-icons").remove();
        
    }
    
	// If no social icons are specified then completely remove it from the DOM.
	if (!linkToCodepen && !linkToBehance && !linkToDribble && !linkToEtsy && !linkToFacebook && !linkToGithub && !linkToGooglePlus && !linkToInstagram && !linkToLinkedIn && !linkToMedium && !linkToPinterest && !linkToReddit && !linkToSkype && !linkToSnapchat && !linkToSlack && !linkToTumblr && !linkToTwitch && !linkToTwitter && !linkToVimeo && !linkToWhatsApp && !linkToYelp && !linkToYoutube || showSocialIconsInNavPanel === false && showSocialIconsInFooter === false ) {

		$(socialItems).remove();

	} else {

		// Define styles.
		//$(socialItems).find("li a").addClass(socialItemsClass);

	}
	
}; // END uiSocialLinks

var uiSmoothScroll = function() {
	"use strict";
	//console.log("Initializing uiSmoothScroll");

	/* -------------------------------------------------- */
	/* SET-UP
	/* -------------------------------------------------- */
	
	if ( !navPanelCloseOnLinkClick ) {
		
		$(navPanelItems).find(".scroll-to").removeAttr("data-toggle", ''+navPanel.substring(1)+'');

	}
	
	// Create 'location.hash' object to reference.
	var hash = getHash(location.hash);
	window.scrollTo(0, 0);
	
	/*
	var scrollToReset = function() {
		
		if (hash && $(hash).length > 0) {
			TweenMax.to(window, 1, {scrollTo: hash, ease: Power4.easeInOut});
		}
		
	};

	TweenMax.delayedCall(1, scrollToReset);
	*/
	
	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */
	
	if ( !isTouch && allowScrollTo ) {
		
		$(".scroll-to").on("click", function(e) {
			e.preventDefault();

			var hash = getHash($(this).attr("href"));
			
			if ( isEdge ) {
			
				TweenMax.to(body, scrollToSpeed, {scrollTo: {y: hash, offsetY: scrollToOffsetY, autoKill: true}, ease: scrollToEase});
				
			} else {
				
				TweenMax.to(html, scrollToSpeed, {scrollTo: {y: hash, offsetY: scrollToOffsetY, autoKill: true}, ease: scrollToEase});
				
			}

			// If supported by the browser we can even update the URL.
			/*
			if ( window.history && window.history.pushState ) {
					history.pushState("", document.title, hash);
			}
			*/

		});
		
	}
	
	
	$(".scroll-to-top").on("click", function(e) {
		e.preventDefault();
		
		if ( isMobileAll ) {
			
			window.scrollTo(0, 0);
		
		} else {
		
			TweenMax.to([html, body], scrollToSpeed, {scrollTo: {y: 0, offsetY: 0, autoKill: true}, ease: scrollToEase});
	
		}
		
	});

	/* -------------------------------------------------- */
	/* HASH CHECK
	/* -------------------------------------------------- */
	
	function getHash(h) {
		
		if (h !== '') {
			
			h = h.split('?');
			h = h[0];
			
		} else {
			
			h = false;
			
		}
		
		return h;
	}
	
}; // END uiSmoothScroll

/* -------------------------------------------------- */
/* NAVBAR / TOOLBAR
/* -------------------------------------------------- */

//TweenMax.set([navbar, toolbar, navbarMenubar, toolbarMenubar, $(navPanel).find(".menubar-parent")], {autoRound: true, force3D: true});

$(navbar).headroom({
	
    offset : stickyOffset, // Vertical offset in px before element is first unpinned.
    //tolerance : 0, // Scroll tolerance in px before state changes.
    tolerance : { // Or you can specify tolerance individually for up / down scroll.
        up : stickyScrollToleranceUp,
        down : stickyScrollToleranceDown
    },
	
    // CSS classes to apply.
    classes : {
        initial : "", // Element is initialised.
        pinned : "", // When scrolling up.
        unpinned : "", // When scrolling down.
        top : "", // When above offset.
        notTop : "", // When below offset.
        bottom : "", // When at bottom of scoll area.
        notBottom : "" // when not at bottom of scroll area.
    },
	
    scroller : pageContent, // Element to listen to scroll events on, defaults to 'window'.
	
    onPin : function() { // Callback when scrolling up.
        "use strict";
		console.log("Scrolling up.");
		
		//NAVBAR
		if ( navbarHideOnScrollUp === true ) {

			TweenMax.to(navbar, navbarHideSpeed, {y: - parseFloat(navbarHeight, 10), ease: navbarHideEase});

		} else {
			
			TweenMax.to(navbar, navbarHideSpeed, {y: 0, ease: navbarHideEase});
			TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarShrinkSpeed, {height: navbarShrinkHeight, ease: navbarShrinkEase});
			
		}
		
		// TOOLBAR
		if ( toolbarHideOnScrollUp === true ) {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: - parseFloat(toolbarHeight, 10), ease: toolbarHideEase});

		} else {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: 0, ease: toolbarHideEase});
			TweenMax.to(toolbarMenubar, toolbarShrinkSpeed, {height: toolbarShrinkHeight, ease: toolbarShrinkEase});
			

		}
		
	},

    onUnpin : function() { // Callback when scrolling down.
        "use strict";
		console.log("Scrolling down.");
		
		// NAVBAR
		if ( navbarHideOnScrollDown === true ) {

			TweenMax.to(navbar, navbarHideSpeed, {y: - parseFloat(navbarHeight, 10), ease: navbarHideEase});

			$(".dropdown").removeClass("active");
			$("ul.subnav").addClass("pointer-disabled");
			TweenMax.to("ul.subnav", 0.25, {autoAlpha: 0, x: 20, ease: Expo.easeIn});
			TweenMax.to($("ul.subnav").find("li a"), 0, {autoAlpha: 0, x: -50, ease: Linear.easeNone});

			
		} else {
			
			TweenMax.to(navbar, navbarHideSpeed, {y: 0, ease: navbarHideEase});

		}
		
		// TOOLBAR
		if ( toolbarHideOnScrollDown === true ) {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: - parseFloat(toolbarHeight, 10), ease: toolbarHideEase});

		} else {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: 0, ease: toolbarHideEase});

		}

	},

    onTop : function() { // Callback when above offset.
        "use strict";
		console.log("At top of page.");

		// SET-UP
		$(navbar).css({"position": "absolute"});
		$(navbar).removeClass(navbarStickyClass);
		
		
		TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarShrinkSpeed, {height: navbarHeight, ease: navbarShrinkEase});
		//TweenMax.to($(navPanel).find(".menubar-parent"), navbarShrinkSpeed, {height: navbarHeight, ease: navbarShrinkEase});
		
		// TOOLBAR
		if ( toolbarShowOnPageStart === true ) {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: 0, ease: toolbarHideEase});

		} else {
			
			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: - parseFloat(toolbarHeight, 10), ease: toolbarHideEase});
			
		}
        
        // MISC
        TweenMax.to(".scroll-hint", 0.25, {display: "block", opacity: 1, ease: Expo.easeIn});
		
        if (!isTouch) {
            
		  //TweenMax.set("*[data-emergence]", {autoAlpha: 0});
		  //TweenMax.set($("*[data-emergence]").children(), {autoAlpha: 0, y: 50});
            
        }
		
	},

    onNotTop : function() { // Callback when below offset.
        "use strict";
		console.log("Away from top of page.");
		
		// SET-UP
		if ( navbarAllowSticky === true ) {
			
			$(navbar).css({"position": "fixed", "top": "0"});
			$(navbar).addClass(navbarStickyClass);
			
		}
		
		
		if (useContentMargin === true) {

			$(main).css({"margin-top": (parseFloat(navbarShrinkHeight.replace(/px/,"")) / 16) + "rem"});

		} else {

			$(main).css({"margin-top": "0"});

		}
		
		
		TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarShrinkSpeed, {height: navbarShrinkHeight, ease: navbarShrinkEase});
		TweenMax.to(toolbarMenubar, toolbarShrinkSpeed, {height: toolbarShrinkHeight, ease: toolbarShrinkEase});
        
        // MISC
        TweenMax.to(".scroll-hint", 0.25, {display: "none", opacity: 0, ease: Expo.easeIn});
        
	},

    onBottom : function() { // Callback when at bottom of page.
		console.log("At bottom of page.");
		
		// NAVBAR
		if ( navbarShowOnPageEnd === true ) {

			TweenMax.to(navbar, navbarHideSpeed, {y: 0, ease: navbarHideEase});
			TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarHideSpeed, {height: navbarShowOnPageEndHeight, ease: navbarHideEase});

		} else {

			TweenMax.to(navbar, navbarHideSpeed, {y: - parseFloat(navbarHeight, 10), ease: navbarHideEase});
			TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarHideSpeed, {height: navbarShowOnPageEndHeight, ease: navbarHideEase});

		}
		
		// TOOLBAR
		if ( toolbarShowOnPageEnd === true ) {
			
			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: 0, ease: toolbarHideEase});
			TweenMax.to(toolbarMenubar, toolbarShrinkSpeed, {height: toolbarShowOnPageEndHeight, ease: toolbarShrinkEase});

		} else {

			TweenMax.to(toolbar, toolbarHideSpeed, {bottom: - parseFloat(toolbarHeight, 10), ease: toolbarHideEase});
			TweenMax.to(toolbarMenubar, toolbarShrinkSpeed, {height: toolbarShowOnPageEndHeight, ease: toolbarShrinkEase});

		}
		
		
	},

    onNotBottom : function() { // Callback when moving away from bottom of page.
		console.log("Away from bottom of page.");
		
		// NAVBAR
		//TweenMax.to([navbarMenubar, $(navPanel).find(".menubar-parent")], navbarShrinkSpeed, {height: navbarShrinkHeight, ease: navbarShrinkEase});
		
		// TOOLBAR
		TweenMax.to(toolbarMenubar, toolbarShrinkSpeed, {height: toolbarShrinkHeight, ease: toolbarShrinkEase});
		
	}
	
});

/* -------------------------------------------------- */
/* CUSTOM NAV
/* -------------------------------------------------- */

var uiCustom = function() {
	"use strict";
	
	// CLONE WARS
	// Clone contents of 'selector.subnav' and replace to 'selector.nav'.
	var subnavFeatures = $("ul.features.subnav").children(),
        subnavIndustries = $("ul.industries.subnav").children(),
        subnavCompany = $("ul.company.subnav").children(),
	
        navFeatures = "ul.features.nav",
        navIndustries = "ul.industries.nav",
        navCompany = "ul.company.nav",
        navInfo = "ul.info.nav";
        //navbarItems = "#navbar-items ul";
	
	
	
	
	$(subnavFeatures).clone()
					 .appendTo(navFeatures)
					 .attr("data-toggle", ''+navPanel.substring(1)+'');
	
	$(subnavIndustries).clone()
					   .appendTo(navIndustries)
					   .attr("data-toggle", ''+navPanel.substring(1)+'');
	
	$(subnavCompany).clone()
					.appendTo(navCompany)
					.attr("data-toggle", ''+navPanel.substring(1)+'');
	
	$(navbarItems).children().slice(3,6).clone().appendTo(navInfo).attr("data-toggle", ''+navPanel.substring(1)+'');

	// Remove '.no-clone' elements.  
   // $("#nav-panel-contents div .nav-items .cell ul").find(".no-clone").remove();
    $(".nav-items").children().find(".nav").find(".no-clone").remove();
    //$(".nav-items div").find(navInfo).find(".no-clone").children().remove();
    
    
    
    
    
    // Move existing list items to the end.
    $(navFeatures).find("li.move-to-end").appendTo("#footer .nav-items .cell ul.features.nav");
    $(navIndustries).find("li.move-to-end").appendTo("#footer .nav-items .cell ul.industries.nav");
    $(navCompany).find("li.move-to-end").appendTo("#footer .nav-items .cell ul.company.nav");
    $(navInfo).find("li.move-to-end").appendTo("#footer .nav-items .cell ul.info.nav");

	

    

	// MENUAIM
	TweenMax.set(".subnav", {autoAlpha: 0, x: 20});
	//TweenMax.set(".subnav li", {autoAlpha: 0, rotationX: -10, transformOrigin: "center top", transformPerspective: 10});
    TweenMax.set(".subnav li a", {autoAlpha: 0, x: -50});

	var navbarMenu = $("#navbar-items > ul").menuAim({

		activateCallback: activate, // Fired on row activation.
		deactivateCallback: deactivate, // Fired on row deactivation.
		enterCallback: activate, // Function to call when mouse enters a menu row. Entering a row does not mean the row has been activated, as the user may be mousing over to a subnav.
		exitCallback: $.noop, // Function to call when mouse exits a menu row.
		exitMenuCallback: $.noop,  // Function to call when mouse exits whole menu. This is needed for auto-closing subnav.
		triggerEvent: "both", // 'hover', 'click', 'both'.
		rowSelector: "> li", // Selector for identifying which elements in the menu are rows.
		handle: "> a", // Handle for triggering mouse clicks on menu item.
		submenuSelector: ".no-dropdown", // You may have some menu rows that aren't subnavs and therefore shouldn't ever need to 'activate'. If so, filter submenu rows wwith this selector. Defaults to '*' (all elements).
		submenuDirection: "below", // Direction the submenu opens relative to the main menu: 'left', 'right', 'above', 'below'.
		openClassName: null,  // Class that will be applied to menu item when activated.
		tolerance: 25, // Bigger = more tolerant for mouse movement precision when entering subnav.
		activationDelay: 0, // Delay (ms) for first subnav opening.
		mouseLocsTracked: 3, // Number of past mouse locations to track direction.
		defaultDelay: 0, // Delay (ms) when user appears to be entering subnav and mouse movement is being tracked.

	});

	function activate(row) {
		//console.log("Open");

		var navCalc = $(row).width() / 2,
			subnav = $(row).find(".subnav"),
			subnavCalc = $(row).find(".subnav").width() / 2;

		subnav.css({"width": $(row).width() + 75 + "px"});

		$(row).find(".dropdown").addClass("active");
		$("ul.subnav").removeClass("pointer-disabled");
        
		TweenMax.to(subnav, 0.5, {autoAlpha: 1, x: - (subnavCalc - navCalc) + "px", ease: Expo.easeInOut, overwrite: "all"});
		//TweenMax.staggerTo(subnav.find("li"), 0.25, {autoAlpha: 1, rotationX: 0, ease: Expo.easeInOut}, 0.12);
		TweenMax.staggerTo(subnav.find("li a"), 0.25, {autoAlpha: 1, x: 0, ease: Expo.easeInOut}, 0.025);

	}

	function deactivate(row) {
		//console.log("Closed");

		var subnav = $(row).find(".subnav");

		$(row).find(".dropdown").removeClass("active");

		TweenMax.to(subnav, 0.25, {autoAlpha: 0, x: 20, ease: Expo.easeIn});
		//TweenMax.to(subnav.find("li"), 0.15, {autoAlpha: 0, rotationX: -10, ease: Expo.easeIn});
		TweenMax.to(subnav.find("li a"), 0, {autoAlpha: 0, x: -50, ease: Linear.easeNone});

	}

}; // END uiCustom

/* -------------------------------------------------- */
/* LAYOUT
/* -------------------------------------------------- */

var uiRelayout = function() {  
	"use strict";
    
	// MARGINS / PADDING
	// Set for '.grid-padding-x > .cell' elements.
	if ( !isPhone && $(main).find(".grid-x").hasClass("grid-padding-x") ) {
	
        // Default
		$(main).find(".grid-x.grid-padding-x:not(.padding-ignore) > .cell:not(.padding-ignore)").css({"padding-top": (parseFloat(gridCellPaddingTB.replace(/rem/,"")) * 2) + "rem",
													                             "padding-bottom": (parseFloat(gridCellPaddingTB.replace(/rem/,"")) * 2) + "rem",
													                             "padding-left": ''+gridCellPaddingLR+'',
													                             "padding-right": ''+gridCellPaddingLR+''});
        
        // Don't add 'padding' to top or bottom.
		$(main).find(".grid-x.grid-padding-x.padding-ignore > .cell:not(.padding-ignore)").css({"padding-left": ''+gridCellPaddingLR+'',
                                                            "padding-right": ''+gridCellPaddingLR+''});
        
        // Ignore 'padding' on '.cell'.
		$(main).find(".grid-x.grid-padding-x > .cell.padding-ignore").css({"padding-top": "0",
													                       "padding-bottom": "0",
													                       "padding-left": "0",
													                       "padding-right": "0"});
		
	}
	
	// Set for '.grid-padding-y > .cell' elements.
	if ( !isPhone && $(main).find(".grid-y").hasClass("grid-padding-y") ) {
	
		$(main).find(".grid-y.grid-padding-y:not(.padding-ignore) > .cell").css({"padding-top": ''+gridCellPadding+'',
													                               "padding-bottom": ''+gridCellPadding+'',
													                               "padding-left": ''+gridCellPadding+'',
													                               "padding-right": ''+gridCellPadding+''});
		
	}
	
    
    
    
    
    // Auto 'padding'.
	if (!isPhone) {
        
		$(".padding-auto").css({"padding-top": (parseFloat(gridCellPaddingTB.replace(/rem/,"")) * 2) + "rem",
								//"padding-bottom": ''+gridCellPaddingTB+'',
								"padding-left": ''+gridCellPaddingLR+'',
								"padding-right": ''+gridCellPaddingLR+''});
        
        /*
		$(".padding-auto").css({"padding-top": (parseFloat(navbarShrinkHeight.replace(/px/,"")) / 16 ) + "rem",
                                "padding-bottom": (parseFloat(gridCellPadding.replace(/px/,"")) + parseFloat(articlePadding.replace(/px/,"")) ) + "rem",
                                "padding-left": (parseFloat(gridCellPadding.replace(/px/,"")) + parseFloat(articlePadding.replace(/px/,"")) ) + "rem",
                                "padding-right": (parseFloat(gridCellPadding.replace(/px/,"")) + parseFloat(articlePadding.replace(/px/,"")) ) + "rem"});
        */
        
    }
    
    if (isPhone) {
        
		$(".padding-auto").css({"padding-top": (parseFloat(gridCellPaddingTBPhone.replace(/rem/,"")) ) + "rem",
								//"padding-bottom": ''+gridCellPaddingTBPhone+'',
								"padding-left": ''+gridCellPaddingLRPhone+'',
								"padding-right": ''+gridCellPaddingLRPhone+''});
        
        /*
		$(".padding-auto").css({"padding-top": (parseFloat(gridCellPaddingPhone.replace(/px/,"")) + parseFloat(articlePaddingPhone.replace(/px/,"")) ) + "rem",
                                "padding-bottom": (parseFloat(gridCellPaddingPhone.replace(/px/,"")) + parseFloat(articlePaddingPhone.replace(/px/,"")) ) + "rem",
                                "padding-left": (parseFloat(gridCellPaddingPhone.replace(/px/,"")) + parseFloat(articlePaddingPhone.replace(/px/,"")) ) + "rem",
                                "padding-right": (parseFloat(gridCellPaddingPhone.replace(/px/,"")) + parseFloat(articlePaddingPhone.replace(/px/,"")) ) + "rem"});
        */

    }

    
    
    

    // Set 'padding' for mobile devices.
	if ( isPhone && $(main).find(".grid-x").hasClass("grid-padding-x") ) {
	   
        // Default
		$(main).find(".grid-x.grid-padding-x:not(.padding-ignore) > .cell").css({"padding-top": ''+gridCellPaddingTBPhone+'',
                                                            "padding-bottom": ''+gridCellPaddingTBPhone+'',
                                                            "padding-left": ''+gridCellPaddingLRPhone+'',
                                                            "padding-right": ''+gridCellPaddingLRPhone+''});
        
        // Don't add 'padding to top or bottom.
		$(main).find(".grid-x.grid-padding-x.padding-ignore > .cell").css({"padding-left": ''+gridCellPaddingLRPhone+'',
                                                            "padding-right": ''+gridCellPaddingLRPhone+''});
        
        // Ignore 'padding' on '.cell'.
		$(main).find(".grid-x.grid-padding-x > .cell.padding-ignore").css({"padding-top": "0",
													                       "padding-bottom": "0",
													                       "padding-left": "0",
													                       "padding-right": "0"});
		
	}
	
	if ( isPhone && $(main).find(".grid-y").hasClass("grid-padding-y") ) {
	
		$(main).find(".grid-y.grid-padding-y > .cell").css({"padding-top": ''+gridCellPaddingTBPhone+'',
                                                            "padding-bottom": ''+gridCellPaddingTBPhone+'',
                                                            "padding-left": ''+gridCellPaddingLRPhone+'',
                                                            "padding-right": ''+gridCellPaddingLRPhone+''});
		
	}
    
    
    
    
    
    // Center text on mobile devices.
    if ( isPhone && centerHeaderTextPhone === true ) {
    
        $("h1, h2, h3, h4, h5, h6").addClass("text-center");
        
    }
    
    if ( isPhone && centerParagraphTextPhone === true ) {
    
        $("p").addClass("text-center");
        
    }
	
	
	
	
	
	// TOOLBAR
	if ( showToolbar === true && toolbarHideOnScrollDown === true || showToolbar === true && toolbarShowOnPageEnd === true ) {

		 // First we remove 'margin-bottom' and add '10px' to 'padding-bottom' attribute.
		$(main).css({"margin-bottom": "0", 
                     "padding-bottom": "0"});

		// Then we take the value from 'toolbarShowOnPageEndHeight' apply it to 'margin-bottom' to 'main' selector.
		//$(main).children(section + ":last-child").css({"padding-bottom": (parseFloat(toolbarShowOnPageEndHeight.replace(/px/,"")) / 16 + 0) + "rem"});
		$(footer).css({"padding-bottom": (parseFloat(toolbarShowOnPageEndHeight.replace(/px/,"")) / 16 + 4) + "rem"});
        
	}
    
    
    
    
    
	// NAVBAR
	if ( isTouch || persistentMenuToggle === false && Modernizr.mq('(min-width: 0) and (max-width: '+navbarBreakpoint+' )') ) {
		//console.log("Mobile Navbar");
		
		$(navbarLogo).removeClass("button-width-md");
		$(navbarContents).addClass("hide");
		$(navbarCallout).addClass("hide");
		$(navbarToggle).removeClass("hide");
		
	} else if (persistentMenuToggle === true) {

		$(navbarLogo).removeClass("button-width-md");
		$(navbarContents).addClass("hide");
		$(navbarCallout).addClass("hide");
		$(navbarToggle).removeClass("hide");
		
	} else {
		//console.log("Desktop Navbar");
		//navPanelOffCanvas.close();
		$(navbarLogo).addClass("button-width-md");
		$(navbarContents).removeClass("hide");
		$(navbarCallout).removeClass("hide");
		$(navbarToggle).addClass("hide");
		
	}
	
	
	
	
	
	// NAVBAR CALLOUT
	if ( useNavbarCallout === false || !navbarCallout ) {
		
		$(navbarCallout).remove();
		
	} else {
		
		//console.log("Callout button not used.")
		
	}
	
	
	
	
	
	// TOOLBAR
	if ( toolbarShowOnMobileOnly === false && Modernizr.mq('(min-width: 0) and (max-width: '+toolbarBreakpoint+' )') ) {
		//console.log("Show Toolbar");
		
		$(toolbar).removeClass("hide");
		//TweenMax.to(toolbar, 0.5, {autoAlpha: 1, ease: Expo.easeOut});
		
	} else if ( isTouch && toolbarShowOnMobileOnly === true && Modernizr.mq('(min-width: 0) and (max-width: '+toolbarMobileBreakpoint+')') ) {
		//console.log("Mobile Toolbar");
		
		$(toolbar).removeClass("hide");
		//TweenMax.to(toolbar, 0.5, {autoAlpha: 1, ease: Expo.easeOut});
		
	} else {
		//console.log("Desktop Toolbar");
		
		$(toolbar).addClass("hide");
		//TweenMax.to(toolbar, 0.5, {autoAlpha: 0, ease: Expo.easeOut});

	}
	
	
	
	

	// Remove borders from 'toolbar' buttons.
	if ( Modernizr.mq('(min-width: 0) and (max-width: 600px)') ) {
        
        /*
        var fontSize = parseFloat($(toolbarMenubar).find(".cell a div .fa").css("font-size"));
            fontSize = (fontSize / 0.02) + "em";
        */

		$(toolbarMenubar).find(".cell a div span").css({"display": "none"});
        
		$(toolbarMenubar).find(".cell a div .fa").css({"display": "block",
                                                       "margin": "0 0 0 0"});
        
	
	}
	
	if ( Modernizr.mq('(min-width: 0) and (max-width: 620px)') ) {

		//$(toolbarMenubar).find("div:nth-child(odd)").addClass("border-none");
	
	} else {
		
		//$(toolbarMenubar).find("div:nth-child(odd)").removeClass("border-none");
		
	}
	
};

$( window ).resize(function() {
	
 uiRelayout();
});


//$(window).resize(_.debounce(uiRelayout, 0));
