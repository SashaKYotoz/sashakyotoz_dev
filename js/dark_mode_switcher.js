let switcher = document.getElementById("switch");
let switchLabel = document.getElementById("switchLabel");
let isDark = switcher.checked;

function detectThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("Detected system theme: Dark");
        return true;
    } else {
        console.log("Detected system theme: Light");
        return false;
    }
}

if (localStorage.getItem("switcher")) {
    isDark = localStorage.getItem("switcher") === "true";
    console.log("Using theme from localStorage: " + (isDark ? "Dark" : "Light"));
} else {
    isDark = detectThemePreference();
    console.log("No theme set in localStorage. Using detected theme: " + (isDark ? "Dark" : "Light"));
}

checkTheme();
switcher.checked = isDark;

switcher.addEventListener("change", () => {
    isDark = switcher.checked;
    checkTheme();
    localStorage.setItem("switcher", isDark);
    console.log("Theme changed by switcher: " + (isDark ? "Dark" : "Light"));
});

function checkTheme() {
    let texts = Array.from(document.getElementsByClassName('toswitch'));
    let cardBody = Array.from(document.getElementsByClassName('card-body'));
    let reversedTexts = Array.from(document.getElementsByClassName('toswitchR'));
    let headers = Array.from(document.getElementsByClassName('card-header'));
    let footer = document.getElementById("footer");
    switchLabel.textContent = isDark ? "☀️" : "🌑";
    if (isDark) {
        document.body.classList.add("bg-dark");
        document.body.classList.remove("bg-white");
        overlayContent.classList.add("bg-dark", "white-text");
        overlayContent.classList.remove("bg-white" , "dark-text");
        footer.classList.add("bg-white");
        footer.classList.remove("bg-dark");
        texts.forEach(element => {
            element.classList.add('white-text');
            element.classList.remove('dark-text');
        });
        cardBody.forEach(element => {
            element.classList.add('bg-dark');
            element.classList.remove('bg-white');
        });
        reversedTexts.forEach(element => {
            element.classList.add('dark-text');
            element.classList.remove('white-text');
        });
        headers.forEach(element => {
            element.classList.add('card-header-light');
            element.classList.remove('card-header-dark');
        });
    } else {
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-white");
        overlayContent.classList.remove("bg-dark","white-text");
        overlayContent.classList.add("bg-white","dark-text");
        footer.classList.add("bg-dark");
        footer.classList.remove("bg-white");
        texts.forEach(element => {
            element.classList.add('dark-text');
            element.classList.remove('white-text');
        });
        cardBody.forEach(element => {
            element.classList.add('bg-white');
            element.classList.remove('bg-dark');
        });
        reversedTexts.forEach(element => {
            element.classList.add('white-text');
            element.classList.remove('dark-text');
        });
        headers.forEach(element => {
            element.classList.add('card-header-dark');
            element.classList.remove('card-header-light');
        });
    }
}

function checkCookieIntegrity() {
    if (document.cookie.includes("switcher")) {
        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)switcher\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (cookieValue !== localStorage.getItem("switcher")) {
            localStorage.setItem("switcher", cookieValue);
            isDark = cookieValue === "true";
            checkTheme();
            switcher.checked = isDark;
            console.log("Cookie changed manually. Updated theme: " + (isDark ? "Dark" : "Light"));
        }
    }
}

setInterval(checkCookieIntegrity, 1000);