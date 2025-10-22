const trendingMovies = [
  {
    img: "долгая прогулка.png",
    time: "1h 51min",
    views: "15K",
    alt: "Movie 1"
  },
  {
    img: "әмеңгер.png",
    time: "1h 51min",
    views: "15K",
    alt: "Movie 2"
  },
  {
    img: "поезд призрак.png",
    time: "1h 51min",
    views: "15K",
    alt: "Movie 3"
  },
  {
    img: "аш.png",
    time: "2h 20min",
    views: "3K",
    alt: "Movie 4"
  },
  {
    img: "кайтадан.png",
    time: "1h 42min",
    views: "9K",
    alt: "Movie 5"
  },
  {
    img: "ЖАС ЕМЕС ЖУАЙЛАР.png",
    time: "1h 42min",
    views: "9K",
    alt: "Movie 5"
  },
  {
    img: "болган окига.png",
    time: "1h 42min",
    views: "9K",
    alt: "Movie 5"
  },
  // Add more movies if you want a longer slider
];

// Handle how many cards are visible at once
const visibleCards = 4;
let currentStart = 0;

function renderTrendingMovies() {
  const container = document.querySelector(".trending-container");
  container.innerHTML = "";

  const moviesToShow = trendingMovies.slice(currentStart, currentStart + visibleCards);

  moviesToShow.forEach(movie => {
    container.innerHTML += `
      <div class="movie-card animate-slide">
        <img src="${movie.img}" alt="${movie.alt}">
        <div class="icon-row">
          <div class="icon-box"><img src="Icon time.png" alt="Time"><span>${movie.time}</span></div>
          <div class="icon-box"><img src="Icon eye.png" alt="Views"><span>${movie.views}</span></div>
        </div>
      </div>
    `;
  });

  updateDots();
}

function updateDots() {
  const dotsContainer = document.querySelector(".dots");
  const totalSlides = Math.ceil(trendingMovies.length / visibleCards);

  dotsContainer.innerHTML = "";
  for(let i=0; i<totalSlides; i++) {
    dotsContainer.innerHTML += `<div class="dot${i === Math.floor(currentStart/visibleCards) ? " active" : ""}"></div>`;
  }
}

function slideTrending(direction) {
  const totalSlides = Math.ceil(trendingMovies.length / visibleCards);
  let newStart = currentStart + direction * visibleCards;
  if (newStart < 0) newStart = 0;
  if (newStart > trendingMovies.length - visibleCards)
    newStart = (totalSlides - 1) * visibleCards;
  
  if (newStart !== currentStart) {
    // Add animation class for sliding effect
    const container = document.querySelector(".trending-container");
    container.classList.remove("slide-in-right", "slide-in-left");
    void container.offsetWidth; // Force reflow

    container.classList.add(direction > 0 ? "slide-in-right" : "slide-in-left");
    setTimeout(() => {
      currentStart = newStart;
      renderTrendingMovies();
      container.classList.remove("slide-in-right", "slide-in-left");
    }, 300); // Match with CSS animation duration
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTrendingMovies();

  document.querySelectorAll(".arrow-btn")[1].onclick = () => slideTrending(1);
  document.querySelectorAll(".arrow-btn")[0].onclick = () => slideTrending(-1);
});