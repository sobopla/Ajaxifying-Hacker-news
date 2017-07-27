$(document).ready(function() {

  $(".post-container").on("click", ".vote-button", function(event) {
    event.preventDefault();
      var $arrow = $(this)
      var foundform = $(this).closest("form");

    $.ajax({
      url: foundform.attr('action'),
      method: foundform.attr('method'),
    })
    .done(function(dataReturn) {
      myJson = JSON.parse(dataReturn)
      $(foundform).closest("article").find(".points").text(myJson.points);
      $arrow.css("color", "red");
    })
  })

  $(".post-container").on("click", ".delete", function(event) {
    event.preventDefault();

    var url = $(this).attr("href")
    var deletebutton = $(this)
    $.ajax({
      url: url,
      method: "delete",
    })
    .done(function(response) {
    deletebutton.closest("article").remove()
    })
  });

  $("#posts").submit(function(event) {
    event.preventDefault();

    var form = $(this);
    var form_data = form.serialize();
    $.ajax({
      url: form.attr('action'), 
      type: form.attr('method'),
      data: form_data
    })
    .done(function(response) {
      $(".post-container").append(response);
    })

  })
  
});


