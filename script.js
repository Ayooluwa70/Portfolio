// Dynamic Greeting Based on Time
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
let timeGreeting = "Hello";

if (hour < 12) {
  timeGreeting = "Good Morning";
} else if (hour < 18) {
  timeGreeting = "Good Afternoon";
} else {
  timeGreeting = "Good Evening";
}

greeting.innerHTML = `${timeGreeting}, I'm <span class="highlight">Ayooluwa</span>`;

// Smooth Scroll to Projects
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
// Animate skills progress bars when section is in view
function animateSkills() {
  const skillsSection = document.querySelector('.skills-section');
  const progressBars = document.querySelectorAll('.progress-bar');

  // Get the distance from the top of the viewport
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    progressBars.forEach(bar => {
      const skillLevel = bar.getAttribute('data-skill');
      bar.style.width = skillLevel;
    });

    // Remove event listener so it only happens once
    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
const express = require('express');
const app = express();
const port = 3000;

// Define the /output route
app.get('/output', (req, res) => {
  res.send('This is the output page!');
});

app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});
