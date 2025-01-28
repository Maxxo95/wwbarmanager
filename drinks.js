// Fetch the CSV file and parse it using PapaParse
fetch("modified_cocktail_recipes.csv")
    .then((response) => response.text())
    .then((data) => {
        Papa.parse(data, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const cocktails = results.data;
                const params = new URLSearchParams(window.location.search);
                const index = params.get("listcocktails");

                if (index !== null && cocktails[index]) {
                    renderCocktail(cocktails[index]);
                }
            },
        });
    });

// Render the cocktail information dynamically
function renderCocktail(cocktail) {
    const drinksContainer = document.getElementById("drinksinst");

    // Extract ingredients
    const ingredients = [];
    for (let i = 1; i <= 7; i++) {
        const ingredientKey = `Ingredient${i}`;
        if (cocktail[ingredientKey]) {
            ingredients.push(cocktail[ingredientKey]);
        }
    }

    const ingredientsList = ingredients
        .map((ingredient) => `<li>${ingredient}</li>`)
        .join("");

    // Generate the HTML layout for the cocktail
    const drinkHTML = `
        <div class="cocktail-container">
            <!-- Cocktail Name -->
            <h1 class="cocktail-title">${cocktail["CocktailName"]}</h1>

            <!-- Layout for ingredients and other details -->
            <div class="cocktail-layout">
                <!-- Ingredients Section -->
                <div class="ingredients-section">
                    <h2>Ingredients</h2>
                    <ul>${ingredientsList}</ul>
                </div>

                <!-- Other Details Section -->
                <div class="details-section">
                    <div class="detail-box">
                        <h3>Glass Type</h3>
                        <p>${cocktail["GlassType"]}</p>
                    </div>
                    <div class="detail-box">
                        <h3>Type of Ice</h3>
                        <p>${cocktail["Ice"]}</p>
                    </div>
                    <div class="detail-box">
                        <h3>Garnish</h3>
                        <p>${cocktail["Garnish"]}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the rendered cocktail to the container
    drinksContainer.innerHTML = drinkHTML;
}
