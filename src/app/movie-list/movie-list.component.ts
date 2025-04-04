import { Component, inject, OnInit } from '@angular/core';
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
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  page: number = 1;
  totalPages: number = 0;
  movieRequestService = inject(MovieApiService);

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieRequestService.getMovies(this.page).subscribe((data) => {
      this.movies = data.results;
      this.page = data.page;
      this.totalPages = Math.min(data.total_pages, 500);
    });
  }

  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.page = newPage;
      this.loadMovies();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getVisiblePages(): number[] {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.page - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }
}
