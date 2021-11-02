// navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop
});


// Typed

var typed5 = new Typed('.typed', {
    strings: ["Bonjour Madame, Monsieur. Je me presente, je m'appelle Souici Rayan et je suis un étudiant cherchant à developper ses connaissance dans le domaine informatique et ainsi devenir dans quelques années developpeur full-stack dans le domaine du jeu videos ou travailler dans la cybersecurité, j'ai créé cette page web sous forme de cv afin de suivre mon avancement et aussi montrer ma motivation"],
    typeSpeed: 0,
    cursorChar: '_',
    shuffle: true,
    smartBackspace: false,
    loop: false
  });

// compteur live

let compteur = 0;

$(window).scroll(function() {
    const top = $('.counter').offset().top - 
    window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                counNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});
// AOS
AOS.init();