// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.anchorScroll();
			this.iconMenu();			
	  },
	  //totop
	  toTop: function(){
  		  $(".fix-sp").hide();
  		  $(window).scroll(function(){
  			  if($(this).scrollTop() > 100){				  
  				  $(".fix-sp").fadeIn();
  			  }
  			  else{
  				  $(".fix-sp").fadeOut();				  
  			  }
  		  });
  		  $("#totop a").click(function(){
  			 $('body,html').animate({
  				scrollTop:0 
  			 }, 500);
  			 return false;
  		  });
  	  },
	  //smoothScroll
	  smoothScroll : function(){
			$('a[href^="#"]').click(function(){
				var wWidth = $(window).width();
					if ( $( $(this).attr('href')).length ) {
						var p = $( $(this).attr('href') ).offset();
						if(wWidth <= 640){
							$('html,body').animate({ scrollTop: p.top - 60}, 500);
							$('#sp-gnavi').removeClass('open');
						} else {
							$('html,body').animate({ scrollTop: p.top - 80}, 500);
						}
					}
				return false;
			});
		},
	  // Anchor scroll
	  anchorScroll : function(){
			 var wWidth = $(window).width();
			 var hash1= location.hash;
			 var $root = $('html, body');
			 var top01 = $(hash1).offset(); 
				if(wWidth <= 640){
				 if(hash1!==""){ 	  
				  $root.animate({ scrollTop:top01.top - 60}, 500);  
				 }    
				} else {
				 if(hash1!==""){  		  
				  $root.animate({ scrollTop:top01.top - 80}, 500);  
				 }    
				}		
			},
	 //sp gnavi
	 iconMenu : function(){	
			 $('.menu-icon').click(function() {		
			 $(this).toggleClass('active');
			 $('body').toggleClass('open');
			 $('#gnavi').toggleClass('open');	
			});
		
		}	
  };
  
  obj.init();
});


