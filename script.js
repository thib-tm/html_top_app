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

