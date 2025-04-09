// Dark mode functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply the theme
document.documentElement.setAttribute('data-theme', currentTheme);

// Toggle theme
themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        try {
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Send the form data
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (result.success) {
                showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                this.reset();
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Reset button state
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

// Initial check for elements in view
animateOnScroll();

// Check for elements in view on scroll
window.addEventListener('scroll', animateOnScroll);

// Optional: Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate position, accounting for potential sticky header height
            const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 10; // Extra 10px buffer

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Optional: Highlight active nav link based on scroll position (More complex)
// Add this only if needed, it requires careful calculation
/*
const sections = document.querySelectorAll("main section[id]");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollY = window.pageYOffset;
  const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight + 20 : 20; // Adjust offset

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerOffset; // Consider header height
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // If scrolled to the very top, highlight 'home'
  if (scrollY < sections[0].offsetTop - headerOffset) {
      current = sections[0].getAttribute("id");
  }
  // If scrolled near the bottom, highlight 'contact'
  if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 50) { // 50px buffer from bottom
      current = 'contact'; // Assuming 'contact' is the last section id
  }


  navLi.forEach((a) => {
    a.classList.remove("active"); // You need to define .active style in CSS
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Add CSS for .active class:
// nav ul li a.active { color: #3f51b5; font-weight: bold; }
*/

// Form Validation and Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

function showFormMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    // Remove any existing message
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}