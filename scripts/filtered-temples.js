// Footer Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "X" : "≡";
});

// ================= TEMPLE DISPLAY =================
const container = document.querySelector(".temple-grid");
function displayTemples(filteredTemples) {
  container.innerHTML = ""; // clear old content
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}
// Show all temples at first
displayTemples(temples);

// ================= FILTERING =================
const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // stop page reload
    const filter = event.target.textContent; // Home, Old, New, Large, Small

    let filtered = temples;

    if (filter === "Old") {
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
      });
    }
    else if (filter === "New") {
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
      });
    }
    else if (filter === "Large") {
      filtered = temples.filter(t => t.area > 90000);
    }
    else if (filter === "Small") {
      filtered = temples.filter(t => t.area < 10000);
    }
    // Home = all temples, so no filtering

    displayTemples(filtered);
  });
});
