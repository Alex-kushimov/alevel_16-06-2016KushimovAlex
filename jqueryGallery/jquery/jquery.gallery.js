(function($){
	'use strict';
	$.fn.gallery = function(options){
		var defaults = {
			thumbs:true,
			xClass:'',
			height:0,
			current:0,
			shift:0
		};

		options = $.extend(defaults,options);

		return this.each(function(){
			var $gallery = $(this),
			$items = $gallery.children(),
			$thumbs = $gallery.children().clone();
			
			$gallery
			.addClass('gallery')
			.attr('tabindex',0);
			

			var $galleryItemsBox = $items.wrapAll('<div class="gallery-items-box">').parent();
			var $galleryItems = $galleryItemsBox.wrapInner('<div class="gallery-items">').children();

			options.height = options.height ? options.height : $items.height();

			$galleryItems.height(options.height + 'px');
			$('img', $items).css('max-height', options.height + 'px');

			$items
			.addClass('gallery-item')
			.addClass(options.xClass)
			.eq(options.current)
			.addClass('current');

			var $arrowLeft = $('<div class="gallery-control gallery-arrow-left">'),
			    $arrowRight = $('<div class="gallery-control gallery-arrow-right">');

			$galleryItemsBox.append($arrowLeft,$arrowRight);

			$arrowRight.on('click',{direction: 'right'},arrowHandler);

			$arrowLeft.on('click',{direction: 'left'},arrowHandler);

			function arrowHandler(event){
				switch (event.data.direction){
					case 'right':
					
					var index = $galleryItems.find('.current').index() + 1;
					if (index === $items.length) {index = 0};
					break;
					case 'left':
					
					var index = $galleryItems.find('.current').index() - 1;
					if (index <0) {index = $items.length - 1};
					break;
				}

				$items
				.removeClass('current')
				.eq(index)
				.addClass('current');

				switch (event.data.direction){
					
					case 'right':
					
					var index = $galleryThumbs.find('.current').index() + 1;
					if (index === $thumbs.length) {index = 0};
					break;

					case 'left':
					
					var index = $galleryThumbs.find('.current').index() - 1;
					if (index <0) {index = $thumbs.length - 1};
					break;

				}
				$thumbs
				.removeClass('current')
				.eq(index)
				.addClass('current');
				moveGalleryThumbs();
			}

				$gallery.on('keydown',function(event){
					if(event.keyCode === 39){
						$arrowRight.trigger('click');
					}
					else if (event.keyCode === 37){
						$arrowLeft.trigger('click');
					}
				});
				if (options.thumbs) {
				   var $galleryThumbsBox = $('<div>').addClass('gallery-thumbs-box').appendTo($gallery);

				   var $galleryThumbs = $('<div class="gallery-thumbs">').appendTo($galleryThumbsBox);

				   $galleryThumbs
				    .width( $thumbs.length * 100 )
				    .css({'left': 0});

				   $thumbs
				    .addClass('gallery-thumb')
				    .appendTo($galleryThumbs)
				    .eq(options.current)
					.addClass('current')
				  }
				  $('.gallery-thumb', $galleryThumbs).on('click', function(event){
				  	var index = $(this).index();

				  	$items
				  	.removeClass('current')
				  	.eq(index)
				  	.addClass('current');

				  	$thumbs
				  	.removeClass('current')
				  	.eq(index)
				  	.addClass('current');

				  	moveGalleryThumbs();
				  })
				  function moveGalleryThumbs(){
				  	var boxWidth = $galleryThumbsBox.outerWidth(),
				  	itemPos = $('.current', $galleryThumbs).position().left,
				  	itemWidth = $('.current', $galleryThumbs).outerWidth(true),
				  	minLeft = $galleryThumbsBox.outerWidth() - $galleryThumbs.outerWidth();

				  	if (itemPos > boxWidth /2) {
				  		
				  		var shift = (boxWidth - itemWidth) / 2 - itemPos;

				  		if (shift < minLeft)
				  			shift = minLeft;

				  		$galleryThumbs.css('left',shift);
				  	}
				  	else {
				  		$galleryThumbs.css('left',0);
				  	}
				  }
		});
	}
})(jQuery);