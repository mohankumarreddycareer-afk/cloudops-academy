
const searchInput = document.getElementById("courseSearch");
const cards = document.querySelectorAll(".card");
const searchMessage = document.getElementById("searchMessage");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const content =
      (card.innerText + " " + card.dataset.search).toLowerCase();

    const matches = content.includes(query);
    card.hidden = !matches;

    if (matches) visibleCount++;
  });

  if (query === "") {
    searchMessage.textContent = "";
  } else if (visibleCount === 0) {
    searchMessage.textContent =
      "No matching topics found. Try AWS, Docker, Git or Terraform.";
  } else {
    searchMessage.textContent =
      `${visibleCount} learning section(s) found.`;
  }
});
