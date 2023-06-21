const modal = document.getElementById("authentication-modal");
const closeModalButton = document.getElementById("closeModalButton");
const sendEmailForm = document.getElementById("sendEmail");

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

  closeModalButton.dispatchEvent(new Event("click", { bubbles: true }));

  // Add your email sending logic here

  closeModal();
});

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
}

closeModalButton.addEventListener("click", () => {
  const modalDataHide = closeModalButton.getAttribute("modal-data-hide");
  if (modalDataHide) {
    const targetModal = document.getElementById(modalDataHide);
    targetModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
});
