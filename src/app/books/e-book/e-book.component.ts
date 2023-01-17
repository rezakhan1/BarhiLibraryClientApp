import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-e-book',
  templateUrl: './e-book.component.html',
  styleUrls: ['./e-book.component.scss']
})
export class EBookComponent implements OnInit {

  items: any;
  loading=false;
  queryField: FormControl = new FormControl();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: BookService
  ) {}

  ngOnInit() {
    this.loading = false;
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        let te = queryField.replace(/\s/g, "");
        if (te.length > 2) {
          this.apiService.getEBook(queryField).subscribe((result: any) => {
            this.loading = true;
            setTimeout(() => {
              this.items = result.items;
            }, 2000);
          });
        }
      });
  }
  combineSlug(id:any) {
    return `${id}`;
  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
