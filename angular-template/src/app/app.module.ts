import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListModule } from './item-list/item-list.module';
import { ItemDetailModule } from './item-detail/item-detail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemListModule,
    ItemDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
