import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppLangService } from '../services/app-lang.service';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  langugeService = inject(AppLangService);
  watchlistItemCount = 0;
  watchlistCount = inject(WatchlistService);
  lang: string[] = ['en', 'ar', 'fr', 'zh'];
  selected_lang: String = '';
  constructor(private router: Router) {}
  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
  ngOnInit() {
    this.getLanguage();
    this.watchlistCount.watchlistItems$.subscribe((items) => {
      this.watchlistItemCount = items.length;
    });
  }
  getLanguage() {
    this.langugeService.getAppLang().subscribe((lang) => {
      this.selected_lang = lang;
    });
  }
  changeLanguage(lang: string) {
    this.langugeService.setAppLang(lang);
    this.selected_lang = lang;
  }
}
