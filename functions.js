// JavaScript Document

function applyAnimation(obj) {
	// function was made to swap animator(); in future incase new ways are introduced.
	var animation = obj.animation,
		itrationCount = obj.itrationCount,
		delayBy = obj.delayBy,
		targetElement = $(obj.targetElement);
	animator(animation, itrationCount, delayBy, targetElement);
}

function applyAnimationOnce(target, animationName){
		// applies animation once, function makes sure that the old classes are assgned back.
		// function was made to work specifically with animate.css library but also works with custom animations.
		var oldClasses = target.attr("class");
    	target.attr('class', oldClasses)
		.addClass("animated " + animationName)
		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      		$(this).attr('class', oldClasses);
    	});		
		return;

}

function animator(animationName, itrations, delay, target) {
	/* Word of caution or call it documentation 
	@input "dealy" has to be same as in the css fadeout animation so animation itrations don't over lap.
			Target has to be jquery object.
	*/
	if(delay === 0){
		// this whole if clause can be taken out if we are never going to assign animation with 0 delay.
		applyAnimationOnce(target, animationName);
	}		
	/* Be careful when changing the fields below  */
	var counter = 0; // should never be altered
	var trueItration = itrations * 2; // should never be altered.
	//console.log("Counter is " + counter + " itrations is "+ itrations);
	var interval = setInterval(function () {
		if (counter < trueItration) {
			target.toggleClass(animationName);
			counter++;
		} else {
			clearInterval(interval);
		}
	}, delay * 1000);
};
