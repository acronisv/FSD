import './elements.scss';
import $ from 'jquery';
import './../../components/input/input.js';
import './../../components/dropdown/dropdown.js';
import './../../../js/jquery.maskedinput.min.js';
//1 пример
$(function(){
    $("#masked-textfield").mask("8(999) 999-9999");
});

console.log('elements');