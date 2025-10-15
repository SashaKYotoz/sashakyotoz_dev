let currentSection = "Home";

const sectionContent = {
    Home: '/sections/home.html',
    Modmaking: '/sections/modmaking.html',
    GameMaking: '/sections/gamemaking.html',
    Support: '/sections/support.html'
};
function updateActiveNav(section) {
    document.querySelector('.navbar-nav .nav-item.active')?.classList.remove('active');
    let newActiveItem = document.querySelector(`.nav-link[data-section="${section}"]`)?.closest('.nav-item');
    if (newActiveItem)
        newActiveItem.classList.add('active');
}
function updateContent(section) {
    const contentKeeper = document.getElementById("content-keeper");

    contentKeeper.classList.add("hidden");

    setTimeout(() => {
        contentKeeper.innerHTML = sectionContent[section] || `<h2>Section Not Found</h2>`;
        updateActiveNav(section);
        contentKeeper.classList.remove("hidden");
    }, 500);
}
function updateContentAndSection(section) {
    updateContent(section);
    if (section && section !== currentSection) {
        currentSection = section;
    }
}

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const section = link.getAttribute("data-section");
        if (section && section !== currentSection) {
            currentSection = section;
            updateContent(section);
        }
    });
});

updateContent(currentSection);