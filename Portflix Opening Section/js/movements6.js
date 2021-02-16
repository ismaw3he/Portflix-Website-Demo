// const flightPath6 = {
//     // curviness: 1.25,
//     // autoRotate: true,
//     values: [
//         {x: 0, y: 800},
//         {x: 0, y: 800},
//         {x: 0, y: 0},
//         {x: 0, y: 0},
//         {x: 0, y: 0},
//         {x: 0, y: 0},
//         {x: 0, y: 0},
//         // {x: 450, y: 1190},
//         // {x: 490, y: 1190},
//         // {x: 510, y: 1190},
//         // {x: 530, y: 1190},
//         // {x: 550, y: 1190},
//         // {x: 580, y: 1190},
//         // {x: 600, y: 1190},
//         // {x: 620, y: 1190}
//     ]
// }
const tween6 = new TimelineLite();
tween6.add(
    TweenLite.to('.winter-img', 10 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        backgroundAttachment: "scroll",
        height: "870px",
        width: "101%",
        // backgroundSize: "1620px 900px"
    })
)
tween6.add(
    TweenLite.to('.tv-border', 200 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "translateY(800px) scale(0.4)"
    })
)

tween6.add(
    TweenLite.to('.tv-text-header', 100 ,{
        opacity: 1,
        transform: "translateY(-100px)"
    },0)
)
tween6.add(
    TweenLite.to('.tv-text-header',100 ,{
        opacity: 0,
        transform: "translateY(-150px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2', 100 ,{
        opacity: 1,
        transform: "translateY(1400px)"
    },0)
)

tween6.add(
    TweenLite.to('.tv-text-header-2',100 ,{
        opacity: 0,
        transform: "translateY(1300px)"
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
    duration: 1250,
    triggerHook: 0.2 

})
.setTween(tween6)
// .addIndicators()
// .setPin('#tv-trigger')
.addTo(controller6)

