document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const overlayContent = document.getElementById("overlay-content");

    const baseURL = 'https://sashakyotoz.github.io/sashakyotoz_dev/';

    document.getElementById("content-keeper").addEventListener("mouseover", function (event) {
        const target = event.target.closest(".media-body");
        if (target && target.id) {
            fetchOverlayContent(target.id);
            overlay.style.display = "flex";
        }
    });

    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        overlayContent.innerHTML = "";
    });

    function fetchOverlayContent(contentId) {
        fetch(baseURL + 'data/descriptions.json')
            .then(response => response.json())
            .then(data => {
                const project = data.projects.find(proj => proj.id === contentId);
                if (project) {
                    return fetch(baseURL + project.description)
                        .then(response => response.text())
                        .then(markdown => {
                            overlayContent.innerHTML = marked(markdown);
                        });
                } else {
                    overlayContent.innerHTML = "<p>Content not found</p>";
                }
            })
            .catch(error => {
                overlayContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    }
});