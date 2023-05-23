/*Active Nav-link color change */

const navLinks = document.querySelectorAll('.nav-link1');
const windowPathname = window.location.pathname;

navLinks.forEach(navLinks =>{
    if (navLinks.href.includes(windowPathname)){
        navLinks.classList.add('active-nav');
    }
});


/* Banner image change*/

// const myImage = document.querySelector(".slide-window-img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/Homepage1.jpeg") {
//     myImage.setAttribute("src", "images/5.jpg");
//   } else if (mySrc === "images/5.jpg" ) {
//     myImage.setAttribute("src", "images/banner2.jpg");
//   } else if (mySrc ===  "images/banner2.jpg") {
//     myImage.setAttribute("src", "images/4.jpg");
//   } else {
//     myImage.setAttribute("src", "images/Homepage1.jpeg");
//   }
// };

/*Scroll Animation*/

window.addEventListener('scroll',()=>{
    let content = document.querySelector('.news1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1.2;
    if(contentPosition < screenPosition){
       content.classList.add('active');
    }else{
       content.classList.remove('active');
    }
 }); 
