//Translation library imports 
// import i18next from "i18next";
// import deTranslation from "./i18netTranslation/DE.json";
// import enTranslation from "./i18netTranslation/EN.json";


//Crolling to hash EveryTime
let hash = window.location.hash
if (hash) {
    setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" })
        }
    }, 70)
}




//function responsible for translation 
// const translatePageOnDom = () => {
//     document.querySelectorAll("[data-i18n]").forEach(el => {
//         const key = el.getAttribute("data-i18n");
//         el.key.textContent = i18next.t(key);
//     })
// }
// //initial language setup
// const setUp = async () => {
//     await i18next.init({
//         lng: "en",
//         resources: {
//             en: { translation: enTranslation },
//             de: { translation: deTranslation }
//         },
//         defaultNS: "translation",
//         fallbackLng: "en",
//     })
// }

// translatePageOnDom();


// // if (setToDutch, setToEnglish) {
//  console.log("hdhdhdh")
// // }
