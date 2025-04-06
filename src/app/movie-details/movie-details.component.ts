import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { MovieApiService } from '../services/movie-api.service';
import { DatePipe } from '@angular/common';
import { LanguageNamePipe } from '../pipes/language-name.pipe';
import { CommonModule } from '@angular/common';
import { Movie } from '../types/movie';
import { WatchlistService } from '../services/watchlist.service';
import { ReviewComponent } from '../review/review.component';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-movie-details',
  imports: [
    DatePipe,
    LanguageNamePipe,
    CommonModule,
    ReviewComponent,
    NotFoundComponent,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movieDetails!: Movie;
  movieReviews!: any;
  loading: boolean = true;

  watchlist = inject(WatchlistService);

  id: string = ''; // Remove @Input() since we're getting the id from the route
  MovieApiService = inject(MovieApiService);

  constructor(private route: ActivatedRoute) {} // Inject ActivatedRoute

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || ''; // Get the id from the route
    if (this.id) {
      this.MovieApiService.getMovieDetails(this.id).subscribe(
        (response) => (this.movieDetails = response)
      );

      this.MovieApiService.getMovieReviews(this.id).subscribe(
        (response) => (this.movieReviews = response)
      );
    }

    this.loading = false;
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
  AddToWatchlist() {
    this.watchlist.addToWatchlist(this.movieDetails);
    console.log(this.movieReviews);
  }
  removeFromWatchlist(movieId: number) {
    this.watchlist.removeFromWatchlist(movieId);
  }
  isInWatchlist(): boolean {
    return this.watchlist
      .getWatchlist()
      .some((movie) => movie.id === this.movieDetails.id);
  }
}
