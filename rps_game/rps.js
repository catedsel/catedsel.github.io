
function computerChoice() {
        
        var choice = Math.random();
        
        if (choice < 0.34) {
            choice = "rock";
        } else if (choice <= 0.67) {
            choice = "paper";
        } else {
            choice = "scissors";
        }
        return choice;
    };


    function compare(choice1, choice2) {

        if (choice1 === choice2) {
            return "The result is a tie!";
        }
        
        if (choice1 === "rock") {
            if (choice2 === "scissors"){
                return "Rock wins!";
            } else {
                return "Paper wins!";
            }
        }
        
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Paper wins!";
            } else {
                return "Scissors wins!";
            }
        }
        
        if (choice1 === "scissors") {
            if (choice2 === "paper"){
                return "Scissors wins!";
            } else {
                return "Rock wins!";
            }
        }
	}

// 1. When I click a <button> (or, #rock, #paper, #scissors) I want to remember the ID of the button
// 2. Make a variable of button and remember the ID of "this"
// 3. Use .attr() to remember the ID, save it in a variable called btn
// 4. Use var result = compare(btn, computerChoice());
// 5. Code inside the function should be $('#decision').html(result);



//DRY extension!!! WOO WOO!!

$('button').on('click', function(e) {
    var btn = $(this).attr('id');
    var result = compare(btn, computerChoice());

    $('#decision').html(result);
});


//console.time extension results:
    //jQuery = 1.291ms
    //JavaScript = 1.316ms
