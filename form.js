(function($){

    var submit_btn = $('.mmm-form__btns input[type=submit]');

    submit_btn.on('click',function(event){
        $(this).val('送信中...');
    });

    $(document).on('wpcf7submit',function(event){
        $('.wpcf7-response-output').remove();
        submit_btn.val('送信')
    });

})(jQuery);
