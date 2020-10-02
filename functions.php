<?php

add_action( 'wp_enqueue_scripts', function(){
    wp_enqueue_script( 'form-js',THEME_URL.'/libs/mmm-form/form.js', array('contact-form-7'), filemtime( dirname(__FILE__).'/form.js'), true );
    wp_enqueue_style( 'form-style', THEME_URL.'/libs/mmm-form/style.css',array('theme-style'), filemtime( dirname(__FILE__).'/style.css') );
});
