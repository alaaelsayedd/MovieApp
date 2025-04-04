import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { MovieApiService } from '../services/movie-api.service';
import { DatePipe } from '@angular/common';
import { LanguageNamePipe } from '../pipes/language-name.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [DatePipe, LanguageNamePipe, CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movieDetails!: any;
  id: string = ''; // Remove @Input() since we're getting the id from the route
  MovieApiService = inject(MovieApiService);

  constructor(private route: ActivatedRoute) {} // Inject ActivatedRoute

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || ''; // Get the id from the route
    if (this.id) {
      this.MovieApiService.getMovieDetails(this.id).subscribe(
        (response) => (this.movieDetails = response)
      );
    }
  }

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
