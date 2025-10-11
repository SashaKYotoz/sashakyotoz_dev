document.addEventListener("DOMContentLoaded", function () {
    function getHashId() {
        const hash = window.location.hash;
        if (!hash) return null;
        const params = new URLSearchParams(hash.substring(1));
        return params.get("id");
    }

    function tryOpenOverlayFromHash() {
        const id = getHashId();
        if (!id) return;
        console.log("ID: " + id);
        fetchOverlayContent(id);
        overlay.style.display = "flex";
    }
    tryOpenOverlayFromHash();
    window.addEventListener("hashchange", tryOpenOverlayFromHash);
});
