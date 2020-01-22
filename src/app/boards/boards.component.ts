import { Component, OnInit,Output } from '@angular/core';
import { Board } from "./board.model";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})

export class BoardsComponent implements OnInit {
  state1 = "normal";
  state2 = "highlighted";
  boardes: Board[] = [new Board('Welocme','Welcome','/assets/landingpage/card-surfing-lessons.jpg','normal'), 
  new Board('Dagger','Dagger','/assets/landingpage/background12.jpg','normal'),
  new Board('Dagger','Dagger','/assets/landingpage/background12.jpg','normal'),
  new Board('Dagger','Dagger','/assets/landingpage/background12.jpg','highlighted')
  ];
  loadedFeature = 'board';

  constructor() { }

  onNavigate(feature: string) {
  	this.loadedFeature = feature;
  	console.log(feature);
  }

  onBoardSelected(board: Board){
    console.log(board.stateStr);
    board.stateStr =='normal' ?board.stateStr = 'highlighted' : board.stateStr = 'normal';
  }

 	

  ngOnInit() {
  }

}
