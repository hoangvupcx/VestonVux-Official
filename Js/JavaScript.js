$(document).ready(function() {

    $('#toggle').click(function() {
        $('nav > ul.menu').slideToggle()
    }) // Thả thanh navbar

    $('.search-toggle').click(function() {
        $('.search-box').slideToggle()
    }) // Thả hộp thoại tìm kiếm

    $('.login-and-register').click(function() {
        $('.login-register').slideToggle()
    }) // Thả selection register & login

    $("body .body-product:first-child").addClass("wow animation-left")
    $("body .body-product:last-child").addClass("wow animation-right")
    $("body .body-product:nth-child(2)").addClass("wow animate__fadeIn animation-inUp")
    $("body .product-item:nth-child(even) > div").addClass("wow animation-right")
    $("body .product-item:nth-child(odd) > div").addClass("wow animation-left")
    $("body ul.menu li a").addClass("wow animation-backInUp")
    $("#book-appointment li").addClass("wow animate__fadeIn animation-inUp")
    $(".form-left li").addClass("wow animation-left")
    $(".form-right li").addClass("wow animation-right")
    $(".cover-form").addClass("wow animation-in")

    
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        })
    wow.init(); // Hiệu ứng chuyển động


    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        if(pos_body>20){
            $('.gotop').addClass('hien-ra');
        }
        else{
            $('.gotop').removeClass('hien-ra');
        }
    }); // Xử lý khi button-go-to-top di chuyển lên gần đầu trang

    $('.gotop').click(function(event) {
        $('html,body').animate({scrollTop: 0},800);
    }); // Button go to top

    $('.gobot').click(function(event) {
        $('html,body').animate({scrollTop: $(".Detail-product").prop('offsetTop')},800);
    }); // Button di chuyển xuống details products

    $('.accordion-item1.active .accordion-body1').slideDown(); // Khi accordion active thì đổi màu nền 
    $('.accordion-header1').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body1').slideToggle(); // Từ header tìm về cha (item) rồi đưa về con (body)
    }) // Thả accordion xuống (responsive - Items-Product)

    $('.accordion-item2.active .accordion-body2').slideDown(); // Khi accordion active thì đổi màu nền 
    $('.accordion-header2').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().children('.accordion-body2').slideToggle(); // Từ header tìm về cha (item) rồi đưa về con (body)
    }) // Thả accordion xuống (responsive - Items-Product)

    $('#btnSearch').click(function() {
        var k = $('#kw').val()
        $(`div.text-product p:contains(${k})`).parent().parent().css("color", "rgba(41,42,46,0.6)")
        $(`div.text-product pre:contains(${k})`).parent().parent().css("color", "rgba(41,42,46,0.6)")
    }) // Công cụ tìm kiếm (Products)
    
});

