function loadHomePage() {
    const content = document.getElementById('content');
    content.classList.add('home');

    // Header description
    const description = document.createElement('h2');
    description.textContent = 'Indulge in the authentic flavors of France, where delicate pastries, golden-brown baguettes, and freshly brewed coffee transport you to the heart of a Parisian café.';
    content.appendChild(description);

    // "View the menu" Button

    const viewMenuButton = document.createElement('button');
    viewMenuButton.classList.add('view-menu-btn');
    viewMenuButton.textContent = 'VIEW THE MENU';
    content.appendChild(viewMenuButton);

    // "Bakery title" H2

    const bakeryTitle = document.createElement('h2');
    bakeryTitle.classList.add('bakery-title');
    bakeryTitle.innerText = 'BAKERY';
    content.appendChild(bakeryTitle);

    // "Bakery Image Container" section

    const bakeryImageContainer = document.createElement('div');
    bakeryImageContainer.classList.add('bakery-image-container');
    content.appendChild(bakeryImageContainer);

    // Child of "Bakery Image Container" section

    const bakeryTexts = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam quidem atque. Suscipit optio tempore similique distinctio excepturi ullam! At architecto consectetur animi quos quia harum nemo vero necessitatibus cum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, at eius atque eum voluptatum ut eveniet nemo aliquam accusantium expedita cupiditate non consequatur molestiae veritatis eligendi sunt perspiciatis hic obcaecati.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, at eius atque eum voluptatum ut eveniet nemo aliquam accusantium expedita cupiditate non consequatur molestiae veritatis eligendi sunt perspiciatis hic obcaecati.'
    ];

    bakeryTexts.forEach((text, index) => {
        const contentCard = document.createElement('div');
        contentCard.classList.add('content-cards', index === 0 ? 'first' : index === 1 ? 'second' : 'third');

        const infoCards = document.createElement('div');
        infoCards.classList.add('info-cards');
        infoCards.textContent = text;

        contentCard.appendChild(infoCards);
        bakeryImageContainer.appendChild(contentCard);
    })

    // "Coffee title" H2

    const cofeeTitle = document.createElement('h2');
    cofeeTitle.classList.add('coffee-title');
    cofeeTitle.innerText = 'COFFEE';
    content.appendChild(cofeeTitle);


    // "Coffee Image Container" section
    const coffeeImageContainer = document.createElement('div');
    coffeeImageContainer.classList.add('coffee-image-container');
    content.append(coffeeImageContainer);


    //Child of "Coffee Image Container" section

    const coffeeTexts = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam quidem atque. Suscipit optio tempore similique distinctio excepturi ullam! At architecto consectetur animi quos quia harum nemo vero necessitatibus cum.',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, at eius atque eum voluptatum ut eveniet nemo aliquam accusantium expedita cupiditate non consequatur molestiae veritatis eligendi sunt perspiciatis hic obcaecati.',
    ];

    coffeeTexts.forEach((text, index) => {
        const contentCards = document.createElement('div');
        contentCards.classList.add('content-cards', index === 0 ? 'first' : 'second');

        const infoCards = document.createElement('div');
        infoCards.classList.add('info-cards');
        infoCards.textContent = text;

        contentCards.appendChild(infoCards);
        coffeeImageContainer.appendChild(contentCards);
    })

    
    // "Join our newsletter" section

    const joinNewsletterContainer = document.createElement('div');
    joinNewsletterContainer.classList.add('join-newsletter-container');
    content.appendChild(joinNewsletterContainer);

    // Child of "Join our newsletter" section

    const joinNewsLetterTitle = document.createElement('h2');
    joinNewsLetterTitle.textContent = 'JOIN OUR NEWSLETTER';
    joinNewsletterContainer.appendChild(joinNewsLetterTitle);

    const form = document.createElement('form');
    form.action = '#';
    form.method = 'post';

    //Child of form container
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.placeholder = 'FIRST NAME';
    form.appendChild(firstNameInput);

    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.placeholder = 'LAST NAME';
    form.appendChild(lastNameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'EMAIL';
    form.appendChild(emailInput);

    const termsContainer = document.createElement('div');
    termsContainer.classList.add('terms-of-use-container');

    //Child of terms of use container
    const termsCheckbox = document.createElement('input');
    termsCheckbox.type = 'checkbox';
    termsCheckbox.name = 'terms-of-use';
    termsCheckbox.id = 'terms-of-use';
    termsContainer.appendChild(termsCheckbox);

    const termsLabel = document.createElement('label');
    termsLabel.setAttribute('for', 'terms-of-use');
    termsLabel.innerHTML = 'I have read and agree to your <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>';
    termsContainer.appendChild(termsLabel);

    form.appendChild(termsContainer);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type = 'submit';
    submitButton.textContent = "SUBSCRIBE";
    form.appendChild(submitButton);

    joinNewsletterContainer.appendChild(form);
}

export default loadHomePage;
