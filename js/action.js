$(document).ready(function(){
		var questions = [
		    ["What crystal system has beryl?",["Hexagonal","Tetragonal","Monoclinic","Isometric"],0],
		    ["What is the Moh's hardness of ruby?",[6,7,8,9],3],
		    ["What is the birthstone in February?",["Opal","Diamond","Amethyst","Spaphire"],2],
		    ["What mineral class has alexandrite?",["Beryl","Chrysoberyl","Corundum","Quartz"],1]
		];

		var score = 0;
		var currentQuestion=0;
		var numberOfQuestions=questions.length;
		var questionProgess=(currentQuestion+1);
		// question displayer
		function printQuestions(i) {
		    if (i + 1 > numberOfQuestions) {
		    	$('#progress').remove();
		    	$('.score').remove();
		        alert('Your final score is: '+score+' of '+numberOfQuestions);   
		        currentQuestion = 0;
		        printQuestions(currentQuestion);
		        score=0;
		    }else{
			$('#question').append('<p class="items">'+questions[i][0]+'</p>');
		    for(var j=0;j<4;j++){
		        $('#'+j).append('<p class="items">'+questions[i][1][j]+'</p>');
		    }
		    
		    };
		};

		printQuestions(currentQuestion);
		$('#timerprogress').append('<p id="progress">'+questionProgess+' of '+numberOfQuestions+'</p>');
		$('li').click(function() {
		       var answer = this.id;
		       if (answer == questions[currentQuestion][2]) {score++};
		       $('.items').remove();
		       currentQuestion++;
		       printQuestions(currentQuestion);
		       $('#progress').remove();
		       $('#timerprogress').append('<p id="progress">'+(currentQuestion+1)+' of '+numberOfQuestions+'</p>');
		       $('.score').remove();
		       $('#score').append('<p class="score">'+score+' of    '+questions.length+'</p>');      
		});
});