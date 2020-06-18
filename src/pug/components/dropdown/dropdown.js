import './dropdown.scss';

$('.js-dropdown__content').click(function(){
    $(this).next('.js-dropdown__options').slideToggle();
});