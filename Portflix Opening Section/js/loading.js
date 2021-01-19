const loaderContainer = document.getElementsByClassName("loader-container")[0];
const cls1 = document.getElementsByClassName("cls-1");
const movingElement1 = document.getElementById("moving-1");
const movingElement2 = document.getElementById("moving-2");
const movingElement3 = document.getElementById("moving-3");
const rectangleForHide = document.getElementById("rectangle");
const appleMenu = document.getElementById("apple-menu");
const chromeIcon = document.getElementById("chrome");

// Loading 
setTimeout(() => {
    loaderContainer.style.animationName = "darking";
    movingElement1.style.animationName = "glow";
    movingElement1.style.animationDirection = "alternate";
    movingElement2.style.animationName = "glow";
    movingElement2.style.animationDirection = "alternate";
    movingElement3.style.animationName = "glow";
    movingElement3.style.animationDirection = "alternate";
    document.getElementById("particles-js").style.backgroundColor = "#000";
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#32b7e1"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#000",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
    for (let i = 0; i < cls1.length; i++) {
        cls1[i].style.animationName = "get-blue";
    }

}, 2000)

window.addEventListener("scroll", () => {
    if(window.scrollY > 1000){
        appleMenu.style.bottom = "30px"
    }
    else if(window.scrollY < 1000){
        appleMenu.style.bottom = "-150px"
    }

    // if(window.scrollY < 1100){
    //     chromeIcon.style.animationName="down"
    // }
    // if(window.scrollY > 1100 && window.scrollY < 1300){
    //     chromeIcon.style.animationName="up"
    // }
    // if(window.scrollY > 1300){
    //     chromeIcon.style.animationName="down"
    // }

    if(window.scrollY >= 1200){
        rectangleForHide.style.border="none"
    }
    else if(window.scrollY < 1200){
        rectangleForHide.style.border="3px solid #32b7e1"
    }
})