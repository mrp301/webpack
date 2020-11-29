const answers = [];
const $answersArea = $('.js-answers');
const updateAnswers = (text) => {
  $answersArea.empty();
  answers.push(text);
  answers.forEach(answer => $answersArea.append(`<li>${answer}</li>`));
};

$('button').on('click', function(){
  const answertext = $(this).text();
  console.log(answertext);
  updateAnswers(answertext);
});