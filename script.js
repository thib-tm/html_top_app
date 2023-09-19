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

// Add a h3 element with the current time just after the h2
const h3 = document.createElement("h3");
h3.innerText = new Date().toLocaleTimeString();
document.querySelector("#sous-titre").after(h3);

// Change the time every second
setInterval(() => {
    document.querySelector("h3").innerText = new Date().toLocaleTimeString();
}, 1000);


const caption = document.querySelector("caption");
// Change the color of the caption element when the mouse is over it
caption.addEventListener("mouseover", () => {
    caption.style.color = "red";
});

// Change the color of the caption element when the mouse is out of it
caption.addEventListener("mouseout", () => {
    caption.style.color = "black";
});

/**
 * Shake an element
 * @param {*} element 
 */
const shake = (element) => {
    // only shake if the element is not already shaking
    if (!element.classList.contains("shake")) {
        console.log("Shake the element", element);
        element.classList.add("shake");
    }
}

// Unshake an element
const unshake = (element) => {
    // only unshake if the element is shaking
    if (element.classList.contains("shake")) {
        console.log("Unshake the element", element);
        element.classList.remove("shake");
    }
}

// add a button to shake the image after the image
const buttonShakeImage = document.createElement("button");
buttonShakeImage.innerText = "Shake the image";
document.querySelector("img").after(buttonShakeImage);
buttonShakeImage.addEventListener("click", () => {
    shake(document.querySelector("img"));
});

// add a button to remove the shake class after the new button
const buttonUnShakeImage = document.createElement("button");
buttonUnShakeImage.innerText = "Stop shaking the image";
buttonShakeImage.after(buttonUnShakeImage);
buttonUnShakeImage.addEventListener("click", () => {
    unshake(document.querySelector("img"));
});

// add a button to shake the table
const buttonShakeTable = document.createElement("button");
buttonShakeTable.innerText = "Shake the table";
document.querySelector("table").after(buttonShakeTable);
buttonShakeTable.addEventListener("click", () => {
    shake(document.querySelector("table"));
});

// add a button to remove the shake class
const buttonUnshakeTable = document.createElement("button");
buttonUnshakeTable.innerText = "Stop shaking the table";
buttonShakeTable.after(buttonUnshakeTable);
buttonUnshakeTable.addEventListener("click", () => {
    unshake(document.querySelector("table"));
});

// fetch the data from the server
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log("Response", response);

    if(!response.ok) {
        if(response.status === 404)
            throw new Error("The server responded with a 404 error");
        else
            throw new Error("The server responded with an error");

    }else {
        return response.json();
    }
}).then((users) => {
    console.log("Users", users);
    // add a new row for each user
    users.forEach((user) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = user.name;
        const td2 = document.createElement("td");
        td2.innerText = user.username;
        const td3 = document.createElement("td");
        td3.innerHTML = '<a href="mailto:' + user.email + '">' + user.email + '</a>';
        // td3.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.querySelector("tbody").appendChild(tr);
    });
}).catch((error) => {
    console.log("Error", error);
    // add a row with error message
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = error.message;
    tr.appendChild(td);
    document.querySelector("tbody").appendChild(tr);

});