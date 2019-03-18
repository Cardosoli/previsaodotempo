import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { DetalhamentoTempoComponent } from '../components/detalhamento-tempo/detalhamento-tempo.component';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from '../services/data-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhamentoTempoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }





