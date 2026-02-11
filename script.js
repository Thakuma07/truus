// GSAP Truus-style Card Hover Animation
const cards = gsap.utils.toArray(".card");

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((otherCard, otherIndex) => {
      if (otherIndex !== index) {
        // determine direction and intensity based on index difference
        const diff = otherIndex - index;
        const xMove = diff < 0 ? -120 - Math.abs(diff) * 30 : 120 + Math.abs(diff) * 30;
        const yMove = diff * 25 + (Math.random() - 0.5) * 30;
        const rotateMove = diff < 0 ? -8 - Math.random() * 8 : 8 + Math.random() * 8;

        gsap.to(otherCard, {
          x: xMove,
          y: yMove,
          rotation: rotateMove,
          scale: 0.9,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true
        });
      } else {
        gsap.to(otherCard, {
          scale: 1.05,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
          zIndex: 10
        });
      }
    });
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((c, i) => {
      const originalRotation = {
        0: 4,    // card-green
        1: -10,  // card-darkblue
        2: 5,    // card-orange
        3: -8,   // card-maroon
        4: 5     // card-pink
      };

      gsap.to(c, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: originalRotation[i] || 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true,
        zIndex: i + 1 // restore original z-index
      });
    });
  });
});
