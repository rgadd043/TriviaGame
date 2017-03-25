var timeBank = 15;
var intervalId;
var correctAnswers = 0;


function runTimer() {
	intervalId = setInterval(countDown, 1000);
};

function countDown() {
	timeBank--;
	$("#timerCountDown").html("<h1>Time Remaining: " + timeBank + "</h1>");
	if (timeBank === 0) {
		stop();
	}	
};

function stop(){
	clearInterval(intervalId);
	$(".gameSection").remove();
	$(".gameOver").show();
};

// function getUserAnswers() {
// 	if($("input[type='radio'].radioButton").is(':checked')) {
//     var userAnswers = $("input[type='radio'].radioButton:checked").val();
//     console.log(userAnswers);
// 	};
// };


$(document).ready(function(){

	$("#startGameButton").click(function(){
		$("#startButtonDiv").remove();
		$(".gameSection").show();
		runTimer();
	});

	// $("#submitButton").click(function() {
	// 	getUserAnswers();
	// });
	
	$("input[type=radio]").click(function() {
    var total = 0;
    $("input[type=radio]:checked").each(function() {
        total = parseFloat($(this).val());
        console.log(total);
    });

    
});

}); //document Ready 


