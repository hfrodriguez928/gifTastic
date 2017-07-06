$(document).ready(function(){

    $("button").on("click", function() {
        var celebrity = $(this).data("name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + celebrity + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var celebrityDiv = $("<div/>");

                    var p =$("<p/>");

                    p.text(results[i].rating);

                    var celebrityImage = $("<img/>");

                    celebrityImage.addClass("anImg")

                    celebrityImage.attr("src", results[i].images.fixed_height.url);

                    celebrityImage.attr("data-still", results[i].images.fixed_height_still.url)

                    celebrityImage.attr("data-animate", results[i].images.fixed_height.url)

                    .attr("data-state", "still");

                    celebrityDiv.append(p);

                    celebrityDiv.append(celebrityImage);

                    celebrityDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
            
                    var state = $(this).attr("data-state"); 
                    console.log(this);

                    if (state == "still") {
                    
                    $(this).attr("src", $(this).data("animate"));
                    
                    $(this).attr("data-state", "animate");

                    } else {
                            
                    $(this).attr("src", $(this).data("still"));
                    
                    $(this).attr("data-state", "still");
                    }      
                });
            });
    });

    var celebrity = [""];

        $("#theButton").on("click", function(){
            var celebrityButton = $("#gif-input").val();

            var newButton = $("<button/>").addClass( "btn btn-info celebrity").attr("data-name",celebrityButton).html(celebrityButton).css({"margin": "5px"});
            
            $("#celebritybuttons").append(newButton);
                console.log("check");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + celebrityButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(celebrityButton);

            $.ajax({
            url: queryURL,
            method: "GET"
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var celebrityDiv = $("<div/>");

                    var p =$("<p/>");

                    p.text(results[i].rating);

                    var celebrityImage = $("<img/>");

                    celebrityImage.addClass("anImg")

                    celebrityImage.attr("src", results[i].images.fixed_height_still.url);

                    celebrityImage.attr("data-still", results[i].images.fixed_height_still.url)

                    celebrityImage.attr("data-animate", results[i].images.fixed_height.url)

                    .attr("data-state", "still");

                    celebrityDiv.append(p);

                    celebrityDiv.append(celebrityImage);

                    celebrityDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
            
                    var state = $(this).attr("data-state"); 
                    console.log(this);

                    if (state == "still") {
                    
                    $(this).attr("src", $(this).data("animate"));
                    
                    $(this).attr("data-state", "animate");

                    } else {
                            
                    $(this).attr("src", $(this).data("still"));
                    
                    $(this).attr("data-state", "still");
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        });
  
});