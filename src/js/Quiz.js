export default class Quiz {
    constructor(config) {
        this.questions = config.questions; 
        this.questionsContainer = config.questionsContainer; 
        this.resultContainer = config.resultContainer; 
    }

    init() {
        this.resultContainer.innerHTML = "";
        this.displayQuestions();
    }

    displayQuestions() {
        let output = "";
        this.questions.forEach((question, questionNumber) => {
            output += `
                <div class="card border-primary mb-3">
                    <div class="card-header">Q${questionNumber + 1} : ${
              question.title
            }?</div>
                    <div class="card-body">
                        <div class="form-group userAnswers">
                            <span class="badge badge-success hide">Correct </span>
                            <span class="badge badge-danger hide">Not Correct</span>
                            ${this.displayAnswers(
                              question.answers,
                              questionNumber
                            )}
                        </div>
                    </div>
                </div>
            `;
        })
        this.questionsContainer.innerHTML = output;
    }

    displayAnswers(answers, questionNumber) {
        let output = "";
        for (let key in answers) {
            output += `
            <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            id="q${questionNumber}${key}"
                            name="q${questionNumber}"
                            class="custom-control-input"
                            value="${key}"
                        />
                        <label class="custom-control-label" for="q${questionNumber}${key}"
                            >${answers[key]}</label
                        >
                        </div>
            `;
        }
    
        return output;
    }

    collectUserAnswers() {
        const userAnswers = document.querySelectorAll(".userAnswers");
        let currentAnswer = '';
        let correctAnswers = 0;

        this.questions.forEach((question, questionIndex) => {
            currentAnswer = userAnswers[questionIndex].querySelector("input[type=radio]:checked").value;
            if (currentAnswer === question.correctAnswer) {
                correctAnswers += 1;
                userAnswers[questionIndex].querySelector(".badge-success").classList.remove('hide');
            } else {
                     userAnswers[questionIndex]
                       .querySelector(".badge-danger")
                       .classList.remove("hide");
                   }
        })

        this.displayResults(correctAnswers);
    }

    displayResults(correctAnswers) {
        this.resultContainer.innerHTML = `
            <h1 class="text-center">${correctAnswers} / ${this.questions.length}</h1>
        `;
    }
}