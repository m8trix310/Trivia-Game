const questions = [
    "What does HTML stand for'?",
  "Who is making the Web standards?", 
  "Inside which HTML element do we put the JavaScript?", 
  "Where is the correct place to insert a JavaScript?"
];
const choicesArray = [
  ["Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Message Text Language"],
  ["The World Wide Web Consortium", "Google", "Mozilla", "Microsoft"],
  ["&lt;javascript&gt;","&lt;script&gt;", "&lt;js&gt;", "&lt;scripting&gt;"], 
  ["The &lt;head&gt; section", "The &lt;body&gt; section&gt;","Both the &lt;head&gt; and the &lt;body&gt; section are correct"]
  
];
const correctAnswers = [
    "Hyper Text Markup Language", 
    "The World Wide Web Consortium",
    "&lt;script&gt;",
"Both the &lt;head&gt; and the &lt;body&gt; section are correct"
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[
      currentQuestionIndex];
    for (let i = 0; i < choicesArray[currentQuestionIndex].length; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    document.getElementById("result").innerHTML = "Your score is: " + score;
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

function checkAnswer(button) {
  if(button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  } 
  currentQuestionIndex++;
  displayQuestion();
} 
displayQuestion();