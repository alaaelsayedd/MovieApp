import { Component, Input } from '@angular/core';
import { Review } from '../types/review';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-review',
  imports: [DatePipe],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  @Input() review!: Review;
}
