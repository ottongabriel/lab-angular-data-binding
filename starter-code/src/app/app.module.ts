import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NEED THIS
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // NEED THIS FOR EVERY PROJECT
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
