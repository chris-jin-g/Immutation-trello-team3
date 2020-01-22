import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 @Output() featureSelected = new EventEmitter<string>();	
  constructor() { }

  onSelect(feature: string) {
  	this.featureSelected.emit(feature);
  }

  ngOnInit() {
  }

}
