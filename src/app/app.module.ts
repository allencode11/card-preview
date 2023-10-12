import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
