// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	 init : function(){
		this.idxNav();
		this.b06Blog();
	 },
 	idxNav : function(){
 		$('#fix-scroll').onePageNav();
	},
 	b06Blog : function(){
 		$.ajax({
	        'url': 'news/_custom/',
	        'dataType': 'jsonp',
	        'success': function(json) {
	            $.each(json.data, function(i, val) {
	                var tlt = val.title.length < 20 ? val.title : val.title.substr(0, 60) + '...';

	                // var $li = $('<li><span>' + val.date + '</span><span>' + val.category_name + '</span><a href="blog/' + val.url + '">' + tlt + '</a></li>');
	                var $li = $('<li><span class="date">' + val.date + '</span><a href="news/' + val.url + '">' + tlt + '</a></li>');
	                $li.appendTo('.idx-ov');
	            });
	        },


	    });
	},
	 };
	 ojbect.init();
});