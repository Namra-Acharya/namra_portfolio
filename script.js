// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Certificate modal functions
function openCert(filename, title, issuer, date) {
    const modal = document.getElementById('certModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const certTitle = document.getElementById('certTitle');
    const certInfo = document.getElementById('certInfo');
    const downloadBtn = document.getElementById('downloadBtn');

    // Construct the path to the PDF file
    const pdfPath = `src/public/${encodeURIComponent(filename)}`;

    pdfViewer.src = pdfPath;
    certTitle.textContent = title;
    certInfo.textContent = `${issuer} • ${date}`;
    downloadBtn.href = pdfPath;
    downloadBtn.download = filename;

    modal.classList.add('active');
}

function closeCert() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeCert();
    }
});

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Since we can't send emails directly from static HTML, 
    // we'll create a mailto link or show a success message
    const subject = `New message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Send via mailto
    window.location.href = `mailto:namra.acharya@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success message
    alert('Thank you for your message! Your email client will open with your message.');
    
    // Reset form
    document.querySelector('.contact-form').reset();
}

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .about-card, .cert-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
