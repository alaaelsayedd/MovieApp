import { Component, inject, Input } from '@angular/core';
import { MoiveApiService } from '../services/movie-api.service';
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
  @Input() id: string = '12';
  MoiveApiService = inject(MoiveApiService);

  ngOnInit() {
    this.MoiveApiService.getMovieDetails(this.id).subscribe(
      (response) => (this.movieDetails = response)
    );
  }
}
