// function sendMail(){
//     var param = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         subject: document.getElementById("subject").value,
//     };

//     const serviceID = "service_u5tgmhq";
//     const templateID = "template_l1z4t6g";

//     emailjs
//         .send(serviceID, templateID, param)
//         .then((resp) =>{
//                 document.getElementById("name").value = "";
//                 document.getElementById("email").value = "";
//                 document.getElementById("message").value = "";
//                 document.getElementById("subject").value= "";

//                 console.log(resp);
//                 alert("your message sent successfully");
                
//             })
//         .catch((erro)=>{
//             console.log(erro);
            
//         })
// }



//   ----------------------- Try ---------------------------

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
  
    const serviceID = "service_u5tgmhq";
    const templateID = "template_l1z4t6g";
  
    const successMessage = "Your message was sent successfully.";
    const errorMessage = "Message not sent. Kindly send us an email.";
    const missingEmailMessage = "Add email";
    const missingNameMessage = "Add Name";
  
    const messageContainer = document.getElementById("message-container");
  
    if (!email) {
      // Email is missing, display the missing email message with light coral background
      messageContainer.textContent = missingEmailMessage;
      messageContainer.style.backgroundColor = "lightcoral";
      messageContainer.style.textAlign = "center"; // Center-align the text
      return; // Don't proceed with sending the message
    }

    if (!name) {
        // Email is missing, display the missing email message with light coral background
        messageContainer.textContent = missingNameMessage;
        messageContainer.style.backgroundColor = "lightcoral";
        messageContainer.style.textAlign = "center"; // Center-align the text
        return; // Don't proceed with sending the message
      }
  
    var param = {
      name: name,
      email: email,
      message: message,
      subject: subject,
    };
  
    emailjs
      .send(serviceID, templateID, param)
      .then((resp) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
  
        console.log(resp);
  
        messageContainer.textContent = successMessage;
        messageContainer.style.backgroundColor = "skyblue";
        messageContainer.style.textAlign = "center"; // Center-align the text
      })
      .catch((error) => {
        console.log(error);
  
        messageContainer.textContent = errorMessage;
        messageContainer.style.backgroundColor = "lightcoral";
        messageContainer.style.textAlign = "center"; // Center-align the text
      });
  }
  


// (function () {
//     "use strict";
  
//     let forms = document.querySelectorAll('.php-email-form');
  
//     forms.forEach(function (e) {
//       e.addEventListener('submit', function (event) {
//         event.preventDefault();
  
//         let thisForm = this;
//         let action = thisForm.getAttribute('action');
//         let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
  
//         if (!action) {
//           displayError(thisForm, 'The form action property is not set!');
//           return;
//         }
  
//         thisForm.querySelector('.loading').classList.add('d-block');
//         thisForm.querySelector('.error-message').classList.remove('d-block');
//         thisForm.querySelector('.sent-message').classList.remove('d-block');
  
//         let formData = new FormData(thisForm);
  
//         if (recaptcha) {
//           if (typeof grecaptcha !== "undefined") {
//             grecaptcha.ready(function () {
//               try {
//                 grecaptcha.execute(recaptcha, { action: 'php_email_form_submit' })
//                   .then(token => {
//                     formData.set('recaptcha-response', token);
//                     sendMail(thisForm, formData); // Use sendMail function
//                   })
//               } catch (error) {
//                 displayError(thisForm, error);
//               }
//             });
//           } else {
//             displayError(thisForm, 'The reCaptcha JavaScript API URL is not loaded!')
//           }
//         } else {
//           sendMail(thisForm, formData); // Use sendMail function
//         }
//       });
//     });
  
//     // Use the sendMail function for email sending
//     function sendMail(thisForm, formData) {
//       // Your email sending code here
//       // ...
      
  
//       // Example code using Emailjs (replace with your email sending logic)
//       var param = {
//         name: formData.get("name"),
//         email: formData.get("email"),
//         message: formData.get("message"),
//         subject: formData.get("subject"),
//       };
  
//       const serviceID = "service_u5tgmhq";
//       const templateID = "template_l1z4t6g";
  
//       emailjs
//         .send(serviceID, templateID, param)
//         .then((resp) => {
//           thisForm.querySelector('.loading').classList.remove('d-block');
//           thisForm.querySelector('.sent-message').classList.add('d-block');
//           thisForm.reset();
//           console.log(resp);
//           alert("Your message sent successfully");
//         })
//         .catch((error) => {
//           displayError(thisForm, "Message Not successfully, Kindly send us an Email");
//           console.log(error);
//         });
//     }
  
//     function displayError(thisForm, error) {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       thisForm.querySelector('.error-message').innerHTML = error;
//       thisForm.querySelector('.error-message').classList.add('d-block');
//     }
  
//   })();
  

