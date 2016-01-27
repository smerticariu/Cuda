jQuery(function($){


	/* ----------------------------------------------------------- */
	
	
	/*  8. MIXIT FILTER ( FOR PORTFOLIO ) 
	/* ----------------------------------------------------------- */ 

		

	/* ----------------------------------------------------------- */
	/*  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	    
		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});	 

	/* ----------------------------------------------------------- */
	
	
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */ 

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

});