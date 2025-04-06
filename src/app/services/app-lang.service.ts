import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppLangService {
  private lang = new BehaviorSubject<String>('en');
  private direction = new BehaviorSubject<String>('ltr');
  constructor() {}
  getAppLang() {
    return this.lang.asObservable();
  }
  setAppLang(lang: string) {
    this.lang.next(lang);
    this.setAppDirection(lang);
  }
  getAppDirection() {
    return this.direction.asObservable();
  }

  private setAppDirection(lang: string) {
    // Logic to determine direction based on language
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.direction.next(dir);
  }
}
