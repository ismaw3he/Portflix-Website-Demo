// const flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 20, y: 50},
//         {x: 50, y: 150},
//         {x: -200, y: 200},
//         {x: -300, y: 200},
//         {x: -450, y: 320},
//         {x: -550, y: 320},
//         {x: -650, y: 320},
//         {x: -850, y: 320}
//     ]
// }

const tween5 = new TimelineLite();
tween5.add(
    TweenLite.to('#chrome', 30 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#chrome', 30 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#facebook', 30 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#facebook', 30 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#gmail', 30 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#gmail', 30 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#speed', 30 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('#speed', 30 ,{
        // width: "760px"    ,
        transform: "translateY(-35px) scale(3.5)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween5.add(
    TweenLite.to('.box', 5 ,{
        display: "none"
    },0)
)
tween5.add(
    TweenLite.to('.box', 5 ,{
        display: "none"
    },0)
)
tween5.add(
    TweenLite.to('.animation', 3 ,{
        width: "730px",
        left: "0",
        background: "none"
    },0)
)
tween5.add(
    TweenLite.to('.frame', 0.5 ,{
        width: "760px"    ,
        backgroundImage: 'url("../img/smartphone.png")  '
    },0)
)
tween5.add(
    TweenLite.to('.speed-test-container', 3 ,{
        display: "flex"
    })
)
tween5.add(
    TweenLite.to('.mobile-cover', 13 ,{
        // bezier: flightPath,
        // ease: Power1.easeInOut
        // height: "100vh"
        transform: "translateY(1000px) translateX(-200px) scale(0.5)"
    })
)
tween5.add(
    TweenLite.to('#apple-menu', 3 ,{
        display: "none"
    })
)




const controller5 = new ScrollMagic.Controller();

const scene5 = new ScrollMagic.Scene({
    triggerElement: '#mobile-trigger',
    duration: 500,
    triggerHook: 0.9 

})
.setTween(tween5)
.addIndicators()
// .setPin('#mobile-trigger')
.addTo(controller5)