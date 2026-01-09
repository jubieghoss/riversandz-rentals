document.addEventListener("DOMContentLoaded", () => {
  // Highlight current time of day
  const greeting = document.createElement("p");
  greeting.className = "greeting";

  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "🌅 Good morning, steward.";
  } else if (hour < 18) {
    greeting.textContent = "🌞 Good afternoon, steward.";
  } else {
    greeting.textContent = "🌙 Good evening, steward.";
  }

  const container = document.querySelector(".container");
  if (container) container.insertBefore(greeting, container.firstChild);

  // QR fallback: open domain on click
  const qr = document.querySelector(".qr");
  if (qr) {
    qr.style.cursor = "pointer";
    qr.addEventListener("click", () => {
      window.open("https://riversandz.co.za", "_blank");
    });
  }

  // Steward contact copy-to-clipboard
  const footer = document.querySelector("footer");
  if (footer) {
    footer.addEventListener("click", () => {
      navigator.clipboard.writeText("+27 71 178 1440");
      alert("📞 Steward contact copied to clipboard.");
    });
  }
});