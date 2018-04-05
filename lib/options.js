/* -------------------------------------------------- */
/* LOG
/* -------------------------------------------------- */

var logging = true,

/* -------------------------------------------------- */
/* CACHE SELECTORS / ELEMENTS
/* -------------------------------------------------- */

// NOTE: Variables need to be initialized again before document.ready().

// DOCUMENT
//$ = $,
pageContent = window,
html = "html",
body = "body",
//container = "#container",
main = "#content",
section = "section",
article = "article",
footer = "#footer",

// PRELOADER
/*
preloaderParent = "#preloader-parent",
preloaderIndicator = "#preloader-indicator",
preloaderLogo = "#preloader-parent ul#preloader-logo",
*/

// ELEMENTS
navbar = "#navbar",
navbarMenubar = "#navbar .menubar-parent",
navbarLogo = "#navbar-logo",
navbarContents = "#navbar-contents",
navbarItems = "#navbar-items ul",
navbarCallout = "#navbar-callout", // Set to false or leave blank to remove 'navbarCallout'.

//navToggle = "#nav-toggle",
navbarToggle = "#navbar-toggle",
navPanelToggle = "#nav-panel-toggle",

toolbar = "#toolbar",
toolbarMenubar = "#toolbar .menubar-parent",
toolbarContents = "#toolbar-contents",
toolbarItems = "#toolbar-items nav ul",

navPanel = "#nav-panel",
navPanelContents = "#nav-panel-contents",
navPanelItems = "#nav-panel-items ul",
navToggle = "#navbar-toggle .nav-toggle",
panelOverlay = ".js-off-canvas-overlay",

//particles = "#particles-js",

contactInfo = "#nav-contact-info",
socialItems = ".social-icons",

/* -------------------------------------------------- */
/* UI / CONTENT
/* -------------------------------------------------- */

// ELEMENT SIZING
contentWidth = "100%",
navbarWidth = "100%",
navbarHeight = "75px",
toolbarWidth = "100%",
toolbarHeight = "75px",
//navPanelWidth = "100%",
	
// MARGINS / PADDING
//articlePadding = "0",
gridCellPaddingTB = "1rem",
gridCellPaddingLR = "2rem",
    
//articlePaddingPhone = "1rem", // Recommend using 'em' or 'rem' units.
gridCellPaddingTBPhone = "2rem", // Recommend using 'em' or 'rem' units.
gridCellPaddingLRPhone = "2rem", // Recommend using 'em' or 'rem' units.
    
// COPY / TEXT
centerHeaderTextPhone = false,
centerParagraphTextPhone = false,

// BREAKPOINTS
hideNavToggle = true,
persistentMenuToggle = false,
navbarBreakpoint = "1265px",
toolbarBreakpoint = "1265px",
toolbarMobileBreakpoint = "1024px",

animateContentOnNavPanelOpen = false,
contentOpacity = 1,
contentScale = 1,
contentSpeed = 0.2,
contentEase = Expo.easeOut,

// SCROLL BEHAVIOR
allowScrollTo = true,
scrollToSpeed = 1,
scrollToOffsetY = 0,
scrollToEase = Expo.easeInOut,
disableNavPanelMomentumScrolling = false,

// BUTTONS
useButtonRippleEffect = true,

// BACKDROP FILTER
// This is a performance heavy effect. Use minimum when possible.
useNavbarBlur = false,
useToolbarBlur = false,
useNavPanelBlur = false,
usePanelOverlayBlur = false,
blurOpacity = 0.25,

//background-frost-xs, background-frost-sm, background-frost-md, background-frost-lg, background-frost-xl / leave blank if you do not want to use 'backdrop-filter'.
navbarBlurClass = "background-frost-xl",
toolbarBlurClass = "background-frost-xl",
navPanelBlurClass = "background-frost-mr-magoo",
panelOverlayBlurClass = "background-frost-xl",

// BACKGROUND OPACITY
useUIOpacity = false,
navbarBackgroundOpacity = 1,
toolbarBackgroundOpacity = 1,
navPanelBackgroundOpacity = 1,
panelOverlayBackgroundOpacity = 0,

