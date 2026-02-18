const GIST_URL = 'https://gist.githubusercontent.com/SashaKYotoz/fd05d225708c61c3c16ea63a04d30183/raw/commands.json';

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

async function loadPanels() {
    try {
        const response = await fetch(GIST_URL);
        const data = await response.json();

        grid.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <span class="icon">${item.icon}</span>
                <span class="title">${item.title}</span>
            `;

            card.onclick = () => {
                modalTitle.innerText = item.title;
                const shortcutText = Array.isArray(item.shortcuts)
                    ? item.shortcuts.join('\n')
                    : item.shortcuts;

                modalBody.innerText = shortcutText;
                modal.style.display = "block";
            };

            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading commands:", error);
    }
}

document.getElementById("back_to_main").onclick = () => document.location.replace(
    document.location.href.includes("github")
        ? "https://sashakyotoz.github.io/sashakyotoz_dev/"
        : document.location.href.replace("html/info.html", "index.html")
);

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

loadPanels();