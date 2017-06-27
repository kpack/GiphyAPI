
var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chincilla", "hedgehog", "hermit crab", "gerbil", "pygmy" "goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"]

function renderButtons() {
far (var i = 0; i < animals.length; i++){
var newButton = $("<button>");
$("#animalButtons").append(newButton);
newButton.text
}

  $("#addAnimal").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var newAnimal = $("#addAnimal").val().trim();
        // The movie from the textbox is then added to our array
        newAnimal.push(animals);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

    var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

     $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

if (state === "still"){
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else {
  $(this).attr("src", $(this).attr("data-still"));
  $(this).attr("data-state", "still");
}



