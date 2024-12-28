document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;

  const updateCards = () => {
    cards.forEach((card, index) => {
      // Remove all classes first
      card.className = "card";
      
      // Calculate position relative to current index
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex + 1) % cards.length) {
        card.classList.add("next");
      } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      }
    });
  };

  // Initialize cards
  updateCards();

  // Auto rotation
  const autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
  }, 4000);

  // Click handlers for cards
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      currentIndex = index;
      updateCards();
    });
  });

  // Pause auto-rotation on hover
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      clearInterval(autoRotate);
    });
  });

  // Manual navigation with arrow keys
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCards();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCards();
    }
  });
});