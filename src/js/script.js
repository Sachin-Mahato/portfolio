const sendBtn = document.querySelector(".send__btn");
// console.log(sendBtn);
// const { EmailJSResponseStatus } = require("@emailjs/browser");

function sendMail() {
  const serviceId = "service_w3bwktm";
  const templateId = "template_9bftnty";
  const params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").val = "";
      console.log(res);
      alert("message send successfully");
    })
    .catch((err) => console.log(err));
}

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sendMail();
});



//     <script type="text/javascript"
//         src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
// </script>
// <script type="text/javascript">
//    (function(){
//       emailjs.init({
//         publicKey: "NE-Gxp61XZHJcAwG9",
//       });
//    })();
// </script>