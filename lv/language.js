const btn = document.getElementById("languageBtn");

const path = window.location.pathname;
const base = "/Portfolio/";

if (path.includes("/lv/")) {

    // Currently on Latvian page
    btn.textContent = "EN";

    btn.onclick = () => {
        const page = path.replace(base + "lv/", "");
        window.location.href = base + page;
    };

} else {

    // Currently on English page
    btn.textContent = "LV";

    btn.onclick = () => {
        const page = path.replace(base, "");
        window.location.href = base + "lv/" + page;
    };

}
