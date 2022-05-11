

// Image Slide Javascript -->

var slideIndex = 0;
showSlides()


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myslide");
    var dots = document.getElementsByClassName("dot");


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(() => {
        showSlides()
    }, 2000);
}





// Go To top Javascript -->
    const button = document.getElementById('topbutton')

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset > 300) {
            button.style.opacity = 1
        } else {
            button.style.opacity = 0
        }
    })