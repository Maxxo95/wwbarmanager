
let cocktailsMenu = [
    {
        name: 'Pornstar Martini',
        description: 'Absolut Vanilla vodka shaken  with Passoa passion fruit liqueur, pineapple juice, a dash of lime and passionfruit puree. Garnished with passionfruit and accompanied with a shot of chilled prosecco.',
        ingredients: [
            ["limejuice", 12.5],
            ["vanillavodka", 35.5],
            ["passoa", 20],
            ["pinejuice", 70],
            ["passionpure", 25],
            ["vanillasyr", 3]
        ],
        glass: 'Coupe',
        method: ['shake ' + " & " + ' doublestrain'],
        garnish: ['prossecoshot on the side & -1/2 passionfruit '],
        ice: 'use to chill glass',
        image: "pornstar.jpg",
        glassi: "coupe.jpg",
        methodi: "shakedouble.jpg"

    },
    {
        name: 'Raspberry Tom Collins',
        description: 'Drumshanbo Gunpowder Irish Gin served long over crushed ice with fresh raspberries, raspberry puree,lemon juice, sugar to balance and topped with Thomas Henry soda.',
        ingredients: [
            ["lemonjuice", 20],
            ["gunpowder", 50],
            ["rasppure", 20],
            ["sugarsyr", 12.5],
            ["soda", "top up"]

        ],
        glass: 'Collins',
        method: ['shake ' + " & " + ' strain'],
        garnish: ['Raspberry & Mintsprig with crushed ice on top'],
        ice: 'cubed',
        image: "collins.jpg",
        glassi: "collinsg.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Passion Punch',
        description: 'Black Tears Cuban spiced rum shaken with passionfruit puree, lime, pineapple and bitters. Served long and topped with Thomas Henry Pink Grapefruit soda. Garnished with pineapple leaf and passionfruit.',
        ingredients: [
            ["limejuice", 25],
            ["blacktears", 50],
            ["passionpure", 25],
            ["sugarsyr", 12.5],
            ["pinejuice", 50],
            ["angostura", "dash"],
            ["grapesoda", "top up"]

        ],
        glass: 'tiki',
        method: ['shake', 'strain'],
        garnish: ['Grapefruit slice & Mintsprig with crushed ice on top'],
        ice: 'cubed',
        image: "passion.jpg",
        glassi: "tiki.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Oasis Delight',
        description: 'This great cocktail consists of Lime Vodka, Blue Curacao, Mango and passionfruit puree shaken over ice and topped with soda.,  ingredients',
        ingredients: [
            ["limejuice", 25],
            ["limevodka", 35.5],
            ["bluecuracao", 25],
            ["passionpure", 12.5],
            ["mangopure", 12.5],
            ["sugarsyr", 12.5],
            ["soda", "top up"]

        ],
        glass: 'gin',
        method: ['shake', 'strain'],
        garnish: ['Lime slice & Mintsprig with crushed ice on top'],
        ice: 'cubed',
        image: "oasis.jpg",
        glassi: "gin.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Magic Rose',
        description: 'Created by our very own bartender Bogdan, this classic pink woodfire cocktail consists of Absolut Vanilla Vodka & Tequila Rose, Grenadine and lemon juice. Shaken with coconut and served over ice.',
        ingredients: [
            ["lemonjuice", 20],
            ["vanillavodka", 35.5],
            ["tequilarose", 25],
            ["granadine", 20],
            ["coconutpure", 5],
            ["pinejuice", 69]

        ],
        glass: 'gin',
        method: ['shake', 'strain'],
        garnish: ['Strawberry & Mintsprig with crushed ice on top'],
        ice: 'cubed',
        image: "rose.jpg",
        glassi: "gin.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Espresso Martini',
        description: 'First created by world famous bartender Dick Bradsell at Freds Club in London in the 80�s. Vanilla vodka, freshly brewed espresso & coffee liqueur are shaken and strained into a chilled coupette and garnished with coffee beans. ',
        ingredients: [
            ["vanillavodka", 40],
            ["coffeliq", 25],
            ["espressoshot", 225],
            ["vanillasyr", 10]


        ],
        glass: 'coupe',
        method: ['shake', 'doubleStrain'],
        garnish: ['coffe beans'],
        ice: 'use to chill glass',
        image: "espresso.jpg",
        glassi: "coupe.jpg",
        methodi: "shakedouble.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Cosmopolitan',
        description: 'Immortalised by �Sex and the City� , this cocktail was created in the mid-80s by Cheryl Cook and designed to be �oh so pretty pink�. Absolut Citron Vodka, Triple Sec, lime and cranberry juices shaken and served straight up, garnished with orange oils and flavoured smoke.',
        ingredients: [
            ["limevodka", 35.5],
            ["contreau", 25],
            ["limejuice", 12.5],
            ["cranberryJuice", 70],
            ["granadine", 5]


        ],
        glass: 'coupe',
        method: ['shake', 'doubleStrain'],
        garnish: ['Orange peel'],
        ice: 'use to chill glass',
        image: "cosmo.jpg",
        glassi: "coupe.jpg",
        methodi: "shakedouble.jpg",
        methodi: "shakesingle.jpg"
    },
    {
        name: 'Cappuccino',
        description: 'A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top. Cream may be used instead of milk. It is typically smaller in volume than a latte',
        ingredients: [
            ["expressoshot", 225],
            ['milk', 250]

        ],
        glass: 'mug',
        method: ['Steam milk', '1/2milk, 1/2foam'],
        garnish: ['chocolate powder'],
        ice: 'none',
        image: "capu.jpg",
        glassi: "mug.jpg",
        methodi: "steam-milk.jpg"
    },
    {
        name: 'Latte',
        description: 'What is the description of hot latte? Made with steamed, frothy milk, blended with our rich, freshly ground and brewed espresso. Our Latte has a layer of foam and is the perfect balance of creamy and smooth to get you goin. Lattes use a ratio of at least 1 shot of espresso to 2 ounces of steamed milk ',
        ingredients: [
            ["expressoshot", 225],
            ['milk', 250]

        ],
        glass: 'latte mug',
        method: ['Steam milk', '3/4milk, 1/4foam'],
        garnish: ['latte art'],
        ice: 'none',
        image: "latte.jpg",
        glassi: "mug.jpg",
        methodi: "steam-milk.jpg"
    }

];
// Parse the query parameters from the URL
const params = new URLSearchParams(window.location.search);
const index = params.get('listcocktails');


