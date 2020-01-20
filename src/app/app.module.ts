import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
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
import { FeatureComponent } from './collaborate/feature/feature.component';
import { FooterComponent } from './collaborate/footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule} from "@angular/router";
import { HeaderpartComponent } from './collaborate/headerpart/headerpart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BoardsComponent } from './boards/boards.component';
import { NavbarComponent } from './boards/navbar/navbar.component';


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
    Part4Component,
    FeatureComponent,
    FooterComponent,
    SigninComponent,
    HeaderpartComponent,
    SignUpComponent,
    BoardsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path:'', component: CollaborateComponent},
        {path:'login', component: SigninComponent},
        {path:'sign-up', component: SignUpComponent},
        {path: 'boards', component: BoardsComponent},
        {path: "**", redirectTo: "/"}
      ])
  ],
  providers: [HttpClientModule,NgModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
