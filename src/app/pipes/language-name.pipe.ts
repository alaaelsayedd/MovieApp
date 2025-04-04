import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName',
  standalone: true, // if you're using Angular 15+
})
export class LanguageNamePipe implements PipeTransform {
  private languageMap: { [key: string]: string } = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    ja: 'Japanese',
    zh: 'Chinese',
    ru: 'Russian',
    ar: 'Arabic',
    pt: 'Portuguese',
    ca: 'Catalan',
    // Add more as needed
  };

  transform(code: string): string {
    return this.languageMap[code] || code;
  }
}
