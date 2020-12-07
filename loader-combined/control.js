let element = document.getElementById("moving-1")
let rect = element.getBoundingClientRect();

setInterval(() => {
    console.log(screen.width);
}, 2000);
const flightPath=[{
    curviness: 1,
    autoRotate: false,
    values: [
        {x:-10, y: -250},
        {x:-150, y: -450},
        {x:-390, y: -550}
    ]
},
{
    curviness: 1.25 ,
    autoRotate: false,
    values: [
        {x: 20, y: -50},
        {x: -150, y: -100},
        {x: -420, y: -100}
    ]
},
{
    curviness: 1.25,
    autoRotate: false,
    values: [
        {x:-20, y: 50},
        {x:-150, y: 10},
        {x:-450, y: 300}
    ]
}]