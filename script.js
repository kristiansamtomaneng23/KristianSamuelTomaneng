const portfolioEmail = "kristiansamtomaneng@gmail.com";

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!portfolioEmail) {
      formNote.textContent = "Please set your email address in script.js before using the contact form.";
      formNote.classList.add("form-note-warning");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    );

    window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
    formNote.textContent = "Your email app should open with the message ready to send.";
    formNote.classList.remove("form-note-warning");
  });
}

// Close the mobile navigation after a section link is selected.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav && nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});