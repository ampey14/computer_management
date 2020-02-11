$(document).ready(function(){

    $(".dateinput").datepicker({changeYear: true,changeMonth: true});


});

$('.nav.navbar-nav > li').on('click', function (e) {
e.preventDefault();
$('.nav.navbar-nav > li').removeClass('active');
$(this).addClass('active');
});

