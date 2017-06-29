$(document).ready(function () {
    $("#submit").click(function () {
        console.log("Add button CLicked");

        var customer = {
            name: $("#name").val(),
            address: $("#address").val(),
            area_code: $("#area_code").val(),
            area_desc: $("#area_desc").val(),
            stb_no: $("#stb_no").val(),
            plan: $("#plan").val(),
        };

        console.log("Customer to be Saved:", JSON.stringify(customer));

        //fetch the authtoken
        var token = localStorage.getItem('token');
        var loggedInUser = localStorage.getItem('username');
        
		customer.created_by = loggedInUser;

        $.ajax({
            method: "POST",
            url: "/api/customers/add",
            headers: { 'X-Auth-Token': token },
            data: customer
        })
            .done(function (data) {
                if (data.success === true) {
                    //User suiccess
                }
                else {
                    alert(data.message);
                }
            });
    });
});