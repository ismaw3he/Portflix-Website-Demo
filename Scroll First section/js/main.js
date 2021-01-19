const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 200, y: 10},
        {x: 300, y: 30},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: -250}
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1 ,{
        bezier: flightPath,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    // animasia muddeti
    duration: 5000,
    // triggerin yeri y axis
    triggerHook: 0  

})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller)