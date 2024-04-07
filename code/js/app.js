const parallax_elements = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function update(pos){
    parallax_elements.forEach((el) =>{
        let speedx = el.dataset.speedx, 
            speedy = el.dataset.speedy,
            zValue = pos - parseFloat(getComputedStyle(el).left) * .5;
        
        el.style.transform = "translateX(calc(-50% + " + (-xValue * speedx) + "px)) translateY(calc(-50% + " + (yValue * speedy) + "px)) perspective(2800px) translateZ(" + (zValue * speedy) + "px)";
    });
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    update(e.clientX);
});


let timeline = gsap.timeline().from;

/*
parallax_elements.forEach((el) =>{
    timeline(el, {
        top: el.offsetHeight / 0.75 + el.dataset.distance + "px",
        duration: 3,
    });
});
*/

    timeline(document.querySelector(".bg-img"), {
        top: document.querySelector(".bg-img").offsetHeight / 0.75 - 200 + "px",
        duration: 3,
    });

    timeline(document.querySelector(".m_2"), {
        top: document.querySelector(".m_2").offsetHeight / 0.75 + 800 + "px",
        duration: 3,
    });

    timeline(document.querySelector(".text"), {
        top: document.querySelector(".text").offsetHeight / 0.75 + 1800 + "px",
        duration: 3,
    });
    
    timeline(document.querySelector(".m_1"), {
        top: document.querySelector(".m_1").offsetHeight / 0.75 + 2800 + "px",
        duration: 3,
    });
