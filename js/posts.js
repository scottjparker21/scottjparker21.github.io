
                      function getposts(){
                $.get("entries.json", function( data ) {
                    $.each(data, function(key, value) {
                        console.log(value['text']);
                    });
                });
            }
       
