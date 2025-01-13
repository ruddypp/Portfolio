//  partiecle js functions
 particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
      console.log('Particles.js loaded - callback');
  });

  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 80,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": { "value": "#000000" },
          "shape": {
              "type": "circle",
              "stroke": { "width": 0, "color": "#000000" },
              "polygon": { "nb_sides": 5 }
          },
          "opacity": {
              "value": 0.5,
              "random": false,
              "anim": { "enable": false }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": { "enable": false }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#000000",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": { "enable": true, "mode": "repulse" },
              "onclick": { "enable": true, "mode": "push" }
          }
      },
      "retina_detect": true
  });

// FIlter Functions
  document.addEventListener('DOMContentLoaded', function() {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');
  
      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              // Remove active class from all buttons
              filterButtons.forEach(btn => {
                  btn.classList.remove('active', 'bg-black', 'text-white');
                  btn.classList.add('bg-gray-200', 'text-gray-800');
              });
              
              // Add active class to clicked button
              button.classList.remove('bg-gray-200', 'text-gray-800');
              button.classList.add('active', 'bg-black', 'text-white');
  
              const category = button.getAttribute('data-category');
  
              // Filter projects
              projectCards.forEach(card => {
                  const cardCategory = card.getAttribute('data-category');
                  if (category === 'all' || cardCategory === category) {
                      card.style.display = 'flex';
                      setTimeout(() => {
                          card.classList.add('animate-fade-in');
                      }, 10);
                  } else {
                      card.style.display = 'none';
                      card.classList.remove('animate-fade-in');
                  }
              });
          });
      });
  });
  

     
//   Animation functions
  AOS.init();

    