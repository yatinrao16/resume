
// Helper function to add animations when a section enters the viewport
function animateSection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');}
    
    });
  }
  
  // Create an Intersection Observer instance
  const sectionObserver = new IntersectionObserver(animateSection, { threshold: 0.5 });
  
  // Select all the sections that you want to animate
  const sections = document.querySelectorAll('section');
  
  // Observe each section
  sections.forEach(section => {
    sectionObserver.observe(section);
  });


let menuIcon= document.querySelector('#menu-icon');
let navBar= document.querySelector('.navbar');

menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}




