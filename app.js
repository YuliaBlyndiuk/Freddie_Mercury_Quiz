//Render
function render(state){

}

//Step 2: Listener. Start the quiz when corresponding button
//is pressed
$function(){

	$(".js-start").submit(function(event){
		event.preventDefault();
		console.log('let the quiz begin');
	});
}

//Step 1: Initial render
render(state);