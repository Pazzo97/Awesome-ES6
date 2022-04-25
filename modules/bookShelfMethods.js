export default class BookMethods {
  //  Method that adds books to the shelf
  addBookToSHelf = (bookDetailObject) => {
    this.books = [...this.books, { id: this.books.length + 1, ...bookDetailObject }];
    this.incrementBooks(this.books);
    this.addRemoveEventListener();
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  //  Method that increments the books in shelf(+1 whenever)
  incrementBooks = (books) => {
    this.shelf.innerHTML = books.map((book) => `<div class="book-block">
    
    <div class="title-author">

        <div class="title">${book.title}</div>
        <div> <p>by</p> </div>
        <div>${book.author}</div>

    </div>

    <div class="buttons">
      <button data-id="${book.id}" class="remove">Remove</button>
    </div>
  </div>`).join('');
  }

  addRemoveEventListener = () => {
    const deleteBtn = document.querySelectorAll('.remove');
    deleteBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.removeBookFromShelf(id);
      });
    });
  }

  //  Method that removes books from the shelf
  removeBookFromShelf = (id) => {
    this.books = this.books.filter((b) => b.id !== Number(id));
    this.incrementBooks(this.books);
    this.addRemoveEventListener();
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
