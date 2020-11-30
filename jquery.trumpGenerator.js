(function( $ ){
  $.fn.trumpGenerator = function() {
    var isValid = true;
    var quote;

    

    function generatePersonalQuote(firstName) {
      var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q='+ firstName;
      fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        $('.outputBox').text(data.message)
        })
    }
    function generateRandomQuote() {
      var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
      fetch(url)
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        $('.outputBox').text(data.message)
        })
    }

    $('.btnSubmit').hover(function() {
      $(this).css("background-color", "red");
    },
    function() {
      $(this).css("background-color", "blue");
    })
    $('.btnSubmit').on("click",function(evt) {
      var firstName = $(".firstName").val().trim();
      evt.preventDefault();
      if (firstName == "") { 
        $(".outputBox").text("Name field is required.");
        isValid = false;
      }
      else {
        generatePersonalQuote(firstName);
        $(".firstName").val("")
      }
    });

    $('.btnRandom').hover(function() {
      $(this).css("background-color", "red");
    },
    function() {
      $(this).css("background-color", "blue");
    })
    $('.btnRandom').on("click",function(evt) {
      evt.preventDefault();
      generateRandomQuote();
    });

    
  };
})( jQuery );