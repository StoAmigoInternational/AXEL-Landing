		/* -------------------------------------------------- */
		/* HERO HEADER INTRO
		/* -------------------------------------------------- */

        if ( $hero.length && !$hero.hasClass( $(".hero-intro") ) ) {
    
            var $introHeader = ".hero header h1",
                $introSubheader = ".hero header h2";

            // SET-UP
            TweenLite.set([$introHeader, $introSubheader], {transformOrigin: "center center"});

            var heroHeaderSplitText = new SplitText($introHeader, {type: "words, chars, lines", charsClass: "font-heavy"}), 
                heroHeaderSplitText = heroHeaderSplitText.chars;

            var heroSubheaderSplitText = new SplitText($introSubheader, {type: "words, chars, lines", charsClass: "font-paragraph"}), 
                heroSubheaderSplitText = heroSubheaderSplitText.words;
			
            // ANIMATION
            var tlHeroHeader = new TimelineMax({paused: true});

            tlHeroHeader.staggerFrom(heroHeaderSplitText, 1, {autoAlpha: 0, y: 40, ease: Elastic.easeInOut}, 0.04, "start-=0")
                        .staggerFrom(heroSubheaderSplitText, 1, {autoAlpha: 0, y: 20, ease: Elastic.easeOut}, 0.04, "-=0.5")
                        .from($(".hero").children().find(".cell:nth-child(2)"), 1, {autoAlpha: 0, ease: Back.easeOut}, "-=1.25")
                        .staggerFrom($(".hero").children().find(".cell .button-group .button"), 0.25, {autoAlpha: 0, ease: Elastic.easeOut}, 0.12, "-=1")
                        //.from(".hero .scroll-hint", 0.5, {autoAlpha: 0,  y: 20, ease: Back.easeOut}, "-=0.75")
                        .to(".hero .anim-perspective-scroll", 1, {autoAlpha: 0.5, ease: Back.easeOut}, "end-=0.25");

            if ( !$(hero).hasClass("sticky") ) {

                tlHeroHeader.play().timeScale(1).delay(1);

            } else {

                tlHeroHeader.seek("end", false);

            }
        }



var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink"
select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  mainSVG = select('.mainSVG'),
  waveyPath = select('#waveyPath'),
  pop = select('#pop'),
  follower = select('#follower'),
  movingPath = select('#movingPath'),
  jumpingLorry = select('#jumpingLorry'),
  movingLorry = select('#movingLorry'),
  lorryGroup = select('#lorryGroup'),
  particleContainer = select('#particleContainer'),
  //particleTypeArray = ['#flake1', '#flake2', '#flake3', '#star','#heart'],
  particleTypeArray = ['#bubble', '#heart'],
  particleColorArray = ['#F3F1E2', '#B51541'],
  particlePool = [],
  popPool = [],
  numParticles = 270,
  particleCount = 0

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(lorryGroup, {
  transformOrigin: '50% 100%'
})
TweenMax.set(jumpingLorry, {
  transformOrigin: '50% 50%',
  rotation: 0
})
TweenMax.set(follower, {
  x: 0,
  y: 0
})
TweenMax.set(pop, {
  alpha:0
  
})
var waveyPathBezier = MorphSVGPlugin.pathDataToBezier(waveyPath.getAttribute('d'), {
  offsetX: -(lorryGroup.getBBox().width / 2),
  offsetY: -(lorryGroup.getBBox().height) - waveyPath.getAttribute('stroke-width')
})

var tl = new TimelineMax({
  repeat: -1,
  onUpdate: playParticle
});
tl.to(lorryGroup, 6, {
    bezier: {
      type: "cubic",
      values: waveyPathBezier,
      autoRotate: true
    },
    ease: Linear.easeNone
  })
  .to([movingPath, movingLorry], 6, {
    x: -1200,
    ease: Linear.easeNone
  }, '-=6')

