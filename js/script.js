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
function smoothScroll(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Newsletter subscription
function handleNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  const messageDiv = document.getElementById('newsletterMsg');
  if (email) {
    messageDiv.textContent = '✓ Thank you for subscribing! Check your email.';
    messageDiv.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 3000);
  }
}

// Contact form handler
function handleContact(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  if (name && email && message) {
    alert(`Thank you ${name}! We received your message and will respond soon.`);
    form.reset();
  }
}

// Navigate to dashboard
function goToDashboard() {
  window.location.href = 'pages/dashboard.html';
}

// Animated counter for stats
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 30;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
}

// Animate stats on scroll
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.animated) {
      entry.target.animated = true;
      const statBoxes = document.querySelectorAll('.stat-box h3');
      statBoxes.forEach(box => {
        const text = box.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (!isNaN(number)) {
          animateCounter(box, number);
        }
      });
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
  observer.observe(statsSection);
}

// Add hover effect animations
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Scroll animation for elements
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,212,255,.2)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Initialize all interactive elements on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add data-aos attributes for animations
  const elementsToAnimate = document.querySelectorAll('.feature-card, .stat-box, .benefit-item');
  elementsToAnimate.forEach((el, index) => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease';
      el.style.opacity = '1';
    }, index * 100);
  });
});

// Form validation helper
function validateForm(formElement) {
  const inputs = formElement.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = '#ff6b9d';
    }
  });
  return isValid;
}
