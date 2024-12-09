// Function to toggle the navbar menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }
  
  // Select all existing cards in the document
  const cards = document.querySelectorAll(".card");
  
  // Add hover effects and click events
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent immediate navigation
  
      // Toggle description visibility
      const description = card.querySelector("p");
      if (description) {
        description.style.display =
          description.style.display === "none" ? "block" : "none";
      }
  
      // Create a styled validation message
      const link = card.getAttribute("href");
      if (link) {
        const message = document.createElement("div");
        message.id = "redirect-message";
        message.textContent = "Você será redirecionado para outra página...";
        document.body.appendChild(message);
  
        // Add styles to the message
        Object.assign(message.style, {
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px 40px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          fontSize: "1.5rem",
          borderRadius: "10px",
          textAlign: "center",
          zIndex: "1000",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
          animation: "fade-in 0.5s ease",
        });
  
        // Redirect after a short delay (5 seconds)
        setTimeout(() => {
          window.location.href = link;
        }, 5000); // 5-second delay
      }
    });
  });
  
  // Log card information in the console
  cards.forEach((card, index) => {
    const title = card.querySelector("h3")?.innerText || "No title";
    const description = card.querySelector("p")?.innerText || "No description";
    console.log(`Card ${index + 1} - Title: ${title}, Description: ${description}`);
  });
  
  // Add fade-in animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  