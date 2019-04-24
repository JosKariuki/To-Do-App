import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './app.project';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ProjectComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
