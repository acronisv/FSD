import './calendar.scss';
import './calendar.css';
import 'air-datepicker';

// Инициализация
$('.js-calendar__elem-start').datepicker({
    onSelect: function (fd, d, picker) { 
        $(".js-calendar__elem-start").val(fd.split("-")[0]);
        $(".js-calendar__elem-end").val(fd.split("-")[1]);
    },
    range: true,
    multipleDatesSeparator: ' - ',
    clearButton: 'true',
    todayButton: 'true'
});

// $.fn.datepicker.language['ru'] = {
//     today: 'Применить',
//     clear: 'Очистить'
// }

$('.js-calendar__elem').datepicker({
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'd M'
});
// Доступ к экземпляру объекта
//$('.js-calendar__elem-start').data('datepicker');
