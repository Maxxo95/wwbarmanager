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

  
    const videoBasePath = "/";

    // Build the video file names dynamically
    const glassVideo = `${videoBasePath}${cocktail["GlassType"]}.mp4`;
    const iceVideo = `${videoBasePath}${cocktail["Ice"]}.mp4`;
    const garnishVideo = `${videoBasePath}${cocktail["Garnish"]}.mp4`;
    const techniqueVideo = `${videoBasePath}${cocktail["CocktailName"]}.mp4`;

    // Constructing the HTML dynamically
    const drinkHTML = `
        <div class="cocktail-container">
            <!-- Cocktail Name -->
            <h1 class="cocktail-title">${cocktail["CocktailName"]}</h1>

            <!-- Top Layout -->
            <div class="top-layout">
                <!-- Image Section -->
                <div class="image-section">
                     <img class="logo" src="images/${cocktail["CocktailName"]}.jpg" alt="${cocktail["CocktailName"]}">
                </div>

                <!-- Details Section -->
                <div class="details-section">
                    <div class="ingredients-section">
                        <h2>Ingredients</h2>
                        <ul>${ingredientsList}</ul>
                    </div>
                    <div class="extra-details">
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

            <!-- Bottom Layout -->
            <div class="bottom-layout">
                <h2>Preparation Instructions</h2>
                <div class="video-section">
                    <div class="video-container">
                        <h3>Glass</h3>
                        <video controls>
                            <source src="video/${glassVideo}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="video-container">
                        <h3>Ice Type</h3>
                        <video controls>
                            <source src="video/${iceVideo}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="video-container">
                        <h3>Technique</h3>
                        <video controls>
                             <source src="video/${techniqueVideo}" type="video/mp4">
                           
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="video-container">
                        <h3>Garnish</h3>
                        <video controls>
                             <source src="video/${garnishVideo}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Append the rendered cocktail to the container
    drinksContainer.innerHTML = drinkHTML;
}
