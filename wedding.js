/*Countdown script*/
const countdown = document.getElementById("countdown");
const weddingDate = new Date("August 27, 2025 00:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        countdown.innerHTML = "💍 It's the Big Day!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s to go`;
}, 1000);

// Responsive Navigation Toggle//
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("show")
});

//Our Story slideshow//
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
}

let autoSlideIndex = 0;
let autoSlideTimer;
let isPaused = false;

function autoShowSlides() {
    const slides = document.getElementsByClassName("mySlide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    autoSlideIndex++;
    if (autoSlideIndex > slides.length) { autoSlideIndex = 1; }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[autoSlideIndex - 1].style.display = "block";
    dots[autoSlideIndex - 1].classList.add("active-dot");

    autoSlideTimer = setTimeout(autoShowSlides, 7000); // 5 seconds
}

// Start autoplay initially
autoShowSlides();

// Pause on hover
const slideshow = document.getElementById("story-slideshow");
if (slideshow) {
    slideshow.addEventListener("mouseenter", () => {
        clearTimeout(autoSlideTimer);
        isPaused = true;
    });

    slideshow.addEventListener("mouseleave", () => {
        if (isPaused) {
            autoShowSlides();
            isPaused = false;
        }
    });
}

// Lightbox functions
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
    caption.textContent = imgElement.alt;
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightboxCaption.innerText = "";
}


// Toggle 'View More'
function toggleMore() {
    const moreImages = document.querySelectorAll('.gallery-item.more');
    const btn = document.getElementById("viewMoreBtn");

    moreImages.forEach(img => {
        img.classList.toggle('hidden');
    });

    btn.textContent = btn.textContent === "View More" ? "View Less" : "View More";
}




