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

// DYNAMIC TESTIMONIALS

const testimonialContainer = document.getElementById("testimonialContainer");

if (testimonialContainer) {
  const testimonials = [
    {
      image: "image/coupleA.jpg",
      text: "They didn’t just take photos — they captured our story perfectly.",
      author: "Sarah & John",
    },

    {
      image: "image/coupleB.jpg",
      text: "Every picture feels alive. We relive our wedding day every time we look at them.",
      author: "Amanda & Chris",
    },

    {
      image: "image/coupleD.jpg",
      text: "Professional, creative, and unforgettable.",
      author: "Lisa & Mark",
    },
  ];

  testimonials.forEach((testimonial) => {
    testimonialContainer.innerHTML += `
      <div class="testimonial-box" data-aos="zoom-in">
        <img src="${testimonial.image}" alt="Client Testimonial">

        <div>
          <p>"${testimonial.text}"</p>
          <strong>- ${testimonial.author}</strong>
        </div>
      </div>
    `;
  });
}

// DYNAMIC ENGAGEMENT GALLERY

const engagementGallery = document.getElementById("engagementGallery");

if (engagementGallery) {
  const engagementImages = [
    "image/eng1.jpg",
    "image/eng2.jpg",
    "image/eng3.jpg",
  ];

  engagementImages.forEach((image) => {
    engagementGallery.innerHTML += `
      <div class="portfolio-card" data-aos="zoom-in">
        <img src="${image}" alt="Engagement Session">
      </div>
    `;
  });
}

// DYNAMIC BRIDAL GALLERY

const bridalGallery = document.getElementById("bridalGallery");

if (bridalGallery) {
  const bridalImages = [
    "image/bridal1.jpg",
    "image/bridal2.jpg",
    "image/bridal3.jpg",
    "image/bridal4.jpg",
  ];

  bridalImages.forEach((image) => {
    bridalGallery.innerHTML += `
      <div class="portfolio-card" data-aos="zoom-in">
        <img src="${image}" alt="Bridal Session">
      </div>
    `;
  });
}

// DYNAMIC PROPOSAL GALLERY

const proposalGallery = document.getElementById("proposalGallery");

if (proposalGallery) {
  const proposalImages = [
    "image/proposal/proposal1.jpg",
    "image/proposal/proposal2.jpg",
    "image/proposal/proposal3.jpg",
    "image/proposal/proposal4.jpg",
    "image/proposal/proposal5.jpg",
    "image/proposal/proposal6.jpg",
  ];

  proposalImages.forEach((image) => {
    proposalGallery.innerHTML += `
      <div class="portfolio-card" data-aos="zoom-in">
        <img src="${image}" alt="Proposal Photography">
      </div>
    `;
  });
}

// PORTFOLIO SEARCH

const portfolioSearch = document.getElementById("portfolioSearch");

if (portfolioSearch) {
  portfolioSearch.addEventListener("keyup", () => {
    const value = portfolioSearch.value.toLowerCase();

    const sections = ["engagement", "wedding", "bridal", "proposal"];

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (id.includes(value) || value === "") {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
}
