const modal = document.getElementById("authentication-modal")

sendEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const serviceID = "service_yobjepi";
  const templateID = "template_5gsql5o";

  emailjs.sendForm(serviceID, templateID, sendEmailForm).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
        if (windows.confirm("Email sent, thank you for your contact!")){
          settimeout(()=> { (modal.close(), 5000) } );
        }
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Email failed, please try again...", error);
    }
  );

});