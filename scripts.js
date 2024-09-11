// Initialize EmailJS with your Public Key
emailjs.init("3KMqOLTPv3ppT6hLj"); // Replace with your public key

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send('service_unpzzvx', 'template_hgw81pd', {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    document.getElementById('formResponse').textContent = 'Thank you for your message, ' + name + '!';
  }, function(error) {
    document.getElementById('formResponse').textContent = 'Oops! Something went wrong. Please try again.';
  });

  // Reset the form
  this.reset();
});
