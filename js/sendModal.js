const modal = document.getElementById("authentication-modal");
const closeButton = document.querySelector('[data-modal-hide="authentication-modal"]');

document.getElementById("sendEmail").addEventListener("submit", (event) => {
  event.preventDefault();

  const serviceID = "service_yobjepi";
  const templateID = "template_5gsql5o";

  /* emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent, thank you for your contact!");
      closeModal();
    },
    (error) => {
      console.log("FAILED...", error);
      alert("Email failed, please try again...", error);
    }
  ); */

  closeModal();
});

function closeModal() {
  closeButton.setAttribute('data-modal-hide', '');
}
