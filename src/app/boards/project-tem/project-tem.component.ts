import { Component, OnInit,Input ,EventEmitter, Output} from '@angular/core';
import { trigger, style, animate, transition, state} from '@angular/animations';
import {Board} from "../board.model";
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
  @Input() boardtem: Board; 
  @Input() stateString : string;
  @Output() boardSelected = new EventEmitter<void>();
	state="normal";
  
  constructor() {}

  onCreateAnimation(){
  	this.state = "highlighted";
  }

  onAnimation(){
  	this.state = "normal";

  }

  onChangeColor(){
    this.boardSelected.emit();

  }

  ngOnInit() {
  }

}
