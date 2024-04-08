document.addEventListener("DOMContentLoaded", function () {
    const navlinks = document.querySelectorAll('.list1');

    navlinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navlinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });   
});



function searchMovies() {
    var input = document.getElementById("search-bar");
    var filter = input.value.toUpperCase(); // Convert input to uppercase for case-insensitive comparison
    var cardContainer = document.getElementsByClassName("card-container");
    
    // Loop through all the movie cards
    for (var i = 0; i < cardContainer.length; i++) {
      var cardText = cardContainer[i].getElementsByClassName("card-text")[0];
      if (cardText) {
        var textValue = cardText.textContent || cardText.innerText;
        // Check if the text starts with the input value
        if (textValue.toUpperCase().startsWith(filter)) {
          cardContainer[i].style.display = ""; // Show the card if it matches
        } else {
          cardContainer[i].style.display = "none"; // Hide the card if it doesn't match
        }
      }       
    }
}


function navigateTo(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.main-container');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}