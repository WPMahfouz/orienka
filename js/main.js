(function ($) {
 "use strict";
 
  /*----------------------------
 price-slider active
------------------------------ */
    var range = $('#slider-range');
    var amount = $('#amount');
    
	  range.slider({
	   range: true,
	   min: 2,
	   max: 300,
	   values: [ 2, 300 ],
	   slide: function( event, ui ) {
		amount.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  amount.val( "$" + range.slider( "values", 0 ) +
	   " - $" + range.slider( "values", 1 ) );   		

 /*----------------------------
 jQuery MeanMenu
------------------------------ */
jQuery('#mobile-menu-active').meanmenu();


/*----------------------
	 Carousel Activation
	----------------------*/ 
//   $(".let_new_carasel").owlCarousel({
//       autoPlay: true, 
// 	  slideSpeed:2000,
// 	  pagination:true,
// 	  navigation:true,	  
//       items : 1,
// 	  /* transitionStyle : "fade", */    /* [This code for animation ] */
// 	  navigationText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],
//       itemsDesktop : [1199,1],
// 	  itemsDesktopSmall : [980,1],
// 	  itemsTablet: [768,1],
// 	  itemsMobile : [767,1],
//   });

 /*----------------------------
		Tooltip
    ------------------------------ */
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl)
	})

 /*----------------------------
	toggole active
     ------------------------------ */
	$( ".all_catagories" ).on("click", function() {
	  $( ".cat_mega_start" ).slideToggle( "slow" );
	});
	
	$( ".showmore-items" ).on("click", function() {
	  $( ".cost-menu" ).slideToggle( "slow" );
	});
 
/*------------------------------------------------
	  Products Carousel - New Product Home -- 1
-------------------------------------------------*/ 
const new_product_home_1  = new Swiper('.new-product-slider-1 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.new-product-nav-1 .default-slider-nav--prev',
		prevEl: '.new-product-nav-1 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 2,
		},
		1200: {
		slidesPerView: 3,
		}
	}
})


/*------------------------------------------------
	  Products Carousel - New Product Home -- 2
-------------------------------------------------*/ 
const new_product_home_2  = new Swiper('.new-product-slider-2 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.new-product-nav-2 .default-slider-nav--prev',
		prevEl: '.new-product-nav-2 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 3,
		},
		1200: {
		slidesPerView: 4,
		}
	}
})


/*---------------------------------------------
	Products Carousel -  Product Catagory -1 
------------------------------------------------*/ 
const product_catagory_slider_1= new Swiper('.product-catagory-slider-1 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.product-catagory-nav-1 .default-slider-nav--prev',
		prevEl: '.product-catagory-nav-1 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 3,
		},
		1200: {
		slidesPerView: 4,
		}
	}
})
/*---------------------------------------------
	Products Carousel -Product Catagory -2
------------------------------------------------*/ 
const product_catagory_slider_2= new Swiper('.product-catagory-slider-2 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.product-catagory-nav-2  .default-slider-nav--prev',
		prevEl: '.product-catagory-nav-2 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 3,
		},
		1200: {
		slidesPerView: 4,
		}
	}
})
/*---------------------------------------------
	Products Carousel -Product Catagory - 3
------------------------------------------------*/ 
const product_catagory_slider_3= new Swiper('.product-catagory-slider-3 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.product-catagory-nav-3 .default-slider-nav--prev',
		prevEl: '.product-catagory-nav-3 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 2,
		},
	}
})
/*---------------------------------------------
	Products Carousel -Product Catagory - 3
------------------------------------------------*/ 
const product_catagory_slider_4= new Swiper('.product-catagory-slider-4 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.product-catagory-nav-4 .default-slider-nav--prev',
		prevEl: '.product-catagory-nav-4 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 2,
		},
	}
})


/*---------------------------------
Hot  Deals Carousel Activation -- 1
----------------------------------*/  
const hot_product_slider_1 = new Swiper('.hot-product-slider-1 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.hot-product-nav-1 .default-slider-nav--prev',
		prevEl: '.hot-product-nav-1 .default-slider-nav--next',
	},
	// Responsive breakpoints
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  }, 
	  768: {
		slidesPerView: 3,
	  },
	  992: {
		slidesPerView: 1,
	  },
	}
  })


/*----------------------------
 Catagories Carousel Activation
------------------------------ */ 
const features_catagory_slider_1 = new Swiper('.features-catagory-slider-1 .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.features-catagory-nav-1 .default-slider-nav--prev',
		prevEl: '.features-catagory-nav-1 .default-slider-nav--next',
	},

	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 4,
		},
		1200: {
		slidesPerView: 5,
		}
	}
  })


/*------------------------------------------
   Top Rate Carousel Activation -- 1
------------------------------------------- */  
const top_rated_1 = new Swiper('.top-rated-slider-1 .swiper', {
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.rate-extra .default-slider-nav--prev',
		prevEl: '.rate-extra .default-slider-nav--next',
	},
	grid: {
	  rows: 4,
	  fill: 'row',
	},
	// Responsive breakpoints
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  }, 
	  768: {
		slidesPerView: 3,
	  },
	  992: {
		slidesPerView: 1,
	  },
	}
  })

