
const posters = [
  {
    image: 'Container (10).png',
    title: "Qaitadan",
    description: `When destiny shatters the balance of life, only unity can restore hope.
      With courage, sacrifice, and the strength of their bonds, the heroes of
      Qaitadan must rise once again to confront the darkness threatening their world.`,
  },
  {
    image: 'looper.png',
    title: "Looper",
    description: `In the near future, where time travel has become possible, a corporation removes unwanted people by sending them into the past.`,
  },
  {
    image: 'алып қаш.png',
    title: "Қолыңнан келсе алып қаш",
    description: `One day, a fortune teller receives a sign about Samal's future husband: if she doesn't find "the one" and marry him soon, an unhappy life awaits her.`,
  },
  {
    image: 'ghost train.png',
    title: "Ghost Train",
    description: `To gain views, an unpopular YouTuber explores urban legends about the subway and decides to make a video about a ghost train.`,
  }
];

let currentPoster = 0;
const changeInterval = 3000; // 3 seconds

// DOM elements
const titleElem = document.getElementById('poster-title');
const descElem = document.getElementById('poster-description');
const posterSection = document.getElementById('poster');
const dots = document.querySelectorAll('#dots .dot');

// Helper fade functions
function fadeOut(elem, duration = 500) {
  elem.style.transition = `opacity ${duration}ms`;
  elem.style.opacity = 0;
}

function fadeIn(elem, duration = 500) {
  elem.style.transition = `opacity ${duration}ms`;
  elem.style.opacity = 1;
}

// ✅ Change poster (text + image)
function showPoster(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  // Fade out elements
  fadeOut(titleElem);
  fadeOut(descElem);
  fadeOut(posterSection); // ✅ fade out background too

  setTimeout(() => {
    // ✅ Update text
    titleElem.textContent = posters[index].title;
    descElem.textContent = posters[index].description;

    // ✅ Update background image
    posterSection.style.backgroundImage = `url('${posters[index].image}')`;

    // Fade back in
    fadeIn(titleElem);
    fadeIn(descElem);
    fadeIn(posterSection);
  }, 500);
}

// Auto-animate
function startPosterAnimation() {
  setInterval(() => {
    currentPoster = (currentPoster + 1) % posters.length;
    showPoster(currentPoster);
  }, changeInterval);
}

// Initialize
function initPosterAnimation() {
  titleElem.style.opacity = 1;
  descElem.style.opacity = 1;

  // ✅ Set initial background
  posterSection.style.backgroundImage = `url('${posters[0].image}')`;

  // Optional: allow dot clicking
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentPoster = i;
      showPoster(i);
    });
  });

  startPosterAnimation();
}

document.addEventListener('DOMContentLoaded', initPosterAnimation);

