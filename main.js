

var Quotes = function(quote, author){
		// Storing Quotes

		this.quote = quote;
		this.author = author;
		this.rating = 0;
};

// Displaying Quotes

Quotes.prototype.render = function() {

this.$el = $('#quote-template').clone()
    .attr('id', '');

  // Inject instance data into template
  	this.$el.find('.quote-title').text(this.quote);
  	this.$el.find('.quote-author').text(this.author);

  // Hook up the stars:
  //  First with the mouseOver and then with the click.
  //  Click needs to keep access to "this," which is
  //  the current book instance, but jQuery will override
  //  that value as a helper. We use "bind" to force this
  //  to stay as the book and not represent the clicked item.
  this.$el.find('.rating li')
    .on('mouseover', this._starOver)
    .on('click', this._starClick.bind(this));

  return this.$el;
};



//
 // Internal handler for hovering over a rating star
 
Quotes.prototype._starOver = function() {
  // Log out the index of the star within the common parent
  var currentIndex = $(this).index();

  // First, remove the active class from all items in
  // this current book's rating block
  $(this).parent().children().removeClass('active');

  // Set all stars less-than the current star to have
  // the active class
  $(this)
    .parent()
    .children(':lt(' + (currentIndex + 1) + ')')
    .addClass('active');
};

/**
 * Internal handler for clicking on a rating star
 * @param  {object} e Event arguments from jQuery
 */
Quotes.prototype._starClick = function(e) {
  var currentQuote = this;
  var ratingStar = $(e.currentTarget);
  var rating = ratingStar.index() + 1;
  currentQuote.rating = rating;
  
};



/**
 * Library of Quotes
 * @param {string} authorName Who created this quote library?
 */
var Quotelibrary = function(authorName){
  this.authorName = authorName;
  this.quotes = [];
};

/**
 * Helper for adding books to a given library
 * @param {...} books Books to add
 */
Quotelibrary.prototype.addQuotes = function() {
  // concat is non-destructive, so we need to re-assign
  // to its result. This overrides the original value
  // with the new set
  this.quotes = this.quotes.concat([].slice.call(arguments));

  // If this was set up for just being 'addBook,' we
  // could just use:
  // this.books.push(book);
};

/**
 * Render a library, which, in turn, will render
 * its books.
 * @return {jQuery} jQuery DOM element representing the library
 */
Quotelibrary.prototype.render = function() {
  this.$el = $('#quotelibrary-template').clone()
    .attr('id', '');

  // Inject instance data into template
  this.$el.find('.author-name').text(this.authorName);

  // Render each quote in this library
  this.$el.find('.quote').empty().append(
    this.quotes.map(function(arg){
      // Render the individual book and
      // store it in the mapped array
      //console.log("got here2", quotes );
      return arg.render();
    }) //this.quotes fcn end
   ); // empty append end
  	return this.$el;
 };


  Quotelibrary.prototype.sort = function(arg){
  		//quotes.map(function () {
  		//	console.log(quotes.sort());
  		var stars =[];
  		for (i=0;i<arg.length; i++){

  				var stars =  this.quotes.rating;
  			} //stars
  			console.log(stars);
  			console.log(arg);
  			return arg.sort();
  		};
  //})}; //End Quotelibrary sort
  		
//};  //end of Quotelibrary



// Creating Instances of Quotes and Authors

//Quote Library # 1
var LBJ = new Quotes("I will not run for re-election", "Lyndon Baines Johnson");
var JFK = new Quotes("Ask not what your country can do for you, Ask what you can do for your country", "John F. Kennedy");

var mdfQuoteLibrary = new Quotelibrary('Michael\s Quote Library');
mdfQuoteLibrary.addQuotes(LBJ, JFK);

//Quote Library # 2

var GW = new Quotes(" I have given Liberty", "George Washington");
var TR = new Quotes(" Speak Softly, and Carry A Big Stick", "Teddy Roosevelt");

var gdrQuoteLibrary = new Quotelibrary("Georges\ Quote Library");
gdrQuoteLibrary.addQuotes(GW, TR);
 	//mdfQuoteLibrary.sort();
// Main Body Calling Functions


$(document).on('ready', function() {
	// render libraries
	$('.quotelibraries')
			.append(LBJ.render())
			.append(JFK.render())
			.append(GW.render())
			.append(TR.render())
			
			.append(mdfQuoteLibrary.render())			
			.append(gdrQuoteLibrary.render());
//			
var form1 = $("#form1") 
  		
  		//$('<div>')
  		
  		//.append(quotediv)
  		.addClass('quotesinput')
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
     		var newQuote = new Quotes(quoteVal, authorVal);
     		$('.quotelibraries').append(newQuote.render());

		   // $('.rating').on('focusin', function(){
		   // 			console.log("got here222");
		   // 	});

		// $('.rating').children("li").text("here");
			$('.rating').text("here");

 		}); //end of submit button 

  $('.rating').on('click', function(){
		 		mdfQuoteLibrary.sort();	
		 	//console.log(mdfQuoteLibrary);
		 	//	gdrQuoteLibrary.sort();
		 	//	newQuote.sort();
		  	});



}); //end Jquery

// var draw = function(){

// 	this.$el=$('<div>')
// 		.addClass('quotes')
// 		.append()
// }




//$(document).on('ready', function() {
  
  // creating Form for quote and Author

   //	var quotediv = $('<div class="quote-div" input="text">quotediv</div>');
 //  $('<p><input type="submit"></p>').appendTo('form:form1');
 //  $("#submitbtn").click(function (e) {
 // 		e.preventDefault();
	// var inputVal = $(".author-input").val();
 //     $(".container").append("#txtMessage").val(inputVal);
 // 	})
  
  // var form1 = $("#form1")
  		
  // 		//$('<div>')
  		
  // 		//.append(quotediv)
  // 		.addClass('quotes')
  // 		//.append("h1").text("Please Add A Quote")
  // 		//.append('<textarea> Please Input a Quote </textarea>')
  // 		.append('<input class="quote-input"> Please Input the Quotes </input> <br> <br>')
  	
  // 		.append('<br><input class="author-input"> Please Input the Quotes Author</input> <br> <br>')
  		
  // 		.append('<button class="submitbtn" type="submit"> Submit</button>');

  // 		$(".submitbtn").click(function (e) {
 	// 			e.preventDefault();
				
		// 		var quoteVal  = $(".quote-input").val();
		// 		var authorVal = $(".author-input").val();
     	
  //    	$(".container").append("#txtMessage").val(quoteVal);
  //    	$(".container").append("#txtMessage").val(authorVal);
  //    	console.log(quoteVal, authorVal);
 	// }) // end of Form1
  		
// var formclone = $("#form1").clone();
// 	$("#form1").after(formclone)
// 	$

// 	;




