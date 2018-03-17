(function($){

	"use strict";

	$(document).ready(function () {
		scripts.init();
	});

	var scripts = {
		
		init : function() {
		
			//christmass balls
			/*$('.ball a').click(function () {
				$(this).toggleClass('open');
			});*/
			
			//contact
			$('.trigger').click(function(){
				$('.contact,.snow').show(400);
			});
			$('#close').click(function(){
				$('.contact,.snow').hide(400);
			});
			
			
			$('#contactform').submit(function(){
		
				var action = $(this).attr('action');
				
				$("#message").show(400,function() {
					$('#message').hide();
					
					$('#submit')
						.after('<img src="images/ico/ajax-loader.gif" class="loader" />')
						.attr('disabled','disabled');
					var $regimen='',$regimen1='',$regimen2='',$regimen3='';
					if($('#regimen:checked')[0]!=undefined)
						$regimen=$('#regimen:checked').val();
					if($('#regimen1:checked')[0]!=undefined)
						$regimen1=$('#regimen1:checked').val();
					if($('#regimen2:checked')[0]!=undefined)
						$regimen2=$('#regimen2:checked').val();
					if($('#regimen3:checked')[0]!=undefined)
						$regimen3=$('#regimen3:checked').val();
					$.post(action, { 
						name: $('#name').val(),
						email: $('#email').val(),
						phone: $('#phone').val(),
						zip_postal: $('#zip_postal').val(),
						//subject: $('#subject').val(),
						regimen: $regimen+$regimen1+$regimen2+$regimen3+'',
						gender: $('#gender').val(),
						agegroup: $('#agegroup').val(),
						cosmetic: $('#cosmetic').val(),
						product: $('#product').val()
						//verify: $('#verify').val()
					},
					
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled'); 
						//if(data.match('success') != null) $('#contactform').slideUp(3000);
						
						}
					);
				});
				return false; 
			});
		}	
	}
})(jQuery);

