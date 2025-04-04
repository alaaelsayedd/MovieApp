import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  http = inject(HttpClient);
  apiKey = '11411b56c85a77fd1d6bf241707b8368';

  constructor() {}
  getMovies(page: Number, lang: String): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=${lang}&page=${page}`
    );
  }
}
