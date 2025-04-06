import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  http = inject(HttpClient);

  // Get the Details of a Movie
  getMovieDetails(id: string, lang: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}&language=${lang}`
    );
  }

  getMovies(page: Number, lang: String): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&language=${lang}&page=${page}`
    );
  }

  getMovieReviews(id: string, lang: String): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${environment.apiKey}&language=${lang}`
    );
  }

  getMovieRecommendations(id: string, lang: String): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${environment.apiKey}&language=${lang}`
    );
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        environment.apiKey
      }&query=${encodeURIComponent(query)}`
    );
  }
}
