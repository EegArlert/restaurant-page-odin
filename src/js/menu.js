function loadMenuPage() {
    const content = document.getElementById('content');
    content.classList.add('menu');

    //header section
    const header = document.createElement('h1');
    header.textContent = "Menu";
    contentMenu.appendChild(header);


    //Bakery menu section

        //Bakery Menu Title
    const bakeriesMenuHeader = document.createElement('h2');
    header.textContent = "Bakery";
    contentMenu.appendChild(header);

    //Bakery

    //Drinks menu section
    const beveragesMenuHeader = document.createElement('h2');
    header.textContent = "Cofeee & Tea";
    contentMenu.appendChild(header);


}

export default loadMenuPage;