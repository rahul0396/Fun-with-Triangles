const quizform=document.querySelector(".quiz-form");
const submitbtn=document.querySelector("#btn");
const output=document.querySelector("#output");

const correctAnswers = [
    "90",
    "right angle",
    "180","60",
  ];

function scorecalculate()
{
    let score = 0;
    const formresult = new FormData(quizform);
    index = 0;
    for (let value of formresult.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
        // console.log(score);
      }
      index = index + 1;
    }
  console.log(score);
  console.log("hello");
  output.innerText = "The score is " + score;

}







submitbtn.addEventListener("click", scorecalculate)


// console.log(quizform);
// console.log("hello buddy");


// })