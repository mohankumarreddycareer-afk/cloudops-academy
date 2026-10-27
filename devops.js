
const toolSearch = document.getElementById("toolSearch");
const toolCards = document.querySelectorAll("#tools .card");
const toolSearchMessage = document.getElementById("toolSearchMessage");

toolSearch.addEventListener("input", () => {
  const query = toolSearch.value.trim().toLowerCase();
  let count = 0;

  toolCards.forEach((card) => {
    const content =
      (card.innerText + " " + card.dataset.search).toLowerCase();
    const matches = content.includes(query);

    card.hidden = !matches;
    if (matches) count++;
  });

  if (!query) {
    toolSearchMessage.textContent = "";
  } else if (count === 0) {
    toolSearchMessage.textContent =
      "No matching tools found. Try Git, Docker, Terraform or PowerShell.";
  } else {
    toolSearchMessage.textContent = `${count} tool(s) found.`;
  }
});
