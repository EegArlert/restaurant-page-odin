function loadAboutPage() {
    const content = document.getElementById('content');

    // Header description
    const description = document.createElement('h2');
    description.textContent = 'Indulge in the authentic flavors of France, where delicate pastries, golden-brown baguettes, and freshly brewed coffee transport you to the heart of a Parisian café.';
    content.appendChild(description);

}

export default loadAboutPage;