$(document).ready(function () {

    //scroll top ----------------------------------------------

    function ScrollToping() {
        const scrollTop = document.getElementById("toping");
        if (this.scrollY >= 160)
            scrollTop.classList.add('toping2');
        else
            scrollTop.classList.remove('toping2');
    }
    window.addEventListener('scroll', ScrollToping);
   
});

//Vanilla Code ---------------------------------------------

VanillaTilt.init(document.querySelectorAll('.titl'), {
    max: 10
});

//scroll smooth --------------------------------------------

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});