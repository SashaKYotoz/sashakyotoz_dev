let currentSection = "Home";

const sectionContent = {
    Home: `<h2>Welcome to SashaKYotoz's Dev Hub</h2>
    <div class="row">
    <div class="card bg-dark" style="width: 15rem;">
        <img src="images/sashakyotoz_decorations/sashakyotoz_main_page.webp" class="card-img-top" alt="modmaking">
        <div class="card-body">
            <h5 class="card-title">Modmaking</h5>
            <p class="card-text">Switch page to mods related content</p>
            <a href="#" onclick="updateContentAndSection('Modmaking')" class="btn btn-primary stretched-link">Mods' wiki</a>
        </div>
    </div>
    <div class="card bg-dark" style="width: 15rem;">
        <img src="images/sashakyotoz_decorations/gamedev_page.webp" class="card-img-top" alt="gamedev">
        <div class="card-body">
            <h5 class="card-title">Gamemaking</h5>
            <p class="card-text">Switch page to gamedev related content</p>
            <a href="#" onclick="updateContentAndSection('GameMaking')" class="btn btn-primary stretched-link">Gamedev</a>
        </div>
    </div>
    <div class="card bg-dark" style="width: 15rem;">
        <img src="images/sashakyotoz_decorations/support_page.webp" class="card-img-top" alt="support">
        <div class="card-body">
            <h5 class="card-title">Support my work</h5>
            <p class="card-text">Switch page to author supporting</p>
            <a href="#" onclick="updateContentAndSection('Support')" class="btn btn-primary stretched-link">Support</a>
        </div>
    </div>
    </div>
        `,
    Modmaking: `<h2>Modmaking</h2>
        <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="media-body" id="wrathy_armament">
                            <img class="img-box"
                                src="images/mod_titles/wrathy_armament_title.webp">
                            <h4 class="mt-0 mb-1 white-text">Wrathy Armament</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.curseforge.com/minecraft/mc-mods/wrathy_armament" target="_blank">
                                    <img src="https://cf.way2muchnoise.eu/title/1075856.svg"
                                        alt="Wrathy Armament Title">
                                    <img src="http://cf.way2muchnoise.eu/versions/1075856.svg"
                                        alt="Wrathy Armament Versions">
                                    <img src="https://cf.way2muchnoise.eu/full_1075856_downloads.svg"
                                        alt="Wrathy Armament Downloads">
                                </a>
                                <a href="https://github.com/SashaKYotoz/Wrathy_Armament/blob/master/LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="unseen_world">
                            <img class="img-box"
                                src="https://media.forgecdn.net/attachments/description/550263/description_19f8be2b-93bb-4109-9c68-b35e9152eac8.png">
                            <h4 class="mt-0 mb-1 white-text">Unseen World</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.curseforge.com/minecraft/mc-mods/unseen-world" target="_blank">
                                    <img src="https://cf.way2muchnoise.eu/title/550263.svg" alt="Unseen World Title">
                                    <img src="http://cf.way2muchnoise.eu/versions/550263.svg"
                                        alt="Unseen World Versions">
                                    <img src="https://cf.way2muchnoise.eu/full_550263_downloads.svg"
                                        alt="Unseen World Downloads">
                                </a>
                                <a href="https://github.com/SashaKYotoz/Unseen_World/blob/master/LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="various_world">
                            <img class="img-box"
                                src="images/mod_titles/varios_world_title.webp">
                            <h4 class="mt-0 mb-1 white-text">Various World</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.curseforge.com/minecraft/mc-mods/various-world" target="_blank">
                                    <img src="https://cf.way2muchnoise.eu/title/544497.svg" alt="Various World Title">
                                    <img src="http://cf.way2muchnoise.eu/versions/544497.svg"
                                        alt="Various World Versions">
                                    <img src="https://cf.way2muchnoise.eu/full_544497_downloads.svg"
                                        alt="Various World Downloads">
                                </a>
                                <a href="https://github.com/SashaKYotoz/VariousWorld/blob/master/LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="humbledless_world">
                            <img class="img-box"
                                src="images/mod_titles/humbledless_world_title.webp">
                            <h4 class="mt-0 mb-1 white-text">Humbledless World</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.curseforge.com/minecraft/mc-mods/humbledless-world"
                                    target="_blank">
                                    <img src="https://cf.way2muchnoise.eu/title/904702.svg"
                                        alt="Humbledless World Title">
                                    <img src="http://cf.way2muchnoise.eu/versions/904702.svg"
                                        alt="Humbledless World Versions">
                                    <img src="https://cf.way2muchnoise.eu/full_904702_downloads.svg"
                                        alt="Humbledless World Downloads">
                                </a>
                                <a href="https://github.com/SashaKYotoz/VariousWorld/blob/master/LICENSE">
                                    <img src="https://img.shields.io/badge/AGPLv3-blue" alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    GameMaking: `<h2>GameMaking</h2>
                        <div class="media-body" id="sashakyotoz_gamedev">
                            <img class="img-box"
                                src="images/support_page_images/carousel-items/ukrainian_wanderlust.webp">
                            <h4 class="mt-0 mb-1 white-text">Bib bib bi bu... WIP page</h4>
                        </div>
                `,
    Support: `<h2>Support</h2>
    <div id="carousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="media-body" id="sashakyotoz_support">
                            <img class="img-box"
                                src="images/support_page_images/carousel-items/unseen_world.webp">
                            <h4 class="mt-0 mb-1 white-text">You like the projects i'm working on? Here're options to support me!</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=S5WG9NUXSG8HW" target="_blank">
                                    <img src="images/support_page_images/paypal.webp"
                                        alt="Support me by donate on paypal">
                                </a>
                                <a href="https://twitter.com/SashaKYotoz">
                                    <img src="images/support_page_images/twitter.webp"
                                        alt="Follow me on twitter">
                                </a>
                                <a href="https://discord.gg/APRgEmYm4w">
                                    <img src="images/support_page_images/discord.webp"
                                        alt="Join my discord server">
                                </a>
                                <a href="LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="sashakyotoz_support">
                            <img class="img-box"
                                src="images/support_page_images/carousel-items/wrathy_armament.webp">
                            <h4 class="mt-0 mb-1 white-text">You like the projects i'm working on? Here're options to support me!</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=S5WG9NUXSG8HW" target="_blank">
                                    <img src="images/support_page_images/paypal.webp"
                                        alt="Support me by donate on paypal">
                                </a>
                                <a href="https://twitter.com/SashaKYotoz">
                                    <img src="images/support_page_images/twitter.webp"
                                        alt="Follow me on twitter">
                                </a>
                                <a href="https://discord.gg/APRgEmYm4w">
                                    <img src="images/support_page_images/discord.webp"
                                        alt="Join my discord server">
                                </a>
                                <a href="LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="sashakyotoz_support">
                            <img class="img-box"
                                src="images/support_page_images/carousel-items/various_world.webp">
                            <h4 class="mt-0 mb-1 white-text">You like the projects i'm working on? Here're options to support me!</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=S5WG9NUXSG8HW" target="_blank">
                                    <img src="images/support_page_images/paypal.webp"
                                        alt="Support me by donate on paypal">
                                </a>
                                <a href="https://twitter.com/SashaKYotoz">
                                    <img src="images/support_page_images/twitter.webp"
                                        alt="Follow me on twitter">
                                </a>
                                <a href="https://discord.gg/APRgEmYm4w">
                                    <img src="images/support_page_images/discord.webp"
                                        alt="Join my discord server">
                                </a>
                                <a href="LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="media-body" id="sashakyotoz_support">
                            <img class="img-box"
                                src="images/support_page_images/carousel-items/ukrainian_wanderlust.webp">
                            <h4 class="mt-0 mb-1 white-text">You like the projects i'm working on? Here're options to support me!</h4>
                            <div style="display: inline-block;">
                                <a href="https://www.paypal.com/donate/?hosted_button_id=S5WG9NUXSG8HW" target="_blank">
                                    <img src="images/support_page_images/paypal.webp"
                                        alt="Support me by donate on paypal">
                                </a>
                                <a href="https://twitter.com/SashaKYotoz">
                                    <img src="images/support_page_images/twitter.webp"
                                        alt="Follow me on twitter">
                                </a>
                                <a href="https://discord.gg/APRgEmYm4w">
                                    <img src="images/support_page_images/discord.webp"
                                        alt="Join my discord server">
                                </a>
                                <a href="LICENSE">
                                    <img src="https://img.shields.io/badge/All--Rights--Reserved-blue"
                                        alt="All Rights Reserved">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
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