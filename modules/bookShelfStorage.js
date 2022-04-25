import BookMethods from './bookShelfMethods.js';

export default class BookStorage extends BookMethods {
  // Book a container
  shelf;

  // An empty array of books
  books = [];

  //  Align books added to shelf
  constructor(bookShelf) {
    super();
    this.shelf = document.querySelector(bookShelf);
    const data = localStorage.getItem('books');
    this.books = data ? JSON.parse(data) : [];
    this.incrementBooks(this.books);
    this.addRemoveEventListener();
  }
}