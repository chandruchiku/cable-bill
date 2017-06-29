$(document).ready(function () {

    $('#btnCustSearch').click(function(){
        $('#paymentInitDiv').removeClass('hidden');
    });

    $('#btnPay').click(function(){
        $('#paymentInitDiv').addClass('hidden');
        $('#paymentConfDiv').removeClass('hidden');
    });

    $('#btnConfirm').click(function(){
        $('#paymentInitDiv').addClass('hidden');
        $('#paymentConfDiv').addClass('hidden');
        $('#paymentDoneDiv').removeClass('hidden');
    });


    $("#btnAdd").click(function () {
        console.log("Add button Clicked");
        var name = $("#name").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var password2 = $("#password2").val();
        var role = $("#role").val();
        console.log("Uname:", username, 'role:', role);

        //fetch the authtoken
        var token = localStorage.getItem('token');
        var loggedInUser = localStorage.getItem('username');

        if (password !== password2)
        {
            console.log('Passwords do not match');
        }
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
                    if (data.success === true) {
                        //User suiccess
                    }
                    else {
                        alert(data.message);
                    }
                });

    });
});