var adj1Array = [];
var adj2Array = [];
var nounArray = [];

$(document).ready(function(){
    $(".generate").prop("disabled", true);

    $.ajax({
        url: "/adj1",
        success: function(adj1){
            adj1Array.push(adj1);
            console.log(adj1Array);
        }

    });
    $.ajax({
        url: "/adj2",
        success: function(adj2){
            adj2Array.push(adj2);
            console.log(adj2Array);
        }

    });
    $.ajax({
        url: "/noun",
        success: function(noun) {
            nounArray.push(noun);
            console.log(nounArray);
        },
        complete: function(){
            $(".generate").prop("disabled", false);
        }

    });

    $("body").on("click", ".generate", function(){
        var index1 = adj1Array[0][getRandomNumber(0, 9)];
        var index2 = adj2Array[0][getRandomNumber(0, 9)];
        var indexNoun = nounArray[0][getRandomNumber(0, 9)];
        $("#story").children().last().remove();
        $("#story").append("<p>" + index1 + " " + index2 + " " + indexNoun + "</p>");
    });



});

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);

}