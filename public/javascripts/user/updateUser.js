$(document).ready(function () {
    $("#update").click(function () {
        console.log("Update button CLicked");
        var name = $("#name").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var role = $("#role").val();
        console.log("Uname:", username, 'Pass:', password, 'role', role);

        //fetch the authtoken
        var token = localStorage.getItem('token');
        var loggedInUser = localStorage.getItem('username');

        // Checking for blank fields.
        if (email === '' || password === '') {

        } else {
            $.ajax({
                method: "POST",
                url: "/api/users/add",
                headers: { 'X-Auth-Token': token },
                data: {
                    name: name,
                    username: username,
                    password: password,
                    role: role,
                    createdBy: loggedInUser
                }
            })
                .done(function (data) {
                    if(data.success === true)
                    {
                        //User suiccess
                    }
                    else
                    {
                        alert(data.message);
                    }
                });
        }
    });
});