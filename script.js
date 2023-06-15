

window.addEventListener('DOMContentLoaded', function () {
  var hiddenLink = document.getElementById('hidden-link');
  hiddenLink.classList.add('hidden');
});

/* window.addEventListener('DOMContentLoaded', function () {
  var introWindow = document.getElementById('intro-window');
  introWindow.classList.add('hide');

  setTimeout(function () {
    introWindow.remove();
  }, 10000);
});
*/

function sendEmail() {
  var message = document.getElementById("messageID").value;
  var name = document.getElementById("nameID").value;
  var email = document.getElementById("emailID").value;

  if (message !== "" && name !== "" && email !== "") {
    alert("Your message was sent successfully!");
  } else {
    alert("Please fill in all the required fields.");
  }

  var subject = "New email from " + name;
  var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;


  sendEmailRequest(subject, body);

  alert("Your message was sent successfully!");
}

document.getElementById("sendButton").addEventListener("click", sendEmail);