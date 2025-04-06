import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppLangService {
  private lang = new BehaviorSubject<String>('en');

  constructor() {}
  getAppLang() {
    return this.lang.asObservable();
  }
  setAppLang(lang: string) {
    this.lang.next(lang);
  }
}
