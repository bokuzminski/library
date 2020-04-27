/* 
- take form data and store it in an object
- store the object in an array


Add form validation, toggle read status on click, storage/database??


*/

let btn = document.querySelector("#submitBtn").addEventListener('click', () => addFormData());

let myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, pages, isRead) {
    myLibrary.push(new Book(author, title, pages, isRead));
    Render();
}

function Render() {
    let iterator = 0;
    const rowContainer = document.querySelector("tbody");
    rowContainer.innerHTML = " ";
    myLibrary.forEach(item => {
        const tr = document.createElement("tr");
        rowContainer.appendChild(tr);
        const td = document.createElement("td");
        for (let i = 1; i < 6; i++) {
            const element = document.createElement("td");
            element.classList.add(`column${i}`);
            switch (i) {
                case 1:
                    element.innerHTML = item.author;
                    break;
                case 2:
                    element.innerHTML = item.title;
                    break;
                case 3:
                    element.innerHTML = item.pages;
                    break;
                case 4:
                    element.innerHTML = item.isRead;
                    break;
                case 5:
                    element.innerHTML = `<button id="delete"onclick=deleteBook(${iterator})>X</button>`;
                    break;
            }
            tr.appendChild(element);
        }
        iterator += 1;
    });
}

function addFormData() {
    let form = document.getElementById("userForm");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readSelect");
    const text = read.options[read.selectedIndex].text;
    addBookToLibrary(author, title, pages, text);
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    Render();
}