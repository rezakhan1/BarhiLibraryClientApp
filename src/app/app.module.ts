import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { DonationComponent } from './donation/donation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
//import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TextInputComponent } from './text-input/text-input.component';
import { ErrorInterceptor } from './error-interceptor';
import { EBookComponent } from './books/e-book/e-book.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MembersComponent,
    DonationComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TextInputComponent,
    EBookComponent,
    BookDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   // NgxSpinnerModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
