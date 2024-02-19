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
    bookEl.innerHTML = `<p>${book.title}</p>`;
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

newBookBtn.addEventListener("click", () => {
  let modal = document.querySelector(".modal");
  modal.classList.toggle("view");
});

const addBook = document.querySelector("#book-form");

addBook.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
});
