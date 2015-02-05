

// var draw = function(){

// 	this.$el=$('<div>')
// 		.addClass('quotes')
// 		.append()
// }




$(document).on('ready', function() {
  
  // creating Form for quote and Author

   //	var quotediv = $('<div class="quote-div" input="text">quotediv</div>');
 //  $('<p><input type="submit"></p>').appendTo('form:form1');
 //  $("#submitbtn").click(function (e) {
 // 		e.preventDefault();
	// var inputVal = $(".author-input").val();
 //     $(".container").append("#txtMessage").val(inputVal);
 // 	})
  
  var form1 = $("#form1")
  		
  		//$('<div>')
  		
  		//.append(quotediv)
  		.addClass('quotes')
  		//.append("h1").text("Please Add A Quote")
  		//.append('<textarea> Please Input a Quote </textarea>')
  		.append('<input class="quote-input"> Please Input the Quotes </input> <br> <br>')
  	
  		.append('<br><input class="author-input"> Please Input the Quotes Author</input> <br> <br>')
  		
  		.append('<button class="submitbtn" type="submit"> Submit</button>');

  		$(".submitbtn").click(function (e) {
 				e.preventDefault();
				
				var quoteVal  = $(".quote-input").val();
				var authorVal = $(".author-input").val();
     	
     	$(".container").append("#txtMessage").val(quoteVal);
     	$(".container").append("#txtMessage").val(authorVal);
     	console.log(quoteVal, authorVal);
 	}) // end of Form1
  		;
// var formclone = $("#form1").clone();
// 	$("#form1").after(formclone)
// 	$

// 	;




}); //end Jquery