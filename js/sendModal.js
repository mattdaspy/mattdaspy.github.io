const modal = document.getElementById("closeModal")
const emailForm = document.getElementById("sendEmail")

emailForm.addEventListener("submit", (event) => {

  event.preventDefault()

  const serviceID = "service_yobjepi";
  const templateID = "template_5gsql5o";

  emailjs.sendForm(serviceID, templateID, sendEmailForm).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
        alert("Email sent, thank you for your contact!")
    }
    ,
    (error) => {
      console.log("FAILED...", error);
      alert("Email failed, please try again...", error);
    }
  )

  settimout(() => { modal.click(); }, 1000);
  
})