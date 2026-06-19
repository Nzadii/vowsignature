const mapContainer = document.getElementById("map");

if (mapContainer) {
  const map = L.map("map").setView([-26.2041, 28.0473], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("Vow Signature Weddings - Johannesburg")
    .openPopup();
}

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();
    const terms = document.getElementById("terms").checked;

    if (name.length < 3) {
      alert("Please enter a valid full name.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (subject === "") {
      alert("Please select a subject.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters.");
      return;
    }

    if (!terms) {
      alert("Please agree to the terms.");
      return;
    }

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent = "Submitting...";

    setTimeout(() => {
      formMessage.textContent =
        "Thank you! Your enquiry has been submitted successfully.";

      contactForm.reset();
    }, 1500);
  });
}

// LIGHTBOX GALLERY

const galleryImages = document.querySelectorAll(
  ".gallery-img, .portfolio-card img"
);

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close-lightbox");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";

    lightboxImg.src = image.src;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

AOS.init({
  duration: 1000,
  once: true,
});
