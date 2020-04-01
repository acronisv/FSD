import './elements.scss';
// import $ from 'jquery';
import './../../components/input/input.js';
import './../../components/dropdown/dropdown.js';
import './../../components/calendar/calendar.js';
import './../../../js/jquery.maskedinput.min.js';
//1 пример
$(function(){
    $("#masked-textfield").mask("31.12.2999", {placeholder: "ДД.ММ.ГГГГ" });
});

console.log('elements');
