$(document).ready(function() {
	
	checkAuth();
	
	function checkAuth()
	{
		var loggedInUser = localStorage.getItem('username');
		
		//TODO: Is user valid?
	}

	$("#submit").click(function() {
		console.log("Delete button CLicked");

		//fetch the authtoken
		var token = localStorage.getItem('token');

		$.ajax({
				method: "GET",
				url: "/api/dashboard/data",
				headers: {
					'X-Auth-Token': token
				}
			})
			.done(function(data) {
				if (data.success === true) {
					//User suiccess
				} else {
					alert(data.message);
				}
			});
	});
});