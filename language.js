const btn = document.getElementById("languageBtn");

const path = window.location.pathname;

if (path.includes("/lv/")) {
    btn.textContent = "EN";

    btn.onclick = () => {
        const page = path.split("/lv/")[1];
        window.location.href = "../" + page;
    };
}
else {
    btn.textContent = "LV";

    btn.onclick = () => {
        const page = path.split("/").pop();
        window.location.href = "lv/" + page;
    };
}
