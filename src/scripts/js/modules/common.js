import $ from 'jquery';

$(document).ready(()=>{
    $('.js-footer-date').html(new Date().getFullYear())
});