// NAV TOGGLE
useNavbarToggleColor = false,
navbarToggleColor = "background-white",
navPanelToggleColor = "background-white",
	
// NAVBAR
stickyAnchor = "",
stickyAnchorTolerance = 0,
navbarAllowSticky = false,
navbarStickyClass = "sticky", // See 'app.css' for 'sticky-custom' class.
useContentMargin = false, // This will add 'margin-top' to 'main' content container when user scrolls down.
    
navbarShrinkHeight = "50px",
navbarShrinkSpeed = 1,
navbarShrinkEase = Expo.easeOut,
navbarHideOnScrollUp = false,
navbarHideOnScrollDown = false,
navbarShowOnPageEnd = true,
navbarShowOnPageEndHeight = "75px",
navbarHideSpeed = 0.25,
navbarHideEase = Expo.easeOut,

useNavbarCallout = false,

// TOOLBAR
showToolbar = true,
toolbarShowOnMobileOnly = true,
toolbarShrinkHeight = "50px",
toolbarShrinkSpeed = 1,
toolbarShrinkEase = Expo.easeOut,
toolbarHideOnScrollUp = true,
toolbarHideOnScrollDown = true,
toolbarShowOnPageStart = false,
toolbarShowOnPageEnd = true,
toolbarShowOnPageEndHeight = "75px",
toolbarHideSpeed = 0.25,
toolbarHideEase = Expo.easeOut,
	
// STICKY OFFSET
stickyOffset = 0,
stickyScrollToleranceUp = 0,
stickyScrollToleranceDown = 0,

navPanelPosition = "top",
navPanelScrollReset = true,
navPanelTransitionSpeed = "0.5s", // Define timing in s (ex: 1s).
navPanelTransitionEase = "Quint", // Define easing Type 1 to 8: Quad, Cubic, Quart, Quint, Sine, Expo, Circ, BackInOut.
navPanelCloseOnLinkClick = true,
navPanelItemsClass = "",

panelOverlayTransitionSpeed = 1,
//panelOverlayOutSpeed = 1,
panelOverlayDelay = 0.35, // Keep this number as low as possible.

// CONTACT INFORMATION / SOCIAL MEDIA ICONS
useEmailIcon = false,
useEmailLabel = false,
emailLabel = "Contact Us",
linkToEmail = "aries@ariesdatuin.com",
linkToEmailSubject = "Hello",

usePhoneIcon = false,
usePhoneLabel = false,
phoneNumberLabel = "702.555.7777",
linkToPhoneNumber = "+17025557777",

showSocialIconsInNavPanel = false,
showSocialIconsInFooter = true,
socialIconsNavPanelClass = "margin-none p6 round-full button button-width-xxs button-height-xxs text-white text-primary-hover background-charcoal-hover button-fx-glow",
socialIconsFooterClass = "margin-none p8 round-full button button-width-xxs button-height-xxs text-primary background-transparent-hover",

linkToBehance = "",
linkToCodepen = "",
linkToDribble = "",
linkToEtsy = "",
linkToFacebook = "https://www.facebook.com/StoAmigo",
linkToGithub = "",
linkToGooglePlus = "",
linkToInstagram = "",
linkToLinkedIn = "https://www.linkedin.com/company/stoamigo",
linkToMedium = "http://www.medium.com/@stoamigo",
linkToPinterest = "",
linkToReddit = "",
linkToSkype = "",
linkToSlack = "",
linkToSnapchat = "",
linkToTumblr = "",
linkToTwitch = "",
linkToTwitter = "https://twitter.com/StoAmigo",
linkToVimeo = "",
linkToWhatsApp = "",
linkToYelp = "",
linkToYoutube = "";
	
/* -------------------------------------------------- */
/* LOGIC
/* -------------------------------------------------- */

/* LOGGING */
if (logging === true) {
	// Allow console.log output.
} else {
	console.log = function() {};
}
