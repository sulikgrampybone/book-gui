import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {BOOKS} from "../mocks/mock-heroes";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }

  getBooks1(): Observable<Book[]> {
    return of(BOOKS);
  }

}
