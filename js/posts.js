
   "use strict";
  function getposts(){

        var entries = [];

      $.getJSON("entries.json", function( data ) {
          $.each(data.posts, function(key, value) {
                entries.push(value.t + "<br>" + value.h + "<br>" + value.c + "<br>");

              console.log(value.t);
              console.log(value.h);
              console.log(value.c);
             
          });
           $('posts').html();
      });
  }