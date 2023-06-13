const nameInput = document.getElementById("nameID");
const emailInput = document.getElementById("emailID");
const messageInput = document.getElementById("messageID");

const button = document.getElementById("buttonID");


button.addEventListener('click', function() {

const nameValue = nameInput.value;

const emailValue = emailInput.value;

const messageValue = messageInput.value;

if (nameValue === '') {
  nameInput.alert = 'Name must be input';
} else {
  nameInput.alert = '';
}

if (emailValue === '') {
  emailInput.alert = 'E-mail must be input';
} else {
  emailInput.alert = '';
}
if (messageValue === '') {
  messageInput.alert = 'Message must be input';
} else {
  messageInput.alert = '';
}

if (nameValue === '' || emailValue === '' || messageValue === '') {
  return
}
alert('Thank you')

}

);


function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    To: 'receiver@email_address.com',
    From: "sender@email_address.com",

  })
    .then(function (message) {
      alert("Message sent successfully!")
    });
  }