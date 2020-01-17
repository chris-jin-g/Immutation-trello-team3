import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  onSignup(form: NgForm){
  	if(form.invalid) {
  		console.log("no");
  		return;
  	}
  	console.log("ok");
  	this.authService.createUser(form.value.email, form.value.password); 
    this.router.navigateByUrl('/');

  }

  ngOnInit() {
  }

}
