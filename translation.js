const translations = {
    en: {
        page1: { title: "HALO" },
        page2: { title: "YOUR NAME" },
        page3: { title: "AGE" }
    },
    zh_tw: {
        page1: { title: "哈囉" },
        page2: { title: "你的名字" },
        page3: { title: "年齡" }
    },
    zh_cn: {
        page1: { title: "你好" },
        page2: { title: "你的名字" },
        page3: { title: "年龄" }
    }
};

// Load and apply translations based on page and language
function loadContent(page, lang) {
    const data = translations[lang][page];
    if (data) {
        document.getElementById("title").textContent = data.title;
    } else {
        console.warn(`No translation found for page: ${page} in language: ${lang}`);
    }
}

// Language button handler
document.querySelectorAll(".lang-button").forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.dataset.lang;
        const page = document.body.dataset.page;
        loadContent(page, lang);

        // Save user preference
        localStorage.setItem("preferredLanguage", lang);
    });
});

// Initialize page on load
document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    const page = document.body.dataset.page;
    loadContent(page, preferredLanguage);
});
