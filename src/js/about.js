function loadAboutPage() {
    const content = document.getElementById('content');
    content.classList.add('about');

    // About Us Title & Description
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = `ABOUT US`;
    content.appendChild(pageTitle);

    const aboutUsContent = document.createElement('p');
    aboutUsContent.textContent =  `Welcome to Le Petit Four Français, where tradition, artistry, and the flavors of France come alive in every bite. Our story began with a passion for authentic French pastries and a love for the rich, layered culture behind every café in Paris. Inspired by the cozy ambiance of a Parisian bakery, we wanted to create a space where guests could savor the simple pleasures of freshly baked goods and carefully crafted coffee. At Le Petit Four Français, every item on our menu is made with an unwavering commitment to quality.From the buttery, flaky layers of our croissants to the delicate almond sweetness of our macarons, each pastry is crafted by hand with authentic ingredients, giving our customers a genuine taste of France. Our coffee selection complements each bite, with beans sourced from premium farms and roasted to bring out the perfect balance of flavors. Whether you're here to start your morning with a warm baguette and espresso, enjoy a leisurely afternoon with a pastry and tea, or simply indulge in something sweet, we invite you to feel at home in our café. Our mission is to create a welcoming atmosphere that transports you, even for a brief moment, to a little corner of France. Thank you for visiting Le Petit Four Français.We’re honored to share a taste of French culture with you and hope each visit brings a little warmth, joy, and sweetness to your day.`
    content.appendChild(aboutUsContent);

    // const 

}

export default loadAboutPage;