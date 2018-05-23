import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CarnetComponent } from './carnet/carnet.component';
import { HttpModule } from '@angular/http';
import { CarnetService } from './carnet/carnet.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CarnetComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [
    CarnetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
