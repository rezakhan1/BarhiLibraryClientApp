import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('loginModal') completeModal: ElementRef;
 
  FirstComponentObject =  BooksComponent;
  isShown:boolean = false;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  userId:string="";
  password:string="";
  requiredId=false;
  requiredPassword=false;
  isAdminLoggedIn:boolean=false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('logedIn')=='True'){
      this.isAdminLoggedIn=true;
    }
    else{
      this.isAdminLoggedIn=false;
    }
  }
  refresh(){
    //this.bookComp.ngOnInit();
  }
// convenience getter for easy access to form fields
get f() { return this.loginForm?.controls; }
logout(){
  localStorage.setItem("logedIn", "False"); 
      this.isAdminLoggedIn=false;
      Swal.fire(  
        'LogedOut!',  
        'Loged Out Successfully',  
        'success'  
      ) 
      //this.FirstComponentObject.ngOnIt() 
      this.refresh();
}
onSubmit(event: any) {
  debugger;
  if(this.userId==""){
    this.requiredId=!this.requiredId;
  }
  if(this.password==""){
    this.requiredPassword=!this.requiredPassword;
  }
   if(this.userId=="admin" &&  this.password=="admin123" ){ 
    Swal.fire(  
      'LogedIn!',  
      'Loged In Successfully',  
      'success'  
    ) 
    localStorage.setItem("logedIn", "True"); 
      this.isAdminLoggedIn=true; 
      this.refresh();
      this.completeModal.nativeElement.click()
    //  this.completeModal.nativeElement.modal('hide');
   }

    if(this.userId!="admin" ||  this.password!="admin123" ){ 
    Swal.fire(   
      'Please try again', 
      'Please Enter Correct UserId and Password',  
      'error'  
    ) 
    localStorage.setItem("logedIn", "False");
   }
}
}
