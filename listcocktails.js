// Path to your CSV file
const csvFilePath = "modified_cocktail_recipes.csv";  // Ensure this is correct
const recipeContainer = document.getElementById('content');

// Fetch and parse CSV using PapaParse
fetch(csvFilePath)
  .then(response => response.text()) // Get CSV as text
  .then(text => {
    // Use PapaParse to parse the CSV text
    Papa.parse(text, {
      header: true,          // Parse first row as column headers
      skipEmptyLines: true,  // Skip empty lines in the CSV
      complete: function(results) {
        console.log(results.data); // Check the data structure loaded from CSV
        populateCocktails(results.data); // Pass the parsed data to the function
      }
    });
  })
  .catch(error => console.error("Error loading the CSV file:", error));

// Function to populate the cocktails list on the main page
function populateCocktails(cocktailsMenu) {
  // Loop through each row of data in the CSV (cocktailsMenu is the parsed data)
  for (let i = 0; i < cocktailsMenu.length; i++) {
    let cocktail = cocktailsMenu[i]; // Each cocktail object
    
    // Access the first column (cocktail name or first value in the row)
    let cocktailName = Object.values(cocktail)[0];  // Access the first value in the object
    
    // Create the HTML content dynamically
    let html = `
      <div class="cocktails" id='${i}'>
        <div class='drinkConta'>       
          <a href="drinks.html?listcocktails=${i}" target="_blank">${cocktailName}</a>
        
        </div>
          <div class="drinkImg"> <img class="logo" src="${cocktailName}.jpg" alt="logo">
          </div>
      </div>
    `;
    
    // Add the generated HTML to the container
    recipeContainer.innerHTML += html;
  }
}
