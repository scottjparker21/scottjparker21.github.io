
"use strict";
// var entries = [];


$(document).ready(getposts);

	function getposts(){
	$.getJSON("entries.json", function (data) {
		$.each(data.posts, function (key, value) {
			console.log("key: " + key + " value: ");
        	console.log(value);
        	var post = "<div id='" + key + "'class='blogPosts'>"
        	post += "<small><p class='muted' style='float:left;'>" + value.t + "</p></small><br>";
        	post += "<h5>" + value.h + "</h5><p>" + value.c + "</p><hr/></div>";
        	
        	$("#posts").append(post);
        		if(data.posts.length - 1 == key){
        			$('#posts').append("<div id='cntrl' style='text-align:center;' class='col-sm-12'></div>");
        			paginate({page:1, numPosts:data.posts.length});
        		}

			});
		});
	}

	function paginate(obj) {
		var page = obj.page;
		console.log('page= ' + page);
		var numPosts = obj.numPosts;
		console.log('number of posts= ' + numPosts);
		var pageSize = 3;
		$(".blogPosts").hide();
		$(".blogPosts").each(function(n) {

			if (n>= pageSize * (page - 1) && n < pageSize * page){
				$(this).show();
				console.log(n);
			}
		});
		if(numPosts > 3) {
				$("#cntrl").empty();
				$("#cntrl").html("");
				if(page > 1) {
					var p = page - 1;
					$("#cntrl").append("<button id='" + p + "' class='bcontrol' name='pp' type='button' style=''>previous</button>");
					$("button.bcontrol[name=pp]").click(function() {
						paginate({page:p, numPosts:numPosts});
					});
				}
				if(Math.ceil(numPosts/pageSize > page)) {
						var n = page + 1;
						$("#cntrl").append("<button id'" + n + "' class='bcontrol' name='nn' type='button' style=''>next</button>");
						$("button.bcontrol[name=nn]").click(function() {
							paginate({page:n, numPosts:numPosts});
						});
				}
		}
	}


// function getposts(){
   
//     $.getJSON("entries.json", function( data ) {
//         $.each(data.posts, function(key, value) {
//         	console.log("key: " + key + " value: ");
//         	console.log(value);
//             // entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");
//             $('#posts').append('<div id="' + key + '" class="blogPosts">');
//             $('#posts').append('<p id="date" class="' + key + '">' + value.t + '</p>' + "<br>");
//             $('#posts').append('<p id="title" class="' + key + '">' + value.h  + '</p>' + "<br>");
//             $('#posts').append('<p id="postcontent" class="' + key + '">' + value.c  + '</p>' + "<br>");
//             $('#posts').append('</div>');
            
           
//         });      
//         pager(data);
//     });	 
//     // console.log(entries);
// }




// // document.ready(data);

// function pager(obj){

// // var key = value.t;
	
// 	var curPage = 1;
// 	var perPage = 4;
// 	var postTotal = $('#posts').children('.blogPosts').size();
// 	console.log(postTotal);
// 		console.log(postTotal/3);
// 	var pageTotal = Math.ceil(postTotal/perPage);
// 		console.log(posts);

// 		// $("#posts").each(function(n) {
// 		// 	var i = 1;
// 		// 	$('#posts').children('".' + i + '"').hide();
// 		// 	i ++;
// 		// });
  		
// 		for(var i = 1 ; i < 4; i++) {
// 				$('#posts').children('".' + i + '"').hide();
// 		}


// 		// $('#posts').children('.blogPosts').hide();
// 		// $('#posts').children('.1').hide();
// 		// $('#posts').children('.2').hide();
// 		// // $('#posts').children('#').show();
// 		// for(var i=0; i < 4; i++){
// 		// 	$('#i').show();
// 		// 		}
	
	
// // 		for (var i = 0, l = obj.posts.length; i < l; i++) {
// //     var x = obj.posts[i];
// //     // ...
// // }
// // console.log(x);
// 	// $('#posts > #date').show();
   

//  }

        
  


	// $('#posts').append('<button id="prev" class="turn" value="back">back</button> <button id="next" class="turn" value="next">next</button>');

// }


// $('button.turn').on("click", function(){
// 		$("#blogPosts").show();
// 		if(var i=1; )
	// when clicked, switch which posts are displayed
	// you may want to set the id of the button equal to 
	// the post # of where you want to start


	// when clicked, hide EVERY post
	// the display the number of posts you want
// })

// $('document').ready(getposts);
// $(".posts").slice(0,4).each(function ());


