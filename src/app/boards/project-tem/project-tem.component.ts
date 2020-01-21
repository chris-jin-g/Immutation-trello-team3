import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-project-tem',
  templateUrl: './project-tem.component.html',
  styleUrls: ['./project-tem.component.css'],
  animations: [
  	trigger('spanState',[
  		state('normal', style({
  			'display':'block',
  			'left':'20px',
  			'top': '40px'
  		})),
  		state('highlighted',style({
  			'display':'block',
  			'left':'-5px',
  			'top':'40px'
  		})),
  		transition('normal => highlighted' , animate(200)),
  		transition('highlighted => normal' , animate(0))
  		])
  ]
})
export class ProjectTemComponent implements OnInit {
	state="normal";
  constructor() {}

  onCreateAnimation(){
  	this.state = "highlighted";
  }

  onAnimation(){
  	this.state = "normal";
  }

  ngOnInit() {
  }

}
