(function($){

    var submit_btn = $('.mmm-form__btns input[type=submit]');
    var message = '';

    submit_btn.on('click',function(event){
        message = '';
        $(this).val('送信中...');
    });

    $(document).on('wpcf7submit',function(event){
        $('.wpcf7-response-output').remove();
        submit_btn.val('送信');
        if( message != '' ) alert( message );
    });

    $(document).on('wpcf7spam',function(event){
        message = 'スパムの可能性が検出されたため、メールの送信に失敗しました。';
    });

    $(document).on('wpcf7mailsent',function(event){
        message = 'メールの送信に成功しました。';
    });

    $(document).on('wpcf7mailfailed',function(event){
        message = 'メールの送信に失敗しました。もう一度お試しください。';
    });

    $(document).on('wpcf7invalid',function(event){
    });



})(jQuery);
