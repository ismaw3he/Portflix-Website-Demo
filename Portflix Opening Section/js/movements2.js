const flightPath2 = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: 400},
        {x: 150, y: 450},
        {x: 200, y: 500},
        {x: 400, y: 700},
        {x: 650, y: 720},
        {x: 700, y: 650},
        {x: 650, y: 550},
        {x: 100, y: 720},
        {x: 200, y: 990},
        {x: 300, y: 990},
        {x: 400, y: 990},
        {x: 450, y: 990},
        {x: 490, y: 990},
        {x: 510, y: 990},
        {x: 530, y: 990},
        {x: 550, y: 990},
        {x: 580, y: 990},
        {x: 600, y: 990},
        {x: 620, y: 990}
    ]
}

const tween2 = new TimelineLite();

tween2.add(
    TweenLite.to('#rectangle', 1 ,{
        bezier: flightPath2,
        ease: Power1.easeInOut
    })
)

const controller2 = new ScrollMagic.Controller();

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.animation',
    // animasia muddeti
    duration: 650,
    // triggerin yeri y axis
    triggerHook: 0  

})
.setTween(tween2)
// .addIndicators()
// .setPin('.animation')
.addTo(controller2)