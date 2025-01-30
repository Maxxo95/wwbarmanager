
// Path to your CSV file
const csvFilePath = "modified_cocktail_recipes.csv"; // Ensure this is correct
const recipeContainer = document.getElementById("content");

// Declare cocktailsMenu at a higher scope so it can be accessed globally
let cocktailsMenu = [];

// Fetch and parse CSV using PapaParse
fetch(csvFilePath)
  .then((response) => response.text()) // Get CSV as text
  .then((text) => {
    // Use PapaParse to parse the CSV text
    Papa.parse(text, {
      header: true, // Parse first row as column headers
      skipEmptyLines: true, // Skip empty lines in the CSV
      complete: function (results) {
        cocktailsMenu = results.data; // Assign the parsed data to the global variable
        console.log(cocktailsMenu); // Check the data structure loaded from CSV
        populateCocktails(cocktailsMenu); // Pass the parsed data to the function
      },
    });
  })
  .catch((error) => console.error("Error loading the CSV file:", error));

// Function to populate the cocktails list on the main page
function populateCocktails(cocktails) {
  // Clear the existing content before populating
  recipeContainer.innerHTML = "";

  // Loop through each row of data in the CSV (cocktails is the parsed data)
  for (let i = 0; i < cocktails.length; i++) {
    let cocktail = cocktails[i]; // Each cocktail object

    // Access the first column (cocktail name or first value in the row)
    let cocktailName = Object.values(cocktail)[0]; // Access the first value in the object

    // Create the HTML content dynamically
    let html = `
      <div class="cocktails" id='${i}'>
        <div class='drinkConta'>       
          <a href="drinks.html?listcocktails=${i}" target="_blank">${cocktailName}</a>
        </div>
        <div class="drinkImg">
          <img class="logo" src="images/${cocktailName}.jpg" alt="logo">
        </div>
      </div>
    `;

    // Add the generated HTML to the container
    recipeContainer.innerHTML += html;
  }
}

// Function to filter cocktails based on the search query
function filterCocktails(query) {
  // Filter the cocktails based on the query (case-insensitive)
  const filteredCocktails = cocktailsMenu
    .map((cocktail, index) => ({ ...cocktail, originalIndex: index })) // Add original index
    .filter((cocktail) => {
      const cocktailName = Object.values(cocktail)[0]; // Get cocktail name
      return cocktailName.toLowerCase().includes(query.toLowerCase());
    });

  // Clear the existing content before populating with filtered results
  recipeContainer.innerHTML = "";

  // Populate the filtered results
  for (const cocktail of filteredCocktails) {
    const cocktailName = Object.values(cocktail)[0]; // Cocktail name
    const originalIndex = cocktail.originalIndex; // Get the original index

    // Create the HTML content dynamically
    let html = `
      <div class="cocktails" id='${originalIndex}'>
        <div class='drinkConta'>       
          <a href="drinks.html?listcocktails=${originalIndex}" target="_blank">${cocktailName}</a>
        </div>
        <div class="drinkImg">
          <img class="logo" src="images/${cocktailName}.jpg" alt="logo">
        </div>
      </div>
    `;

    // Add the generated HTML to the container
    recipeContainer.innerHTML += html;
  }
}

// Event listener for the search bar (on input)
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (event) => {
  const query = event.target.value; // Get the user's input
  filterCocktails(query); // Filter and update the cocktails list
});

// Event listener for the search button
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const query = document.getElementById("searchBar").value; // Get the user's input
  filterCocktails(query); // Filter and update the cocktails list
});

/// Menu 
const dropdowns = document.querySelectorAll('.dropdown');
/*ARROW FUNCTION IN CASE OF MORE DROPDOWN MENUS*/
dropdowns.forEach((dropdown) => {
    const cover = dropdown.querySelector('.cover');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = menu.querySelectorAll('.option');
    /*withn this function another function to evenlisent click in the cover section*/
    cover.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');  /*IF CLICK IT WILL TOGGLE WITH THE PREVIOUS CSS CREATED TWO OPTION OPEN OR CLOSE HIDDE/ ENN*/
        menu.classList.toggle('menu-open');   /*same diferent version of menu open and close*/
    });
    /*HERE THE VARIABLES CARE & MENU HAVE TWO STATES ON & OFF WE COULD SAY BUT WE NEED TO MANAGE THEM*/
    /*function basing on menu full content versions, */
    /*for each option function, */
    options.forEach((option) => {
        option.addEventListener('click', () => {
            caret.classList.remove('caret-rotate'); /*if click removes this option from the html caret variable and lets caret */
            menu.classList.remove('menu-open'); /*removes menu with click */

            options.forEach((option) => { /*finally will loop on the clicks removing and adding */
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


/*pop up function of support button*/
function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}


function togglePopup1() {
    var popup = document.getElementById("loginpop");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the provided credentials match the expected values
    if (username === "username" && password === "password") {
        alert("Login successful!");

    } else {
        alert("Invalid credentials");
    }
});


