import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from '../_models/book';

//import { User } from '../_Model/User';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl=environment.apiUrl;
  bookCache= new Map();
  presence: any;
  key="";
  constructor(private http:HttpClient) { }
 
   getEBook(queryField: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }
  getUserData(blogID:any) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes/${blogID}`
    );
  }
  getBooks(){
debugger;
    return  this.http.get<Book[]>(this.baseUrl+'books');
    }
    getBook(bookName:string){ 
    return  this.http.get<Book[]>(this.baseUrl+'books/'+bookName.toLocaleLowerCase());
  }
  deleteBook(bookId:string){ 
    return  this.http.delete<HttpClient>(this.baseUrl+'books/'+bookId);
  }
  addBook(book:any){ 
    debugger;
    return  this.http.post(this.baseUrl+"books",book).pipe(map((res:any)=>{
      debugger;
      return res;
      }))
   // return  this.http.get<Book[]>(this.baseUrl+'books/'+book);
  }
  setCurrentUser(user: Book) {
    throw new Error('Method not implemented.');
  }
  updateBook(bookId:string,book:Book){ 
    debugger;
    return  this.http.put<Book[]>(this.baseUrl+'books/'+bookId,book);
  }
   
     
}
 