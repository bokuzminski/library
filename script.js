/* 
- take form data and store it in an object
- store the object in an array

*/

let myLibrary = [];
let subBtn = document.querySelector('#submitBtn');
//subBtn.addEventListener('submit'); //needs a function

//variables for input fields
let iAuthor = document.querySelector('input[name="field1"]');
let iTitle = document.querySelector('input[name="field2"]');
let iPages = document.querySelector('input[name="field3"]');


const userForm = document.querySelector("#userForm");
userForm.addEventListener('submit', scream => { alert("yoo") })

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(author, title, pages, isRead) {
    myLibrary.push(new Book(author, title, pages, isRead));
}

function Render() {
    const rowContainer = document.querySelector("tbody");
    
    myLibrary.forEach(item => {
        const tr = document.createElement("tr");
        rowContainer.appendChild(tr);
        const td = document.createElement("td");
        td.classList.add("column1");
        td.innerHTML = item.author;
        tr.appendChild(td)
        
    });
}

addBookToLibrary("Daniel Carver", "How to kill a negro", '250', "no");
Render();