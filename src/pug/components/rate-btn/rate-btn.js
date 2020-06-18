import './rate-btn.scss';

$('.rate__value').click(function(){
    $(this).siblings().text('star_border');
    $(this).prevAll().addBack().text($(this).text()=='star_border' ? 'star' : 'star_border');
});