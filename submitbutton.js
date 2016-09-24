



$(".submit").on("click", function(){

	var customer = {
		name: $('#name').val()rim(),
		phone: $('#phone').val().trim(),
		email: $('#email').val().trim(),
		id: $('#id').val().trim()
	};

	var URL = window.location.origin;

    $.post(URL + "/api/tables", customer,

    function(data){

    	console.log(data);

    	if(data){
    		alert("Your reservation has been booked.")
    	}
    	if(!data) {
    		alert("You have been placed on the waiting list.")
    	}

		$('#name').val("");
		$('#phone').val("");
		$('#email').val("");
		$('#id').val("");
    });

return false;

});

// we need to push to one api if not full, else we push to wait list
// to determine if full, get request



