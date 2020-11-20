//selectors
const quote = document.getElementById("quote");
const author = document.getElementById("author");

//functions

//fetch quotes & update UI.. Probs should be two functions but oh well

export async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quote.innerText = data.content;
  author.innerText = data.author;
}
