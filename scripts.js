document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Display a simple alert (or handle form submission as needed)
  document.getElementById('formResponse').textContent = 'Thank you for your message, ' + name + '!';

  // Reset the form
  this.reset();
});
