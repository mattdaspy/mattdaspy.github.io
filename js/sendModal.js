document
          .getElementById("sendEmail")
          .addEventListener("submit", function (event) {
            event.preventDefault();
  
            const serviceID = "service_yobjepi";
            const templateID = "template_5gsql5o";
  
            emailjs.sendForm(serviceID, templateID, this).then(
              (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent, thank you for your contact!");
                document.getElementById("authentication-modal").setAttribute('data-modal-hide', 'true');
              },
              (error) => {
                console.log("FAILED...", error);
                alert("Email failed, please try again...", error);
                document.getElementById("authentication-modal").setAttribute('data-modal-hide', 'true');
              }
            );

          });