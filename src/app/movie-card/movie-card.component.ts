import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie: any;

  getStrokeDashArray(rating: number): string {
    const percentage = rating * 10;
    return `${percentage} 100`;
  }

  getRatingColor(rating: number): string {
    if (rating >= 7) return '';
    if (rating >= 5) return 'yellow';
    return 'red';
  }
}
