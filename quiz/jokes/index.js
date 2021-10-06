const quiz = async() => {
    let url = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=boolean'
    let result = await (await fetch(url)).json()
    let questionsList = result.results


    questionsList.forEach(question => {
        document.querySelector('#questionsContainer').innerHTML = buildQuestionsHtml(question)
        currentQuestion = question;
        document.querySelectorAll('.option').forEach(btn => {
            btn.addEventListener('click', handleClick)
        })
    });


}
quiz()

async function handleClick(event) {
    let dog = await (await fetch('https://dog.ceo/api/breeds/image/random')).json()
    console.log(dog);



    if (event.target.innerHTML == currentQuestion.correct_answer) {
        event.target.style.backgroundColor = 'green'
        document.querySelector('#questionsContainer').innerHTML = `<img src="${dog.message}" height='100px', width='100px'></img>`
    } else {
        event.target.style.backgroundColor = 'red'
            //add cat
    }
}


function buildQuestionsHtml(question) {
    let str = `<div style="display: flex; flex-direction: column;">`
    str += `<p>Question is: ${question.question}</p>`
    str += `<button class='option'>True</button><button class='option'>False</button>`
    str += `</div>`
    return str;
}