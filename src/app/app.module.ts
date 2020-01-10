import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { CollaboratepartComponent } from './collaborate/collaboratepart/collaboratepart.component';
import { TeamworkComponent } from './collaborate/teamwork/teamwork.component';
import { SlideComponent } from './collaborate/slide/slide.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Part1Component } from './collaborate/slide/part1/part1.component';
import { Part2Component } from './collaborate/slide/part2/part2.component';
import { Part3Component } from './collaborate/slide/part3/part3.component';
import { Part4Component } from './collaborate/slide/part4/part4.component';

@NgModule({
  declarations: [
    AppComponent,
    CollaborateComponent,
    CollaboratepartComponent,
    TeamworkComponent,
    SlideComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
