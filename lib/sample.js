// Controller
var ScrollMagicNavbarController = new ScrollMagic.Controller({
                        container: pageContent,
                        vertical: true,
                        globalSceneOptions: {
                            triggerHook: "0"
                        },
                        refreshInterval: 0,
                        loglevel: 2
                     });

// Animation
TweenMax.set(navbarMenubar, {height: navbarHeight});

var tlNavbar = new TimelineMax();

   tlNavbar.to(navbar, navbarHideSpeed, {top: - parseInt(navbarHeight, 10), ease: navbarHideEase});


// Scene
var ScrollMagicNavbarScene = new ScrollMagic.Scene({triggerElement: main, duration: 500, offset: 0})
                             .setTween(tlNavbar)
                             .addTo(ScrollMagicNavbarController);// Controller
var ScrollMagicNavbarController = new ScrollMagic.Controller({
                        container: pageContent,
                        vertical: true,
                        globalSceneOptions: {
                            triggerHook: "0"
                        },
                        refreshInterval: 0,
                        loglevel: 2
                     });

// Animation
TweenMax.set(navbarMenubar, {height: navbarHeight});

var tlNavbar = new TimelineMax();

   tlNavbar.to(navbar, navbarHideSpeed, {top: - parseInt(navbarHeight, 10), ease: navbarHideEase});


// Scene
var ScrollMagicNavbarScene = new ScrollMagic.Scene({triggerElement: main, duration: 500, offset: 0})
                             .setTween(tlNavbar)
                             .addTo(ScrollMagicNavbarController);