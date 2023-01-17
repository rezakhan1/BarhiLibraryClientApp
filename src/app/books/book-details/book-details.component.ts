import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  single:any;
  slug:any;
  sub:any;
  date:any;
  constructor(public apiService: BookService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.SingleBlog();
  }
  SingleBlog() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params["product"];
      console.log(this.slug);
    });
    const slugURL = this.slug.split("-");
    const blogID = slugURL.pop();
    console.log(blogID);
    this.apiService.getUserData(blogID).subscribe((response:any) => {
      this.single = response;
      console.log(this.single);
    });
  }
}
