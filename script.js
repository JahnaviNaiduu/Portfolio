document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    if (!menuBtn) {
        console.log("menuBtn not found");
        return;
    }

    if (!sidebar) {
        console.log("sidebar not found");
        return;
    }

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

});
