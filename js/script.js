function accordion() {
    $('li.main-dropdown').mouseover(function () {
        $('li.main-dropdown').addClass('active')
    });
    $('li.main-dropdown').mouseout(function () {
        $('li.main-dropdown').removeClass('active')
    })
}

function questions() {
    $('.click-title__first').click(function () {
        $('.click-title__first + .hide-text').slideToggle(300)
    });
    $('.click-title__second').click(function () {
        $('.click-title__second + .hide-text').slideToggle(300)
    });
    $('.click-title__third').click(function () {
        $('.click-title__third + .hide-text').slideToggle(300)
    })
}

function mobileMenuToggle() {
    var btn = $('.mobile-menu-toggle');
    var dropdown = $('#dropdown-mob');

    btn.click(function () {
        dropdown.toggleClass('active')
    })
}

function accordionMob() {
    if (document.documentElement.clientWidth < 780) {
        $('li.main-dropdown > a').click(function () {
            $('li.main-dropdown .down-dropdown').slideToggle(300);
            $('li.main-dropdown > a').toggleClass('active')
        });
        $('li.have-dropdown.first').click(function () {
            $('li.have-dropdown.first > ul').slideToggle(300);
            $('li.have-dropdown.first > a').toggleClass('active')
        });
        $('li.have-dropdown.second').click(function () {
            $('li.have-dropdown.second > ul').slideToggle(300);
            $('li.have-dropdown.second > a').toggleClass('active')
        });
        $('li.have-dropdown.third').click(function () {
            $('li.have-dropdown.third > ul').slideToggle(300);
            $('li.have-dropdown.third > a').toggleClass('active')
        });
        $('li.have-dropdown.four').click(function () {
            $('li.have-dropdown.four > ul').slideToggle(300);
            $('li.have-dropdown.four > a').toggleClass('active')
        });
        $('li.have-dropdown.fives').click(function () {
            $('li.have-dropdown.fives > ul').slideToggle(300);
            $('li.have-dropdown.fives > a').toggleClass('active')
        });
        $('li.have-dropdown.six').click(function () {
            $('li.have-dropdown.six > ul').slideToggle(300);
            $('li.have-dropdown.six > a').toggleClass('active')
        });
        $('li.have-dropdown.seven').click(function () {
            $('li.have-dropdown.seven > ul').slideToggle(300);
            $('li.have-dropdown.seven > a').toggleClass('active')
        });
    }
}

function scrollMenu() {
    if (document.documentElement.clientWidth > 780) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();

            /*Если сделали скролл на 100px задаём новый класс для header*/
            if (height > 10) {
                $('#header').addClass('header-fixed');
            } else {
                /*Если меньше 100px удаляем класс для header*/
                $('#header').removeClass('header-fixed');
            }

        });

    }
}

$(window).on('load', function () {
    accordion();
    accordionMob();
    mobileMenuToggle();
    scrollMenu();
    questions();
});