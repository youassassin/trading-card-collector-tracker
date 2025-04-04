import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './home/app.component';
import { CollectionViewComponent } from './components/collection-view/collection-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
