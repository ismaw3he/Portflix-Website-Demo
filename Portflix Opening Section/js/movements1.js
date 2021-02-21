const flightPath1 = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 200, y: 100},
        {x: 250, y: 150},
        {x: 300, y: 200},
        {x: 500, y: 400},
        {x: 850, y: 320},
        {x: 900, y: 250},
        {x: 850, y: 150},
        {x: 200, y: 320},
        {x: 300, y: 800},
        {x: 400, y: 810},
        {x: 450, y: 810},
    ]
}

const tween1 = new TimelineLite();


tween1.add(
    TweenLite.to('.header-center-animated-container', 350 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1,
    })
)
tween1.add(
    TweenLite.to('.header-center-animated-container', 350 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 0,
    })
)
tween1.add(
    TweenLite.to('#apple-menu', 200 ,{
        // width: "760px"    ,
        transform: "translateY(-240px)"
        // bottom: "-200vh"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#rectangle', 1000 ,{
        bezier: flightPath1,
        // ease: Power1.easeInOut,
        // opacity: 1,
    })
)
tween1.add(
    TweenLite.to('#rectangle', 50 ,{
        // bezier: flightPath1,
        // ease: Power1.easeInOut,
        opacity: 0,
    })
)
tween1.add(
    TweenLite.to('#chrome', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#chrome', 70,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#facebook', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#facebook', 70,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#gmail', 70 ,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#gmail',70 ,{
        // width: "760px"    ,
        transform: "translateY(0px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#speed', 70,{
        // width: "760px"    ,
        transform: "translateY(-25px)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#speed', 200,{
        // width: "760px"    ,
        transform: "translateY(-35px) scale(3.5)"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('#apple-menu', 100 ,{
        // width: "760px"    ,
        transform: "translateY(240px)"
        // bottom: "-200vh"
            // backgroundImage: 'url("../img/smartphone.png")  '
    })
)
tween1.add(
    TweenLite.to('.smartphone-img', 100 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "scale(1)"
    })
)
tween1.add(
    TweenLite.to('.mobile-interior', 10 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        width: "1640px",
    })
)
tween1.add(
    TweenLite.to('.phone-border', 500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: "translateY(1800px) translateX(-400px) scale(0.3)"
    })
)

tween1.add(
    TweenLite.to('.speedtestBCK', 500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1
    })
)
tween1.add(
    TweenLite.to('.mobile-interior', 100 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        background: "none",
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-paragraph', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-paragraph', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header-second', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-second', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.youtubeBCK', 400 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 1
    })
)
tween1.add(
    TweenLite.to('.speedtestBCK', 400 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        opacity: 0
    })
)
console.log("test");
console.log(window.innerWidth);
let phonePositionX = 300;
if(window.innerWidth< 1199){
    phonePositionX = 200;
}
tween1.add(
    TweenLite.to('.phone-border', 1500 ,{
        // bezier: flightPath6,
        // ease: Power1.easeInOut,
        transform: `translateY(3650px) translateX(${phonePositionX}px) scale(0.3)`
    })
)



tween1.add(
    TweenLite.to('.phone-animated-header-benefit', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-1', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-1', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)

tween1.add(
    TweenLite.to('.phone-animated-header-benefit-2', 500 ,{
        transform: `translateY(-200px)`,
        opacity: "1"
    })
)
tween1.add(
    TweenLite.to('.phone-animated-header-benefit-2', 500 ,{
        transform: `translateY(-400px)`,
        opacity: "0"
    })
)


const controller1 = new ScrollMagic.Controller();

const scene1 = new ScrollMagic.Scene({
    triggerElement: '#phone-trigger',
    duration: 4000,
    triggerHook: 0.2 

})
.setTween(tween1)
// .addIndicators()
.setPin('#phone-trigger')
.addTo(controller1)