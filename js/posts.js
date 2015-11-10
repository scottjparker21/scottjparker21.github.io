
   "use strict";
  function getposts(){
        // var entries = [];
      $.getJSON("entries.json", function( data ) {
          $.each(data.posts, function(key, value) {
              // entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");
              $('#posts').append('<p id="date">' + value.t + '</p>' + "<br>");
              $('#posts').append(value.h  + "<br>");
              $('#posts').append(value.c  + "<br>");
          });
      });
  }
  $('document').ready(getposts);