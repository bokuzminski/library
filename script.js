let form = document.querySelector("form");
form.addEventListener('submit', event => {
    event.preventDefault();
    addFormData();
})

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
                    element.onclick = () => {
                        if (element.innerHTML === "Yes") {
                            element.innerHTML = "Still reading"
                        } else {
                            element.innerHTML = "Yes";
                        }
                    };
                    break;
                case 5:
                    element.innerHTML =
                        `<button id="delete"onclick=deleteBook(${iterator})>X</button>`;
                    break;
            }
            tr.appendChild(element);
        }
        iterator += 1;
    });
}

function addFormData() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("readSelect");
    const text = read.options[read.selectedIndex].text;

    if (author === null || author === '') {
        alert('Author name must not be empty.', 'Danger!');
    } else if (title === null || title === '') {
        alert('Title must not be empty.', 'Danger!');
    } else if (pages === null || pages === '') {
        alert('page number must not be empty.', 'Danger!');
    } else {
        addBookToLibrary(author, title, pages, text);
    }
    form.reset();
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    Render();
}