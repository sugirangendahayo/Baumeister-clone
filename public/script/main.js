

//Crolling to hash EveryTime
let hash = window.location.hash
if (hash) {
    setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
        }
    }, 1000)
}
