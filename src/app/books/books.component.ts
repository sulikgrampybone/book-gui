import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BOOKS} from "../mocks/mock-heroes";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book = {
    id: 1,
    name: "Way of Kings"
  };

  private books;
  private selectedBook: Book;

  constructor(private bs : BookService) { }

  ngOnInit() {
    this.retrieveBooks();
  }

  retrieveBooks(){
    // this.books = this.bs.getBooks();
    this.bs.getBooks1().subscribe( bb => this.books = bb)
  }

  onSelect(book: Book) {
    this.selectedBook = book;
  }
}
