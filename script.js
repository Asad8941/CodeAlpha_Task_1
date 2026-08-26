

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightboxImg");

const closeBtn =
    document.getElementById("closeBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");



let visibleImages = [];

let currentIndex = 0;

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");


        const category =
            button.dataset.category;


        visibleImages = [];


        galleryItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {

                item.style.display = "block";

                visibleImages.push(item);

            } else {

                item.style.display = "none";

            }

        });

    });

});


visibleImages = Array.from(galleryItems);

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        
        currentIndex =
            visibleImages.indexOf(item);


        showImage();


        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});

function showImage() {

    const item =
        visibleImages[currentIndex];


    const image =
        item.querySelector("img");


    lightboxImg.src =
        image.src;


    lightboxImg.alt =
        image.alt;

}



nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= visibleImages.length) {

        currentIndex = 0;

    }

    showImage();

});




prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            visibleImages.length - 1;

    }

    showImage();

});




function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

}


closeBtn.addEventListener(
    "click",
    closeLightbox
);



lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});



document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("show")) {
        return;
    }


    if (event.key === "Escape") {

        closeLightbox();

    }


    if (event.key === "ArrowRight") {

        nextBtn.click();

    }


    if (event.key === "ArrowLeft") {

        prevBtn.click();

    }

});
