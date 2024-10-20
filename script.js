document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert(`Thank you, ${name}! We will respond to your message soon.`);
    
    // Clear the form
    document.getElementById("contactForm").reset();
});