/*----------------------------
   Onsale Carousel Activation
------------------------------ */  
const onsale_slider_1 = new Swiper('.onsale-slider-1 .swiper', {
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.onsale-nav-1 .default-slider-nav--prev',
		prevEl: '.onsale-nav-1 .default-slider-nav--next',
	},
	grid: {
	  rows: 3,
	  fill: 'row',
	},
	// Responsive breakpoints
	breakpoints: {
	  0: {
		slidesPerView: 1,
	  }, 
	  768: {
		slidesPerView: 2,
	  },
	  992: {
		slidesPerView: 1,
	  },
	}
  })


/*-------------------------------------------
   Blog Post Carousel Activation - 4 columns
--------------------------------------------- */
const blogfeed_4columns = new Swiper('.blogfeed_4columns .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.blog .default-slider-nav--prev',
		prevEl: '.blog .default-slider-nav--next',
	},

	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 4,
		},
	}
  })
/*-------------------------------------------
   Blog Post Carousel Activation - 3 columns
--------------------------------------------- */
const blogfeed_3columns = new Swiper('.blogfeed_3columns .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.blog .default-slider-nav--prev',
		prevEl: '.blog .default-slider-nav--next',
	},

	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 3,
		},
		992: {
		slidesPerView: 2,
		},
	}
  })

  
/*-------------------------------------------
   Blog Post Carousel Activation - 2 columns
--------------------------------------------- */
const blogfeed_2columns = new Swiper('.blogfeed_2columns .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	// Navigation
	navigation: {
		nextEl: '.blog .default-slider-nav--prev',
		prevEl: '.blog .default-slider-nav--next',
	},

	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 1,
		}, 
		768: {
		slidesPerView: 1,
		},
		992: {
		slidesPerView: 2,
		},
	}
  })


/*----------------------------
   Brand Logo Carousel Activation
------------------------------ */  
const all_brand = new Swiper('.all_brand .swiper', {
	// Default parameters
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.brand .default-slider-nav--prev',
		prevEl: '.brand .default-slider-nav--next',
	},

	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 2,
		}, 
		576: {
		slidesPerView: 2,
		}, 
		768: {
		slidesPerView: 4,
		},
		992: {
		slidesPerView: 5,
		},
	}
  })


  /*-------------------------------------------
   Blog Slider Gallerty
--------------------------------------------- */
const blogLider_gallery = new Swiper('.blog-slider-gallery .swiper', {
	loop: true,
	// Default parameters
	spaceBetween: 30,
	slidesPerView: 1,
	// Navigation
	navigation: {
		nextEl: '.blog-slider-gallery-nav-1 .default-slider-nav--prev',
		prevEl: '.blog-slider-gallery-nav-1 .default-slider-nav--next',
	},
  })


   /*----------------------------
  single portfolio activation
------------------------------ */ 
const sub_pix= new Swiper('.sub_pix .swiper', {
	// Default parameters
	loop: true,
	spaceBetween: 15,
	// Responsive breakpoints
	breakpoints: {
		0: {
		slidesPerView: 2,
		}, 
		576: {
		slidesPerView: 2,
		}, 
		768: {
		slidesPerView: 4,
		},
		992: {
		slidesPerView: 5,
		},
	}
  })


 /*---------------------
	 countdown
	--------------------- */
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		});
	});



/*----------------------
	scrollUp 
	----------------------*/	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

/*-----------------------------
	Category Menu toggle
	-------------------------------*/
    $('.expandable a').on('click', function() {
        $(this).parent().find('.category-sub').toggleClass('submenu-active'); 
        $(this).toggleClass('submenu-active');  
        return false;  
    });	
	
/*----------------------------
  MixItUp:
------------------------------ */
	$('#Container') .mixItUp();

 /*----------------------------
 magnificPopup:
------------------------------ */	
	 $('.magnify').magnificPopup({type:'image'});
	 
	 
/*-------------------------
  Create an account toggle function
--------------------------*/
	 $( "#cbox" ).on("click", function() {
        $( "#cbox_info" ).slideToggle(900);
     });
	 
	 
	$( '#showlogin, #showcoupon' ).on('click', function() {
			$(this).parent().next().slideToggle(600);
		}); 
	
	/*-------------------------
	accordion toggle function
	--------------------------*/
	$('.payment-accordion').find('.payment-accordion-toggle').on('click', function(){
	//Expand or collapse this panel
	$(this).next().slideToggle(500);
	//Hide the other panels
	$(".payment-content").not($(this).next()).slideUp(500);

	});

	/* -------------------------------------------------------
	accordion active class for style
	----------------------------------------------------------*/
	$('.payment-accordion-toggle').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

})(jQuery); 
 
