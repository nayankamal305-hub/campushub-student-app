// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close menu when link clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scrolling
function smoothScroll(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Navigate to dashboard
function goToDashboard() {
  window.location.href = 'pages/dashboard.html';
}

// Newsletter form handler
function handleNewsletter(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value;
  const msg = document.getElementById('newsletterMsg');
  
  msg.textContent = '✓ Thank you! You\'ve been subscribed.';
  msg.style.display = 'block';
  form.reset();
  
  setTimeout(() => {
    msg.style.display = 'none';
  }, 3000);
}

// Contact form handler
function handleContact(e) {
  e.preventDefault();
  const form = e.target;
  const msg = document.getElementById('contactMsg');
  
  msg.textContent = '✓ Thank you! We\'ll get back to you soon.';
  msg.style.display = 'block';
  form.reset();
  
  setTimeout(() => {
    msg.style.display = 'none';
  }, 3000);
}

// Page animations
window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.feature-card, .stat-box, .benefit-item');
  elements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
  });
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
