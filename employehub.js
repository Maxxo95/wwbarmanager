// Example: Log a message to the console when a card is clicked
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    console.log(`You clicked on: ${card.querySelector('h2').textContent}`);
  });
});
