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
    const div = document.createElement("div");
    rowContainer.appendChild(div);
}
Render();
addBookToLibrary("Daniel Carver", "How to kill a negro", '250', "no");
