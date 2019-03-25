$(document).ready(function() {
    $("#submit").click(function() {
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var address1 = $("#address1").val();
        var address2 = $("#address2").val();
        var country =$("#country").val();
        var state = $("#state").val();
        var ZIP = $("#ZIP").val();

            if (firstName == "") {
                $("#firstName").addClass("invalid-style");
                $("validate-statement").innerHtml("This field is required");
                $("validate-statement").css("color", "red");
            }
            else{
                $("#firstName").addClass("valid-style");
                $("validate-statement").innerHtml("This looks good");
                $("validate-statement").css("color", "green");
            }

            if (lastName="") {

            }
            else {

            }


            if (email.includes("@")) {
  
            }
            else {

            }


            if (address1 = "") {

            }
            else{

            }


            if (address2 = "") {

            }
            else{

            }

            if (state = "") {

            }
            else {

            }

            if (ZIP = "") {

            }
            else{

            }
    })
})
