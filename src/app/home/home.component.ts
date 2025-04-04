import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
