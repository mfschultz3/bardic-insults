import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BardicInsultComponent } from './components/bardic-insult.component';
import { BardicInsultService } from './services/bardic-insult.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BardicInsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BardicInsultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
