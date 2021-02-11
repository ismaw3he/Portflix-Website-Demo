// const flightPath1 = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 200, y: 400},
//         {x: 250, y: 450},
//         {x: 300, y: 500},
//         {x: 500, y: 700},
//         {x: 850, y: 620},
//         {x: 900, y: 550},
//         {x: 850, y: 450},
//         {x: 200, y: 620},
//         {x: 300, y: 1190},
//         {x: 400, y: 1290},
//     ]
// }

const tween2 = new TimelineLite();




const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '#text-trigger',
    duration: 1200,
    triggerHook: 0.6

})
.setTween(tween2)
.addIndicators()
.setPin('#text-trigger')
.addTo(controller2)