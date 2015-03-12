
function myFunction(){
	alert("You're Leaving The Page!");
}


$(document).ready(function(){
$("#P1").hover(function(){
	$("#P1").css("background-color", "blue");
	}, function(){
	$("#P1").css("background-color", "red");
	});
});