import loadHomePage from './js/home';
import loadAboutPage from './js/about';
import loadMenuPage from './js/menu';
import './styles/home.css';
import './styles/about.css';
import './styles/menu.css';



const buttons = document.querySelectorAll('.nav-button');

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

loadHomePage();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(`button ${button.innerText} got clicked`)
        clearContent();
        if (button.classList.contains('home')) {
            loadHomePage();
        } else if (button.classList.contains('about')) {
            loadAboutPage();
        } else if (button.classList.contains('menu')) {
            loadMenuPage();
        }
    })
});

