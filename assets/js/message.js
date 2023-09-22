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
  


