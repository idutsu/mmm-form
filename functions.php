<?php

add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_style( 'form-style', THEME_URL.'/libs/mmm-form/style.css',array('common-style'), filemtime( dirname(__FILE__).'/style.css') );
});
