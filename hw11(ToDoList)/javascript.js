(function($){
'use strict';



$(function(){
	var $saveTaskBtn = $('#save-task-btn'),
	 	$formNewTask = $('#form-new-task'),
	 	$modalNewTask = $('#myModal'),
	 	$alert = $('#alert'),
	 	$radioStatus = $('.status'),
	 	countUndone = 0,
        countDone = 0,
        countInProgress = 0,
        tasks = [];

	 	$('#alert').hide();



	 	for(var i in localStorage){
      if(localStorage.hasOwnProperty(i)){
        tasks.push($.extend(JSON.parse(localStorage[i]), {id : i}));
      }
    }

	 	var undone = tasks.filter(function(item){
      return item.status === '1';
    });

    var inprogress = tasks.filter(function(item){
      return item.status === '2';
    });

    var done = tasks.filter(function(item){
      return item.status === '3';
    });


	 	undone.forEach(function(item){
      $('#undone .list-group').append('<a href="#" class="list-group-item">' + item.title + ' <i class="delete fa fa-times"></i>');
    });

	    inprogress.forEach(function(item){
	      $('#inprogress .list-group').append('<a href="#" class="list-group-item">' + item.title + ' <i class="delete fa fa-times"></i>');
	    });

	    done.forEach(function(item){
	      $('#done .list-group').append('<a href="#" class="list-group-item">' + item.title + ' <i class="delete fa fa-times"></i>');
	    });


	$saveTaskBtn.on('click', function(){
		var data = {
			title : $('[name=title]', $formNewTask).val(),
			description: $('[name=description]', $formNewTask).val(),
			status: $( '.status:checked', $formNewTask).val()
		};

		var id = Math.random().toString(36).substr(2);

		localStorage.setItem( id, JSON.stringify(data) );

		// $('#undone .list-group').append('<a href="#" class="list-group-item">' + data.title + ' <i class="delete fa fa-times"></i>'+'<span class="label label-primary">New</span>')
		if(data.status === "1"){
         	$('#undone .list-group').append('<a href="#" class="list-group-item">' + data.title + ' <i class="delete fa fa-times"></i>'+'<span class="label label-primary pull-right">New</span>');
         	$('#count-undone').html(countUndone+=1);
      	}
      	else if(data.status === "2"){
         	$('#inprogress .list-group').append('<a href="#" class="list-group-item">' + data.title + ' <i class="delete fa fa-times"></i>'+'<span class="label label-primary pull-right">New</span>');
         	$('#count-inprogress').html(countInProgress+=1);
      	}
      	else if(data.status === "3"){
         	$('#done .list-group').append('<a href="#" class="list-group-item">' + data.title + ' <i class="delete fa fa-times"></i>'+'<span class="label label-primary pull-right">New</span>');
      		$('#count-done').html(countDone+=1);
      	}


		$modalNewTask.modal('hide');
		
		$alert.show();

		setTimeout(function(){
         $alert.hide()
      }, 3000);


		$('[name]', $formNewTask).val('');


	});
});

})(jQuery);