var jumpTl = new TimelineMax();
jumpTl.to(lorryGroup, 0.16, {
  //y:-6,
  scaleY: 0.97,
  scaleX: 1.03,
  repeat: -1,
  ease: Linear.easeNone,
  yoyo: true
})

function createParticlePool() {

  var i = numParticles,
    p, popClone;
  while (--i > -1) {

    p = document.createElementNS(xmlns, 'use');
    popClone = pop.cloneNode(true);
    //pop.setAttributeNS(xlinkns, "xlink:href", '#pop');
    p.setAttributeNS(xlinkns, "xlink:href", particleTypeArray[i % particleTypeArray.length]);
    follower.appendChild(p);
    follower.appendChild(popClone);

    p.setAttributeNS(null, 'stroke', particleColorArray[i % particleColorArray.length]);
    //popClone.setAttributeNS(null, 'opacity', 1);
    //p.setAttribute('class', "particle");
    particlePool.push(p);
    popPool.push(popClone);
    TweenMax.set([p, popClone], {
      transformOrigin: '50% 50%',
      alpha:1,
      x:-100,
      y:-100
        //x:300,
        //y:follower._gsTransform.y
    })
    
    
    TweenMax.set([p], {
      scale: 0
    })

  }

}

//ScrubGSAPTimeline(tl);

function playParticle() {
  //console.log(particleCount%250 == 1)

  if (particleCount % 13) {
    particleCount++;
    checkParticleCount();
    return;
  }

  var p = particlePool[particleCount];
  TweenMax.set(p, {
    x: 260,
    y: lorryGroup._gsTransform.y + 12,
    //scale:0,
    alpha: 1
  })

  var s = randomBetween(5, 10) / 10;
  TweenMax.to(p, 0.46, {
    scaleX: s,
    ease: Elastic.easeOut.config(1, 0.83)
  })
  TweenMax.to(p, 0.6, {
    scaleY: s,
    ease: Elastic.easeOut.config(1, 0.4)
  })
  TweenMax.to(p, randomBetween(1, 2), {
    //paused:true,
    physics2D: {
      velocity: randomBetween(30, 165),
      angle: randomBetween(-180, -160),
      gravity: randomBetween(-130, -17)
    },
    onComplete: function(p) {
      TweenMax.set(p, {
        scale: 0
      })

      createPop(p);
    },
    onCompleteParams: [p]
  });

  particleCount++;

  checkParticleCount();
}

function createPop(p) {

  var popTl = new TimelineMax(),
    popClone = popPool[particleCount],
    popLines = popClone.getElementsByTagName('line'),
    popCircle = popClone.getElementsByTagName('circle');
  TweenMax.set(popClone, {
    x: p._gsTransform.x - 10,
    y: p._gsTransform.y - 10,
    rotation: 45
  })

  TweenMax.set(popCircle, {
    alpha: 1,
    attr: {
      r: 0
    }
  })
  popTl.set(popLines, {
      drawSVG: '0% 0%'

    })
    .to(popLines, 0.3, {
      drawSVG: '0% 20%',
      ease: Linear.easeNone
    })
    .to(popLines, 0.6, {
      drawSVG: '80% 100%',
      ease: Linear.easeNone
    })
    .to(popLines, 0.2, {
      drawSVG: '105% 105%',
      ease: Linear.easeNone
    })
    .to(popClone, 1, {
      x: '-=20',
      y: '-=20',
      scale: 0.5,
      ease: Linear.easeNone
    }, '-=' + popTl.duration())
    .to(popCircle, 1, {
      attr: {
        r: 6
      },
      alpha: 0,
      ease: Expo.easeOut
    }, '-=' + popTl.duration());

  popTl.timeScale(1.6)
}

function checkParticleCount() {
  particleCount = (particleCount >= numParticles) ? 0 : particleCount;
}

tl.timeScale(1);
createParticlePool();
 //ScrubGSAPTimeline(tl);
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}