window.onscroll = function () {
    f1()
};

function f1() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById('header').classList.add('sticky')
    } else {
        document.getElementById('header').classList.remove('sticky')
    }
}
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut'

});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

function f2() {
    document.getElementById('change1').src = 'ring2.jpg';
    document.getElementById('change2').classList.add('ring');
}

function f3() {
    setTimeout(function () {
        document.getElementById('change1').src = 'ring.jpg';
        document.getElementById('change2').classList.remove('ring');
    }, 100);
}

function opennav() {
    document.getElementById("mynav").style.height = "100%"
}