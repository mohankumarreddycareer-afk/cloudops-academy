
const awsSearch = document.getElementById("awsSearch");
const awsCards = document.querySelectorAll("#services .card");
const awsSearchMessage = document.getElementById("awsSearchMessage");

awsSearch.addEventListener("input", () => {
  const query = awsSearch.value.trim().toLowerCase();
  let count = 0;

  awsCards.forEach((card) => {
    const content =
      (card.innerText + " " + card.dataset.search).toLowerCase();
    const matches = content.includes(query);

    card.hidden = !matches;
    if (matches) count++;
  });

  if (!query) {
    awsSearchMessage.textContent = "";
  } else if (count === 0) {
    awsSearchMessage.textContent =
      "No matching AWS services. Try EC2, S3, IAM, VPC or RDS.";
  } else {
    awsSearchMessage.textContent = `${count} service(s) found.`;
  }
});
