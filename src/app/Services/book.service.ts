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
  constructor(private http:HttpClient) { }
 
  getBooks(){
debugger;
    return  this.http.get<Book[]>(this.baseUrl+'books');
    }
    getBook(bookName:string){


      return  this.http.get<Book[]>(this.baseUrl+'books/'+bookName.toLocaleLowerCase());
      }
   
     
}
 