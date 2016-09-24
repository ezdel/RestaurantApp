function available() {
	var URL = window.location.origin;
	$.ajax({url: URL + "/api/tables", method: "GET"})
		.done(function(tableData) {
			for(var i = 0; i < tableView.length; i++) {
				var tableView = $("<div>");
				tableView.addClass('holder');
				tableView.attr('id', 'placeholder-' + i+1)
				$('#tableView').append(tableView);

				var resNumber = i + 1;
				$("#tableWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
			}
				
		})
}

function waitList() {
	var URL = window.location.origin;
	$.ajax({url: URL + "/api/waitList", method: "GET"})
		.done(function(waitListData) {
			for (var i = 0; i < waitListData.length; i++) {
				var waitList = $("<div>");
				waitList.addClass("holder");
				waitList.attr('id', 'placeholder' + i+1)
				$('#waitlist').append(waitList);

				var resNumber = i + 1;
				$("#placeholder"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
			}
		})
}

function clearTable(){
	var URL = window.location.origin;
	$.ajax({url: URL + "/api/clear", method: "POST"})
}

$("#clear").on('click', function() {
	alert("Get Out")
	clearTable();
	location.reload();
})


available();
waitList();




