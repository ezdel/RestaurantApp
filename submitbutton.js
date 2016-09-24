

	$(".submit").on("click", function(){

		var newCustomer = {
			name: $.t('#name').val()rim(),
			phone: $('#phone').val().trim(),
			email: $('#email').val().trim(),
			id: $('#id').val().trim()
		};

		var URL = window.location.origin;

	    $.post(URL + "/api/tables", newCustomer,
	    function(data){

	    	if(data){
	    		alert("Your reservation has been booked.")
	    	}
	    	if(!data){
	    		alert("You have been placed on the waiting list.")
	    	}

    		$('#name').val("");
			$('#phone').val("");
			$('#email').val("");
			$('#id').val("");
	    });

return false;

});

