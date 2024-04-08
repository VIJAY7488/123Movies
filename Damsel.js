document.addEventListener("DOMContentLoaded", function() {
    // Function to handle opening movie details in a new tab
    function openMovieDetails(url) {
        if (url) {
            window.open(url, "_blank");
        }
    }

    // Event listener for each movie card text
    var cardTexts = document.querySelectorAll(".card-text");
    cardTexts.forEach(function(cardText) {
        cardText.addEventListener("click", function() {
            var url = this.getAttribute("data-url");
            openMovieDetails(url);
        });
    });

    // Event listeners for specific movie buttons
    var damselButton = document.getElementById("Damsel");
    damselButton.addEventListener("click", function () {
        openMovieDetails("Damsel.html");
    });

    var fighterButton = document.getElementById("Fighter");
    fighterButton.addEventListener("click", function () {
        openMovieDetails("Fighter.html");
    });

    var spacemanButton = document.getElementById("Spaceman");
    spacemanButton.addEventListener("click", function () {
        openMovieDetails("spaceman.html");
    });

    var artofloveButton = document.getElementById("Artoflove");
    artofloveButton.addEventListener("click", function () {
        openMovieDetails("Artoflove.html");
    });

    var badlanderButton = document.getElementById("Badlander");
    badlanderButton.addEventListener("click", function () {
        openMovieDetails("Badlander-Hunters.html");
    });
});
