import './room-card.scss';
import "slick-carousel";

$('.room-card__slider').slick({
    infinite: false,
    dots: true,
    nextArrow: "<button class='slick-next'>chevron_right</button>",
    prevArrow: '<button type = "button" class = "slick-prev">chevron_left</button>'
  });