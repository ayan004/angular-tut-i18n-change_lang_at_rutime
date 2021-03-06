import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultilanguageApp';
  constructor(
    public translate: TranslateService) {
    translate.addLangs(['en', 'ne', 'hi']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale') || '{}';
      translate.use(browserLang.match(/en|ne|hi/) ? browserLang : 'en');
    } else {
      localStorage.setItem('locale', 'en');
      translate.setDefaultLang('en');
    }
  }
  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }
}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'myapp';
// }
