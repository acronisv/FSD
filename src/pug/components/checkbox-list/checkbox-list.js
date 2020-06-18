import './checkbox-list.scss';
$('.checkbox-list__title').click(function(){
    let that = $(this);
    that.next('.checkbox-list__content').slideToggle(function(){
        if (that.next('.checkbox-list__content').css('display')=='none'){
            that.find('.checkbox-list__button--open').css('display','block');
            that.find('.checkbox-list__button--close').css('display','none');
        } else if (that.next('.checkbox-list__content').css('display')=='block'){
            that.find('.checkbox-list__button--open').css('display','none');
            that.find('.checkbox-list__button--close').css('display','block');
        }
    });
});