import { Component, inject, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppLangService } from '../services/app-lang.service';
import { WatchlistService } from '../services/watchlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  langugeService = inject(AppLangService);
  watchlistItemCount = 0;
  watchlistCount = inject(WatchlistService);
  lang: string[] = ['en', 'ar', 'fr', 'zh'];
  direc: String = 'ltr';
  selected_lang: String = '';
  private renderer = inject(Renderer2); // Inject Renderer
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
    this.langugeService.getAppDirection().subscribe((direction) => {
      this.setHtmlDirection(direction as string);
      this.direc = direction;
    });
  }
  changeLanguage(lang: string) {
    this.langugeService.setAppLang(lang);
    this.selected_lang = lang;
  }
  private setHtmlDirection(dir: string): void {
    this.renderer.setAttribute(document.documentElement, 'dir', dir);
  }
}
