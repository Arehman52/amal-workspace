import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedGlobalsModule } from 'projects/shared-globals/shared-globals.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedGlobalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
