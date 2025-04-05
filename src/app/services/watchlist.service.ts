import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private watchlistItems = new BehaviorSubject<Movie[]>([]);
  private itemCount = new BehaviorSubject<number>(0);

  watchlistItems$ = this.watchlistItems.asObservable();
  itemCount$ = this.itemCount.asObservable();

  constructor() {}

  addToWatchlist(movie: Movie) {
    const currentItems = this.watchlistItems.value;

    // Check if movie is already in watchlist
    const existingItem = currentItems.find((item) => item.id === movie.id);

    if (!existingItem) {
      const updatedItems = [...currentItems, movie];
      this.watchlistItems.next(updatedItems);
      this.itemCount.next(updatedItems.length);
    }
  }

  removeFromWatchlist(movieId: number) {
    const currentItems = this.watchlistItems.value.filter(
      (item) => item.id !== movieId
    );
    this.watchlistItems.next(currentItems);
    this.itemCount.next(currentItems.length);
  }

  getWatchlist(): Movie[] {
    const currentItems = this.watchlistItems.value;

    return currentItems;
  }
}
