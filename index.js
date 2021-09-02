$(document).ready(function () {
    console.log("ready!");

    $("#go").click(function () {
        console.log("clicked!");
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        
        $("#jumbotron").html(
            "<p>You entered</p>" 
            + "<p>First name: " + fname + "</p>"
            + "<p>Last name: " + lname + "</p>"
            );
        return false;
    });
});
