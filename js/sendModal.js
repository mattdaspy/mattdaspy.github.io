const modal = document.getElementById("authentication-modal")
const closeModalButton = document.getElementById("closeModalButton")
const sendEmailForm = document.getElementById("sendEmail")

sendEmailForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const serviceID = "service_yobjepi";
  const templateID = "template_5gsql5o";

  /* emailjs.sendForm(serviceID, templateID, sendEmailForm).then(
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

  modal.click();
});