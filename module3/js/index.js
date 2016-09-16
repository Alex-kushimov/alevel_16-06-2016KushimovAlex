(function($){
'use strict';
		

	$.fn.myCustomSelect = function(options) {

			var settings ={

			xClass: 'dropDown',
			icons: [],

			};

			options = $.extend(settings,options);
		return this.each(function(){

			$('#people').addClass(settings.xClass);

			$('#box').append('<h3 class="selected"></h3>');

			$('#people').parent().append('<ul class="dropDown" name="#people"></ul>');

			var selectOption = $('option').attr('selected');

			$('#people option').each(function(){

			 var img = $(this).attr('data-icon');
			 	settings.icons.push(img);

			 $('.dropDown')
			 	.append('<li value="' + $(this).val() + '">'+'<img src="'+img+'">'+''+$(this).text()+'</li>');
			});
			$('#people').remove();

			$('.dropDown')
				.addClass(settings.xClass);

			$('.selected')
				.html('Select a person:');

			$('.selected')
				.after('<i class="fa fa-caret-down .fa-1" aria-hidden="true"></i>');

			$('li').hide();

			$('.selected').on('click',function(){

				$('li').slideToggle('slow');

				$('li').click(function (event) {

					var content = $(this).html();

					$('.selected')
						.text("")
						.html(content);

					$('li').slideUp('slow');

			        event.stopPropagation();
				});
				})



		});
	};
})(jQuery);