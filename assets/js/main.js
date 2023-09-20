//! Animation list
const linkList = document.querySelectorAll('.linkList li', '.linkList a');

linkList.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('active');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('active');
    });
})

//! NAVBAR FLEX
const navbarContainer = document.querySelector('.navbar-container');
const navbar = document.querySelector('.navbar');
let isNavbarFixed = false;

function handleScroll() {
    if (window.scrollY > 100 && !isNavbarFixed) {
        navbarContainer.classList.add('navbar-fixed');
        isNavbarFixed = true;
      } else if (window.scrollY <= 100 && isNavbarFixed) {
        navbarContainer.classList.remove('navbar-fixed');
        isNavbarFixed = false;
      }
    }
window.addEventListener('scroll', handleScroll);

//! Desplazamiento suave
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".linkList a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement){
        const targetOffset = targetElement.offsetTop -70;
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
        }
      });
    });
  });
// ! POP UP
// const form = document.getElementById("contact-form");
// const popup = document.querySelector(".popup");

// form.addEventListener("submit", function (e) {
//     e.preventDefault(); //

//     const isSuccessful = true;

//     if (isSuccessful) {
//         popup.style.display = "block";
//         setTimeout(function () {
//             popup.style.display = "none";
//         }, 3000);
//     }
// });

//!Observar cv
    const viewCvButton = document.getElementById("view-cv");
    const pdfUrl = "/assets/CV/Christian Rojo Gallardo Programador web FRONT-END.pdf";

    function openPdfViewer() {
        window.open(pdfUrl, "_blank");
    }

    viewCvButton.addEventListener("click", openPdfViewer);
