const ratingNumbers = document.querySelectorAll(".num__general");
const rated = document.getElementById("stars__selected");
const thankYouPart = document.querySelector(".content__thankyou-container");
const cardAlign = document.querySelector(".card__align");
const submitBtn = document.getElementById("submit__button");
const rateAgainBtn = document.getElementById("rate__again-button");
let free = false;

rateAgainBtn.addEventListener("click", function(){
    cardAlign.classList.remove("hide")
    thankYouPart.classList.remove("active")
    ratingNumbers.forEach( rateNumber=>{
        rateNumber.classList.remove("active")
    })
})

ratingNumbers.forEach( (rateNumber)=>{
    rateNumber.addEventListener("click", function (){
        rateNumber.classList.toggle("active") 
        rated.innerHTML = `you rated ${rateNumber.textContent} out of 5`
        free = true
        console.log(free)
    })
})

submitBtn.addEventListener("click", function(){
    if (free){
    cardAlign.classList.toggle("hide")
    thankYouPart.classList.toggle("active")
    console.log("submit clicked")
    free = false
} else {
    alert("please select a option")
}
})










