import { CommonModule } from '@angular/common';

import { WatchlistService } from './../services/watchlist.service';
import { Component, inject } from '@angular/core';
import { Movie } from '../types/movie';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppLangService } from '../services/app-lang.service';

@Component({
  selector: 'app-watch-list',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent {
  watchlist = inject(WatchlistService);
  movies: Movie[] = [];
  direc: String = '';
  langugeService = inject(AppLangService);
  removeFromWatchlist(movieId: number) {
    this.watchlist.removeFromWatchlist(movieId);
  }

  ngOnInit() {
    this.watchlist.watchlistItems$.subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
    this.langugeService.getAppDirection().subscribe((direction) => {
      this.direc = direction;
    });
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
