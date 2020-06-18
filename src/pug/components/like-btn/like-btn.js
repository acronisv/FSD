import './like-btn.scss';

$('.like__button').click(function(){
    $(this).toggleClass('like__button--active');
});