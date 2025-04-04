import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../types/movie';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  movies: Movie[] = [];
  page: number = 1;
  totalPages: number = 0;
  movieRequestService = inject(MovieApiService);
  ngOnInit() {
    this.movieRequestService.getMovies(this.page).subscribe((data) => {
      this.movies = data.results;
      this.page = data.page;
      this.totalPages = data.total_pages;
      console.log(this.movies);
      console.log(this.page);
    });
  }
}
