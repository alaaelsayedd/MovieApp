import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppLangService } from '../services/app-lang.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  langugeService = inject(AppLangService);
  lang: string[] = ['en-US', 'ar'];
  selected_lang: String = '';
  constructor(private router: Router) {}
  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
  ngOnInit() {
    this.getLanguage();
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
