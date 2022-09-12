const inputs = document.querySelectorAll(".input");

function focusFunc() {

    let parent = this.parentNode;
    parent.classList.add("focus");

}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            document.getElementById('myHeader').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';


        } else {
            document.getElementById('myHeader').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';

        }
    });
});




$('#myCarousel .carousel-item img').on('click', function (e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
});


const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function () {

    showPopup();

    // setTimeout(function(){
    //   loginPopup.classList.add("show");
    // },5000)

})

function showPopup() {
    const timeLimit = 2 // seconds;
    let i = 0;
    const timer = setInterval(function () {
        i++;
        if (i == timeLimit) {
            clearInterval(timer);
            loginPopup.classList.add("show");
        }
        console.log(i)
    }, 1000);
}


close.addEventListener("click", function () {
    loginPopup.classList.remove("show");
})



const mediaQuery = window.matchMedia('(max-width: 480px)');
function handleScreenChange(e) {
    if (e.matches) {
        console.log('Screen changed and media query matched!');
    }
    else {
        console.log('Screen changed and doesnt media query matched!');
    }
}
mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);






