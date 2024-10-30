//Data for Bakery Menu
const bakeryMenu = [
    {
        name: "Croissant",
        description: "Flaky, buttery pastry with golden layers.",
        ingredients: ["butter", "flour", "milk", "sugar", "yeast"],
        cost: "$3.50",
        calories: 250,
        image: "path/to/croissant.jpg"
    },
    {
        name: "Pain au Chocolat",
        description: "Classic pastry with rich chocolate filling.",
        ingredients: ["butter", "flour", "chocolate", "milk", "yeast"],
        cost: "$4.00",
        calories: 300,
        image: "path/to/pain-au-chocolat.jpg"
    },
    {
        name: "Baguette",
        description: "Crispy, golden crust with a soft interior.",
        ingredients: ["flour", "water", "yeast", "salt"],
        cost: "$2.50",
        calories: 180,
        image: "path/to/baguette.jpg"
    },
    {
        name: "Éclair",
        description: "Light choux pastry filled with vanilla cream.",
        ingredients: ["flour", "butter", "cream", "eggs", "sugar"],
        cost: "$4.50",
        calories: 260,
        image: "path/to/eclair.jpg"
    },
    {
        name: "Macarons",
        description: "Colorful almond cookies with ganache filling.",
        ingredients: ["almond flour", "sugar", "egg whites", "ganache"],
        cost: "$3.00",
        calories: 90,
        image: "path/to/macarons.jpg"
    },
    {
        name: "Tarte Tatin",
        description: "Caramelized apple tart with flaky pastry.",
        ingredients: ["apples", "sugar", "butter", "flour"],
        cost: "$5.00",
        calories: 320,
        image: "path/to/tarte-tatin.jpg"
    },
    {
        name: "Pain aux Raisins",
        description: "Sweet pastry with raisins and custard.",
        ingredients: ["butter", "flour", "raisins", "custard", "yeast"],
        cost: "$4.00",
        calories: 280,
        image: "path/to/pain-aux-raisins.jpg"
    },
    {
        name: "Mille-Feuille",
        description: "Layered puff pastry with cream filling.",
        ingredients: ["butter", "flour", "cream", "sugar"],
        cost: "$5.50",
        calories: 350,
        image: "path/to/mille-feuille.jpg"
    },
    {
        name: "Madeleine",
        description: "Soft, buttery shell-shaped sponge cake.",
        ingredients: ["butter", "flour", "sugar", "eggs", "lemon zest"],
        cost: "$2.00",
        calories: 90,
        image: "path/to/madeleine.jpg"
    },
    {
        name: "Canelé",
        description: "Caramelized crust with a custardy center.",
        ingredients: ["flour", "milk", "eggs", "sugar", "rum"],
        cost: "$3.00",
        calories: 130,
        image: "path/to/canele.jpg"
    },
    {
        name: "Financier",
        description: "Small almond cake with a hint of brown butter.",
        ingredients: ["almond flour", "butter", "sugar", "flour", "eggs"],
        cost: "$2.50",
        calories: 160,
        image: "path/to/financier.jpg"
    },
    {
        name: "Tarte au Citron",
        description: "Zesty lemon tart with a buttery crust.",
        ingredients: ["lemon", "butter", "sugar", "eggs", "flour"],
        cost: "$5.00",
        calories: 280,
        image: "path/to/tarte-au-citron.jpg"
    }
];

