import BookStorage from './modules/bookShelfStorage.js';
import { DateTime } from './modules/luxon.js';

// initialize obeject for class Book
const todo = new BookStorage('#book-list');

// Event listener for Adding books on Add button
const addBook = document.querySelector('#add-book');
addBook.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the values from the form
  const title = event.target.querySelector('#title').value;
  const author = event.target.querySelector('#author').value;
  todo.addBookToSHelf({ title, author });
  // Remove inputs from the form after adding the book
  event.target.querySelector('#title').value = '';
  event.target.querySelector('#author').value = '';
});

const listItem = document.querySelector('.list-link');
const addItem = document.querySelector('.add-link');
const contactItem = document.querySelector('.contact-link');
const formItems = document.querySelector('.new-book');
const bookList = document.querySelector('#book-list');
const contSec = document.querySelector('.contact');

listItem.addEventListener('click', () => {
  formItems.style.display = 'none';
  contSec.style.display = 'none';
  bookList.style.display = 'block';
});

addItem.addEventListener('click', () => {
  formItems.style.display = 'block';
  contSec.style.display = 'none';
  bookList.style.display = 'none';
});

contactItem.addEventListener('click', () => {
  formItems.style.display = 'none';
  contSec.style.display = 'block';
  bookList.style.display = 'none';
});

const currentTime = document.querySelector('.time');
currentTime.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
