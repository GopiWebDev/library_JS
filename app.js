const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const render = () => {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<div class="card">
    <h2>"${book.title}"</h2>
    <h3>by: ${book.author}</h3>
    <h3>Pages: ${book.pages}</h3>
    <button>Read</button>
    <button>Remove</button>`;
    libraryEl.appendChild(bookEl);
  }
};

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const newBookBtn = document.querySelector("#new-book-btn");
let dialog = document.querySelector(".modal");

newBookBtn.addEventListener("click", () => {
  dialog.show();
});

const addBook = document.querySelector("#book-form");

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

const close = document.querySelector("#close");

close.addEventListener("click", () => {
  dialog.close();
});
