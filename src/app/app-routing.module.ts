import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path:'', component:HomeComponent },

  {path:'book',component:BooksComponent},
  {path:'donation',component:DonationComponent},
  {path:'member', component:MembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
