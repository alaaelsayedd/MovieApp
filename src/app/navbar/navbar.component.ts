import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  lang: string[] = ['EN', 'AR'];
  selected_lang = 'EN';
  constructor(private router: Router) {}
  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
