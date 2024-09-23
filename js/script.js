$(document).ready(function () {
    $('.slider__slides').slick({
        arrows: false,
        slidesToShow: 1.67,
        slidesToScroll: 1,
        dots: true,

        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
});

let showFormModal = document.querySelector(".show-modal-form");
let closeFormModal = document.querySelector(".modal__close");
let body = document.body;
let modal = document.querySelector(".modal")
let modalContainer = document.querySelector(".modal__container")

function openModal() {
    body.classList.add("modal-open");
}

function closeModal() {
    body.classList.remove('modal-open');
}

showFormModal.addEventListener("click", openModal);
closeFormModal.addEventListener("click", closeModal);
modal.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal();
    }
});

window.addEventListener("load", body.classList.remove("preload"));