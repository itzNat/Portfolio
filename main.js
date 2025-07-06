// Dark mode toggle
const toggle = document.getElementById("toggle");
const toggleMobile = document.getElementById("toggle-mobile");
const html = document.querySelector("html");

// Check for saved user preference, if any
if (localStorage.getItem("darkMode") === "true") {
  html.classList.add("dark");
  if (toggle) toggle.checked = true;
  if (toggleMobile) toggleMobile.checked = true;
}

if (toggle) {
  toggle.addEventListener("change", function () {
    if (this.checked) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  });
}

if (toggleMobile) {
  toggleMobile.addEventListener("change", function () {
    if (this.checked) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      if (toggle) toggle.checked = true;
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      if (toggle) toggle.checked = false;
    }
  });
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}

// Floating cursor effect
const cursor = document.getElementById("cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.querySelectorAll("a, button, input, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
    });
  });
}

// Particles effect
function createParticles() {
  const particlesContainer = document.createElement("div");
  particlesContainer.id = "particles-js";
  particlesContainer.style.position = "fixed";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none";
  particlesContainer.style.zIndex = "-1";
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size between 2px and 6px
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration and delay
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Animate elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".fadeIn"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    } else {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
    }
  });
};

// Set initial state for animation
document
  .querySelectorAll(
    ".fadeIn"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Typewriter effect restart on hover
const typewriter = document.querySelector(".typewriter");
if (typewriter) {
  typewriter.addEventListener("mouseenter", () => {
    typewriter.style.animation = "none";
    void typewriter.offsetWidth;
    typewriter.style.animation =
      "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite";
  });
}

const sendBtn = document.getElementById("sendBtn");
const whatsappForm = document.getElementById("whatsappForm");
sendBtn.addEventListener('submit', e=>{
  e.preventDefault();

  const phoneNumber = "2349086117194";
  const firstName = whatsappForm.value;
  const lastName = whatsappForm.value;
  const email = whatsappForm.value;
  const subject = whatsappForm.value;
  const message = whatsappForm.value;

  const fullMessage = `New Contact Form Submission:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

  event.target.reset();

  alert(
    "Thank you! Your message has been sent. You'll be redirected to WhatsApp."
  );
})
