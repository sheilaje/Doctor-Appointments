$(document).ready(function() {
  $("form#details").submit(function(event) {

    var result = $("#name").val();
    var result1 = $("#description").val();
    var result2 = $("#date").val();
    var result3 = $("#time").val();
    $("#output").append(result);
    $("#output").append(result1);
    $("#output").append(result2);
    $("#output").append(result3);


    event.preventDefault();
    $("#myModal").modal();
  });
});
