// For dropdoen

$(document).ready(function () {
    $("#language_dropdown").click(function () {
        $(".dropdown_languge").slideToggle(1000)
    })


    // for Shoping dropdown
    $("#shopping_card").click(function () {
        $(".add_card").slideToggle(500)
    })

    $('.your-class').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                  arrows: false,
                  centerMode: true,
                 
                  slidesToShow: 3
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
               
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                
                slidesToShow: 1
              }
            }
          ]

    });

    //Image Zoom
 

})


