
"use strict";
function getposts(){
    // var entries = [];
    $.getJSON("entries.json", function( data ) {
        $.each(data.posts, function(key, value) {
        	console.log("key: " + key + " value: ");
        	console.log(value);
            // entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");
            $('#posts').append('<div id="' + key + '" class="blogPosts">');
            $('#posts').append('<p id="date">' + value.t + '</p>' + "<br>");
            $('#posts').append('<p id="title">' + value.h  + '</p>' + "<br>");
            $('#posts').append('<p id="postcontent">' + value.c  + '</p>' + "<br>");
            $('#posts').append('</div>');

        });
        pager(obj);
    });	  
}



function pager(obj){

	var currentPage = obj;
	// var perPage = 4;
	// var postTotal = $('#posts').children().size();
	// 	console.log(postTotal/3);
	// var pageTotal = Math.ceil(postTotal/perPage);
	// 	console.log(pageTotal);

	$('#posts').append('<button id="back" class="turn" value="back">back</button> <button id="next" class="turn" value="next">next</button>');
}

$('button.turn').on("click", function(){
		$("#blogPosts").hide();
		// if(var i=1; )
	// when clicked, switch which posts are displayed
	// you may want to set the id of the button equal to 
	// the post # of where you want to start


	// when clicked, hide EVERY post
	// the display the number of posts you want
})

$('document').ready(getposts);
// $(".posts").slice(0,4).each(function ());