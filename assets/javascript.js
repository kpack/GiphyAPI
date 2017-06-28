$(document).ready(function() {
	var animals = ["dog", "cat", "rabbit"];
	function renderButtons() {
		for (var i = 0; i < animals.length; i++){
		var newButton = $('<button>');
		$('#animalButtons').append(newButton);
		newButton.text(animals[i])
		}
}

$('#addAnimal').on('click', function(event) {
        event.preventDefault();
        var newAnimal = $('#addAnimal').val().trim();
        newAnimal.push(animals);
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
};



