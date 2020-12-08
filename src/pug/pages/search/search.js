import './search.scss';
import './../../components/dropdown/dropdown.js';
import './../../components/header/header.js';
import './../../components/button/button.js';
import './../../components/footer/footer.js';
import './../../components/field-subscribe/field-subscribe.js';
import './../../components/calendar/calendar.js';
import './../../components/checkbox/checkbox.js';
import './../../components/checkbox-list/checkbox-list.js';
import './../../components/range-slider/range-slider.js';
import './../../components/rich-checkbox/rich-checkbox.js';
import './../../components/pagination/pagination.js';
import './../../components/room-card/room-card.js';
import './../../components/rating/rating.js';

$(document).ready(function(){
    $('.search-page__filter-btn').click(function(event){
        $('.room-filter').toggleClass('room-filter--active');
        $('.search-page__filter-btn').toggleClass('search-page__filter-btn--active');
        if ($('.search-page__filter-btn').hasClass('search-page__filter-btn--active')) {
            $('.search-page__filter-btn').text('cancel');
        } else {
            $('.search-page__filter-btn').text('search')
        }
        $('body').toggleClass('lock');
    })
})