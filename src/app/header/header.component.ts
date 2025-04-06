import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieApiService } from '../services/movie-api.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, MovieCardComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private movieApiService: MovieApiService) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.movieApiService.searchMovies(this.searchQuery).subscribe({
        next: (response) => {
          if (response && response.results && response.results.length > 0) {
            this.searchResults = response.results;
          } else {
            this.searchResults = [];
          }
        },
        error: (err) => {
          console.error('Error fetching search results:', err);
          this.searchResults = [];
        },
      });
    } else {
      this.searchResults = [];
    }
  }
}
