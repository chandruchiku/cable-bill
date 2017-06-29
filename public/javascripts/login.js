$(document).ready(function () {
    $("#login").click(function () {
        var username = $("#Username").val();
        var password = $("#Password").val();
        // Checking for blank fields.
        if (username == '' || password == '') {
            //$('input[type="text"],input[type="password"]').css("border", "2px solid red");
            //$('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill all fields...!!!!!!");
        } else {
            $.post("/login", { Username: username, Password: password },
                function (data) {
                    if(data.success === true)
                    {
                        //login success
                        
                        localStorage.setItem('username', username);
                        localStorage.setItem('token',data.token);
                        window.location.replace("/");
                    }
                    else
                    {
                        $('#loginMessage').removeAttr('hidden');
                        console.log('Login failed');    
                        return;
                    }
                });
        }
    });
});