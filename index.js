const btnNext = document.querySelector(".right-arrow")
const btnPrev = document.querySelector(".left-arrow")
const slidesArray = document.querySelectorAll(".projects-container")
const dotsArray = document.querySelectorAll(".dot")
const dotOne = document.querySelector(".jsdot1")
const dotTwo = document.querySelector(".jsdot2")
const dotThree = document.querySelector(".jsdot3")
let currentIndex = 0

function AddIndex(){
    if(currentIndex<2){
        currentIndex++
    } else {
        currentIndex = 0
    }
}

function SubtractIndex(){
    if(currentIndex>0){
        currentIndex--
    } else {
        currentIndex = 2
    }
}

console.log(slidesArray[currentIndex])

btnPrev.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    SubtractIndex();
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
})

btnNext.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    AddIndex();
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
})

dotOne.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    currentIndex = 0
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
})

dotTwo.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    currentIndex = 1
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
})

dotThree.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    currentIndex = 2
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
})
