
const trendingContainer = document.getElementById("trending-container");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");
const dots = document.querySelectorAll(".dot");

let currentSet = 0;

const movieSets = [
  [
    { img: "долгая прогулка.png", time: "1h 51min", views: "15K" },
    { img: "әмеңгер.png", time: "1h 43min", views: "22K" },
    { img: "поезд призрак.png", time: "2h 05min", views: "19K" },
    { img: "аш.png", time: "1h 37min", views: "11K" },
    { img: "qaitadan.jpg", time: "2h 12min", views: "28K" },
  ],
  [
    { img: "болган окига.png", time: "1h 45min", views: "18K" },
    { img: "ЖАС ЕМЕС ЖУБАЙЛАР.png", time: "2h 10min", views: "25K" },
    { img: "синий кит.png", time: "1h 59min", views: "30K" },
    { img: "сорвать куш.png", time: "1h 42min", views: "13K" },
    { img: "супруги роуз.png", time: "2h 05min", views: "20K" },
  ],
  [
    { img: "тот самый.png", time: "1h 36min", views: "17K" },
    { img: "трон арес.png", time: "2h 03min", views: "27K" },
    { img: "ыстық ұя.png", time: "1h 50min", views: "15K" },
    { img: "красивое путешествие.png", time: "1h 45min", views: "21K" },
    { img: "жумбак.png", time: "2h 00min", views: "26K" },
  ],

  [
    { img: "битва за.png", time: "1h 36min", views: "17K" },
    { img: "джунглилау.png", time: "2h 03min", views: "27K" },
    { img: "жабайы.png", time: "1h 50min", views: "15K" },
    { img: "агент.png", time: "1h 45min", views: "21K" },
    { img: "13 reasons.png", time: "2h 00min", views: "26K" },
  ]
];

function updateMovies(index) {
  trendingContainer.classList.add("trending-fade-out");

  setTimeout(() => {
    trendingContainer.innerHTML = movieSets[index]
      .map(movie => `
        <div class="movie-card">
          <img src="${movie.img}" alt="Movie">
          <div class="icon-row">
            <div class="icon-box"><img src="Icon time.png" alt="Time"><span>${movie.time}</span></div>
            <div class="icon-box"><img src="Icon eye.png" alt="Views"><span>${movie.views}</span></div>
          </div>
        </div>
      `)
      .join("");

    trendingContainer.classList.remove("trending-fade-out");
    trendingContainer.classList.add("trending-fade-in");
  }, 600);
}


rightBtn.addEventListener("click", () => {
  currentSet = (currentSet + 1) % movieSets.length;
  updateMovies(currentSet);
  updateDots(currentSet); // ✅ Ensures dots update with arrow click
});

leftBtn.addEventListener("click", () => {
  currentSet = (currentSet - 1 + movieSets.length) % movieSets.length;
  updateMovies(currentSet);
  updateDots(currentSet); // ✅ Ensures dots update with arrow click
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSet = index;
    updateMovies(currentSet); // dots update inside updateMovies
  });
});

