import loadHomePage from './js/home';
import loadAboutPage from './js/about';
import loadMenuPage from './js/menu';
import './styles/index.css'
import './styles/home.css';
import './styles/about.css';
import './styles/menu.css';



const buttons = document.querySelectorAll('.nav-button');

export function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('menu', 'home', 'about');
    
    const header = document.getElementById('header');
    header.classList.remove('menu', 'home', 'about');

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

