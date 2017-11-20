$(document).ready(function () {
    //    changeColor();
    addClassToNav();
    znajdzP();
    wypiszLi();
    kilkaZdarzen();
    fadeDiv();
});

$(window).scroll(function () {
    addClassToNav();
});

//$ = jQuery

function changeColor() {
    $('#first').css('background', 'red').hide('slow').show(3000);
}

var first = $('#first');
console.log(first);
var paragrafy = $('.par');
console.log(paragrafy);

var wszystkieParagrafy = $('#first p');
//console.log(paragrafy.length);
//console.log(wszystkieParagrafy.length);

/*//metoda text()
wywolywanie metody text() bez argumentow powoduje wyciagniecie zawartosci tekstowej z selektora
wywolanie metody text() z argumentem (jako argument podajemy string) powoduje ustawienie zawartosci tekstowej w selektorze*/
//console.log(wszystkieParagrafy.text());
wszystkieParagrafy.text('test');


//metoda html()
/*przy get (bez parametru) - zwraca string z pierwszego dopasowania
przy set (z parametrem) - dotyczy wszystkich trafien danego selektora (mozna wstrzykiwac html)*/
console.log(wszystkieParagrafy.html());
wszystkieParagrafy.html('<h1>Tytul</h1>');

//METODY DODAJACE NOWA TRESC 

//metoda append()
$('.append').append('<span> zostalem dodany</span>');
$('.prepend').prepend('<span> zostalem dodany</span>');
$('.before').before('<span> zostalem dodany</span>');
$('.after').after('<span> zostalem dodany</span>');

//$('.before, .after').after('<span class="append_inner">dodana klasa</span>');


//metoda remove() usuwa kontener wraz z zawartoscia
$('.append').remove();

//metoda empty() usuwa zawartosc kontenera
$('.prepend').empty();

console.log($('#css_method p').css('color'));
console.log($('#css_method p').css('font-size'));


/*jezeli podajemy jedna wlasciwosc z wartoscia, wystarczy oddzielic je przecinkiem np. $('#css_method p').css('wlasciwosc', 'wartosc')

jezeli zmieniamy wiecej niz jedna wartosc, to przekazujemy OBIEKT*/
$('#css_method p').css({
    'background-color': 'yellow',
    'color': 'grey',
    'font-size': '25px'
});

//metoda val() - do pol formularza

console.log($('#formularz input:nth-child(3)').val());

var inputy = $('#formularz input');

//przy val() bez parametrow, pobieramy z jednego trafienia
//przy val('parametr') ustawiamy we wszystkich trafieniach

$('#formularz input').val('jednolity tekst');

function addClassToNav() {
    var actualPos = $(document).scrollTop();
    var navHeight = $('.main-nav').height();


    if (actualPos > navHeight) {
        $('.main-nav').addClass('after-fix');
    } else {
        $('.main-nav').removeClass('after-fix');
    }
}

function znajdzP() {
    var paragrafy = $('#find').find('p');


    paragrafy.each(function () {
        $(this).css('background-color', 'red');
    });
}

function wypiszLi() {
    $('#log').click(function () {
        $('#click').find('li').each(function () {
            console.log($(this).text());
        })
    })
}

function kilkaZdarzen() {
    $('#kilka_zdarzen a').on({
        'mouseover': function() {
            $(this).css('font-size', '25px');
        },
        'mouseout': function() {
            $(this).css('font-size', '12px');
            $(this).css('color', 'inherit');
        },
        'click': function(e) {
            e.preventDefault();
            $(this).css('color', 'red');
        }
    });
}

function fadeDiv() {
    $('#show').click(function() {
//        $('#metody_fade > div').fadeOut('slow');
        $('#metody_fade > div').slideDown('slow');
    });
    
    $('#hide').click(function() {
//        $('#metody_fade > div').fadeIn('slow');
        $('#metody_fade > div').slideUp('slow');
    });
}
