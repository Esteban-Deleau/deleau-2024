const load = document.getElementsByClassName("load");

setTimeout(() =>{
    load[0].style.display = "none";
}, 6400);


// gsap.to("nav", { x:100, delay:3, opacity: 1});

gsap.fromTo("nav", { 
        opacity: 0,
        x: -100,

    },
    { 
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 6.5
    });

gsap.fromTo(".one", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 1
    });
gsap.fromTo(".two", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 1.2
    });
gsap.fromTo(".three", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 1.4
    });
gsap.fromTo(".four", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 1.6
    });
gsap.fromTo(".five", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 1.8
    });
gsap.fromTo(".six", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 2
    });
gsap.fromTo(".seven", { 
        opacity: 0,
    },
    { 
        opacity: 1,
        duration: 1,
        delay: 2.2
    });

