const container = document.getElementsByClassName("loader-container")[0];
const cls = document.getElementsByClassName("cls-1");
const squares = document.getElementsByClassName("squares");
const finger = document.getElementById("finger")
setTimeout(()=>{
    container.style.animationName= "darking";
    for(let index =0;index<cls.length;index++){
        cls[index].style.animationName= "get-blue"
        cls[index].style.animationDuration = "2s"
        cls[index].style.animationFillMode = "forwards"
    }
    for(let index =0;index<squares.length;index++){
        squares[index].style.animationName= "glow"
        squares[index].style.animationIterationCount = "infinite";
        squares[index].style.animationDuration = "0.5s";
        squares[index].style.animationDirection = "alternate"
    }
    finger.style.animationName = "finger-move"
}, 2800)

// Scroll Magic 



const portflight={
    curviness: 0,
    autoRotate: false,
    values: [
        {x:0, y: 0},
        {x:0, y: -300},
        {x:0, y: -900}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('#moving-1', 1, {
        bezier: flightPath[0],
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween)
.setPin('.loader-container')
.addTo(controller)

// 2************************* 

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to('#moving-2', 1, {
        bezier: flightPath[1],
        ease: Power1.easeInOut
    })
)

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween2)
.addTo(controller2)

// 3************************* 

const tween3 = new TimelineLite();

tween3.add(
    TweenLite.to('#moving-3', 1, {
        bezier: flightPath[2],
        ease: Power1.easeInOut
    })
)

const controller3 = new ScrollMagic.Controller();

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(tween3)
.addTo(controller3)

// **********portflix flightpath

// p
const portP = new TimelineLite();
portP.add(TweenLite.to('#p', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerP = new ScrollMagic.Controller();
const scenePortP = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portP)
.addTo(portControllerP)
// O
const portO = new TimelineLite();
portO.add(TweenLite.to('#o', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerO = new ScrollMagic.Controller();
const scenePortO = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portO)
.addTo(portControllerO)
// R
const portR = new TimelineLite();
portR.add(TweenLite.to('#r', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerR = new ScrollMagic.Controller();
const scenePortR = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portR)
.addTo(portControllerR)
// T
const portT = new TimelineLite();
portT.add(TweenLite.to('#t', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerT = new ScrollMagic.Controller();
const scenePortT = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portT)
.addTo(portControllerT)
// fl
const portfl = new TimelineLite();
portfl.add(TweenLite.to('#fl', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerfl = new ScrollMagic.Controller();
const scenePortfl = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portfl)
.addTo(portControllerfl)
// i
const porti = new TimelineLite();
porti.add(TweenLite.to('#i', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControlleri = new ScrollMagic.Controller();
const scenePorti = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(porti)
.addTo(portControlleri)
// x
const portx = new TimelineLite();
portx.add(TweenLite.to('#x', 1, {
        bezier: portflight,
        ease: Power1.easeInOut
    })
)
const portControllerx = new ScrollMagic.Controller();
const scenePortx = new ScrollMagic.Scene({
    triggerElement: '.loader-container',
    duration: 1000,
    triggerHook: 0
})
.setTween(portx)
.addTo(portControllerx)