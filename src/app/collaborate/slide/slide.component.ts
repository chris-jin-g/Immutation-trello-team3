import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state} from '@angular/animations';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
  	trigger('divState',[
  		state('normal', style({
  			'transform': 'translateX(0)'
  		})),
  		state('highlighted',style({
  			'transform': 'translateX(300px)'
  		})),
  		transition('normal => highlighted' , animate(300)),
  		transition('highlighted => normal' , animate(300))
  		])
  ]
})
export class SlideComponent implements OnInit {
	state = 'normal';
	stateAnimation = 1;
	onCreateAnimation() {
		this.stateAnimation = this.stateAnimation + 1;
		if(this.stateAnimation == 6) this.stateAnimation = 1;
	}
	onAnimate() {
		this.state =='normal' ?this.state = 'highlighted' : this.state = 'normal';
	}
 	constructor() { }

  	ngOnInit() {
  	}

}
