// Decorators
import { Component, Input } from '@angular/core';

// Models
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input('book') book: Book;

  constructor(
    private router: Router
  ) {}

  openBookDetail() {
    this.router.navigate(['book/details/', this.book._id]);
  }
}
