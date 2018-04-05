/* -------------------------------------------------- */
/* SCRIPTS
/* -------------------------------------------------- */

// GOOGLE ANALYTICS (GTAG)

var tagGA = document.createElement("script");
	tagGA.src = "https://www.googletagmanager.com/gtag/js?id=GTM-W6B23N5";

	//tgGA.setAttribute("defer","");
	tagGA.setAttribute("async","");

var scriptGA = document.getElementsByTagName("script")[0];
	scriptGA.parentNode.insertBefore(tagGA, scriptGA);

/* -------------------------------------------------- */
/* GOOGLE ANALYTICS
/* -------------------------------------------------- */

window.dataLayer = window.dataLayer || [];

function gtag() {
	"use strict";
	
	dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "GTM-W6B23N5");
