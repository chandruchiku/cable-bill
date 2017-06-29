$(document).ready(function () {
    var token = localStorage.getItem(
        'token'
    );
    var username = localStorage.getItem('username');
    //If token or username doesnt exit
    if(!username || !token)
    {
        window.location.replace('/login');
    }
    else{
        //Validate the token
        $.ajax({
            method: "POST",
            url: "/api/",
            headers: { 'X-Auth-Token': token }
        })
            .done(function (data) {
                if (data.success === true) {
                    //User suiccess
                }
                else {
                    window.location.replace('/login');    
                }
            });
    }
});