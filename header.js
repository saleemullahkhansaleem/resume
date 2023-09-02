// let sec = document.querySelectorAll("section");
// let link = document.querySelectorAll("header a");
// console.log(link);

// window.onscroll = () => {
//   sec.forEach((section) => {
//     let top = window.scrollY;
//     let offset = section.offsetTop - 150;
//     let height = section.offsetHeight;
//     let id = section.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       link.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };



const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("header a");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY + 80;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      links.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") ===
          link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});


function showHeader () {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn.classList.contains("active")) {
    header.classList.remove("responsive");
    menuBtn.classList.remove("active");
    menuBtn.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`;
  }else{
    header.classList.add("responsive");
    menuBtn.classList.add("active");
    menuBtn.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
  }
}