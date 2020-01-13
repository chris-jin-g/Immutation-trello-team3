import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  onSignup(form: NgForm){
  	console.log(form.value);
  }

  ngOnInit() {
  }

}
