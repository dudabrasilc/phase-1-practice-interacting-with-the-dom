// TO FINISH: pause button(resume) and numbersLiked() interpolation


let myCounter = setInterval(createCounter, 1000)

function createCounter() {
    const counter = document.getElementById("counter");
    counter.textContent++
}
createCounter()




function pause() {
    // grab pause button
    const pause = document.querySelector("#pause")
    // add event listener to pause button
    pause.addEventListener('click', () => {
    // grab counter
    const counter = document.querySelector("#counter")
    // pause the counter and change the button name to resume/pause
    if (pause.textContent === "resume") {
        pause.textContent = "pause";
        myCounter = setInterval(createCounter, 1000)
    } else {
        pause.textContent = "resume";
        clearInterval(myCounter);
    }
    })
}
pause()




function addToCounter() {
    // grab node of + button to add event listener
    const plus = document.querySelector("#plus");
    plus.addEventListener('click', () => {
        // grab counter
        const counter = document.querySelector("#counter")
        counter.textContent++
    })
}
addToCounter()




function reduceCounter() {
    // grab node of - button to add event listener
    const minus = document.querySelector("#minus");
    minus.addEventListener("click", () => {
        // grab counter
        const counter = document.querySelector("#counter")
        counter.textContent--
    })
}
reduceCounter()




function numbersLiked() {
    // grab like button
    const likeButton = document.querySelector("#heart");
    // add event listener to the like button

    let array = [];

    likeButton.addEventListener('click', (e) => {
        // grab unordered list node for the likes
        const ul = document.querySelector(".likes");
        // grab counter text content
        const counter = document.querySelector("#counter").textContent
        array.push(counter)
        const filteredNum = array.filter((number) => {
           return number === counter
        })
        console.log(filteredNum)
        // create list element
        const li = document.createElement("li");
        // append the li node as a child to ul
        ul.appendChild(li);
        // change text content of li to counter value
        li.textContent = `${counter} has been liked ${filteredNum.length} times!`
        // number has been liked x times
    })
}
numbersLiked()




function submitForm() {
const divList = document.querySelector("#list")
const ul = document.createElement('ul');
divList.appendChild(ul)
const form = document.querySelector("#comment-form")
// console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target)
    // grab input node from form
    let input = document.querySelector("#comment-input").value;
    // create a li node, to be appended as a child node of ul once the event is triggered
    const li = document.createElement("li")
    ul.appendChild(li)
    li.textContent = input;
})
}
submitForm()