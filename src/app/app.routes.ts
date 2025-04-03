import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },

  {
    path: 'moive-details/:id',
    component: MovieDetailsComponent,
    title: 'Movie Details Page',
  },

  {
    path: 'watchlist',
    component: WatchListComponent,
    title: 'Watch List Page',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found Page',
  },
];
// export const routes: Routes = [];
