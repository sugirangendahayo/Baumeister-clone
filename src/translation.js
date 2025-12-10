import i18next from "i18next";
import deTranslation from "./i18netTranslation/DE.json";
import enTranslation from "./i18netTranslation/EN.json";

const translatePageOnDom = () => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.key.textContent = i18next.t(key);
    })
}

const setUp = async () => {
    await i18next.init({
        lng: "en",
        resources: {
            en: { translation: enTranslation },
            de: { translation: deTranslation }
        },
        defaultNS: "translation",
        fallbackLng: "en",
    })
}

translatePageOnDom();

const SetToDutch = document.getElementById("set_to_dutch");
const setToEnglish = document.getElementById("set_to_english");

SetToDutch.addEventListener("click",function(){alert("Setting language to Dutch")})
setToEnglish.addEventListener("click",function(){alert("Setting language to English")})