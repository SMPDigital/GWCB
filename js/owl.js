










/* --------------------------------------------
  DOCUMENT.READY
--------------------------------------------- */
$(document).ready(function(){
  'use strict';
 

  initPageSliders();


  
});






/* ---------------------------------------------
 OWL Sliders 
 --------------------------------------------- */
function initPageSliders(){
    (function($){
        "use strict";
        
        // FULLWIDTH SLIDER
        $(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: true,
           // autoHeight: true,
            navigation: true,   
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></span>"]
        }); 

        // FULLWIDTH SLIDER AUTOPLAY
        $(".fullwidth-slider-auto").owlCarousel({
            autoPlay : 4000,
           // slideSpeed: 350,
            singleItem: true,
           // autoHeight: true,
            
            navigation: true,
            navigationText: ["<span class='icon icon-arrows-left'></span>", "<i class='icon icon-arrows-right'></span>"],
           // pagination : false,
            //paginationNumbers: false,
        });
       



    })(jQuery);
};



	
	







