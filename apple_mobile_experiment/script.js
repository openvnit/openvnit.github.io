    console.log("loaded");
    function humburgerShow(obj) {
        let humburgerButton = document.querySelector(".humburger");
        let hiddenMenu = document.querySelector(".hidden-main-nav-menu");
        let bagButton = document.querySelector(".mobile-top-nav .bag-button-item");
        if (humburgerButton.classList.contains("active")) {
            humburgerButton.classList.remove("active");
            hiddenMenu.classList.remove("show");
            bagButton.classList.remove("hide");
        }
        else {
            humburgerButton.classList.add("active");
            hiddenMenu.classList.add("show");
            bagButton.classList.add("hide");
        }
    }

    function bagShow(obj) {
        
    }