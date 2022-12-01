const rating = document.querySelectorAll(".rating")
const btn = document.querySelector("#btn")
const cardRatingState = document.querySelector(".rating-state")
const cardThankYyouState = document.querySelector(".thank-you-state")
const rateSelected = document.querySelector(".rate-selected")

rating.forEach(function (item) {
    item.addEventListener("click", function () {

        const itemClicked = document.querySelector(".clicked")

        if (itemClicked) {
            item.classList.remove("clicked")
        } else {
            item.classList.add("clicked")
        }
        
        btn.addEventListener("click", function () {
            cardRatingState.classList.remove("active")
            cardThankYyouState.classList.add("active")

            rateSelected.innerHTML = item.value
        })
    })
})