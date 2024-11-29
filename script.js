// 定义中英翻译内容
const translations = {
    en: {
        title: "Providing high-quality Retail services",
        items: [
            "Get To Know Us",
            "Meet Our Founder",
            "Our Product Line",
            "Conact Us"
        ]
    },
    zh_tw: {
        title: "提供高品質的零售服務",
        items: [
            "認識我們",
            "認識我們的創辦人",
            "我們的產品線",
            "聯繫我們"
        ]
    },
    zh_cn: {
        title: "提供高质量的零售服务",
        items: [
            "认识我们",
            "认识我们的创始人",
            "我们的产品线",
            "联系我们"
        ]
    }
};

// 获取页面元素
const langButtons = document.querySelectorAll("#button-container button");
const titleText = document.getElementById("title-text");
const listItems = document.querySelectorAll(".bottom-right-list ul li a");

// 绑定语言切换按钮的点击事件
langButtons.forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.id.split("-")[1]; // 从按钮 ID 获取语言代码
        applyTranslation(lang);
    });
});

// 应用翻译
function applyTranslation(lang) {
    if (translations[lang]) {
        // 更新标题
        titleText.textContent = translations[lang].title;

        // 更新列表项内容
        listItems.forEach((item, index) => {
            item.textContent = translations[lang].items[index];
        });

        // 隐藏语言菜单
        document.getElementById("button-container").style.display = "none";
    } else {
        console.error(`Translation for "${lang}" not found.`);
    }
}

// 点击主按钮展开语言菜单
document.getElementById("main-button").addEventListener("click", () => {
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.style.display =
        buttonContainer.style.display === "flex" ? "none" : "flex";
});
