
const tween6 = new TimelineLite();
tween6.add(
    TweenLite.to('.winter-img', 1 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        backgroundAttachment: "scroll",
        // backgroundSize: "1620px 900px"
    })
)
tween6.add(
    TweenLite.to('.tv-border', 200 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "translateY(500px) scale(0.4)"
    })
)

tween6.add(
    TweenLite.to('.tv-text-header', 100 ,{
        opacity: 1,
        transform: "translateY(-500px)"
    },0)
)
tween6.add(
    TweenLite.to('.tv-text-header',100 ,{
        opacity: 0,
        transform: "translateY(-600px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2', 100 ,{
        opacity: 1,
        transform: "translateY(900px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2',100 ,{
        opacity: 0,
        transform: "translateY(800px)"
    },0)
)

tween6.add(
    TweenLite.to('#canvas-container',200 ,{
        opacity: 1
    },0)
)
tween6.add(
    TweenLite.to('#hero-lightpass',200 ,{
        opacity: 1,
        display: "block"
    },0)
)


const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: '#tv-trigger',
    duration: 1000,
    triggerHook: 0.2 

})
.setTween(tween6)
// .addIndicators()
// .setPin('#tv-trigger')
.addTo(controller6)

