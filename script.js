console.log("Hello world")

changerTitre();

/**
 * Changer le titre d'une page web
 */
function changerTitre() {
    const title = document.getElementById('title');
    document.getElementById('title').innerText += ' from JS';
    document.getElementById('title').style.color = 'red';
}

// Add a h2 element under the h1
const h2 = document.createElement("h2");
h2.id = "sous-titre";
h2.innerText = "Welcome to the javascript world";
document.querySelector("h1").after(h2);