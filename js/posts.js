
"use strict";
// var entries = [];


$(document).ready(getposts);

// 	function getposts(){
// 	$.getJSON("entries.json", function (data) {
// 		$.each(data.posts, function (key, value) {
// 			console.log("key: " + key + " value: ");
//         	console.log(value);
//         	var post = "<div id='" + key + "'class='blogPosts'>"
//         	post += "<small><p class='muted' style='float:left;'>" + value.t + "</p></small><br>";
//         	post += "<h5>" + value.h + "</h5><p>" + value.c + "</p><hr/></div>";
        	
//         	$("#posts").append(post);
//         		if(data.posts.length - 1 == key){
//         			$('#posts').append("<div id='cntrl' style='text-align:center;' class='col-sm-12'></div>");
//         			paginate({page:1, numPosts:data.posts.length});
//         		}

// 			});
// 		});
// 	}

// 	function paginate(obj) {
// 		var page = obj.page;
// 		console.log('page= ' + page);
// 		var numPosts = obj.numPosts;
// 		console.log('number of posts= ' + numPosts);
// 		var pageSize = 3;
// 		$(".blogPosts").hide();
// 		$(".blogPosts").each(function(n) {

// 			if (n>= pageSize * (page - 1) && n < pageSize * page){
// 				$(this).show();
// 				console.log(n);
// 			}
// 		});
// 		if(numPosts > 3) {
// 				$("#cntrl").empty();
// 				$("#cntrl").html("");
// 				if(page > 1) {
// 					var p = page - 1;
// 					$("#cntrl").append("<button id='" + p + "' class='bcontrol' name='pp' type='button' style=''>previous</button>");
// 					$("button.bcontrol[name=pp]").click(function() {
// 						paginate({page:p, numPosts:numPosts});
// 					});
// 				}
// 				if(Math.ceil(numPosts/pageSize > page)) {
// 						var n = page + 1;
// 						$("#cntrl").append("<button id'" + n + "' class='bcontrol' name='nn' type='button' style=''>next</button>");
// 						$("button.bcontrol[name=nn]").click(function() {
// 							paginate({page:n, numPosts:numPosts});
// 						});
// 				}
// 		}
// 	}


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
	console.log(pageTotal);
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
	// if we are on the last page, hide the next button

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


