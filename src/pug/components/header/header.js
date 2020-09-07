import './header.scss';

$(document).ready(function(){
    $('.header__burger-btn').click(function(event){
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__mobile-wrap').toggleClass('header__mobile-wrap--active')
    })
})