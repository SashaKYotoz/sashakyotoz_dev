const GIST_URL = 'https://gist.githubusercontent.com/SashaKYotoz/fd05d225708c61c3c16ea63a04d30183/raw/commands.json';

const grid = document.getElementById("grid");
const pdf_grid = document.getElementById("pdf_grid");
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

async function fetchPDFs() {
    const repoOwner = "sashakyotoz";
    const repoName = "sashakyotoz_dev";
    const path = "pdf";

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

    try {
        const response = await fetch(url);
        const files = await response.json();

        const pdfs = files.filter(file => file.name.endsWith('.pdf'));

        console.log(`Found ${pdfs.length} PDFs.`);

        if (pdfs.length > 0) {
            pdf_grid.innerHTML = '';
            pdfs.forEach(pdf => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                <span class="icon">📝</span>
                <span class="title">${pdf.name}</span>
            `;
            card.onclick = () => {
                window.open(`https://sashakyotoz.github.io/sashakyotoz_dev/pdf/${pdf.name}`, "_blank");
            };
                pdf_grid.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error fetching file list:", error);
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
fetchPDFs();