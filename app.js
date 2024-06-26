const overlay = document.querySelector("#overlay");

overlay.addEventListener("click", () => {
  closeDialog();
  dialog.classList.remove("open");
  overlay.classList.remove("open");
});

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRed() {
    this.read = !this.read;
  }
}

function toggleRed(index) {
  myLibrary[index].toggleRed();
  render();
}

const render = () => {
  // selects library div and makes it empty
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  // loops over library div
  for (let i = 0; i < myLibrary.length; i++) {
    // book is library's index and bookEl creates new div
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    // setting the html of book element according to user input details
    bookEl.innerHTML = `<div class="card">
    <h2>"${book.title}"</h2>
    <h3>by: ${book.author}</h3>
    <h3>Pages: ${book.pages}</h3>
    <button id="read-btn" class="${
      book.read ? "readGreen" : "readRed"
    }" onclick="toggleRed(${i})">${book.read ? "Read" : "Not Read"}</button>
    <button id="remove" onclick="removeBook(${i})">Remove</button>`;
    // appending the book element div to library
    libraryEl.appendChild(bookEl);
  }
};

// function to add book to library
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  // creates new book and appends to library div
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookBtn = document.querySelector("#new-book-btn");
let dialog = document.querySelector(".modal");

newBookBtn.addEventListener("click", () => {
  dialog.classList.add("open");
  overlay.classList.add("open");
  dialog.show();
});

// addbook btn
const addBook = document.querySelector("#book-form");
addBook.addEventListener("submit", (e) => {
  // prevent default behaviour
  e.preventDefault();
  addBookToLibrary();
  closeDialog();
});

// button to close dialog box i.e red x btn
const close = document.querySelector("#close");
close.addEventListener("click", closeDialog);

function closeDialog() {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  dialog.classList.remove("open");
  overlay.classList.remove("open");
  dialog.close();
}

// function to remove one card
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}
