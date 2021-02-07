// const flightPath6 = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 100, y: 400},
//         {x: 150, y: 450},
//         {x: 200, y: 500},
//         {x: 400, y: 700},
//         {x: 650, y: 720},
//         {x: 700, y: 650},
//         {x: 650, y: 550},
//         {x: 100, y: 720},
//         {x: 200, y: 1190},
//         {x: 300, y: 1290},
//         {x: 400, y: 1390},
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
    TweenLite.to('.tv-border', 100 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "translateY(1200px) scale(0.4)"
    })
)

const controller6 = new ScrollMagic.Controller();

const scene6 = new ScrollMagic.Scene({
    triggerElement: '#tv-trigger',
    duration: 700,
    triggerHook: 0.2 

})
.setTween(tween6)
.addIndicators()
// .setPin('#tv-trigger')
.addTo(controller6)