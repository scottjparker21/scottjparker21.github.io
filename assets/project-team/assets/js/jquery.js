"use strict"

$(window).resize(function() {
    {
   		if($(window).width() < 992){
			document.getElementById("changeText").innerHTML = "Seth has been engineering kites for over a decade. The picture below is the first kite he ever created. As you can see he was talented from the beginning.";
        }else
		{
			document.getElementById("changeText").innerHTML = "Seth has been engineering kites for over a decade. The picture to the right is the first kite he ever created. As you can see he was talented from the beginning.";
        }
	}
});


$(document).ready(function(){
    $(".fadeIn").hide().fadeIn(3000);
    
});



