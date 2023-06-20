const modal = document.getElementById("authentication-modal")

document.getElementById("sendEmail").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_yobjepi";
  const templateID = "template_5gsql5o";

  /* emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent, thank you for your contact!");
      modal.style.display = 'none';
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Email failed, please try again...", error);
    }
  ); */

  function closeModal() {
    modal.setAttribute('data-modal-hide', '');
  }

  closeModal();

});