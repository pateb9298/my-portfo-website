document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const blueScreen = document.getElementById("blue-screen");
  const mainContent = document.getElementById("main-content");
  const typingText = document.getElementById("typing-text");
  const flowerAnimation = document.getElementById("flower-animation");

  const messages = [
    // "Rendering personality.js...",
    "Starting bhakti's portfolio.exe ..."
  ];

  let msgIndex = 0;
  let charIndex = 0;

  function typeMessage() {
    if (!typingText || msgIndex >= messages.length) {
      startTransition();
      return;
    }

    const currentMsg = messages[msgIndex];

    if (charIndex < currentMsg.length) {
      typingText.textContent += currentMsg.charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, 40);
    } else {
      setTimeout(() => {
        typingText.textContent = '';
        charIndex = 0;
        msgIndex++;
        typeMessage();
      }, 500); 
    }
  }

  function startTransition() {
    preloader.style.transition = "opacity 0.7s ease";
    preloader.style.opacity = 0;

    blueScreen.classList.add("active");

    setTimeout(() => {
      blueScreen.style.transition = "opacity 1s ease";
      blueScreen.style.opacity = 0;

      mainContent.style.display = "block";
      mainContent.classList.add("active");

      setTimeout(() => {
        preloader.style.display = "none";
        blueScreen.style.display = "none";
      }, 1000);
    }, 600);
  }

  typeMessage();

  setTimeout(() => {
    if (flowerAnimation) {
      flowerAnimation.pause();
    }
  }, 3500);
});

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "star",
        stroke: { width: 0, color: "#000000" }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});




const blobPaths = [
  "M0 430L21.5 421C43 412 86 394 128.8 394.7C171.7 395.3 214.3 414.7 257.2 425.7C300 436.7 343 439.3 385.8 442.3C428.7 445.3 471.3 448.7 514.2 442.7C557 436.7 600 421.3 642.8 418.5C685.7 415.7 728.3 425.3 771.2 442.3C814 459.3 857 483.7 878.5 495.8L900 508L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z",

  "M0 386L21.5 387.2C43 388.3 86 390.7 128.8 406.7C171.7 422.7 214.3 452.3 257.2 463.5C300 474.7 343 467.3 385.8 453.3C428.7 439.3 471.3 418.7 514.2 424.8C557 431 600 464 642.8 476.2C685.7 488.3 728.3 479.7 771.2 472C814 464.3 857 457.7 878.5 454.3L900 451L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z",

  "M0 495L21.5 481.8C43 468.7 86 442.3 128.8 438C171.7 433.7 214.3 451.3 257.2 449C300 446.7 343 424.3 385.8 412.8C428.7 401.3 471.3 400.7 514.2 419.7C557 438.7 600 477.3 642.8 480.8C685.7 484.3 728.3 452.7 771.2 430.2C814 407.7 857 394.3 878.5 387.7L900 381L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z",
  "M0 515L21.5 501.5C43 488 86 461 128.8 453.8C171.7 446.7 214.3 459.3 257.2 472C300 484.7 343 497.3 385.8 499.5C428.7 501.7 471.3 493.3 514.2 473.5C557 453.7 600 422.3 642.8 424C685.7 425.7 728.3 460.3 771.2 475.8C814 491.3 857 487.7 878.5 485.8L900 484L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
];

const svg = document.querySelector(".blob-svg path");
let index = 0;
const duration = 4000; // ms

function animateBlob() {
  const nextIndex = (index + 1) % blobPaths.length;
  const interpolator = flubber.interpolate(blobPaths[index], blobPaths[nextIndex], { maxSegmentLength: 2 });

  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const t = Math.min(elapsed / duration, 1);

    svg.setAttribute("d", interpolator(t));

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      index = nextIndex;
      animateBlob();
    }
  }

  requestAnimationFrame(step);
}

animateBlob();



window.addEventListener("load", () => {
    const typedPara = document.getElementById("typed-para");

    if (!typedPara) return; 

    const text = "Software Engineering";
    let i = 0;

    function type() {
      if (i === 0) typedPara.textContent = "";
      if (i < text.length) {
        typedPara.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }

    type();
  });


  const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});


const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(() => {
    form.reset(); // Clear the form
    successMessage.style.display = "block"; // Show thank you message
  })
  .catch((error) => {
    alert("Oops! Something went wrong. Please try again later.");
    console.error(error);
  });
});
