import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { EBookComponent } from './books/e-book/e-book.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path:'', component:HomeComponent },

  {path:'book',component:BooksComponent},
  {path:'donation',component:DonationComponent},
  {path:'member', component:MembersComponent},
  {path:'pdfbook', component:EBookComponent},
  {path:'bookDetails/:product', component:BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