{
function printMessage(i) {
  let drinkscont = document.getElementById('drinksinst');

  let ingredients = cocktailsMenu[i].ingredients;

  let ingredientsList = '';
  let inputsHTML = '';
  for (let j = 0; j < ingredients.length; j++) {
    let [ingredient, value] = ingredients[j];
    if (value >= 5) {
      ingredientsList += `<li>${ingredient} --  ${value} ml</li>`;
        const inputId = `input_${i}_${j}`;

      inputsHTML += ""
        const ingredientNumber = j + 1;
        const inputNameId = `input_name_${i}_${j}`;
        const inputMlId = `input_ml_${i}_${j}`;

        inputsHTML += `
        <label for="${inputNameId}">Ingredient ${ingredientNumber} Name:</label>
        <input type="text" id="${inputNameId}"><br>
        <label for="${inputMlId}">Ingredient ${ingredientNumber} ml:</label>
        <input type="text" id="${inputMlId}"><br>
      `;

    }
  }
  if (ingredientsList !== '') {
    ingredientsList = '<h2 class="titles">Ingredients</h2><ul>' + ingredientsList + '</ul>';
  }

  let drinkprep = `
    <div id="topStable2">
      <h1 id="drink-name" class="titles">${cocktailsMenu[i].name}</h1>
      <img class="drinkImg" src="${cocktailsMenu[i].image}" alt="${cocktailsMenu[i].name}">
    </div>
    <div id="introd2">
      ${inputsHTML}
      <button onclick="compareIngredients(${i})">Compare Ingredients</button>
    </div>
    </div>

   <div id="content-container">
  
      <div class="columndrink">
        <h3>Glass</h3>
      
        <p class="reveall">${cocktailsMenu[i].glass}</p>
              
      </div>
      <div class="columndrink">
        <h3>Preparing Method</h3>
        <p class="reveall">${cocktailsMenu[i].method}</p>
   
      </div>
      <div class="columndrink">
        <h3>Garnish</h3>
        <p class="reveall">${cocktailsMenu[i].garnish}</p>
     
      </div>
      <div class="columndrink">
        <h3>Type of Ice</h3>
        <p class="reveall" >${cocktailsMenu[i].ice}</p>
        

      </div>
        <button onclick="revealans()" id="revealbut">Reveal</button>
    </div>
  `;

  drinkscont.innerHTML += drinkprep;
}
    function compareIngredients(i) {
        let ingredients = cocktailsMenu[i].ingredients;
        let userIngredients = {};

        for (let j = 0; j < ingredients.length; j++) {
            let [ingredient, value] = ingredients[j];
            if (value >= 5) {
                const inputNameId = `input_name_${i}_${j}`;
                const inputMlId = `input_ml_${i}_${j}`;
                const ingredientName = document.getElementById(inputNameId).value.toLowerCase();
                const ingredientMl = document.getElementById(inputMlId).value;

                userIngredients[ingredient.toLowerCase()] = Number(ingredientMl);
            }
        }

        let ingredientsMatch = true;

        for (let j = 0; j < ingredients.length; j++) {
            let [ingredient, value] = ingredients[j];
            if (value >= 5) {
                if (userIngredients[ingredient.toLowerCase()] !== value) {
                    ingredientsMatch = false;
                    break;
                }
            }
        }

        if (ingredientsMatch) {
            alert("Ingredients match!");
        } else {
            alert("Ingredients do not match!");

            // Prompt for retry
            const retry = confirm("To try again reopen the tab!");
            if (retry) {
                // Clear input values
                for (let j = 0; j < ingredients.length; j++) {
                    let [ingredient, value] = ingredients[j];
                    if (value >= 5) {
                        const inputMlId = `input_ml_${i}_${j}`;
                        document.getElementById(inputMlId).value = "";
                    }
                }
            }
        }
    }

    function revealans() {
        var popup = document.querySelectorAll("#content-container .reveall");
        if (popup.length > 0) {
            popup.forEach((element) => {
                if (element.style.display === "none") {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            });
        }
    }

    // Check if the index is provided in the query parameters and call printMessage
    if (index !== null) {
        printMessage(parseInt(index));
    }

}