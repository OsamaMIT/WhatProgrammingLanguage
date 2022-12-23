let options = {
  threshold: 0.5
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
}, options);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



2// Get a reference to the quiz container and submit button
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');

// Set up an array to store the correct answers for each question
const correctAnswers = ['option1', 'option3', 'option2'];

// Set up an array to store the user's answers
const userAnswers = [];

// Set up an event listener for clicks on the quiz container
quizContainer.addEventListener('click', event => {
  // Get the clicked element
  const element = event.target;
  // If the clicked element is a button with a data-answer attribute
  if (element.tagName === 'BUTTON' && element.hasAttribute('data-answer')) {
    // Get the index of the parent container (the question)
    const questionIndex = Array.from(quizContainer.children).indexOf(element.parentNode);
    // Add the answer to the user's answers array at the correct index
    userAnswers[questionIndex] = element.getAttribute('data-answer');
  }
});

// Set up an event listener for the click event on the submit button
submitButton.addEventListener('click', () => {
  // Initialize a score variable to 0
  let score = 0;

  // Loop through each answer to check if it is correct
  for (let i = 0; i < correctAnswers.length; i++) {
    // If the user's answer is

