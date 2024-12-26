// Navbar
const navToggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links")[0];

navToggleBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("active");
});

// Syllabus presentation
const syllabusPresentation = document.querySelector(".syllabus-pres-pres");
const syllabusHoverBackground = document.querySelector(
  "#syllabus-pres-hover-bg"
);

syllabusPresentation.addEventListener("mouseover", (e) => {
  syllabusHoverBackground.classList.add("active");
});
syllabusPresentation.addEventListener("mouseout", (e) => {
  syllabusHoverBackground.classList.remove("active");
});
