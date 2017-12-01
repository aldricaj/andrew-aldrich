$(document).ready(function() {
    $("#contact").on("click", function() { $("#contact-form").modal("show") });
    $("#submit").on("click", function() {$("#contact-form").modal("hide");});
});