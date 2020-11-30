(function( $ ){
  $.fn.trumpGenerator = function() {

    let isValid = true;

    function generateRandomQuote(firstName) {
      let url = firstName == null ? 'https://api.whatdoestrumpthink.com/api/v1/quotes/random' : 
      urlPersonQuote = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q='+ firstName;
      fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        $('.outputBox').text(data.message)
        })
    }

    $('#btnSubmit').on("click",function(evt) {
      let firstName = $(".firstName").val().trim();
      evt.preventDefault();
      if (firstName == "") { 
        $(".outputBox").text("Name field is required.");
        isValid = false;
      }
      else {
        generateRandomQuote(firstName);
        // $(".firstName").val("")
      }
    });

    $('.buttonPress').hover(function() {
      $(this).css("background-color", "red");
    },
    function() {
      $(this).css("background-color", "blue");
    })
    $('#btnRandom').on("click",function(evt) {
      let firstName = null;
      evt.preventDefault();
      generateRandomQuote(firstName);
    });
    
  };
})( jQuery );