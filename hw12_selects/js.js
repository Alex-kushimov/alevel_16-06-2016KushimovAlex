(function ($) {
	var defaultOptions = {};
	
	$.fn.selectTreeSelector = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
    }    
  
  };
	var methods = {
			val: function(selectArray){
				var resultArray= [];
				if(typeof value === 'undefined'){
					
					for(var i=0; i<selectArray.length; i++)
					resultArray = resultArray.push($(selectArray[i]).val());
					
				}
				else{
					
				}
				
			},
			
			init: function(options){
            this.settings = $.extend({}, this.defaultOptions, options);
			var currentNode = this.settings.data;
			var this_ = this;
            var selectArray = [];
            
            
            function drawCurrentNode(){
            	
	            var select = $("<select>").append($("<option>").html(" -- "));
	            if (Array.isArray(currentNode)){
	            	for (var i = 0; i<currentNode.length;i++){
	            		select.append($("<option>").val(currentNode[i]).html(currentNode[i]));
	            	}
	            }
	            else{
	            	for (i in currentNode){
	            		select.append($("<option>").val(i).html(i));
	            	}
	            }
	            
	            
	            (function(ourIndex){
		            select.change(function(){
		            	
		            	var selectCurrentNode = selectArray[ourIndex].currentNode;
		            	// var ourIndex = -1;
		            	
		            	// for (var i = 0; i<selectArray.length; i++){
		            	// 	if($(selectArray[i].select.is(this))){
		            	// 		selectCurrentNode = selectArray[i].currentNode;
		            	// 		ourIndex = i;
		            	// 		break;
		            			
		            	// 	}
		            	// }
		            	
		            	if (!Array.isArray(selectCurrentNode)){
		            		
		            		var thisSelect = this;
		            		for(var i = ourIndex+1; i<selectArray.length; i++){
		            			$(selectArray[i].select).remove();
		            		}
		            		selectArray = selectArray.slice(0,ourIndex+1);
		            		
		            		// this_.find("select").each(function(index,elem){
		            		// 	//alert(index + ":" + ourIndex);
		            		// 	if ((ourIndex < index) && (ourIndex > -1)){
		            		// 		$(elem).remove();
		            		// 	}
		            		// 	if ($(elem).is(thisSelect)){
					            	
		            		// 		ourIndex = index;
		            		// 	}
		            		// });
		            		currentNode = selectCurrentNode[$(this).val()];
			            	drawCurrentNode();
		            	}
		            	
		            });
	            })(selectArray.length);
	            
	            this_.append(select);
	            selectArray.push({select:select,currentNode:currentNode});
	      
            }
            
            drawCurrentNode();
            
            
            
            return this;
		}
		};
		
		
	
})( jQuery);



$(document).ready(function(){
$.ajax({
            url: "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json",
            type: "GET",
            crossDomain: true,            
            success: function (response) {                
                var resp = JSON.parse(response)
                $('#plugin_container').selectTreeSelector({data:resp});
                $('#plugin_container').selectTreeSelector('val');
            	
            	
            },
            
            error: function (xhr, status) {
                alert("error");
            },
            
        });
        });
// $(document).ready(function (){
// 	$('#plugin_container').selectTreeSelector({data: 
// 	{"level0" : 
// 		{"level0_0": ["level0_0_0", "level0_0_1"], 
// 		"level0_1": ["level0_1_0"], 
// 		"level0_2": ["level0_2_0", "level0_2_1"]},
// 	"level1": ["level1_0"]
// 	}});
	
// 	/*$('#plugin_container').selectTreeSelector({data: 
// 	["level0","level1"]});*/
// });