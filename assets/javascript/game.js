  
$(document).ready(function() {

    
    var wins = 0;
    var losses = 0;
    $("#numberWins").text("Wins: " + wins);
    $("#numberLosses").text("Losses: " + losses);
    
   
    var gemImages = ["assets/images/blue.jpeg", "assets/images/green.jpeg", "assets/images/red.jpeg", "assets/images/yellow.jpeg"];
    
    
    function gemValues() {

        for (var i = 0; i < gemImages.length; i++) {
        
            var image = $("<img>");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gemImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) +1);
            $("#gems").append(image);
        }

    }

    function playGame() {

        
        var targetNumber = Math.floor(Math.random() * (120-19) + 19);
            
        
        $(".numberToMatch").text("Number to get: " + targetNumber);
            console.log(targetNumber);

    
        $(".gem-buttons").on("click", function() {
            
            gemIsClicked = true;
            var gemValue = ($(this).attr("data-letter"));
            gemValue = parseInt(gemValue);
            
            counter += gemValue;
            
            console.log(gemValue);
            console.log(counter);
            
            
            if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $(".numberWins").text(wins);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
            else if (counter >= targetNumber) {
            alert("You lose!");
            losses++;
            $(".numberLosses").text(losses);
            $("#gems").empty();
            gemValues();
            playGame();
            }
            
        });
    }
    
    gemValues();
    playGame();

});