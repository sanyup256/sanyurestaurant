function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "trustjonathan205@gmail.com",
    Password: "AEAD09915FDFFECA2764E0E106256AE9B184",
    To: "trustjonathan205@gmail.com",
    From: "trustjonathan205@gmail.com",
    Subject: "new user",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
