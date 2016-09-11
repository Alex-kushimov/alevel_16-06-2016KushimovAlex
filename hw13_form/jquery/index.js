function saveData(item) {
	alert($(item).val());
}

var countries = [
	{ value: 1, text: 'Ukraine' },
	{ value: 2, text: 'Russia' },
	{ value: 3, text: 'USA' },
	{ value: 4, text: 'Germany' },
	{ value: 5, text: 'United Kingdom' },
	{ value: 6, text: 'China' }
];

(function($) {
'use strict';

$('[editable]').on('click', function(e) {
	e.preventDefault();



	var $this = $(this),
		type = $this.attr('editable');
	var tag;
	switch (type) {
		case 'textarea': tag = '<textarea class="addT"><button class="ok btn btn-default" role="group" aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'text': tag = '<input class="addT" type="text"><button class="ok btn btn-default" role="group" aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'password': tag = '<input class="addT" type="password"><button class="ok btn btn-default"  aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'email': tag = '<input class="addT" type="email"><button class="ok btn btn-default"  role="group" aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'number': tag = '<input class="addT" type="number"><button class="ok btn btn-default" role="group" aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'color': tag = '<input class="addT" type="color"><button class="ok btn btn-default" role="group" aria-label="..."><i class="fa fa-check" aria-hidden="true"></i></button><button class="cancel btn btn-default" role="group" aria-label="..."><i class="fa fa-ban" aria-hidden="true"></i></button>'; break;
		case 'select': tag = '<select class="addT">';
			break;
	}



	if (tag === '<select class="addT">'){

		

		$.each(countries, function(){

        tag +='<option>  ' + this.text +'  </option>';
    });
	};

	

	var $element = $(tag);

	var onafterchange = $(this).attr('onafterchange');

	$element
		.val( $this.text() )
		.insertAfter( $this )
		.focus()
		.select();

	$this.hide();

	$('.ok').on('click',function(e){
			var onafterchange = $(this).attr('onafterchange');
			var $elem = $('[editable]').focus().val();
		
				 $elem = $('.addT').focusin().val();
		
				 $this.html($elem);

		$('.addT').remove();
		$('[editable-text]').focusin().show();
		$('[editable-text]').siblings().hide();
	});
	$('.cancel').on('click',function(e){
		
			// var $elem = $('[editable]').focus().val();
		
			// 	 $elem = $('.addT').focusin().val();
		
			// 	 $this.html($elem);

		$('.addT').remove();
		$('[editable-text]').focusin().show();
		$('[editable-text]').siblings().hide();
	});

	$element
	.on('keydown', function(event) {
		switch (event.keyCode) {
			case 27:
				$this.show();
				$(this).remove();
				break;
			case 13:
				var newValue = $(this).val();
				$this
					.text( newValue )
					.show();
					$this.hide();

				$(this).remove();

				if (onafterchange)
					eval(onafterchange);
				break;
		}
	});
	
});
})(jQuery);
