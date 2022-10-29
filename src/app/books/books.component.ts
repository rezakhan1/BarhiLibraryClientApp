import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BookService } from '../Services/book.service';
import { Book } from '../_models/book';
import { BookRequest } from '../_models/bookRequest';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Output() cancelRegsiter=new EventEmitter();
  @ViewChild('addBookModal') bookModal: ElementRef;
  books:any;
  bookRequest:BookRequest;
  filterBookName:any;
  addBookForm!:FormGroup;
  editBookForm!:FormGroup;
 isAdminLoggedIn:boolean=false;
 isLoading = false;
 @Input() isAdminUserLoggedIn=false;
  addOrUpdate:string='Add';
 bookId:string;
  constructor(private _bookService:BookService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initializaForm();
    debugger;
    this.getBooks();
 
    if(localStorage.getItem('logedIn')=='True'){
      this.isAdminLoggedIn=true;
    }
  }
 
  
  initializaForm(){
    this.addBookForm=this.fb.group({ 
      title: [''],
      author: [''],
      language: ['', Validators.required],
      pages: ['', Validators.required],
      description: [''],
      catagories: [''] 
    })
     
  }
  onAddBook(){
    this.addOrUpdate='Add';
    this.addBookForm.controls['title'].setValue('')
    this.addBookForm.controls['author'].setValue('')
    this.addBookForm.controls['language'].setValue('')
    this.addBookForm.controls['pages'].setValue('')
    this.addBookForm.controls['catagories'].setValue('')
    this.addBookForm.controls['description'].setValue('')
  }
  onAddOrUpdateBook(){ 
  
   if(this.addOrUpdate=='Add'){
    this._bookService.addBook(this.addBookForm.value).subscribe(res=>{
      try{
      if(res){
        Swal.fire(  
          'Added!',  
          'Book  has been Added.',  
          'success'  
        ) 
        this.ngOnInit();
        this.bookModal.nativeElement.click();
      }
    }
    catch{
      Swal.fire(  
        'Try Again',  
        'Something went wrong:)',  
        'error'  
      )  
    } 
    })
   }
   else{
    this._bookService.updateBook(this.bookId,this.addBookForm.value).subscribe(res=>{
  
        debugger;
        Swal.fire(  
          'Updated!',  
          'Book  has been Update.',  
          'success'  
        ) 
        this.ngOnInit();
      this.bookModal.nativeElement.click();
    })
   }
    
    
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
   getDetails(book:Book){

   }
   editBook(book:any){

    this.addOrUpdate='Update';
    this.addBookForm.controls['title'].setValue(book.title)
    this.addBookForm.controls['author'].setValue(book.author)
    this.addBookForm.controls['language'].setValue(book.language)
    this.addBookForm.controls['pages'].setValue(book.pages)
    this.addBookForm.controls['catagories'].setValue(book.catagories)
    this.addBookForm.controls['description'].setValue(book.description)
    this.bookId=book.id.increment;
   }
   deleteBook(id:string){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this book!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      debugger;
      if (result.value) {  
        this._bookService.deleteBook(id).subscribe(()=>{
          Swal.fire(  
            'Deleted!',  
            'Your Book  has been deleted.',  
            'success'  
          ) 
          this.ngOnInit();
         
        })
         
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your  book is safe :)',  
          'error'  
        )  
      }  
    })
   }
   cancel(){
     
    this.cancelRegsiter.emit(false);
  }

}
