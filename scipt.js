document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            const contactDetails = {
                name,
                email,
                message
            };

            // Store in local storage
            localStorage.setItem('contactForm', JSON.stringify(contactDetails));

            // Clear form
            contactForm.reset();

            // Alert user
            alert('Message sent successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});
