
   "use strict";
  function getposts(){
        // var entries = [];
		      $.getJSON("entries.json", function( data ) {
		          $.each(data.posts, function(key, value) {
		              // entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");
		              $('#posts').append('<p id="date">' + value.t + '</p>' + "<br>");
		              $('#posts').append('<p id="title">' + value.h  + '</p>' + "<br>");
		              $('#posts').append('<p id="postcontent">' + value.c  + '</p>' + "<br>");
		          });
		      });
		  
		 

		  function nav() {

		  		var perPage = 4;
		  		var postTotal = $('#posts').children().size();
		  		var pageTotal = Math.ceil(postTotal/perPage);

		  		$('#currentPage').val(0);
		  		$('#perPage').val(perPage);

		  		var pageNav = '<a class="previousPage" href="javascript:previous();"> Prev </a>';
		  		var currentLink = 0;
		  		while(pageTotal > currentLink){
		  			pageNav += '<a class="nextLink" href="javascript:goToPage(' + currentLink +')" longdesc="' + currentLink +'">' + (currentLink + 1) + '</a>';
		  			current_link++;
		  		}
		  		pageNav += '<a class="nextLink" href="javascript:next();"> Next </a>';

		  		$('#pageNav').html(pageNav);

		  		$('#pageNav .pageLink: first').addClass('activePage');

		  		$('#posts').children().css('display','none');

		  		$('#posts').children().slice(0, perPage).css('display','block');

		  };

		function previous() {
			newPage = parseInt($('#perPage').val()) - 1;

			if($('.activePage').next('.pageLink').length===true) {
				goToPage(newPage);
			}
		}
		function next() {
			newPage = parseInt($('#currentPage').val()) - 1;

				if($('.activePage').next('.page_link').length==true) {
						goToPage(newPage);
				}

		}
		function goToPage(pageNum) {
			
			var ShowPerPage = parseInt($('#ShowPerPage').val());

			var startFrom = pageNum * ShowPerPage;

			var endOn = startFrom + ShowPerPage;

			$('#posts').children().css('display','none').slice(startFrom, endOn).css('display','block');

			$('.pageLink[longdesc=' + pageNum +']').addClass('activePage').siblings('.activePage').removeClass('activePage');

			$('#currentPage').val(pageNum);
			console.log('made it');
		}
	}

		 $('document').ready(getposts);
		