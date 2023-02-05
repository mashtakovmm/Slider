const btnNext = document.querySelector(".right-arrow")
const btnPrev = document.querySelector(".left-arrow")

const slidesArray = document.querySelectorAll(".projects-container")

const dotsArray = document.querySelectorAll(".dot")
const dotOne = document.querySelector(".jsdot1")
const dotTwo = document.querySelector(".jsdot2")
const dotThree = document.querySelector(".jsdot3")

const itemsArray = document.querySelectorAll(".projects-list-item")
const itemOne = document.querySelector(".jslink1")
const itemTwo = document.querySelector(".jslink2")
const itemThree = document.querySelector(".jslink3")

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

btnPrev.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    SubtractIndex();
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

btnNext.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    AddIndex();
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

dotOne.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 0
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

dotTwo.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 1
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

dotThree.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 2
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

itemOne.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 0
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

itemTwo.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 1
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})

itemThree.addEventListener("click", function(){
    slidesArray[currentIndex].style.display = "none"
    dotsArray[currentIndex].src="images\\dot_empty.svg"
    itemsArray[currentIndex].style = ""
    currentIndex = 2
    slidesArray[currentIndex].style.display = "block"
    dotsArray[currentIndex].src="images\\dot_filled.svg"
    itemsArray[currentIndex].style = "color:#E3B873; text-decoration:underline"
})