//Data for Beverage Menu
const beverageMenu = [
    {
        name: "Café au Lait",
        description: "Rich espresso with steamed milk.",
        ingredients: ["espresso", "steamed milk"],
        cost: "$4.00",
        calories: 120,
        image: "path/to/cafe-au-lait.jpg"
    },
    {
        name: "Espresso",
        description: "Bold and concentrated shot of coffee.",
        ingredients: ["espresso"],
        cost: "$3.00",
        calories: 5,
        image: "path/to/espresso.jpg"
    },
    {
        name: "Café Crème",
        description: "Espresso with creamy, frothy milk.",
        ingredients: ["espresso", "foamed milk"],
        cost: "$4.50",
        calories: 150,
        image: "path/to/cafe-creme.jpg"
    },
    {
        name: "Cappuccino",
        description: "Classic Italian coffee with foamed milk.",
        ingredients: ["espresso", "steamed milk", "foam"],
        cost: "$4.50",
        calories: 140,
        image: "path/to/cappuccino.jpg"
    },
    {
        name: "Latte",
        description: "Smooth espresso with steamed milk and light foam.",
        ingredients: ["espresso", "steamed milk", "foam"],
        cost: "$4.50",
        calories: 180,
        image: "path/to/latte.jpg"
    },
    {
        name: "Mocha",
        description: "Chocolatey coffee with steamed milk and whipped cream.",
        ingredients: ["espresso", "steamed milk", "chocolate", "whipped cream"],
        cost: "$5.00",
        calories: 250,
        image: "path/to/mocha.jpg"
    },
    {
        name: "Chocolat Chaud",
        description: "Rich, creamy French-style hot chocolate.",
        ingredients: ["dark chocolate", "milk", "cream", "sugar"],
        cost: "$4.50",
        calories: 300,
        image: "path/to/chocolat-chaud.jpg"
    },
    {
        name: "Thé à la Menthe",
        description: "Refreshing mint tea with a hint of sweetness.",
        ingredients: ["mint leaves", "hot water", "sugar"],
        cost: "$3.50",
        calories: 30,
        image: "path/to/the-a-la-menthe.jpg"
    },
    {
        name: "Thé Earl Grey",
        description: "Classic black tea with bergamot aroma.",
        ingredients: ["black tea", "bergamot"],
        cost: "$3.00",
        calories: 0,
        image: "path/to/the-earl-grey.jpg"
    },
    {
        name: "Thé Vert",
        description: "Delicate and soothing green tea.",
        ingredients: ["green tea leaves"],
        cost: "$3.00",
        calories: 0,
        image: "path/to/the-vert.jpg"
    },
    {
        name: "Iced Café au Lait",
        description: "Chilled espresso with cold milk.",
        ingredients: ["espresso", "cold milk", "ice"],
        cost: "$4.00",
        calories: 100,
        image: "path/to/iced-cafe-au-lait.jpg"
    },
    {
        name: "Iced Mocha",
        description: "Iced coffee with chocolate and whipped cream.",
        ingredients: ["espresso", "chocolate", "milk", "whipped cream", "ice"],
        cost: "$5.00",
        calories: 280,
        image: "path/to/iced-mocha.jpg"
    }
];




function loadMenuPage() {
    const contentMenu = document.getElementById('content');
    contentMenu.classList.add('menu');

    const header = document.getElementById('header');
    header.classList.add('menu');

    //Header Section
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = "MENU";
    contentMenu.appendChild(pageTitle);


    //Create Card Function
    function createCard(menu, parentContainer) {
        menu.forEach((item) => {
                // Card Parent Container
                const itemCard = document.createElement('div');
                itemCard.classList.add('card');
        
                // Card Background Container
                const backgroundContainer = document.createElement('div');
                backgroundContainer.classList.add('card-background');
                backgroundContainer.textContent = `${item.description} \n \n ingredients: ${item.ingredients}`;
                // backgroundContainer.backgroundImage = item.image;
                itemCard.appendChild(backgroundContainer);
        
                // Card Description Container
                const descrptionContainer = document.createElement('div');
                descrptionContainer.classList.add('card-description');
                itemCard.appendChild(descrptionContainer);
        
                // Card Name
                const name = document.createElement('h4');
                name.classList.add('card-name');
                name.textContent = item.name;
                descrptionContainer.appendChild(name);
        
                //Card Calorie
                const calorie = document.createElement('h5');
                calorie.classList.add('card-calorie');
                calorie.textContent = `Calories: ${item.calories}`;
                descrptionContainer.append(calorie);
                
                //Card Price
                const price = document.createElement('h5');
                price.classList.add('card-price');
                price.textContent = `${item.cost}`;
                descrptionContainer.appendChild(price);

                parentContainer.appendChild(itemCard);
        })
    };

    /*******************************Bakery Menu Section************************/

    //Bakery Menu container
    const bakerySectionContainer = document.createElement('div');
    bakerySectionContainer.classList.add('menu-container');
    bakerySectionContainer.id = 'bakery'
    contentMenu.appendChild(bakerySectionContainer);
    //Bakery Menu Header
    const bakeryMenuHeader = document.createElement('h2');
    bakeryMenuHeader.textContent = "BAKERY";
    bakerySectionContainer.appendChild(bakeryMenuHeader);

    //Bakery Item Menu Container
    const bakeryCardMenuContainer = document.createElement('div');
    bakeryCardMenuContainer.classList.add('cards-container');
    bakerySectionContainer.appendChild(bakeryCardMenuContainer);

    createCard(bakeryMenu, bakeryCardMenuContainer);

    /*******************************Beverage Menu Section************************/

    // Beverage Menu container
    const beverageSectionContainer = document.createElement('div');
    beverageSectionContainer.classList.add('menu-container');
    beverageSectionContainer.id = 'beverage'
    contentMenu.appendChild(beverageSectionContainer);
    //Beverage Menu Header
    const beverageMenuHeader = document.createElement('h2');
    beverageMenuHeader.textContent = "COFFEE & TEA";
    beverageSectionContainer.appendChild(beverageMenuHeader);

    //Beverage Item Menu Container
    const beverageCardMenuContainer = document.createElement('div');
    beverageCardMenuContainer.classList.add('cards-container');
    beverageSectionContainer.appendChild(beverageCardMenuContainer);

    createCard(beverageMenu, beverageCardMenuContainer);
}

export default loadMenuPage;