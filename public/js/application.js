$(document).ready(function() {
  $(".vote-button").click(function(event) {
    event.preventDefault();
      var $arrow = $(this)
      var foundform = $(this).closest("form");
    // var form_data = form.serialize();
    $.ajax({
      url: foundform.attr('action'),
      method: foundform.attr('method'),
    })
    .done(function(dataReturn) {
      myJson = JSON.parse(dataReturn)
      $(foundform).closest("article").find(".points").text(myJson.points);
      $arrow.css("color", "red");
    })
  });

  $(".delete").click(function(event) {
    event.preventDefault();
    var url = $(this).attr("href")
    var deletebutton = $(this)
    $.ajax({
      url: url,
      method: "delete",
    })
    .done(function(response) {
      deletebutton.closest("article").remove()
     // #debugger;
    })




  })


});


