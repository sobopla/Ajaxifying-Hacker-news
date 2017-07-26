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
      //
      $(foundform).closest("article").find(".points").text(myJson.points);
    // console.log($(this)) REMEMBER WHAT THIS IS NOW THE SCOPE IS CHANGED
      $arrow.css("color", "red");
    })
  })
});
