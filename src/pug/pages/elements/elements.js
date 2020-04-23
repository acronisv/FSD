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
//1 пример
$(function(){
    $("#masked-textfield").mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
});

console.log('elements');
