const header = document.querySelector("header");
window.addEventListener("scroll",function(){
   header.classList.toggle("sticky",window.scrollY>0);

});
document.getElementById("about-button").addEventListener("click", function() {
   document.getElementById("resume-image").scrollIntoView({ behavior: 'smooth' });

});
