
// SERVECES:
let stcard = document.querySelectorAll(".stcard"), rotate;
for(let i = 0; i < stcard.length; i++){
    rotate = Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1);
    stcard[i].style.transform = "rotate("+ rotate +"deg)";
}

// ADVANTAGES: 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    stagePadding: 70,
    nav:true,
    dots: false,
    navText: ['&lsaquo;', '&rsaquo;'],
    responsive:{
        0:{items:1},
        500:{items:2},
        992:{items:3},
        1200:{items:4},
        1600:{items:5}
    }
    });
});

// STAGE:
let card = document.querySelectorAll(".card"); 
for( let i = 1; i <= card.length; i++ ){ 
    document.documentElement.style.setProperty("--face_height_" + i + "", document.querySelector(".card-container .card:nth-child(" + i + ") .face-2").scrollHeight + "px"); 
}

// PORTFOLIO:
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});

// REVIEWS:
$(document).ready(function () {
    $('.client-single').on('click', function (event) {
        event.preventDefault();
        var active = $(this).hasClass('active');
        var parent = $(this).parents('.testi-wrap');
        if (!active) {
            var activeBlock = parent.find('.client-single.active');
            var currentPos = $(this).attr('data-position');
            var newPos = activeBlock.attr('data-position');
            activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
            activeBlock.attr('data-position', currentPos);
            $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
            $(this).attr('data-position', newPos);
        }
    });
}(jQuery));

// ICONS:
const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const contact_container = document.querySelector('.contact-container');
contact_btn.addEventListener('click', () => {
    contact_container.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
    contact_container.classList.remove('visible')
});

// BUTTON UPPER:
$('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            bottom: '15px'
        });
        } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});



