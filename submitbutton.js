

	$(".submit").on("click", function(){

		// Here we grab the form elements
		var newCustomer = {
			name: $.t('#name').val()rim(),
			phone: $('#phone').val().trim(),
			email: $('#email').val().trim(),
			id: $('#id').val().trim()
		};

		var URL = window.location.origin;

	    $.post(currentURL + "/api/tables", newCustomer,
	    function(data){

	    	if(data){
	    		alert("Your reservation has been booked.")
	    	}

	    	// If a table is available... tell user they on the waiting list.
	    	if(!data){
	    		alert("You have been placed on the waiting list.")
	    	}

    		$('#reserve_name').val("");
			$('#reserve_phone').val("");
			$('#reserve_email').val("");
			$('#reserve_uniqueID').val("");
	    });

return false;

});

