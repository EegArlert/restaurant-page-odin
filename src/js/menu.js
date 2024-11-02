import { bakeryMenu } from './bakeryData'
import { beverageMenu } from './beverageData'

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
                backgroundContainer.style.backgroundImage = `url(${item.imagePath})`;
                backgroundContainer.style.backgroundSize = 'cover';
                itemCard.appendChild(backgroundContainer);

                // Menu Description --- Background Container Children
                const menuDescription = document.createElement('div');
                menuDescription.classList.add('menu-description')
                menuDescription.textContent = `${item.description}`;

                const ingredientsDescription = document.createElement('p');
                ingredientsDescription.classList.add('ingredients-description');
                const parsedIngredients = item.ingredients.map((x) => " " + x);
                ingredientsDescription.textContent = `Ingredients: ${parsedIngredients}`;
                menuDescription.appendChild(ingredientsDescription);

                backgroundContainer.appendChild(menuDescription);
        
                // Card Info Container
                const cardInfo = document.createElement('div');
                cardInfo.classList.add('card-info');
                itemCard.appendChild(cardInfo);
        
                // Card Name
                const name = document.createElement('h4');
                name.classList.add('card-name');
                name.textContent = item.name;
                cardInfo.appendChild(name);
        
                //Card Calorie
                const calorie = document.createElement('h5');
                calorie.classList.add('card-calorie');
                calorie.textContent = `Calories: ${item.calories}`;
                cardInfo.append(calorie);
                
                //Card Price
                const price = document.createElement('h5');
                price.classList.add('card-price');
                price.textContent = `${item.cost}`;
                cardInfo.appendChild(price);

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