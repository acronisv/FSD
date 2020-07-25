import './cards.scss';
import './../../components/head/head.js';
import './../../components/room-search/room-search.js';
import './../../components/calendar/calendar.js';
import './../../components/dropdown/dropdown.js';
import './../../components/button/button.js';
import './../../components/registration/registration.js';
import './../../components/input/input.js';
import './../../components/radio/radio.js';
import './../../components/toggle/toggle.js';
import './../../components/booking/booking.js';
import './../../components/login/login.js';
import './../../components/room-card/room-card.js';
import './../../components/rate-btn/rate-btn.js';

$('.cards__datepicker').datepicker({
    onSelect: function (fd, d, picker) { 
        $(".js-calendar__elem-start").val(fd.split("-")[0]);
        $(".js-calendar__elem-end").val(fd.split("-")[1]);
    },
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    todayButton: 'true',
    navTitles: {
        days: 'MM yyyy'
    },
    language: {
        today: 'Применить',
        clear: 'Очистить'
    }
});