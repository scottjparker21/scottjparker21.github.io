
"use strict";

$(document).ready(getposts);

function getposts(){
   
    $.getJSON("entries.json", function( data ) {
        $.each(data.posts.reverse(), function(key, value) {
        	//console.log("key: " + key + " value: ");
        	//console.log(value);
            // entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");
            var post = '<div id="p' + key + '" class="blogPosts">';
            post += '<p id="date" id="d' + key + '">' + value.t + '</p>';
            post += '<p id="title" id="t' + key + '">' + value.h  + '</p>';
            post += '<p id="postcontent" id="pc' + key + '">' + value.c  + '</p>';
            post += '</div>';
            $('#posts').append(post);
           
        });      
        var postsPerPage = 4;
        pager(0,postsPerPage);
    });	 
    // console.log(entries);
}




// document.ready(data);

function pager(curPage, ppp){
	
	$('#posts > div.blogPosts').hide();
	var pageTotal = $('div.blogPosts').size();
	var numPages = Math.floor(pageTotal/ppp);

	for(var i = curPage*ppp; i < (curPage+1)*ppp; i++) {
			$('#p' + i).show();
	}

	if(curPage == 0){
		$('button.prev').hide();
	} else {
		$('button.prev').show();
	}
	if(curPage == numPages) {
		$('button.next').hide();
	} else {
		$('button.next').show();
	}
	// if you are on the last page, hide the next button

	$('button.prev').attr("id",curPage-1);
	$('button.next').attr("id",curPage+1);

}
/*
function getCurrPage(){
	console.log(direct,ppp);
	var pid = $("#posts>div:first-child").attr("id");
	// get number from id
	var arr = pid.split('p');
	console.log(arr[1]);
	var cpost = parseInt(arr[1]);
	// get current page from number

	var curPage = (cpost / ppp);
}
*/
/*
function navigate (ppp, dest) {  // posts per page and destination
	// get id of first post


	//console.log("currently on: " + cpost + " / " + ppp + " = " + curPage);
	var nextPage = cp + direct;
	console.log("navigating to: " + cp + " + " + direct + " = " +  nextPage);

	pager(nextPage, ppp);
	// page = add the number to var direct (which is +/- 1)
	// pager(page);
}
*/

$(document).ready( function() {    
     $('button.turn').click(function() {
     	var postsPerPage = 4;
     	pager(parseInt($(this).attr("id")), postsPerPage);  
     });
});
 //     $('button#back').on('click', navigate(-1));
 // });
// $('#next').on("click",navigate(){}); // call navigate with param 1 or -1
// $('#prev').on("click", function (){}); // call navigate with param 1 or -1



// $('button.turn').on("click", function(){
// 		$("#blogPosts").show();
// 		if(var i=1; )
// 	when clicked, switch which posts are displayed
// 	you may want to set the id of the button equal to 
// 	the post # of where you want to start


// 	when clicked, hide EVERY post
// 	the display the number of posts you want
// })

// $('document').ready(getposts);
// $(".posts").slice(0,4).each(function ());


