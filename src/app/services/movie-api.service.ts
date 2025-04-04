import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoiveApiService {
  http = inject(HttpClient);

  // Get the Details of a Movie
  getMovieDetails(id: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  constructor() {}
}
