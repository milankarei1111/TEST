// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    // 另一種寫法
    $("#btnSubmit").click(function () {
        let jsonStr = JSON.stringify({
            Name: "JOY",
            Email: "123@gamil.com"
        });
        console.log(jsonStr)
        $.ajax({
            url: "/home/CreateStudent",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: jsonStr,
            success: function (result) {
                $("#txtJsonReturned").val(JSON.stringify(result));
            },
            error: function (err) {
                $("#txtJsonReturned").val("Error while uploading data: \n\n" + err);
            }
        });
    });


});
