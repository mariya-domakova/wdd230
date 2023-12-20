document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("banner-btn");

    banner.classList.remove("hidden");

    closeBannerBtn.addEventListener("click", () => {
        banner.classList.add("hidden");
    });
});
