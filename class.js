class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  toString() {
    return `Book title: ${this.title}, author: ${this.author}`;
  }

  isTheSameBook(book) {
    return this.title === book.title && this.author === book.author;
  }
}

class LibraryBookBase extends Book {
  static generateBookId = 0;
  constructor(title, author) {
    super(title, author);
    this._bookId = ++LibraryBookBase.generateBookId;
  }

  get bookId() {
    return this._bookId;
  }

  toString() {
    return `Book title: ${this.title}, author: ${this.author}, bookId: ${this.bookId}`;
  }
}

class LibraryBook extends LibraryBookBase {
  constructor(title, author, bookId, quantity = 1) {
    super(title, author, bookId);
    this._quantity = quantity;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (value < 0) {
      console.log("invalid quantity");
    } else {
      this._quantity = value;
    }
  }

  toString() {
    return `Book title: ${this.title}, author: ${this.author}, bookId: ${this.bookId}, quantity: ${this.quantity}`;
  }

  increaseQuantityBy(amount) {
    this.quantity += amount;
  }

  decreaseQuantityBy(amount) {
    this.quantity -= amount;
  }
}

class ReaderBook extends Book {
  constructor(title, author, expirationDate, isReturned = true) {
    super(title, author);
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }

  get expirationDate() {
    return this._expirationDate;
  }

  get isReturned() {
    return this._isReturned;
  }

  set expirationDate(value) {
    this._expirationDate = value;
  }

  set isReturned(value) {
    this._isReturned = value;
  }

  toString() {
    return `Book title: ${this.title}, author: ${this.author}, bookId: ${this.bookId}, expirationDate: ${this.expirationDate}, isReturned: ${this.isReturned}`;
  }
}

class Reader {
  static generateReaderId = 0;

  constructor(firstName, lastName, books = []) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._readerId = ++Reader.generateReaderId;
    this._books = books;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get readerId() {
    return this._readerId;
  }

  get books() {
    return this._books;
  }

  borrowBook(requestedBook, library) {
    const bookFinded = library.books.find((book) =>
      book.isTheSameBook(requestedBook)
    );
    if (
      bookFinded &&
      bookFinded.quantity > 0 &&
      bookFinded instanceof ReaderBook
    ) {
      this.books.push(bookFinded);
      bookFinded.decreaseQuantityBy(1);
    }
  }
}

class Library {
  constructor() {
    this._books = [];
    this._readers = [];
  }

  get books() {
    return this._books;
  }

  get readers() {
    return this._readers;
  }

  doHaveBook(requestedBook) {
    return this.books.some((book) => book.isTheSameBook(requestedBook));
  }

  addBook(newBook) {
    const searchableBook = this.books.find((book) =>
      book.isTheSameBook(newBook)
    );
    if (searchableBook) {
      searchableBook.increaseQuantityBy(1);
    } else {
      const libraryBookBase = new LibraryBookBase(
        newBook.title,
        newBook.author
      );
      const libraryBook = new LibraryBook(
        libraryBookBase.title,
        libraryBookBase.author,
        libraryBookBase.bookId
      );
      this.books.push(libraryBook);
    }
  }

  addBooks(newBooks) {
    newBooks.forEach((newBook) => {
      this.addBook(newBook);
    });
    return this.books;
  }

  checkReaderId(readerId) {
    return this.readers.some((reader) => reader.readerId === readerId);
  }

  lendBook(book, readerId) {
    const searchableBook = this.books.find((item) => item.isTheSameBook(book));
    const searchableReader = this.books.find(
      (item) => item.readerId === readerId
    );
    if (searchableBook && searchableBook.quantity >= 1 && searchableReader) {
      return new ReaderBook(
        searchableBook.title,
        searchableBook.author,
        "20-09-2022",
        false
      );
    }
  }
}
