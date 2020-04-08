if (window.innerWidth > 600) {
  const modal = document.getElementsByClassName("email-modal")[0];
  const emailButton = document.getElementsByClassName("email-button")[0];
  const emailSpan = document.getElementsByClassName("email-span")[0];
  const footerEmailButton = document.getElementsByClassName("footer-email-button")[0];
  const email = "mulderink.mike@gmail.com"
  const el = document.createElement("textarea");

  emailButton.onclick = function () {
    modal.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  footerEmailButton.onclick = function () {
    modal.style.display = "block";
  };

  emailSpan.onclick = function () {
    document.body.appendChild(el);
    el.value = email;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied to Clipboard");
  };
};