function checkAnswer () {
    let correctAnswer= "4" ;
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    let feedback= document.getElementById('feedback');

    if (userAnswer===correctAnswer){
        feedback.textContent= "Correct! Well done.";
    } 
    else {
        feedback.textContent= "Incorrect! Try Again.";
    }

}
    let submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);


