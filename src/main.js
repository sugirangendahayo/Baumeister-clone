let hash = window.location.hash
if (hash) {
    setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
        }
    }, 70)
}

let text = document.getElementById("heroText")
alert(text.textContent)