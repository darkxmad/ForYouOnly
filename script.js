const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');

function handleAnswer(answer) {
  if (questionText.textContent.includes("Am I Happy")) {
    if (answer === 'yes') {
      questionText.textContent = "Q2: You Really Think?";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('yes_think')">Yes</button>
        <button onclick="finalAnswer('no_think')">No</button>
      `;
    } else {
      questionText.textContent = "Q2: Can You Do Something To Make Me Happy?";
      answersDiv.innerHTML = `
        <button onclick="finalAnswer('yes_do')">Yes</button>
        <button onclick="finalAnswer('no_do')">No</button>
      `;
    }
  }
}

function finalAnswer(response) {
  switch (response) {
    case 'yes_think':
    case 'no_do':
      questionText.textContent = "No Worries 😔";
      answersDiv.innerHTML = "";
      break;
    case 'no_think':
      questionText.textContent = "Then Try Again na ...";
      answersDiv.innerHTML = "";
      break;
    case 'yes_do':
      questionText.textContent = "GO AND DM ME THEN !! (❁´◡`❁)";
      answersDiv.innerHTML = "";
      break;
  }
}
