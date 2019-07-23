const booksUrl = 'http://localhost:3000/books'
document.addEventListener("DOMContentLoaded", function() {});

function loadEmUp(booksUrl) {
  return fetch(booksUrl)
  .then(res => res.json())
  .then(data => listBooks(data))
}

function listBooks(data) {
  for (let i = 0; i < data.length; i++) {
    const book = data[i];
    makeBookList(book)
  }
}

function makeBookList(book) {
  let booksList = document.getElementById('list')
  let bookTitle = document.createElement('li')
  let anchor = document.createElement('a')
  anchor.href = `http://localhost:3000/books/${book.id}`
  anchor.innerText = book.title
  anchor.addEventListener('click', pickBook)
  bookTitle.appendChild(anchor)
  booksList.appendChild(bookTitle)
}

function pickBook(ev) {

  ev.preventDefault()
  eachUrl = ev.target
  getPickedBook(eachUrl)
}

function getPickedBook(eachUrl) {
  fetch(eachUrl)
  .then (res => res.json())
  .then(bookData => createBookDisplay(bookData))
}

function createBookDisplay(bookData) {
  let bookContainer = document.getElementById('show-panel')
  let bookImg = document.createElement('img')
  bookImg.setAttribute('src', bookData.img_url)
  let bookDesc = document.createElement('p')
  bookDesc.innerText = bookData.description
  bookContainer.appendChild(bookImg)
  bookContainer.appendChild(bookDesc)
  let readerList = document.createElement('ul')
  let readers = bookData.users
  for (let i = 0; i < readers.length; i++) {
    const reader = readers[i];
    let li = document.createElement('li')
    li.innerText = reader.username
    readerList.appendChild(li)
  }
  bookContainer.appendChild(readerList)
  }
  





function main() {
  loadEmUp(booksUrl)
}

main()