$(window).load(function(){
        $('#search').keyup(function(){

            var searchField = $('#search').val();
            var regex = new RegExp(searchField, "i");
            console.log(regex);
            var output = '<div class="row">';
            var count = 1;

            $.getJSON('entries.json', function(data) {
              $.each(data.posts, function(key, val){
                if ((val.t.search(regex) != -1) || (val.c.search(regex) != -1)) {
                  output += '<div class="col-md-6 well">';
                  output += '<div class="col-md-7">';
                  output += '<h3 style="color:black">' + val.t + '</h3>';
                  output += '<h5>' + val.h + '</h5>';
                  output += '<p style="color:black">' + val.c + '</p>';
                  output += '</div>';
                  output += '</div>';
                  if(count%2 == 0){
                    output += '</div><div class="row">';
                  }
                  count++;
                }
              });
              output += '</div>';
              if ($('#search').val() == ""){$("#results").hide();}
              if ($('#search').val() !== ""){$("#results").show();}
              $('#results').html(output);
            }); 
        });
      });