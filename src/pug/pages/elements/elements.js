import './elements.scss';
// import $ from 'jquery';
import './../../components/input/input.js';
import './../../components/dropdown/dropdown.js';
import './../../components/calendar/calendar.js';
import './../../../js/jquery.maskedinput.min.js';
import './../../components/field-subscribe/field-subscribe.js';
import './../../components/checkbox/checkbox.js';
import './../../components/checkbox-list/checkbox-list.js';
import './../../components/information/information.js';
import './../../components/radio/radio.js';
import './../../components/toggle/toggle.js';
import './../../components/like-btn/like-btn.js';
import './../../components/rate-btn/rate-btn.js';
import './../../components/range-slider/range-slider.js';
import './../../components/button/button.js';
import './../../components/pagination/pagination.js';
import './../../components/bullet-list/bullet-list.js';
import './../../components/rich-checkbox/rich-checkbox.js';
import './../../components/comments/comments';

//1 пример
$(function(){
    $("#masked-textfield").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
});

console.log('elements');
