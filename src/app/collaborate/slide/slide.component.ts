import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
  	trigger('divState',[
  		state('normal', style({
  			'left':'100px',
  			'top': '40px'
  		})),
  		state('highlighted',style({
  			'left':'150px',
  			'top':'49px'
  		})),
  		transition('normal => highlighted' , animate(300)),
  		transition('highlighted => normal' , animate(300))
  		]),
  	trigger('divState1',[
  		state('none', style({
  			'display': 'none'
  		})),
  		state('block',style({
  			'display': 'block'
  		})),
  		transition('none => block' , animate(1)),
  		transition('block => none' , animate(1))
  		]),
  	trigger('divState2',[
  		state('none', style({
  			'display': 'none'
  		})),
  		state('block',style({
  			'display': 'block'
  		})),
  		transition('none => block' , animate(1)),
  		transition('block => none' , animate(1))
  		]),
  	trigger('divState3',[
  		state('none', style({
  			'display': 'none'
  		})),
  		state('block',style({
  			'display': 'block'
  		})),
  		transition('none => block' , animate(1)),
  		transition('block => none' , animate(1))
  		]),
  	trigger('divState4',[
  		state('none', style({
  			'display': 'none'
  		})),
  		state('block',style({
  			'display': 'block'
  		})),
  		transition('none => block' , animate(1)),
  		transition('block => none' , animate(1))
  		]),
  	trigger('divState5',[
  		state('none', style({
  			'display': 'none'
  		})),
  		state('block',style({
  			'display': 'block'
  		})),
  		transition('none => block' , animate(1)),
  		transition('block => none' , animate(1))
  		])

  ]

})
export class SlideComponent implements OnInit {
	state1 = "block";
	state2 = "none";
	state3 = "none";
	state4 = "none";
	state5 = "none";
	state = 'normal';
	stateAnimation = 1;
	onCreateAnimation(direction) {
		this.state =='normal' ?this.state = 'highlighted' : this.state = 'normal';
		if(direction == 1 ) this.stateAnimation = this.stateAnimation + 1;
			else this.stateAnimation = this.stateAnimation - 1;
		if(this.stateAnimation == 6) this.stateAnimation = 1;
		if(this.stateAnimation == 0) this.stateAnimation = 5;

		switch (this.stateAnimation) {
			case 1: 
				{
					this.state1 = "block";
					this.state2= "none";
					this.state3 = "none";
					this.state4 = "none";
					this.state5 = "none";
				}
				break;
			case 2: 
				{
					this.state1 = "none";
					this.state2= "block";
					this.state3 = "none";
					this.state4 = "none";
					this.state5 = "none";
				}
				break;
			case 3: 
				{
					this.state1 = "none";
					this.state2= "block";
					this.state3 = "block";
					this.state4 = "none";
					this.state5 = "none";
				}
				break;
			case 4: 
				{
					this.state1 = "none";
					this.state2= "block";
					this.state3 = "block";
					this.state4 = "block";
					this.state5 = "none";
				}
				break;
			case 5: 
				{
					this.state1 = "none";
					this.state2= "block";
					this.state3 = "block";
					this.state4 = "none";
					this.state5 = "none";
				}
				break;

		}
	}
	onAnimate() {
		this.state =='normal' ?this.state = 'highlighted' : this.state = 'normal';
	}
 	constructor() { }

  	ngOnInit() {
  	}

}
