import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { AuthService } from "../auth.service"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm) {
  	console.log("qqq");
  	if(form.invalid) {
  		console.log("ss");
  		return;
  	}
  	this.authService.login(form.value.email, form.value.password);
  }

  ngOnInit() {
  }

}
