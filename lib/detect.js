/* -------------------------------------------------- */
/* CACHE SELECTORS / ELEMENTS
/* -------------------------------------------------- */

/*
if (hasPerformance) {
	
	var perfData = window.performance.timing; 
	var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
	var connectTime = perfData.responseEnd - perfData.requestStart;
	var renderTime = perfData.domComplete - perfData.domLoading;

	console.log(perfData);
	console.log(pageLoadTime);
	console.log(connectTime);
	console.log(renderTime);
	
} else {
	
  console.log("Performance stats not supported.")
	
}
*/

var isPhone = Modernizr.mq("(min-device-width: 0px) and (max-device-width: 414px)"),
	isTablet = Modernizr.mq("(min-device-width: 0px) and (max-device-width: 768px)"),
	isTabletPro = Modernizr.mq("(min-device-width: 0px) and (max-device-width: 1024px)"),
	isMobile = Modernizr.mq("(min-device-width: 0px) and (min-device-width: 1366px)"),
	isMediumScreen = Modernizr.mq("(min-width: 0px) and (max-width: 639px)"),
	isSmallScreen = Modernizr.mq("(min-width: 0px) and (max-width: 414px)"),
	isLargeScreen = Modernizr.mq("(min-width: 0px)"),
	isMobileAll = navigator.userAgent.toLowerCase().indexOf("android") > -1 || navigator.userAgent.toLowerCase().indexOf("iphone") > -1 || navigator.userAgent.toLowerCase().indexOf("ipad") > -1 || navigator.userAgent.toLowerCase().indexOf("ipod") > -1,
	isTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

/* -------------------------------------------------- */
/* DETECT SPECIFIC DEVICES
/* -------------------------------------------------- */

	/* -------------------------------------------------- */
	/* ANDROID
	/* -------------------------------------------------- */

	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");

	if ( isAndroid > -1 ) {

		console.log("Android device detected.");
		
		$(".is-ios").remove();
		$(".is-desktop").remove();

	} else {
		
		//console.log("Not an Android device.");
		
	}

	/* -------------------------------------------------- */
	/* APPLE
	/* -------------------------------------------------- */

	var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

	if ( isiPhone > -1 ) {
		console.log("iOS device detected.");
		
	  	$(".is-android").remove();
		$(".is-desktop").remove();
		
	}

	if ( isiPad > -1 ) {
		console.log("iOS device detected.");
		$(".is-android").remove();
		$(".is-desktop").remove();
		
	}

	if ( isiPod > -1 ) {
		console.log("iOS device detected.");
		$(".is-android").remove();
		$(".is-desktop").remove();
		
	}

	if ( isiPhone > -1 || isiPad > -1 || isiPod > -1 ) {
		console.log("iOS device detected.");
		
		$(".is-android").remove();
		$(".is-desktop").remove();
		
	} else {
		
		//console.log("Not iOS device.");
		
	}   

	/* -------------------------------------------------- */
	/* DESKTOP
	/* -------------------------------------------------- */

	if ( isAndroid > -1 || isiPhone > -1 || isiPad > -1 || isiPod > -1 ) {
		console.log("Mobile device detected.");
		
		$(".is-desktop").remove();
		
	}

/* -------------------------------------------------- */
/* MODERNIZR FEATURE DETECTION
/* -------------------------------------------------- */

var /*hasAmbientLight = Modernizr.ambientlight,*/
	hasBackdropFilter = Modernizr.backdropfilter;

    /*
	hasBattery = Modernizr.batteryapi,
	hasFetch = Modernizr.fetch,
	hasForceTouch = Modernizr.forcetouch,
	hasFullscreen = Modernizr.fullscreen,
	hasGamepads = Modernizr.gamepads,
	hasGeolocation = Modernizr.geolocation,
	hasHashChange = Modernizr.hashchange,
	hasHistory = Modernizr.history,
	hasLowBandwidth = Modernizr.lowbandwidth,
	hasLowBattery = Modernizr.lowbattery,
	hasNotification = Modernizr.notification,
	hasPassiveEventListeners = Modernizr.passiveeventlisteners,
	hasPageVisibility = Modernizr.pagevisibility,
	hasPerformance = Modernizr.performance,
	hasPointerEvents = Modernizr.pointerevents,
	hasPointerMQ = Modernizr.pointermq,
	hasProximity = Modernizr.proximity,
	hasScrollSnap = Modernizr.scrollsnappoints,
	hasTouchEvents = Modernizr.touchevents,
	hasVibrate = Modernizr.vibrate;
    */

