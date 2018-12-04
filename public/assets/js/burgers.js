
$(function() {
  $(".eatBtn").on("click", function(e) {
    e.preventDefault();
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".submitBurger").on("submit", function(e) {
    e.preventDefault();

    var newburger = {
      burger_name: $("#burgName").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
