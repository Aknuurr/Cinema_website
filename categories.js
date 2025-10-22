const categoriesContainer = document.querySelector(".categories-container");
const rightBtn = document.querySelectorAll(".arrow-btn")[1];
const leftBtn = document.querySelectorAll(".arrow-btn")[0];
const dots = document.querySelectorAll(".dot");

let currentSet = 0;

const categorySets = [
  // 🔹 First set
  [
    { title: "Action", images: ["1st photo category.png", "2nd photo category.png", "3rd photo category.png", "4th photo category.png"] },
    { title: "Adventure", images: ["5th photo category.png", "6th photo category.png", "7th photo category.png", "8th photo category.png"] },
    { title: "Comedy", images: ["9th photo category.png", "10th photo category.png", "11th photo container.png", "12th photo container.png"] },
    { title: "Drama", images: ["13th photo category.png", "14th photo category.png", "15th photo category.png", "16th photo.png"] },
    { title: "Horror", images: ["17th.png", "18th.png", "19th.png", "20th.png"] },
  ],
  // 🔹 Second set
  [
    { title: "Romance", images: ["21st.png", "22nd.png", "23rd.png", "24th.png"] },
    { title: "Thriller", images: ["25th.png", "26th.png", "27th.png", "28th.png"] },
    { title: "Fantasy", images: ["29th.png", "30th.png", "31st.png", "32nd.png"] },
    { title: "Sci-Fi", images: ["33rd.png", "34th.png", "35th.png", "36th.png"] },
    { title: "Documentary", images: ["37th.png", "38th.png", "39th.png", "40th.png"] },
  ],
  // 🔹 Third set
  [
    { title: "Crime", images: ["41st.png", "42nd.png", "43rd.png", "44th.png"] },
    { title: "Mystery", images: ["45th.png", "46th.png", "47th.png", "48th.png"] },
    { title: "Animation", images: ["49th.png", "50th.png", "51st.png", "52nd.png"] },
    { title: "Family", images: ["53rd.png", "54th.png", "55th.png", "56th.png"] },
    { title: "History", images: ["57th.png", "58th.png", "59th.png", "60th.png"] },
  ]
];

// 🔸 Function to render categories
function renderCategories(index) {
  categoriesContainer.style.opacity = 0;

  setTimeout(() => {
    categoriesContainer.innerHTML = "";

    categorySets[index].forEach((category) => {
      const card = document.createElement("div");
      card.classList.add("category-card");

      const cardImages = document.createElement("div");
      cardImages.classList.add("card-images");

      category.images.forEach((img) => {
        const imageElement = document.createElement("img");
        imageElement.src = img;
        imageElement.alt = category.title;
        cardImages.appendChild(imageElement);
      });

      const cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer");
      cardFooter.innerHTML = `<h3>${category.title}</h3><span class="arrow">&#8594;</span>`;

      card.appendChild(cardImages);
      card.appendChild(cardFooter);

      categoriesContainer.appendChild(card);
    });

    updateDots();
    categoriesContainer.style.opacity = 1;
  }, 400);
}

// 🔸 Function to update active dot
function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSet);
  });
}

// 🔸 Right button click
rightBtn.addEventListener("click", () => {
  currentSet = (currentSet + 1) % categorySets.length;
  renderCategories(currentSet);
});

// 🔸 Left button click
leftBtn.addEventListener("click", () => {
  currentSet = (currentSet - 1 + categorySets.length) % categorySets.length;
  renderCategories(currentSet);
});

// 🔸 Initialize
renderCategories(currentSet);