/* -------------------------------------------------- */
/* DETECT TOUCH
/* -------------------------------------------------- */

var touch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isTouch) {
	console.log("This device is touch enabled and will disable all :hover states.");

	try {

		// Prevent exception on browsers not supporting DOM 'styleSheet' properly.
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;
				if (styleSheet.rules[ri].selectorText.match(":hover")) {
					
					//styleSheet.rules[ri].classList.add("has-touch");
					styleSheet.deleteRule(ri);

					
				}
			}
		}

	}

	catch (ex) {

	}

}

/* -------------------------------------------------- */
/* MEDIA QUERIES
/* -------------------------------------------------- */

var checkWindowSize = function() {  
	"use strict";
	
	if (isMobile && isTouch) {
		
		//console.log("Mobile");
		
	} else if ( (isTouch && !isPhone) || (isTouch && !isTablet) ) { 
		
		//console.log("Touch-enabled Desktop");
		
	} else if (!isTouch) {
		
		//console.log("Desktop");
		
	}
	
}; $(window).resize(checkWindowSize);
	
/* -------------------------------------------------- */
/* BROWSER
/* -------------------------------------------------- */

var browserDetect = {
	init: function() {
		"use strict";
		
		this.browser = this.searchString(this.dataBrowser) || "Other";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
	},
	searchString: function(data) {
		"use strict";
		
		for (var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			this.versionSearchString = data[i].subString;

			if (dataString.indexOf(data[i].subString) !== -1) {
				return data[i].identity;
			}
		}
	},
	searchVersion: function(dataString) {
		"use strict";
		
		var index = dataString.indexOf(this.versionSearchString);
		if (index === -1) {
			return;
		}

		var rv = dataString.indexOf("rv:");
		if (this.versionSearchString === "Trident" && rv !== -1) {
			return parseFloat(dataString.substring(rv + 3));
		} else {
			return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
		}
	},

	dataBrowser: [{
			string: navigator.userAgent,
			subString: "Edge",
			identity: "MS Edge"
		}, {
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer"
		}, {
			string: navigator.userAgent,
			subString: "Trident",
			identity: "Explorer"
		}, {
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		}, {
			string: navigator.userAgent,
			subString: "Opera",
			identity: "Opera"
		}, {
			string: navigator.userAgent,
			subString: "OPR",
			identity: "Opera"
		},

		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		}, {
			string: navigator.userAgent,
			subString: "Safari",
			identity: "Safari"
		}
	]
};

browserDetect.init();

var isChrome = browserDetect.browser === "Chrome",
	isExplorer = browserDetect.browser === "Explorer",
	isEdge = browserDetect.browser === "MS Edge",
	isFirefox = browserDetect.browser === "Fireforx",
	isOpera = browserDetect.browser === "Opera",
	isSafari = browserDetect.browser === "Safari";

console.log("You are using " + browserDetect.browser + " with version " + browserDetect.version);





// CHROME
if (isChrome) {

}

// EXPLORER / IE / EDGE
if (isExplorer || isEdge) {

	// Create elements for IE (8 and earlier), cause IE sucks.
	document.createElement("header");
	document.createElement("nav");
	document.createElement("main");
	document.createElement("footer");
	document.createElement("section");
	document.createElement("article");
	document.createElement("figure");
	document.createElement("figcaption");
	document.createElement("aside");
	
	$(preloaderIndicator).remove();

}

if (isExplorer) {
	
	$("#navbar .menubar-parent #navbar-logo a.logo-desktop svg").addClass("ie");
	$("#nav-panel .menubar-parent #nav-panel-logo a.logo-desktop svg").addClass("ie");
    
	$(".form-submit").addClass("ie");
	
}

// FIREFOX
if (isFirefox) {

}

// OPERA
if (isOpera) {

}

// SAFARI
if (isSafari) {
	
	$("*").removeClass("object-fit-cover");
	
}
