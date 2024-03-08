import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AccentRemovalPipe } from './pipe/accent-removal/accent-removal.pipe';
import { WhitespaceRemovalPipe } from './pipe/whitespace-removal/whitespace-removal.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AccentRemovalPipe,
    WhitespaceRemovalPipe,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    AccentRemovalPipe,
    WhitespaceRemovalPipe,
    NavBarComponent
  ]
})
export class SharedModule { }
