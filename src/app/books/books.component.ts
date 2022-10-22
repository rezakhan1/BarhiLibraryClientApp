import { Component, OnInit } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../_models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  filterBookName:any;
  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    debugger;
    this.getBooks();
  }
  getBooks(){
   this._bookService.getBooks().subscribe((res:Book[])=>{
    debugger;
     this.books=res;
   })
  }
  onSearchBook(){
   this.getBook();
  }
  getBook(){
    debugger;
    this._bookService.getBook(this.filterBookName).subscribe((res:Book[])=>{
     debugger;
      this.books=res;
    })
   }

}
