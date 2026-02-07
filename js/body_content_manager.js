const overlayContent = document.getElementById("overlay-content");
const baseURL = 'https://sashakyotoz.github.io/sashakyotoz_dev/';
const overlay = document.getElementById("overlay");

const GIST_URL = 'https://gist.githubusercontent.com/SashaKYotoz/ba408e314dd3948a2d49d6047573a485/raw/combos.json';

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("content-keeper").addEventListener("click", function (event) {
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
        console.log(contentId);
        fetch(baseURL + 'data/descriptions.json')
            .then(response => response.json())
            .then(data => {
                const project = data.projects.find(proj => proj.id === contentId);
                if (project) {
                    return fetch(baseURL + project.description)
                        .then(response => response.text())
                        .then(markdown => {
                            overlayContent.innerHTML = markdown;
                        });
                } else {
                    overlayContent.innerHTML = "<p>Content not found</p>";
                }
            })
            .catch(error => {
                overlayContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
            });
    }
    function getHashId() {
        const hash = window.location.hash;
        if (!hash) return null;
        const params = new URLSearchParams(hash.substring(1));
        return params.get("id");
    }

    function tryOpenOverlayFromHash() {
        const id = getHashId();
        if (!id) return;
        fetchOverlayContent(id);
        overlay.style.display = "flex";
    }

    tryOpenOverlayFromHash();
    window.addEventListener("hashchange", tryOpenOverlayFromHash);
});
const input = document.getElementById("term-searcher");
const form = document.getElementById("search-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkForm();
});

async function combosMatch(searchTerm) {
    try {
        const response = await fetch(GIST_URL);
        const data = await response.json();
        
        for (const [key, value] of Object.entries(data)) {
            if (searchTerm == key) {
                overlay.style.display = "none";
                const response = await fetch("../html/"+value);
                const newHTML = await response.text();
                document.innerHTML = newHTML;
                return true;
            }
        }
    } catch (error) {}
    return false;
}

function checkForm() {
    if (input) {
        overlay.style.display = "flex";
        let searchTerm = input.value.toLowerCase().trim();
        console.log(combosMatch(searchTerm));
        if (combosMatch(searchTerm)) {} 
        else {
            fetch(baseURL + 'data/descriptions.json')
                .then(response => response.json())
                .then(data => {
                    let found = false;
                    data.projects.forEach(project => {
                        fetch(baseURL + project.description)
                            .then(response => response.text())
                            .then(markdown => {
                                if (markdown.toLowerCase().includes(searchTerm)) {
                                    const regex = new RegExp(`(${searchTerm})`, 'gi');
                                    const highlightedText = markdown.replace(regex, '<span style="color: orange;">$1</span>');
                                    overlayContent.innerHTML = highlightedText;
                                    found = true;
                                }
                            })
                            .catch(error => {
                                overlayContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
                            });
                    });
                    if (!found) {
                        overlayContent.innerHTML = "<p>No content matched your search.</p>";
                    }
                })
                .catch(error => {
                    overlayContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
                });
        }
    }
}


function updateElements() {
    const screenWidth = window.innerWidth;
    const specificList = document.getElementById('specific-list');
    if (!specificList) return;

    const linkElements = specificList.querySelectorAll('.link-element');

    linkElements.forEach(linkElement => {
        const imgElement = linkElement.querySelector('.image-element');
        if (screenWidth > 1286) {
            imgElement.style.display = 'inline';
            if (linkElement.lastChild.nodeType === 3) {
                linkElement.lastChild.remove();
            }
        } else {
            imgElement.style.display = 'none';
            if (linkElement.lastChild.nodeType !== 3) {
                linkElement.appendChild(document.createTextNode('Link'));
            }
        }
    });
}

window.addEventListener('resize', updateElements);
document.addEventListener('DOMContentLoaded', updateElements);