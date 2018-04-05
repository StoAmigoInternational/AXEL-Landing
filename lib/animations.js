
// FADE
var tlAnimFade = new TimelineMax({delay: 0,repeatDelay: 0,yoyo: false,repeat: -1});
	tlAnimFade.to(".anim-fade", 0.5, {autoAlpha: 0,ease: Linear.easeNone})
			  .to(".anim-fade", 0.5, {autoAlpha: 1,ease: Linear.easeNone});





// FLOAT
function getRandomInt(min, max) {
	"use strict";
	
	return Math.random() * (max - min) + min;
}

$(".anim-float").each(function() {
	"use strict";
	
	var dRand = getRandomInt(1,2);

	var tlAnimFloat = new TimelineMax({delay: 0,repeatDelay: 0,yoyo: false,repeat: -1});
	tlAnimFloat.to($(this), dRand, {y: 20,ease: Linear.easeNone})
			   .to($(this), dRand, {y: 0,ease: Linear.easeNone});
});





// PULSE
var tlAnimPulse = new TimelineMax({delay: 0,repeatDelay: 0,yoyo: false,repeat: -1});
	tlAnimPulse.set(".anim-pulse *", {autoAlpha: 0,x:-5})
			   .staggerTo(".anim-pulse *", 0.75, {autoAlpha: 1,x:0,ease: Expo.easeOut}, 0.12)
			   .staggerTo(".anim-pulse *", 0.5, {autoAlpha: 0,x:-5,delay: 0.5,ease: Expo.easeOut}, 0.12);
