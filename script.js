document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.getElementById("emailButton");
  
    emailButton.addEventListener("click", function () {
      const emailAddress = "agnaldo.silva@timebrisa.com.br";
      const subject = "Dúvidas sobre os planos de internet";
      const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
      
      window.location.href = emailLink;
    });
  });
  